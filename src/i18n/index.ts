/**
 * UI strings. English ships in v1; Marathi (mr) and Sanskrit (sa) are planned.
 * Curriculum content is English-only in v1; the schema keeps text in plain fields so
 * a future version can add parallel localized content files per language.
 */
import { en } from './en.ts';
export type Locale = 'en';
export const PLANNED_LOCALES = [
  { code: 'en', name: 'English', status: 'available' },
  { code: 'mr', name: 'मराठी (Marathi)', status: 'planned' },
  { code: 'sa', name: 'संस्कृतम् (Sanskrit)', status: 'planned' },
] as const;
export type Key = keyof typeof en;
const dict: Record<Locale, Record<Key, string>> = { en };
let locale: Locale = 'en';
export const setLocale = (l: Locale) => { locale = l; };
export function t(key: Key, vars: Record<string, string | number> = {}): string {
  return (dict[locale][key] ?? en[key]).replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
