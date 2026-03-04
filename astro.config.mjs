import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://morgans3.github.io',
  base: '/mka-uk-site/',
  integrations: [tailwind(), sitemap()],
});
