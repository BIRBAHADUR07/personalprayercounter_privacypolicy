# Personalized Prayer Counter — Landing Page & Privacy Policy

Multilingual Astro site for the Personalized Prayer Counter app, served at
<https://personalprayercounter.online>.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Languages

| Code    | Language            | URL prefix |
| ------- | ------------------- | ---------- |
| `en`    | English (default)   | *(none)*   |
| `hi`    | हिन्दी                | `/hi/`     |
| `ne`    | नेपाली                | `/ne/`     |
| `ar`    | العربية (RTL)        | `/ar/`     |
| `es`    | Español             | `/es/`     |
| `fr`    | Français            | `/fr/`     |
| `pt-br` | Português do Brasil | `/pt-br/`  |
| `id`    | Bahasa Indonesia    | `/id/`     |

English is served unprefixed (`/privacy/`), every other language is under its
code (`/ar/privacy/`). Arabic renders with `dir="rtl"`.

URLs are canonically trailing-slashed (`trailingSlash: 'always'`), because the
build emits directories and a static host redirects `/privacy` to `/privacy/`.
`localizedPath()` matches this, so canonical, hreflang and sitemap URLs are all
byte-identical.

Each page emits a full set of `<link rel="alternate" hreflang="…">` tags — one
per language plus `x-default` pointing at English — and a self-referencing
`<link rel="canonical">`. The sitemap carries the same `xhtml:link` alternates.

## Adding a language

1. Add the code to `LANGUAGES` in [`src/i18n/config.mjs`](src/i18n/config.mjs).
2. Copy [`src/i18n/locales/en.ts`](src/i18n/locales/en.ts) to
   `src/i18n/locales/<code>.ts` and translate the values. Keep the `<strong>`
   tags in `deleteAccount.how.steps`.
3. Register it in [`src/i18n/ui.ts`](src/i18n/ui.ts).

Routes, the language switcher, hreflang tags and the sitemap all derive from
that list — no page files need to change. Missing keys fall back to English, so
a partially translated language still renders.

## Adding a page

1. Add the route id and its path segment to `ROUTES` in
   [`src/i18n/utils.ts`](src/i18n/utils.ts).
2. Add the page's strings to every locale file.
3. Create the body component in `src/components/`, then two thin route files:
   `src/pages/<page>.astro` (English) and `src/pages/[lang]/<page>.astro`
   (everything else) — copy an existing pair.

## Structure

```
src/
  i18n/
    config.mjs      supported languages (shared with astro.config.mjs)
    ui.ts           locale code -> dictionary
    utils.ts        translation lookup, path/hreflang builders
    paths.ts        getStaticPaths for /[lang]/ routes
    locales/*.ts    one dictionary per language
  layouts/
    BaseLayout.astro   <html lang/dir>, canonical, hreflang, og tags
  components/
    SiteNav, SiteFooter, LanguageSwitcher, Logo
    HomePage, PrivacyPage, DeleteAccountPage   page bodies, locale-driven
  pages/
    index|privacy|delete-account.astro         English at the site root
    [lang]/index|privacy|delete-account.astro  all other languages
    404.astro                                  single fallback, noindex
public/
  CNAME, app-ads.txt, robots.txt, favicon.svg   copied verbatim into dist/
```

A static host serves one `404.html` for every unmatched path in any language,
so it cannot carry a canonical URL or hreflang set of its own: it renders in
English, is marked `noindex`, and links back into each language instead.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds on every
push to `main` and publishes `dist/` to GitHub Pages. Set
**Settings → Pages → Source** to **GitHub Actions** once; `public/CNAME` keeps
the custom domain.

## Note on per-language content

The language a visitor picks says nothing reliable about their religion or
country — Arabic speakers are not all Muslim, English speakers are not all in
the US/UK, and Hindi speakers are not all Hindu. If you vary imagery or emphasis
per locale, treat it as a *default* the visitor can change, not a fixed
assumption. `privacy` and `delete-account` must stay faithful translations of
each other: they are legal documents, and `hreflang` is only valid between pages
that are genuinely equivalent.
