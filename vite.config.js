import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/projects",
  "/projects/kiroku",
  "/projects/urara",
  "/projects/oshiwatch",
  "/projects/skillforge",
  "/projects/portfolio-website",
  "/projects/fansite",
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
      exclude: ["/404"],
    }),
  ],
  publicDir: "public",
  build: {
    // One stylesheet for the whole site. Pages load their code separately,
    // and their styles must already be there when the saved HTML first shows.
    cssCodeSplit: false,
  },
});