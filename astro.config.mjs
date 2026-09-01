// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { locales, defaultLocale } from './src/i18n/config.mjs';

export default defineConfig({
  site: 'https://personalprayercounter.online',
  // The build emits directories (/privacy/index.html), so the canonical form of
  // every URL ends in a slash. localizedPath() in src/i18n/utils.ts matches this.
  trailingSlash: 'always',
  i18n: {
    defaultLocale,
    locales,
    routing: {
      // English stays at the site root (/privacy), other languages are
      // prefixed (/hi/privacy, /ar/privacy, ...).
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
    }),
  ],
});
