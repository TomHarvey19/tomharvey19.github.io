// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from the root of tomharvey19.github.io. When a custom
// domain is added, set `site` to that domain – nothing else needs to change.
export default defineConfig({
  site: 'https://tomharvey19.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
