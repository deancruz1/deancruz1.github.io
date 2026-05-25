import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const routes = [
  "/",
  "/projects",
  "/projects/portfolio-website",
  "/projects/landing-page",
  "/projects/fansite",
  "/projects/kiroku",
  "/projects/movietopia",
  "/projects/mobile-wireframe",
  "/projects/2d-artwork",
];

async function prerender() {
  console.log("Starting browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:5173${route}`;
    console.log(`Rendering ${url}...`);

    try {
      await page.goto(url, { waitUntil: "networkidle0" });
      await page.waitForSelector("#root", { timeout: 5000 });

      const html = await page.content();

      const routePath = route === "/" ? "index" : route.slice(1);
      // Save as .prerender.html instead of .html
      const outputPath = path.join(distDir, `${routePath}.prerender.html`);

      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outputPath, html);
      console.log(`Saved: ${outputPath}`);
    } catch (error) {
      console.error(`Failed to render ${route}:`, error.message);
    }
  }

  await browser.close();
  console.log("Prerendering complete!");
}

prerender();
