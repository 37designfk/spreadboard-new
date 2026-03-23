import { languages, defaultLang, type Lang } from './config';
import { translations } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && first in languages && first !== defaultLang) {
    return first as Lang;
  }
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  return (translations as any)[lang]?.[key] ?? (translations as any)[defaultLang]?.[key] ?? key;
}

export function getAlternateUrls(pagePath: string): { lang: Lang; htmlLang: string; url: string }[] {
  return (Object.keys(languages) as Lang[]).map(lang => ({
    lang,
    htmlLang: languages[lang].htmlLang,
    url: `https://spreadboard.net${lang === defaultLang ? '' : `/${lang}`}${pagePath === '/' ? '' : pagePath}`,
  }));
}
