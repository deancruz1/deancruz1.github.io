// Runs after the build. GitHub Pages only serves real files, so every route
// other than "/" would fall through to 404.html. This writes an index.html for
// /projects and for each project, copied from the built home page with that
// page's own title, description and preview image, and with that page's
// content rendered into it, so shared links, search engines and anything that
// reads the raw HTML get the real page. The app then hydrates it in the browser.
// The home page is rendered here too, so all pages are built the same way.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const SITE = "https://deancruz1.github.io";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});
const { projects } = await vite.ssrLoadModule(
  "/src/data/project-info-home.jsx",
);
const { renderPage } = await vite.ssrLoadModule("/scripts/prerender-entry.jsx");

const manifest = JSON.parse(
  readFileSync(join(dist, ".vite", "manifest.json"), "utf8"),
);
const template = readFileSync(join(dist, "index.html"), "utf8");

const escapeAttr = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const replaceOnce = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender-meta: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, replacement);
};

const setMeta = (html, attr, key, value) =>
  replaceOnce(
    html,
    new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
    (_, before, after) => `${before}${escapeAttr(value)}${after}`,
    `meta ${key}`,
  );

// The dev-style path the data module reports -> the hashed file in dist
const builtAssetPath = (devPath) => {
  const entry = manifest[devPath.replace(/^\//, "")];
  if (!entry) {
    throw new Error(`prerender-meta: ${devPath} is not in the build manifest`);
  }
  return `/${entry.file}`;
};
const builtAssetUrl = (devPath) => `${SITE}${builtAssetPath(devPath)}`;

// Rendering here uses dev-style asset paths; the browser's copy of the app
// uses the hashed ones, so swap them before the page is written
const renderBody = async (path) =>
  (await renderPage(path)).replace(/\/src\/assets\/[^"'\s)&]+/g, builtAssetPath);

// Each page's code is a separate file that the app only asks for once it is
// running. These tags let the browser fetch it straight away instead: the
// page's own file, the files that one imports, and the lazy sections it renders.
const pageScripts = (source) => {
  if (!manifest[source]) {
    throw new Error(`prerender-meta: ${source} is not in the build manifest`);
  }
  const files = new Set();
  const add = (key) => {
    const entry = manifest[key];
    if (!entry || files.has(entry.file)) return;
    files.add(entry.file);
    (entry.imports ?? []).forEach(add);
  };
  add(source);
  (manifest[source].dynamicImports ?? []).forEach(add);
  return [...files];
};

// React's browser half is loaded the same way on every page
const appEntry = Object.values(manifest).find((entry) => entry.isEntry);
const sharedScripts = (appEntry.dynamicImports ?? [])
  .filter((key) => key.startsWith("node_modules/"))
  .map((key) => manifest[key].file);

const preloadTags = (source) =>
  [...new Set([...sharedScripts, ...pageScripts(source)])]
    .filter((file) => !template.includes(file))
    .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
    .join("");

const writePage = async ({ path, source, title, description, image }) => {
  const url = `${SITE}${path}`;
  let html = template;

  // The home page keeps the title, description and link tags it was built with
  if (title) {
    html = replaceOnce(
      html,
      /<title>[^<]*<\/title>/,
      () => `<title>${escapeAttr(title)}</title>`,
      "<title>",
    );
    html = replaceOnce(
      html,
      /(<link rel="canonical" href=")[^"]*(")/,
      (_, before, after) => `${before}${url}${after}`,
      "canonical link",
    );
    // The description of Dean as a person belongs to the home page only
    html = replaceOnce(
      html,
      /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/,
      () => "",
      "structured data",
    );
    html = setMeta(html, "name", "title", title);
    html = setMeta(html, "name", "description", description);
    html = setMeta(html, "property", "og:url", url);
    html = setMeta(html, "property", "og:title", title);
    html = setMeta(html, "property", "og:description", description);
    html = setMeta(html, "property", "og:image", image);
    html = setMeta(html, "name", "twitter:url", url);
    html = setMeta(html, "name", "twitter:title", title);
    html = setMeta(html, "name", "twitter:description", description);
    html = setMeta(html, "name", "twitter:image", image);
  }

  html = replaceOnce(
    html,
    /<\/head>/,
    () => `${preloadTags(source)}</head>`,
    "</head>",
  );

  // Swap the markup the build left in the page for this page's own
  const rootStart = html.indexOf('<div id="root"');
  const rootEnd = html.indexOf("<script>window.__VITE_REACT_SSG_HASH__");
  if (rootStart === -1 || rootEnd === -1 || rootEnd < rootStart) {
    throw new Error("prerender-meta: could not find the app root in dist/index.html");
  }
  html = `${html.slice(0, rootStart)}<div id="root" data-server-rendered="true">${await renderBody(path)}</div>${html.slice(rootEnd)}`;

  const file = join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

await writePage({ path: "/", source: "src/pages/Home.jsx" });

await writePage({
  path: "/projects/",
  source: "src/pages/Projects.jsx",
  title: "Dean Cruz - Projects",
  description:
    "A collection of projects by Dean Cruz — full-stack, frontend, and design.",
  image: `${SITE}/preview.webp`,
});

for (const project of projects) {
  await writePage({
    path: `/projects/${project.slug}/`,
    source: "src/pages/ProjectDetail.jsx",
    title: `Dean Cruz - ${project.title}`,
    description: project.description,
    image: builtAssetUrl(project.image),
  });
}

await vite.close();

console.log(`prerender-meta: wrote ${projects.length + 2} pages`);
