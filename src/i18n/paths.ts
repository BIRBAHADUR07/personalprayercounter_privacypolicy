import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './utils';

/**
 * getStaticPaths source for the /[lang]/... routes: every locale except the
 * default one, which is served unprefixed from src/pages/*.astro.
 */
export function nonDefaultLocalePaths() {
  return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    params: { lang: locale },
    props: { locale },
  }));
}
