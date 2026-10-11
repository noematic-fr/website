import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { FR_ORIGIN, sitemapLinks } from './src/i18n.ts';

/** @param {{ url: string }} item */
function serialize(item) {
  const links = sitemapLinks(new URL(item.url).pathname);
  // No lastmod: a build timestamp would mark every URL as changed on each deploy.
  // Google ignores changefreq and priority.
  return links.length > 0 ? { url: item.url, links } : { url: item.url };
}

export default defineConfig({
  site: FR_ORIGIN,
  output: 'static',
  integrations: [
    sitemap({
      serialize,
      filter: (page) => !page.includes('/404') && !page.includes('/media-cataloger'),
    }),
  ],
});
