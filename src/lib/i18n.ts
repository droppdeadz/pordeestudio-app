import en from '../i18n/en.json';
import th from '../i18n/th.json';

export type Locale = 'en' | 'th';

export const locales: Locale[] = ['en', 'th'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Record<string, unknown>> = { en, th };

export function getTranslations(locale: string) {
  const dict = translations[locale as Locale] ?? translations.en;

  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = dict;
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, locale: string): string {
  return `/${locale}${path === '/' ? '/' : path}`;
}
