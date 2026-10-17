// Language plumbing: UI strings (src/i18n/ui.ts) and career data per language.
import { ui, type Lang } from '../i18n/ui';

export type { Lang };

const files = {
  en: import.meta.glob('../data/*.json', { eager: true, import: 'default' }),
  es: import.meta.glob('../data/es/*.json', { eager: true, import: 'default' }),
} as Record<Lang, Record<string, unknown>>;

/** Career data view (`profile`, `experience`, ...) in the given language. */
export function data(lang: Lang, name: string): any {
  const found = files[lang][`../data/${lang === 'es' ? 'es/' : ''}${name}.json`];
  if (found === undefined) throw new Error(`Missing data file for ${lang}: ${name}.json (run JavierDB sync)`);
  return found;
}

export const strings = (lang: Lang) => ui[lang];
export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
