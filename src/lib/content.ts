import type { Locale, LocaleBundle, PageId } from './types';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['ko', 'en'];
export const STORAGE_KEY = 'portfolio-locale';

export const PAGE_HREFS: Record<PageId, string> = {
  home: './index.html',
  about: './about.html',
  projects: './projects.html',
  contact: './contact.html'
};

export const content: Record<Locale, LocaleBundle> = {
  ko: {
    site: {
      name: 'YOUR NAME',
      role: '제품 감각과 협업 감도를 함께 갖춘 개발자',
      location: 'Based in Seoul, open to global teams',
      availability: '2026 역할 제안, 프리랜스, 협업 기회에 열려 있습니다.',
      email: 'hello@yourdomain.dev',
      formUrl: 'https://docs.google.com/forms/',
      socialLinks: [
        { label: 'GitHub', href: 'https://github.com/your-username' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile/' },
        { label: 'Email', href: 'mailto:hello@yourdomain.dev' }
      ],
      resumeLink: { label: 'Resume PDF', href: 'https://example.com/resume.pdf' },
      seo: {
        siteName: 'YOUR NAME Portfolio',
        defaultTitle: 'YOUR NAME | 개발자 포트폴리오',
        defaultDescription:
          'GitHub Pages에 배포되는 한영 지원 개발자 포트폴리오 템플릿입니다.',
        ogImage: '/og-image.svg'
      }
    },
    copy: {
      meta: {
        home: {
          title: 'YOUR NAME | 개발자 포트폴리오',
          description: '첫 화면에서 강점과 대표 작업을 빠르게 보여주는 채용용 포트폴리오'
        },
        about: {
          title: 'About | YOUR NAME',
          description: '개발자로서의 접근 방식, 기술 축적, 협업 스타일을 소개합니다.'
        },
        projects: {
          title: 'Projects | YOUR NAME',
          description: '대표 프로젝트와 GitHub 저장소를 정리한 페이지입니다.'
        },
        contact: {
          title: 'Contact | YOUR NAME',
          description: '포지션 제안과 협업 문의를 위한 연락 페이지입니다.'
        }
      },
      nav: {
        skipToContent: '본문으로 건너뛰기',
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        languageLabel: '언어'
      },
      footer: {
        title: '빠르게 훑어도 방향이 보이고, 더 읽으면 깊이가 드러나는 포트폴리오를 목표로 했습니다.',
        body: '실제 정보로 교체할 부분은 모두 명확한 placeholder로 남겨 두었습니다.',
        cta: '연락하기'
      },
      home: {
        eyebrow: 'Bilingual developer portfolio for hiring conversations',
        title: '명확한 제품 사고와 강한 실행력으로\n읽히는 경험을 만드는 개발자',
        intro:
          '채용 담당자와 면접관이 10초 안에 이해할 수 있도록, 소개와 대표 작업, 연락 경로를 선명하게 정리한 포트폴리오입니다. 현재 문구와 링크는 실제 정보로 쉽게 바꿀 수 있는 placeholder 상태입니다.',
        primaryCta: '대표 프로젝트 보기',
        secondaryCta: 'About 열기',
        focusTitle: 'Core Strengths',
        focusIntro: '프론트엔드 구현뿐 아니라 팀과 제품의 흐름까지 함께 설계하는 개발자라는 인상을 전달합니다.',
        focusAreas: [
          {
            title: 'Product Thinking',
            description: 'UI를 예쁘게 만드는 데서 멈추지 않고, 사용자가 왜 이 화면을 써야 하는지까지 설명하는 구조를 만듭니다.'
          },
          {
            title: 'Frontend Craft',
            description: '가독성, 접근성, 성능, 유지보수성을 함께 챙기며 오래 가는 화면을 설계합니다.'
          },
          {
            title: 'Team Collaboration',
            description: '기획, 디자인, 개발 사이의 언어 차이를 줄이고 실행 가능한 형태로 정리하는 역할을 잘합니다.'
          }
        ],
        previewTitle: 'Featured Work',
        previewIntro: '대표 프로젝트는 설명 중심 카드로, 링크만 나열하기보다 어떤 문제를 어떻게 풀었는지 보이도록 구성했습니다.',
        note: '프로젝트 설명과 결과 문구는 사실처럼 보이는 가짜 수치 대신 교체용 placeholder로 작성했습니다.'
      },
      about: {
        eyebrow: 'About the builder',
        title: '무엇을 만들었는지뿐 아니라,\n어떻게 일하는지도 보여줍니다.',
        intro:
          '이 페이지는 자기소개, 경험 타임라인, 기술 스택, 협업 원칙을 분리해 읽기 쉽게 구성했습니다.',
        storyTitle: 'Short Story',
        story: [
          '저는 사용자 경험과 제품 흐름을 같이 보는 개발자입니다. 화면을 구현할 때도 단순히 기능을 옮기는 대신, 어떤 정보가 먼저 보여야 하는지와 사용자가 무엇을 이해하고 행동해야 하는지를 함께 고민합니다.',
          '현재 템플릿에는 실제 경력 대신 교체 지점을 명확히 드러내는 placeholder 문구가 들어 있습니다. 이 구조를 기반으로 본인의 역할, 성장 포인트, 성과 서사를 자연스럽게 채워 넣을 수 있습니다.'
        ],
        timelineTitle: 'Experience & Education Timeline',
        timeline: [
          {
            period: '2026 - Replace',
            title: 'Current Role Placeholder',
            body: '회사명, 팀, 역할 범위, 가장 중요하게 다뤘던 문제를 한두 문장으로 교체하세요.'
          },
          {
            period: '2024 - Replace',
            title: 'Previous Role Placeholder',
            body: '프로젝트 맥락과 책임 범위, 배운 점을 짧고 선명하게 적는 자리를 마련했습니다.'
          },
          {
            period: 'Education - Replace',
            title: 'Education / Bootcamp Placeholder',
            body: '전공, 교육 과정, 전환 계기 중 채용 맥락에서 중요한 것만 남기면 충분합니다.'
          }
        ],
        skillsTitle: 'Technical Stack',
        skillsIntro: '기술 나열보다 맥락을 주기 위해, 역할별로 나눠 보여줍니다.',
        skillGroups: [
          {
            title: 'Frontend',
            items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React or Vue placeholder']
          },
          {
            title: 'Product & Delivery',
            items: ['Design handoff', 'Accessibility', 'Performance tuning', 'Documentation']
          },
          {
            title: 'Collaboration',
            items: ['Cross-functional communication', 'Code review', 'Planning', 'Mentoring']
          }
        ],
        principlesTitle: 'How I Work',
        principles: [
          {
            title: '명확한 우선순위',
            description: '좋아 보이는 것보다 중요한 것을 먼저 구현하고, 이후에 완성도를 높이는 방식을 선호합니다.'
          },
          {
            title: '설명 가능한 코드',
            description: '나중에 읽는 사람도 맥락을 이해할 수 있도록, 구조와 명명에 신경 씁니다.'
          },
          {
            title: '협업 친화적 전달',
            description: '디자인, 기획, 개발 사이의 결정을 문서화하고 다음 단계가 보이도록 정리합니다.'
          }
        ]
      },
      projects: {
        eyebrow: 'Selected projects and repositories',
        title: '대표 작업은 맥락 있게,\n추가 작업은 GitHub 링크로 정리했습니다.',
        intro:
          '채용용 포트폴리오에서는 모든 저장소를 같은 비중으로 보여주기보다, 핵심 프로젝트 몇 개를 직접 큐레이션하는 편이 더 설득력 있습니다.',
        featuredTitle: 'Featured Projects',
        featuredIntro: '아래 카드는 프로젝트 설명, 역할, 기술 스택, 결과 placeholder, 링크를 함께 담습니다.',
        repositoryTitle: 'More on GitHub',
        repositoryIntro: '추가 저장소는 짧은 설명과 함께 링크로 정리해 탐색 부담을 줄였습니다.'
      },
      contact: {
        eyebrow: 'Open to opportunities',
        title: '역할 제안, 협업 문의,\n간단한 인사까지 편하게 남겨 주세요.',
        intro:
          'GitHub Pages에서는 백엔드 없이도 충분히 신뢰감 있는 연락 구조를 만들 수 있습니다. 여기서는 Google Form 열기 버튼과 직접 연락 링크를 함께 제공합니다.',
        formTitle: 'Google Form Placeholder',
        formBody:
          '현재 버튼은 Google Forms 메인 주소로 연결됩니다. 실제 배포 전에는 본인의 공개 폼 URL로 `formUrl` 값을 교체하세요.',
        formButton: 'Google Form 열기',
        directTitle: 'Direct Links',
        directIntro: '빠르게 연락할 수 있는 경로를 한눈에 정리했습니다.',
        availabilityTitle: 'Availability',
        availabilityBody: '포지션 제안, 프리랜스, 협업 요청에 대응할 수 있는 상태를 간단히 안내합니다.',
        note: '이메일, GitHub, LinkedIn, 이력서 링크는 모두 실제 정보로 교체해야 합니다.'
      },
      common: {
        placeholderLabel: 'Placeholder',
        featuredLabel: 'Featured',
        contributionsLabel: 'Contributions',
        techStackLabel: 'Tech stack',
        resultLabel: 'Result placeholder',
        locationLabel: '위치',
        availabilityLabel: '상태',
        contactLabel: '연락',
        primaryNavLabel: '기본 탐색',
        repositoryCta: 'GitHub',
        viewSource: 'Source',
        livePreview: 'Live',
        caseStudy: 'Case Study',
        viewAll: '전체 보기'
      }
    },
    projects: [
      {
        title: 'Portfolio Experience System',
        summary: '채용 관점에서 핵심 정보를 빠르게 파악할 수 있도록 정보 구조와 비주얼을 함께 설계한 개인 사이트 placeholder 프로젝트입니다.',
        role: 'Planning, UI architecture, frontend implementation',
        contributions: [
          '랜딩, About, Projects, Contact를 역할별로 분리한 멀티페이지 구조 설계',
          '한국어/영어 전환과 로컬 저장소 기반 언어 유지 흐름 구현',
          'GitHub Pages 하위 경로 배포를 고려한 빌드 설정 정리'
        ],
        techStack: ['Vite', 'TypeScript', 'CSS', 'GitHub Pages'],
        result: '여기에 실제 포트폴리오 공개 후 피드백, 인터뷰 반응, 전환 개선 내용을 넣으세요.',
        links: [
          { label: 'Live', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/portfolio' }
        ],
        featured: true
      },
      {
        title: 'Product Landing Refresh',
        summary: '브랜드 톤과 제품 메시지를 정리하고, 읽기 흐름과 CTA 가시성을 개선하는 랜딩 페이지 리디자인 placeholder입니다.',
        role: 'Frontend lead and design handoff partner',
        contributions: [
          '콘텐츠 우선순위 재정리와 정보 밀도 조정',
          '모바일 우선 카드 레이아웃과 강조 섹션 패턴 설계',
          '개발과 디자인 간 전달 비용을 줄이는 컴포넌트 기준 정리'
        ],
        techStack: ['TypeScript', 'Design systems', 'Responsive CSS'],
        result: '이 자리에 실제 사용자 반응, 유지보수성 개선, 또는 비즈니스 결과를 교체해서 입력하세요.',
        links: [
          { label: 'Case Study', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/landing-refresh' }
        ],
        featured: true
      },
      {
        title: 'Team Dashboard Placeholder',
        summary: '복잡한 운영 정보를 한 화면에서 빠르게 읽을 수 있도록 구성한 내부 도구 placeholder 프로젝트입니다.',
        role: 'Frontend implementation and information design',
        contributions: [
          '운영 데이터의 우선순위를 기준으로 카드와 패널 레이아웃 재정의',
          '상태 정보와 액션 요소를 분리해 가독성 향상',
          '반복 사용하는 패턴을 재사용 가능한 UI 규칙으로 정리'
        ],
        techStack: ['Frontend architecture', 'State modeling', 'CSS systems'],
        result: '도입 후 업무 흐름이 어떻게 나아졌는지, 혹은 팀이 어떤 피드백을 줬는지 실제 사례로 교체하세요.',
        links: [
          { label: 'Live', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/team-dashboard' }
        ],
        featured: true
      }
    ],
    repositories: [
      {
        name: 'design-notes',
        description: 'UI 패턴, 의사결정 메모, 실험 기록을 정리하는 저장소 placeholder',
        href: 'https://github.com/your-username/design-notes'
      },
      {
        name: 'frontend-sandbox',
        description: '작은 상호작용과 레이아웃 아이디어를 테스트하는 저장소 placeholder',
        href: 'https://github.com/your-username/frontend-sandbox'
      },
      {
        name: 'workflow-scripts',
        description: '개발 과정에서 반복되는 작업을 정리하는 유틸리티 저장소 placeholder',
        href: 'https://github.com/your-username/workflow-scripts'
      }
    ]
  },
  en: {
    site: {
      name: 'YOUR NAME',
      role: 'Developer with product instincts and a strong collaboration lens',
      location: 'Based in Seoul, open to global teams',
      availability: 'Open to 2026 roles, freelance work, and collaborative projects.',
      email: 'hello@yourdomain.dev',
      formUrl: 'https://docs.google.com/forms/',
      socialLinks: [
        { label: 'GitHub', href: 'https://github.com/your-username' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile/' },
        { label: 'Email', href: 'mailto:hello@yourdomain.dev' }
      ],
      resumeLink: { label: 'Resume PDF', href: 'https://example.com/resume.pdf' },
      seo: {
        siteName: 'YOUR NAME Portfolio',
        defaultTitle: 'YOUR NAME | Developer Portfolio',
        defaultDescription:
          'A bilingual developer portfolio template designed for GitHub Pages.',
        ogImage: '/og-image.svg'
      }
    },
    copy: {
      meta: {
        home: {
          title: 'YOUR NAME | Developer Portfolio',
          description: 'A hiring-focused portfolio that surfaces strengths and featured work fast.'
        },
        about: {
          title: 'About | YOUR NAME',
          description: 'Learn about the builder, their workflow, and the skills behind the work.'
        },
        projects: {
          title: 'Projects | YOUR NAME',
          description: 'A curated set of featured projects plus supporting GitHub repositories.'
        },
        contact: {
          title: 'Contact | YOUR NAME',
          description: 'Reach out for roles, freelance opportunities, and collaboration.'
        }
      },
      nav: {
        skipToContent: 'Skip to content',
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        languageLabel: 'Language'
      },
      footer: {
        title: 'Built to read quickly, with enough depth to reward a closer look.',
        body: 'Every placeholder is intentionally visible so you can replace it with real information later.',
        cta: 'Start a conversation'
      },
      home: {
        eyebrow: 'Bilingual developer portfolio for hiring conversations',
        title: 'A developer who turns clear product thinking into\nsharp, readable experiences',
        intro:
          'This portfolio is structured for hiring managers and interviewers who need to understand strengths, featured work, and contact paths within seconds. The copy and links are currently placeholders designed for easy replacement.',
        primaryCta: 'See featured work',
        secondaryCta: 'Open about page',
        focusTitle: 'Core Strengths',
        focusIntro: 'The goal is to show not just frontend execution, but the ability to shape product direction and team alignment.',
        focusAreas: [
          {
            title: 'Product Thinking',
            description: 'I build interfaces around what users need to understand and do, not just around what needs to be shipped.'
          },
          {
            title: 'Frontend Craft',
            description: 'I care about accessibility, maintainability, performance, and the clarity of the UI all at once.'
          },
          {
            title: 'Team Collaboration',
            description: 'I help reduce friction between design, product, and engineering by making decisions more legible.'
          }
        ],
        previewTitle: 'Featured Work',
        previewIntro: 'Projects are presented as narrative cards so reviewers can quickly grasp context, role, implementation, and outcomes.',
        note: 'Result copy uses explicit placeholders instead of invented metrics, so nothing looks falsely factual.'
      },
      about: {
        eyebrow: 'About the builder',
        title: 'This page shows not only what I build,\nbut how I work.',
        intro:
          'The layout separates story, timeline, technical stack, and working principles so the content stays easy to scan.',
        storyTitle: 'Short Story',
        story: [
          'I am a developer who looks at user experience and product flow together. Even when implementing a screen, I think about which ideas should appear first, what the user needs to understand, and what action the interface should support.',
          'This template intentionally uses placeholders instead of pretending to document real experience. It gives you a structure where your actual role, growth story, and project context can be slotted in cleanly.'
        ],
        timelineTitle: 'Experience & Education Timeline',
        timeline: [
          {
            period: '2026 - Replace',
            title: 'Current Role Placeholder',
            body: 'Replace this with your company, team, scope, and the most important problem you worked on.'
          },
          {
            period: '2024 - Replace',
            title: 'Previous Role Placeholder',
            body: 'Use this slot for project context, ownership, and the most important thing you learned.'
          },
          {
            period: 'Education - Replace',
            title: 'Education / Bootcamp Placeholder',
            body: 'Keep only what matters in a hiring conversation: background, transition story, or relevant training.'
          }
        ],
        skillsTitle: 'Technical Stack',
        skillsIntro: 'Skills are grouped by context so the section reads like capability, not just a keyword dump.',
        skillGroups: [
          {
            title: 'Frontend',
            items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React or Vue placeholder']
          },
          {
            title: 'Product & Delivery',
            items: ['Design handoff', 'Accessibility', 'Performance tuning', 'Documentation']
          },
          {
            title: 'Collaboration',
            items: ['Cross-functional communication', 'Code review', 'Planning', 'Mentoring']
          }
        ],
        principlesTitle: 'How I Work',
        principles: [
          {
            title: 'Prioritize what matters',
            description: 'I prefer to solve the most important problem first, then raise the level of polish from a strong foundation.'
          },
          {
            title: 'Make the code explain itself',
            description: 'I aim for structures and names that still make sense later, even when the original context is gone.'
          },
          {
            title: 'Hand off decisions clearly',
            description: 'I document tradeoffs and next steps so design, product, and engineering can keep moving with confidence.'
          }
        ]
      },
      projects: {
        eyebrow: 'Selected projects and repositories',
        title: 'Featured work gets full context.\nEverything else stays easy to browse.',
        intro:
          'For a hiring portfolio, a hand-curated set of strong projects is usually more persuasive than showing every repository with equal weight.',
        featuredTitle: 'Featured Projects',
        featuredIntro: 'Each card combines the project summary, role, tech stack, outcome placeholder, and relevant links.',
        repositoryTitle: 'More on GitHub',
        repositoryIntro: 'Supporting repositories stay lightweight so the page remains easy to scan.'
      },
      contact: {
        eyebrow: 'Open to opportunities',
        title: 'Reach out for roles,\ncollaboration, or a quick hello.',
        intro:
          'GitHub Pages does not need a custom backend to feel credible. This page pairs a Google Form entry point with direct contact links.',
        formTitle: 'Google Form Placeholder',
        formBody:
          'The current button points to the Google Forms home page. Replace `formUrl` with your published form URL before launch.',
        formButton: 'Open Google Form',
        directTitle: 'Direct Links',
        directIntro: 'Fast paths for recruiters, hiring managers, and collaborators.',
        availabilityTitle: 'Availability',
        availabilityBody: 'Use this space to state what kind of opportunities you are currently open to.',
        note: 'Email, GitHub, LinkedIn, and resume values should all be swapped with your real details.'
      },
      common: {
        placeholderLabel: 'Placeholder',
        featuredLabel: 'Featured',
        contributionsLabel: 'Contributions',
        techStackLabel: 'Tech stack',
        resultLabel: 'Result placeholder',
        locationLabel: 'Location',
        availabilityLabel: 'Availability',
        contactLabel: 'Contact',
        primaryNavLabel: 'Primary',
        repositoryCta: 'GitHub',
        viewSource: 'Source',
        livePreview: 'Live',
        caseStudy: 'Case Study',
        viewAll: 'View all'
      }
    },
    projects: [
      {
        title: 'Portfolio Experience System',
        summary: 'A placeholder personal site project designed to present strengths and featured work clearly in hiring contexts.',
        role: 'Planning, UI architecture, frontend implementation',
        contributions: [
          'Designed a four-page structure covering landing, about, projects, and contact flows',
          'Implemented bilingual content switching with local persistence',
          'Set up a build flow that works for GitHub Pages subpath deployments'
        ],
        techStack: ['Vite', 'TypeScript', 'CSS', 'GitHub Pages'],
        result: 'Replace this with launch feedback, interview reactions, or any meaningful signal once the site is live.',
        links: [
          { label: 'Live', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/portfolio' }
        ],
        featured: true
      },
      {
        title: 'Product Landing Refresh',
        summary: 'A landing page redesign placeholder focused on clarifying brand tone, message hierarchy, and CTA visibility.',
        role: 'Frontend lead and design handoff partner',
        contributions: [
          'Reworked information density and content priority',
          'Designed a mobile-first card layout and emphasis rhythm',
          'Created a clearer component language for design-to-dev handoff'
        ],
        techStack: ['TypeScript', 'Design systems', 'Responsive CSS'],
        result: 'Swap this with a real user response, maintenance win, or business outcome when you have one.',
        links: [
          { label: 'Case Study', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/landing-refresh' }
        ],
        featured: true
      },
      {
        title: 'Team Dashboard Placeholder',
        summary: 'A placeholder internal tool project focused on helping a team scan complex operational information quickly.',
        role: 'Frontend implementation and information design',
        contributions: [
          'Reframed the layout around the priority of operational data',
          'Separated status-heavy information from action-heavy controls',
          'Turned repeated interface decisions into reusable UI rules'
        ],
        techStack: ['Frontend architecture', 'State modeling', 'CSS systems'],
        result: 'Replace this with evidence of workflow improvement, team feedback, or better decision-making speed.',
        links: [
          { label: 'Live', href: 'https://example.com/' },
          { label: 'Source', href: 'https://github.com/your-username/team-dashboard' }
        ],
        featured: true
      }
    ],
    repositories: [
      {
        name: 'design-notes',
        description: 'A placeholder repository for UI patterns, decision notes, and design experiments',
        href: 'https://github.com/your-username/design-notes'
      },
      {
        name: 'frontend-sandbox',
        description: 'A placeholder repository for interaction experiments and layout studies',
        href: 'https://github.com/your-username/frontend-sandbox'
      },
      {
        name: 'workflow-scripts',
        description: 'A placeholder utility repository for recurring developer workflows',
        href: 'https://github.com/your-username/workflow-scripts'
      }
    ]
  }
};
