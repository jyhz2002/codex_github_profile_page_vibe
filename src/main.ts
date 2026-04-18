import './styles.css';

import { DEFAULT_LOCALE, LOCALES, STORAGE_KEY, content } from './lib/content';
import { renderPage } from './lib/render';
import type { Locale, PageId } from './lib/types';

const root = document.querySelector<HTMLElement>('[data-app]');
const page = document.body.dataset.page as PageId | undefined;

const isLocale = (value: string | null | undefined): value is Locale =>
  typeof value === 'string' && LOCALES.includes(value as Locale);

const resolveAssetUrl = (assetPath: string): string => {
  const normalizedBase = new URL(import.meta.env.BASE_URL, window.location.origin);
  const normalizedPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;

  return new URL(normalizedPath, normalizedBase).toString();
};

const readStoredLocale = (): Locale => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(value) ? value : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
};

const writeStoredLocale = (locale: Locale): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors so the site still renders in restricted environments.
  }
};

const setMetaTag = (selector: string, attribute: 'content', value: string): void => {
  const element = document.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

const setDocumentMeta = (locale: Locale, currentPage: PageId): void => {
  const bundle = content[locale];
  const meta = bundle.copy.meta[currentPage];

  document.documentElement.lang = locale;
  document.title = meta.title;
  setMetaTag('meta[name="description"]', 'content', meta.description);
  setMetaTag('meta[property="og:title"]', 'content', meta.title);
  setMetaTag('meta[property="og:description"]', 'content', meta.description);
  setMetaTag('meta[property="og:image"]', 'content', resolveAssetUrl(bundle.site.seo.ogImage));
  setMetaTag('meta[property="og:url"]', 'content', window.location.href);
};

const mount = (locale: Locale, currentPage: PageId): void => {
  const bundle = content[locale];
  setDocumentMeta(locale, currentPage);

  if (!root) {
    return;
  }

  root.innerHTML = renderPage(currentPage, locale, bundle);

  document.querySelectorAll<HTMLButtonElement>('[data-locale]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLocale = button.dataset.locale;

      if (!isLocale(nextLocale) || nextLocale === locale) {
        return;
      }

      writeStoredLocale(nextLocale);
      mount(nextLocale, currentPage);
    });
  });
};

if (root && page) {
  mount(readStoredLocale(), page);
}
