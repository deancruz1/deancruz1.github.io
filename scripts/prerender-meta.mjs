// Runs after the build. GitHub Pages only serves real files, so every route
// other than "/" would fall through to 404.html. This writes an index.html for
// /projects and for each project, copied from the built home page with that
// page's own title, description and preview image, so shared links and search
// engines get real metadata. The page body is still rendered by the app.
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
await vite.close();

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
const builtAssetUrl = (devPath) => {
  const entry = manifest[devPath.replace(/^\//, "")];
  if (!entry) {
    throw new Error(`prerender-meta: ${devPath} is not in the build manifest`);
  }
  return `${SITE}/${entry.file}`;
};

const writePage = ({ path, title, description, image }) => {
  const url = `${SITE}${path}`;
  let html = template;

  html = replaceOnce(
    html,
    /<title>[^<]*<\/title>/,
    () => `<title>${escapeAttr(title)}</title>`,
    "<title>",
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

  // Drop the pre-rendered home page markup so it never flashes on these routes
  const rootStart = html.indexOf('<div id="root"');
  const rootEnd = html.indexOf("<script>window.__VITE_REACT_SSG_HASH__");
  if (rootStart === -1 || rootEnd === -1 || rootEnd < rootStart) {
    throw new Error("prerender-meta: could not find the app root in dist/index.html");
  }
  html = `${html.slice(0, rootStart)}<div id="root"></div>\n${html.slice(rootEnd)}`;

  const file = join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

writePage({
  path: "/projects/",
  title: "Dean Cruz - Projects",
  description:
    "A collection of projects by Dean Cruz — full-stack, frontend, and design.",
  image: `${SITE}/preview.webp`,
});

for (const project of projects) {
  writePage({
    path: `/projects/${project.slug}/`,
    title: `Dean Cruz - ${project.title}`,
    description: project.description,
    image: builtAssetUrl(project.image),
  });
}

console.log(`prerender-meta: wrote ${projects.length + 1} pages`);
