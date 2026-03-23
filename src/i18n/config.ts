export const languages = {
  ja: { label: '日本語', htmlLang: 'ja' },
  en: { label: 'English', htmlLang: 'en' },
  zh: { label: '中文', htmlLang: 'zh-Hans' },
  ko: { label: '한국어', htmlLang: 'ko' },
  de: { label: 'Deutsch', htmlLang: 'de' },
  fr: { label: 'Français', htmlLang: 'fr' },
  es: { label: 'Español', htmlLang: 'es' },
  it: { label: 'Italiano', htmlLang: 'it' },
  ru: { label: 'Русский', htmlLang: 'ru' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ja';
export const foreignLangs = ['en', 'zh', 'ko', 'de', 'fr', 'es', 'it', 'ru'] as const;
export type ForeignLang = (typeof foreignLangs)[number];
