/**
 * Single source of truth for the supported languages.
 * Used by astro.config.mjs (build-time routing + sitemap) and by the runtime
 * helpers in src/i18n/utils.ts.
 *
 * To add a language:
 *   1. add its code here and to LANGUAGES below,
 *   2. add src/i18n/locales/<code>.ts exporting the same keys as en.ts,
 *   3. register it in src/i18n/ui.ts.
 */

export const defaultLocale = 'en';

/**
 * Locale code -> metadata used for <html lang>, hreflang and the switcher.
 * `og` is the Open Graph locale, which unlike hreflang always wants the
 * language_TERRITORY form, so it carries an explicit territory.
 */
export const LANGUAGES = {
  en:      { label: 'English',             hreflang: 'en',    og: 'en_US', dir: 'ltr' },
  hi:      { label: 'हिन्दी',                hreflang: 'hi',    og: 'hi_IN', dir: 'ltr' },
  ne:      { label: 'नेपाली',                hreflang: 'ne',    og: 'ne_NP', dir: 'ltr' },
  ar:      { label: 'العربية',               hreflang: 'ar',    og: 'ar_AR', dir: 'rtl' },
  es:      { label: 'Español',             hreflang: 'es',    og: 'es_ES', dir: 'ltr' },
  fr:      { label: 'Français',            hreflang: 'fr',    og: 'fr_FR', dir: 'ltr' },
  'pt-br': { label: 'Português do Brasil', hreflang: 'pt-BR', og: 'pt_BR', dir: 'ltr' },
  id:      { label: 'Bahasa Indonesia',    hreflang: 'id',    og: 'id_ID', dir: 'ltr' },
};

/** Ordered list of locale codes; the default locale is always first. */
export const locales = Object.keys(LANGUAGES);
