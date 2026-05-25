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
  publicDir: "public", // ensures sitemap.xml gets copied
});
