export type Locale = 'ko' | 'en';
export type PageId = 'home' | 'about' | 'projects' | 'contact';

export interface LinkItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  formUrl: string;
  socialLinks: LinkItem[];
  resumeLink: LinkItem;
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface ProjectEntry {
  title: string;
  summary: string;
  role: string;
  contributions: string[];
  techStack: string[];
  result: string;
  links: LinkItem[];
  featured: boolean;
}

export interface RepositoryEntry {
  name: string;
  description: string;
  href: string;
}

export interface PageCopy {
  meta: Record<PageId, { title: string; description: string }>;
  nav: {
    skipToContent: string;
    home: string;
    about: string;
    projects: string;
    contact: string;
    languageLabel: string;
  };
  footer: {
    title: string;
    body: string;
    cta: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    focusTitle: string;
    focusIntro: string;
    focusAreas: Array<{ title: string; description: string }>;
    previewTitle: string;
    previewIntro: string;
    note: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    storyTitle: string;
    story: string[];
    timelineTitle: string;
    timeline: Array<{ period: string; title: string; body: string }>;
    skillsTitle: string;
    skillsIntro: string;
    skillGroups: Array<{ title: string; items: string[] }>;
    principlesTitle: string;
    principles: Array<{ title: string; description: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    featuredTitle: string;
    featuredIntro: string;
    repositoryTitle: string;
    repositoryIntro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    formBody: string;
    formButton: string;
    directTitle: string;
    directIntro: string;
    availabilityTitle: string;
    availabilityBody: string;
    note: string;
  };
  common: {
    placeholderLabel: string;
    featuredLabel: string;
    contributionsLabel: string;
    techStackLabel: string;
    resultLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    contactLabel: string;
    primaryNavLabel: string;
    repositoryCta: string;
    viewSource: string;
    livePreview: string;
    caseStudy: string;
    viewAll: string;
  };
}

export interface LocaleBundle {
  site: SiteConfig;
  copy: PageCopy;
  projects: ProjectEntry[];
  repositories: RepositoryEntry[];
}
