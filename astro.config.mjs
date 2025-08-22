// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://architect-portafolio.vercel.app",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
