import { LOCALE, SITE_URL } from './site';

/** English site. x-default points here. */
export const EN_ORIGIN = 'https://noematic.eu';
/** French site. */
export const FR_ORIGIN = 'https://noematic.fr';

/**
 * Documents that exist in both languages, at the same path.
 * A path missing from this list gets a canonical URL and no hreflang.
 * Add a path only when the other domain serves that document, not a redirect.
 *
 * `/media-cataloger/` is a redirect to `/#newsletter` until the product page
 * (`_media-cataloger.astro`) is restored. Add it here at the same time, and
 * stop excluding it in `astro.config.mjs`.
 */
export const PAIRED_PATHS = ['/', '/legal/'] as const;

export const LANG_SWITCH =
  LOCALE === 'fr'
    ? { label: 'EN', code: 'en' as const }
    : { label: 'FR', code: 'fr' as const };

if (LOCALE === 'en' && SITE_URL !== EN_ORIGIN) {
  throw new Error(`SITE_URL ${SITE_URL} does not match the English origin`);
}
if (LOCALE === 'fr' && SITE_URL !== FR_ORIGIN) {
  throw new Error(`SITE_URL ${SITE_URL} does not match the French origin`);
}

/** Trailing-slash path used on both domains. */
export function canonicalPath(pathname: string): string {
  if (pathname.includes('404')) return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Absolute URL of the same document in the other language, or null. */
export function alternateUrl(pathname: string): string | null {
  const path = canonicalPath(pathname);
  if (!(PAIRED_PATHS as readonly string[]).includes(path)) return null;
  const origin = LOCALE === 'en' ? FR_ORIGIN : EN_ORIGIN;
  return `${origin}${path}`;
}

/** Sitemap xhtml:link entries. Empty when this path is not a language pair. */
export function sitemapLinks(pathname: string): { lang: string; url: string }[] {
  const path = canonicalPath(pathname);
  if (!(PAIRED_PATHS as readonly string[]).includes(path)) return [];
  const en = `${EN_ORIGIN}${path}`;
  const fr = `${FR_ORIGIN}${path}`;
  return [
    { lang: 'fr', url: fr },
    { lang: 'en', url: en },
    { lang: 'x-default', url: en },
  ];
}
