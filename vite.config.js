import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class",
    }),
    sitemap({
      hostname: "https://deancruz1.github.io/"
    })
  ],
  publicDir: "public", // ensures sitemap.xml gets copied
});
