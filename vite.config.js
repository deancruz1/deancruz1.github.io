import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/projects",
  "/projects/kiroku",
  "/projects/urara",
  "/projects/skillforge",
  "/projects/portfolio-website",
  "/projects/2d-artwork",
  "/projects/mobile-wireframe",
  "/projects/landing-page",
  "/projects/movietopia",
];

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class",
    }),
    sitemap({
      hostname: "https://deancruz1.github.io/",
      dynamicRoutes: routes,
    }),
  ],
  publicDir: "public",
});