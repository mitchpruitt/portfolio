import { defineConfig } from 'astro/config';
import favicons from 'astro-favicons';
import { astroImageTools } from 'astro-imagetools';
import mdx from '@astrojs/mdx';
import lenis from 'astro-lenis';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mitchpruitt.com',
  trailingSlash: 'always',
  integrations: [favicons({
    masterPicture: "./src/favicon.svg",
    emitAssets: true,
    faviconsDarkMode: true
  }), mdx(), astroImageTools, lenis(), sitemap()]
});