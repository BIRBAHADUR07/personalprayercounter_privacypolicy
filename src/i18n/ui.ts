import en from './locales/en';
import hi from './locales/hi';
import ne from './locales/ne';
import ar from './locales/ar';
import es from './locales/es';
import fr from './locales/fr';
import ptBr from './locales/pt-br';
import id from './locales/id';

/**
 * Locale code -> dictionary. Keys must match `locales` in ./config.mjs.
 * en is the reference shape; missing keys elsewhere fall back to it
 * (see useTranslations in ./utils.ts).
 */
export const ui = {
  en,
  hi,
  ne,
  ar,
  es,
  fr,
  'pt-br': ptBr,
  id,
};
