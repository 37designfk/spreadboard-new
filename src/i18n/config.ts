export const languages = {
  ja: { label: '日本語', htmlLang: 'ja' },
  en: { label: 'English', htmlLang: 'en' },
  zh: { label: '中文', htmlLang: 'zh-Hans' },
  ko: { label: '한국어', htmlLang: 'ko' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ja';
export const foreignLangs = ['en', 'zh', 'ko'] as const;
export type ForeignLang = (typeof foreignLangs)[number];
