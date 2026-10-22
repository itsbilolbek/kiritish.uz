// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kiritish.uz",
  trailingSlash: "always",

  redirects: {
    "/windows-guide": "/windows/",
    "/macos-guide": "/macos/",
    "/linux-guide": "/linux/",
    "/android-guide": "/android/",
    "/ios-guide": "/ios/",
    "/samsung-guide": "/samsung/",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
