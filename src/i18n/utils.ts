import { LANGUAGES, locales, defaultLocale } from './config.mjs';
import { ui } from './ui';

export type Locale = keyof typeof ui;

export const SUPPORTED_LOCALES = locales as Locale[];
export const DEFAULT_LOCALE = defaultLocale as Locale;
export const LANG_META = LANGUAGES as Record<
  Locale,
  { label: string; hreflang: string; og: string; dir: 'ltr' | 'rtl' }
>;

/** Logical page ids -> the path segment appended after the locale prefix. */
export const ROUTES = {
  home: '',
  privacy: 'privacy',
  'delete-account': 'delete-account',
} as const;

export type RouteId = keyof typeof ROUTES;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as string[]).includes(value);
}

/** Reads the locale out of a URL pathname, falling back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Builds a site-root-relative path for a page in a given language.
 * The default locale is unprefixed: localizedPath('privacy', 'en') -> '/privacy/'
 * Every other locale is prefixed:   localizedPath('privacy', 'hi') -> '/hi/privacy/'
 *
 * The trailing slash is deliberate and must match `trailingSlash: 'always'` in
 * astro.config.mjs. The build emits directories (/privacy/index.html), so a
 * static host redirects /privacy -> /privacy/; without the slash here the
 * canonical and hreflang URLs would point at those redirects while the sitemap
 * listed the slashed form, and the annotations would not be reciprocal.
 */
export function localizedPath(route: RouteId, locale: Locale): string {
  const segment = ROUTES[route];
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return segment ? `${prefix}/${segment}/` : `${prefix}/`;
}

/** Absolute URL for a page in a given language, used for hreflang + canonical. */
export function localizedUrl(route: RouteId, locale: Locale, site: URL | string): string {
  return new URL(localizedPath(route, locale), site).href;
}

/**
 * Returns the full set of <link rel="alternate" hreflang> entries for a page:
 * one per supported language plus the x-default pointing at the default locale.
 */
export function alternateLinks(route: RouteId, site: URL | string) {
  const links = SUPPORTED_LOCALES.map((locale) => ({
    hreflang: LANG_META[locale].hreflang,
    href: localizedUrl(route, locale, site),
  }));
  links.push({ hreflang: 'x-default', href: localizedUrl(route, DEFAULT_LOCALE, site) });
  return links;
}

/**
 * Returns a translation function for a locale. Missing keys fall back to the
 * default locale so a partially translated language still renders.
 */
export function useTranslations(locale: Locale) {
  const dict = ui[locale] ?? ui[DEFAULT_LOCALE];
  const fallback = ui[DEFAULT_LOCALE];
  return function t<K extends keyof typeof fallback>(key: K): (typeof fallback)[K] {
    return ((dict as any)[key] ?? fallback[key]) as (typeof fallback)[K];
  };
}
