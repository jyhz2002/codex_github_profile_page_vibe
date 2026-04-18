import { PAGE_HREFS } from './content';
import type { Locale, LocaleBundle, PageId, ProjectEntry, RepositoryEntry } from './types';

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const formatMultiline = (value: string): string =>
  escapeHtml(value).replaceAll('\n', '<br />');

const navItems: Array<{ id: PageId; key: 'home' | 'about' | 'projects' | 'contact' }> = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' }
];

const renderShellHeader = (page: PageId, locale: Locale, bundle: LocaleBundle): string => {
  const { site, copy } = bundle;

  return `
    <a class="skip-link" href="#main-content">${escapeHtml(copy.nav.skipToContent)}</a>
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${PAGE_HREFS.home}">
          <span class="brand-mark__dot"></span>
          <span class="brand-mark__text">${escapeHtml(site.name)}</span>
        </a>
        <p class="brand-role">${escapeHtml(site.role)}</p>
      </div>
      <div class="header-controls">
        <nav class="site-nav" aria-label="${escapeHtml(copy.common.primaryNavLabel)}">
          ${navItems
            .map(
              ({ id, key }) => `
                <a class="site-nav__link ${page === id ? 'is-active' : ''}" href="${PAGE_HREFS[id]}" ${
                  page === id ? 'aria-current="page"' : ''
                }>
                  ${escapeHtml(copy.nav[key])}
                </a>
              `
            )
            .join('')}
        </nav>
        <div class="locale-toggle" aria-label="${escapeHtml(copy.nav.languageLabel)}">
          <button class="locale-toggle__button ${locale === 'ko' ? 'is-active' : ''}" type="button" data-locale="ko">
            KO
          </button>
          <button class="locale-toggle__button ${locale === 'en' ? 'is-active' : ''}" type="button" data-locale="en">
            EN
          </button>
        </div>
      </div>
    </header>
  `;
};

const renderHeroAside = (bundle: LocaleBundle): string => {
  const { site, copy } = bundle;

  return `
    <aside class="hero-panel stagger-item" style="--stagger-index: 3">
      <p class="eyebrow eyebrow--muted">${escapeHtml(copy.common.placeholderLabel)}</p>
      <div class="hero-panel__stack">
        <div>
          <p class="hero-panel__label">${escapeHtml(copy.common.locationLabel)}</p>
          <p class="hero-panel__value">${escapeHtml(site.location)}</p>
        </div>
        <div>
          <p class="hero-panel__label">${escapeHtml(copy.common.availabilityLabel)}</p>
          <p class="hero-panel__value">${escapeHtml(site.availability)}</p>
        </div>
        <div>
          <p class="hero-panel__label">${escapeHtml(copy.common.contactLabel)}</p>
          <a class="hero-panel__link" href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>
        </div>
      </div>
    </aside>
  `;
};

const renderFeaturedCards = (bundle: LocaleBundle, limit?: number): string => {
  const { projects, copy } = bundle;
  const featured = projects.filter((project) => project.featured).slice(0, limit);

  return featured
    .map(
      (project, index) => `
        <article class="project-card stagger-item" style="--stagger-index: ${index + 1}">
          <div class="project-card__topline">
            <span class="pill">${escapeHtml(copy.common.featuredLabel)}</span>
            <p class="project-card__role">${escapeHtml(project.role)}</p>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-card__summary">${escapeHtml(project.summary)}</p>
          <div class="project-card__section">
            <p class="project-card__label">${escapeHtml(copy.common.contributionsLabel)}</p>
            <ul class="project-card__list">
              ${project.contributions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
          <div class="project-card__section">
            <p class="project-card__label">${escapeHtml(copy.common.techStackLabel)}</p>
            <div class="tag-list">
              ${project.techStack.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}
            </div>
          </div>
          <div class="project-card__section">
            <p class="project-card__label">${escapeHtml(copy.common.resultLabel)}</p>
            <p>${escapeHtml(project.result)}</p>
          </div>
          <div class="project-card__actions">
            ${renderProjectLinks(project)}
          </div>
        </article>
      `
    )
    .join('');
};

const renderProjectLinks = (project: ProjectEntry): string =>
  project.links
    .map(
      (link) => `
        <a class="text-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
          ${escapeHtml(link.label)}
        </a>
      `
    )
    .join('');

