// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// While the site lives at tomharvey19.github.io/Toms-website, every URL needs the
// /Toms-website prefix. When a custom domain is added, set `site` to that domain
// and remove `base` – nothing else needs to change.
export default defineConfig({
  site: 'https://tomharvey19.github.io',
  base: '/Toms-website',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
