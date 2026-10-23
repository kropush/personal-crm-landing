import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Link previews need absolute URLs (og:url, og:image)
  site: "https://kropcrm.ru",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
