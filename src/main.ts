import './styles.css';

import { DEFAULT_LOCALE, content } from './lib/content';
import { renderPage } from './lib/render';
import type { PageId } from './lib/types';

const root = document.querySelector<HTMLElement>('[data-app]');
const page = document.body.dataset.page as PageId | undefined;

const resolveAssetUrl = (assetPath: string): string => {
  const normalizedBase = new URL(import.meta.env.BASE_URL, window.location.origin);
  const normalizedPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;

  return new URL(normalizedPath, normalizedBase).toString();
};

const setMetaTag = (selector: string, attribute: 'content', value: string): void => {
  const element = document.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

const setDocumentMeta = (currentPage: PageId): void => {
  const bundle = content[DEFAULT_LOCALE];
  const meta = bundle.copy.meta[currentPage];

  document.documentElement.lang = DEFAULT_LOCALE;
  document.title = meta.title;
  setMetaTag('meta[name="description"]', 'content', meta.description);
  setMetaTag('meta[property="og:title"]', 'content', meta.title);
  setMetaTag('meta[property="og:description"]', 'content', meta.description);
  setMetaTag('meta[property="og:image"]', 'content', resolveAssetUrl(bundle.site.seo.ogImage));
  setMetaTag('meta[property="og:url"]', 'content', window.location.href);
};

const mount = (currentPage: PageId): void => {
  const bundle = content[DEFAULT_LOCALE];
  setDocumentMeta(currentPage);

  if (!root) {
    return;
  }

  root.innerHTML = renderPage(currentPage, bundle);
};

if (root && page) {
  mount(page);
}
