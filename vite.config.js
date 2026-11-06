import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class",
    }),
  ],
  publicDir: "public",
  build: {
    // One stylesheet for the whole site. Pages load their code separately,
    // and their styles must already be there when the saved HTML first shows.
    cssCodeSplit: false,
    // Keep every image a real file. Vite would otherwise embed small ones in
    // the JavaScript, and scripts/prerender-meta.mjs could not find them.
    assetsInlineLimit: (filePath) =>
      filePath.endsWith(".webp") ? false : undefined,
  },
});
