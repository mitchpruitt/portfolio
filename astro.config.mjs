import { defineConfig } from 'astro/config';
import favicons from "astro-favicons";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [favicons({
    masterPicture: "./src/favicon.svg",
    emitAssets: true,
    faviconsDarkMode: true
  }), mdx()]
});