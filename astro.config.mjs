import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const FR = 'https://noematic.fr';
const EN = 'https://noematic.eu';

/** @param {{ url: string }} item */
function serialize(item) {
  const path = new URL(item.url).pathname;
  const home = path === '/' || path === '';
  return {
    url: item.url,
    lastmod: new Date().toISOString(),
    changefreq: home ? 'weekly' : 'monthly',
    priority: home ? 1 : 0.8,
    links: [
      { lang: 'fr', url: `${FR}${path}` },
      { lang: 'en', url: `${EN}${path}` },
      { lang: 'x-default', url: `${EN}${path}` },
    ],
  };
}

export default defineConfig({
  site: FR,
  output: 'static',
  integrations: [
    sitemap({
      serialize,
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