const renderRepositoryList = (bundle: LocaleBundle): string =>
  bundle.repositories
    .map(
      (repository: RepositoryEntry, index) => `
        <a
          class="repository-row stagger-item"
          style="--stagger-index: ${index + 1}"
          href="${escapeHtml(repository.href)}"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p class="repository-row__name">${escapeHtml(repository.name)}</p>
            <p class="repository-row__description">${escapeHtml(repository.description)}</p>
          </div>
          <span class="repository-row__cta">${escapeHtml(bundle.copy.common.repositoryCta)}</span>
        </a>
      `
    )
    .join('');

const renderHomePage = (bundle: LocaleBundle): string => {
  const { copy } = bundle;

  return `
    <section class="hero grid-2">
      <div class="hero-copy">
        <p class="eyebrow stagger-item" style="--stagger-index: 1">${escapeHtml(copy.home.eyebrow)}</p>
        <h1 class="hero-title stagger-item" style="--stagger-index: 2">${formatMultiline(copy.home.title)}</h1>
        <p class="hero-intro stagger-item" style="--stagger-index: 3">${escapeHtml(copy.home.intro)}</p>
        <div class="hero-actions stagger-item" style="--stagger-index: 4">
          <a class="button button--primary" href="${PAGE_HREFS.projects}">${escapeHtml(copy.home.primaryCta)}</a>
          <a class="button button--secondary" href="${PAGE_HREFS.about}">${escapeHtml(copy.home.secondaryCta)}</a>
        </div>
      </div>
      ${renderHeroAside(bundle)}
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.home.focusTitle)}</p>
        <h2>${escapeHtml(copy.home.focusIntro)}</h2>
      </div>
      <div class="bento-grid">
        ${copy.home.focusAreas
          .map(
            (item, index) => `
              <article class="bento-card stagger-item" style="--stagger-index: ${index + 1}">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section section--accent">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.home.previewTitle)}</p>
        <h2>${escapeHtml(copy.home.previewIntro)}</h2>
        <p class="section-note">${escapeHtml(copy.home.note)}</p>
      </div>
      <div class="project-grid">
        ${renderFeaturedCards(bundle, 2)}
      </div>
      <div class="section-actions">
        <a class="button button--secondary" href="${PAGE_HREFS.projects}">${escapeHtml(copy.common.viewAll)}</a>
      </div>
    </section>
  `;
};

const renderAboutPage = (bundle: LocaleBundle): string => {
  const { copy } = bundle;

  return `
    <section class="page-intro">
      <p class="eyebrow stagger-item" style="--stagger-index: 1">${escapeHtml(copy.about.eyebrow)}</p>
      <h1 class="page-title stagger-item" style="--stagger-index: 2">${formatMultiline(copy.about.title)}</h1>
      <p class="page-description stagger-item" style="--stagger-index: 3">${escapeHtml(copy.about.intro)}</p>
    </section>

    <section class="section grid-2">
      <article class="story-card">
        <p class="eyebrow">${escapeHtml(copy.about.storyTitle)}</p>
        ${copy.about.story.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </article>
      <article class="story-card story-card--light">
        <p class="eyebrow">${escapeHtml(copy.about.timelineTitle)}</p>
        <div class="timeline">
          ${copy.about.timeline
            .map(
              (item) => `
                <div class="timeline-item">
                  <p class="timeline-item__period">${escapeHtml(item.period)}</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </div>
              `
            )
            .join('')}
        </div>
      </article>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.about.skillsTitle)}</p>
        <h2>${escapeHtml(copy.about.skillsIntro)}</h2>
      </div>
      <div class="skill-grid">
        ${copy.about.skillGroups
          .map(
            (group, index) => `
              <article class="skill-card stagger-item" style="--stagger-index: ${index + 1}">
                <h3>${escapeHtml(group.title)}</h3>
                <div class="tag-list">
                  ${group.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section section--accent">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.about.principlesTitle)}</p>
      </div>
      <div class="bento-grid">
        ${copy.about.principles
          .map(
            (item, index) => `
              <article class="bento-card stagger-item" style="--stagger-index: ${index + 1}">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
};

const renderProjectsPage = (bundle: LocaleBundle): string => {
  const { copy } = bundle;

  return `
    <section class="page-intro">
      <p class="eyebrow stagger-item" style="--stagger-index: 1">${escapeHtml(copy.projects.eyebrow)}</p>
      <h1 class="page-title stagger-item" style="--stagger-index: 2">${formatMultiline(copy.projects.title)}</h1>
      <p class="page-description stagger-item" style="--stagger-index: 3">${escapeHtml(copy.projects.intro)}</p>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.projects.featuredTitle)}</p>
        <h2>${escapeHtml(copy.projects.featuredIntro)}</h2>
      </div>
      <div class="project-grid project-grid--full">
        ${renderFeaturedCards(bundle)}
      </div>
    </section>

    <section class="section section--accent">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.projects.repositoryTitle)}</p>
        <h2>${escapeHtml(copy.projects.repositoryIntro)}</h2>
      </div>
      <div class="repository-list">
        ${renderRepositoryList(bundle)}
      </div>
    </section>
  `;
};

const renderContactPage = (bundle: LocaleBundle): string => {
  const { copy, site } = bundle;

  return `
    <section class="page-intro">
      <p class="eyebrow stagger-item" style="--stagger-index: 1">${escapeHtml(copy.contact.eyebrow)}</p>
      <h1 class="page-title stagger-item" style="--stagger-index: 2">${formatMultiline(copy.contact.title)}</h1>
      <p class="page-description stagger-item" style="--stagger-index: 3">${escapeHtml(copy.contact.intro)}</p>
    </section>

    <section class="section grid-2">
      <article class="contact-card contact-card--accent">
        <p class="eyebrow">${escapeHtml(copy.contact.formTitle)}</p>
        <h2>${escapeHtml(copy.contact.formButton)}</h2>
        <p>${escapeHtml(copy.contact.formBody)}</p>
        <a class="button button--primary" href="${escapeHtml(site.formUrl)}" target="_blank" rel="noreferrer">
          ${escapeHtml(copy.contact.formButton)}
        </a>
      </article>
      <article class="contact-card">
        <p class="eyebrow">${escapeHtml(copy.contact.availabilityTitle)}</p>
        <h2>${escapeHtml(site.availability)}</h2>
        <p>${escapeHtml(copy.contact.availabilityBody)}</p>
      </article>
    </section>

    <section class="section section--accent">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(copy.contact.directTitle)}</p>
        <h2>${escapeHtml(copy.contact.directIntro)}</h2>
        <p class="section-note">${escapeHtml(copy.contact.note)}</p>
      </div>
      <div class="contact-grid">
        ${site.socialLinks
          .map(
            (item, index) => `
              <a
                class="contact-link stagger-item"
                style="--stagger-index: ${index + 1}"
                href="${escapeHtml(item.href)}"
                target="_blank"
                rel="noreferrer"
              >
                <span class="contact-link__label">${escapeHtml(item.label)}</span>
                <span class="contact-link__value">${escapeHtml(item.href.replace('mailto:', ''))}</span>
              </a>
            `
          )
          .join('')}
        <a class="contact-link stagger-item" style="--stagger-index: 4" href="${escapeHtml(site.resumeLink.href)}" target="_blank" rel="noreferrer">
          <span class="contact-link__label">${escapeHtml(site.resumeLink.label)}</span>
          <span class="contact-link__value">${escapeHtml(site.resumeLink.href)}</span>
        </a>
      </div>
    </section>
  `;
};

const renderPageBody = (page: PageId, bundle: LocaleBundle): string => {
  switch (page) {
    case 'about':
      return renderAboutPage(bundle);
    case 'projects':
      return renderProjectsPage(bundle);
    case 'contact':
      return renderContactPage(bundle);
    case 'home':
    default:
      return renderHomePage(bundle);
  }
};

const renderFooter = (bundle: LocaleBundle): string => {
  const { copy, site } = bundle;

  return `
    <footer class="site-footer">
      <div>
        <p class="eyebrow">${escapeHtml(site.seo.siteName)}</p>
        <h2>${escapeHtml(copy.footer.title)}</h2>
        <p>${escapeHtml(copy.footer.body)}</p>
      </div>
      <div class="site-footer__actions">
        <a class="button button--primary" href="${PAGE_HREFS.contact}">${escapeHtml(copy.footer.cta)}</a>
        <a class="button button--secondary" href="${escapeHtml(site.resumeLink.href)}" target="_blank" rel="noreferrer">
          ${escapeHtml(site.resumeLink.label)}
        </a>
      </div>
    </footer>
  `;
};

export const renderPage = (page: PageId, locale: Locale, bundle: LocaleBundle): string => `
  <div class="page-shell">
    <div class="page-bg page-bg--top"></div>
    <div class="page-bg page-bg--bottom"></div>
    ${renderShellHeader(page, locale, bundle)}
    <main id="main-content" class="page-main">
      ${renderPageBody(page, bundle)}
    </main>
    ${renderFooter(bundle)}
  </div>
`;
