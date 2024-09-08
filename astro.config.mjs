import { defineConfig } from 'astro/config';
import favicons from "astro-favicons";
import { astroImageTools } from "astro-imagetools";
import mdx from "@astrojs/mdx";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  integrations: [favicons({
    masterPicture: "./src/favicon.svg",
    emitAssets: true,
    faviconsDarkMode: true
  }), mdx(), astroImageTools, lenis()]
});