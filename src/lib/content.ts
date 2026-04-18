import type { Locale, LocaleBundle, PageId } from './types';

export const DEFAULT_LOCALE: Locale = 'ko';

export const PAGE_HREFS: Record<PageId, string> = {
  home: './index.html',
  about: './about.html',
  projects: './projects.html',
  contact: './contact.html'
};

const koBundle: LocaleBundle = {
  site: {
    name: 'YOUR NAME',
    role: '프론트엔드에서 시작해 제품 경험까지 챙기는 개발자',
    location: '서울 기반 / 리모트 협업 가능',
    availability: '정규직, 프리랜스, 재미있는 협업 제안 모두 열어두고 있어요.',
    email: 'hello@yourdomain.dev',
    formUrl: 'https://docs.google.com/forms/',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/your-username' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile/' },
      { label: '이메일', href: 'mailto:hello@yourdomain.dev' }
    ],
    resumeLink: { label: '이력서 PDF', href: 'https://example.com/resume.pdf' },
    seo: {
      siteName: 'YOUR NAME 포트폴리오',
      defaultTitle: 'YOUR NAME | 개발자 포트폴리오',
      defaultDescription: '한국어 중심으로 구성한 개발자 포트폴리오 템플릿입니다.',
      ogImage: '/og-image.svg'
    }
  },
  copy: {
    meta: {
      home: {
        title: 'YOUR NAME | 개발자 포트폴리오',
        description: '처음 보는 사람도 금방 감을 잡을 수 있게 정리한 개발자 포트폴리오'
      },
      about: {
        title: '소개 | YOUR NAME',
        description: '어떤 방식으로 만들고, 어떻게 일하는지 보여주는 소개 페이지'
      },
      projects: {
        title: '프로젝트 | YOUR NAME',
        description: '대표 프로젝트와 추가 저장소를 한 번에 볼 수 있는 페이지'
      },
      contact: {
        title: '연락 | YOUR NAME',
        description: '채용 제안과 협업 문의를 편하게 받을 수 있는 연락 페이지'
      }
    },
    nav: {
      skipToContent: '본문으로 바로 가기',
      home: '첫 화면',
      about: '소개',
      projects: '프로젝트',
      contact: '연락',
      languageLabel: '언어'
    },
    footer: {
      title: '지금은 샘플 문구지만, 흐름은 바로 실전에 써도 괜찮게 잡아뒀습니다.',
      body: '이름, 링크, 프로젝트 설명만 내 정보로 바꾸면 바로 포트폴리오처럼 쓸 수 있어요.',
      cta: '연락하기'
    },
    home: {
      eyebrow: '개발자 포트폴리오',
      title: '보기 좋고,\n이해도 잘 되는 화면을 만듭니다',
      intro:
        '처음 들어온 사람도 금방 감을 잡을 수 있게, 소개부터 프로젝트, 연락 방법까지 한 흐름으로 정리한 포트폴리오예요. 지금은 샘플 카피가 들어가 있지만 구조는 바로 가져다 써도 되게 만들었습니다.',
      primaryCta: '대표 프로젝트 보기',
      secondaryCta: '소개 먼저 보기',
      focusTitle: '이런 강점을 보여주고 싶었어요',
      focusIntro:
        '화면만 만드는 개발자가 아니라, 제품의 맥락과 팀의 흐름까지 같이 보는 사람이라는 인상을 주는 구성이에요.',
      focusAreas: [
        {
          title: '제품 감각',
          description:
            '예쁜 화면에서 끝나지 않고, 이 페이지가 왜 필요한지와 사용자가 어디서 막힐지를 같이 생각합니다.'
        },
        {
          title: '프론트엔드 완성도',
          description:
            '가독성, 접근성, 성능, 유지보수성을 같이 챙기면서 오래 쓰기 좋은 UI를 만드는 편이에요.'
        },
        {
          title: '협업 커뮤니케이션',
          description:
            '기획, 디자인, 개발 사이에서 말이 꼬이지 않도록 결정을 정리하고 다음 액션까지 연결하는 걸 잘합니다.'
        }
      ],
      previewTitle: '대표 프로젝트',
      previewIntro:
        '링크만 모아두지 않고, 어떤 문제를 맡았고 어떻게 풀었는지 읽히도록 카드 흐름을 잡았습니다.',
      note: '성과 문구는 일부러 과장하지 않았어요. 실제 공개 전에는 본인 경험으로 바꾸기만 하면 됩니다.'
    },
    about: {
      eyebrow: '어떤 사람인지',
      title: '무엇을 만들었는지보다,\n어떻게 일하는지가 더 오래 남습니다',
      intro:
        '짧은 소개, 경력 흐름, 주로 다루는 기술, 일하는 방식까지 한 번에 읽히도록 구성한 페이지입니다.',
      storyTitle: '짧게 소개하면',
      story: [
        '저는 화면 하나를 만들 때도 그냥 기능만 올리는 편은 아니에요. 어떤 정보가 먼저 보여야 하는지, 사용자가 어디서 망설일지, 팀이 이 화면을 왜 중요하게 봐야 하는지까지 같이 정리하는 쪽에 더 가깝습니다.',
        '지금 들어가 있는 문구는 전부 샘플이라 사실처럼 포장하지 않았어요. 대신 나중에 내 이야기로 자연스럽게 바꿔 넣기 쉽도록 자리와 톤을 미리 잡아둔 상태입니다.'
      ],
      timelineTitle: '경험과 흐름',
      timeline: [
        {
          period: '지금 - 교체',
          title: '현재 역할 자리',
          body: '회사명, 팀, 맡은 역할, 가장 오래 붙잡고 있던 문제를 두세 줄 정도로 바꿔 넣으면 좋습니다.'
        },
        {
          period: '이전 - 교체',
          title: '이전 경험 자리',
          body: '프로젝트 맥락과 내가 맡은 범위, 그때 배운 점을 짧고 또렷하게 적는 용도로 잡아뒀습니다.'
        },
        {
          period: '학습/전환 - 교체',
          title: '학습 과정 자리',
          body: '전공, 부트캠프, 커리어 전환 계기 중에서 지금의 방향성을 보여주는 내용만 남기면 충분합니다.'
        }
      ],
      skillsTitle: '주로 다루는 것들',
      skillsIntro: '기술을 줄세우기보다, 실제로 어디에 강한지 보이도록 묶어서 보여줍니다.',
      skillGroups: [
        {
          title: '프론트엔드',
          items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React 또는 Vue 자리']
        },
        {
          title: '제품과 전달',
          items: ['디자인 핸드오프', '접근성', '성능 개선', '문서화']
        },
        {
          title: '협업',
          items: ['협업 커뮤니케이션', '코드 리뷰', '기획 정리', '멘토링']
        }
      ],
      principlesTitle: '일할 때 중요하게 보는 것',
      principles: [
        {
          title: '먼저 중요한 것부터',
          description:
            '보기 좋은 것보다 먼저 풀어야 할 문제가 뭔지 정하고, 그다음에 완성도를 더하는 흐름을 선호합니다.'
        },
        {
          title: '읽히는 코드',
          description:
            '시간이 지난 뒤에도 맥락이 남도록 구조와 이름을 정리하는 편이라, 협업할 때 유지가 쉬워집니다.'
        },
        {
          title: '결정이 남는 협업',
          description:
            '회의에서 끝내지 않고, 무엇을 왜 그렇게 정했는지 다음 사람이 바로 이어받을 수 있게 정리합니다.'
        }
      ]
    },
    projects: {
      eyebrow: '선별한 작업들',
      title: '대표 작업은 조금 더 자세히,\n나머지는 가볍게 훑을 수 있게',
      intro:
        '채용용 포트폴리오에서는 저장소를 전부 펼쳐놓기보다, 보여주고 싶은 작업 몇 개를 제대로 설명하는 편이 훨씬 낫더라고요.',
      featuredTitle: '대표 작업 3개',
      featuredIntro:
        '각 카드에 역할, 기여한 부분, 사용한 기술, 결과를 적을 자리를 함께 넣어 포트폴리오다운 흐름을 만들었습니다.',
      repositoryTitle: '추가로 볼 만한 저장소',
      repositoryIntro: '깃허브에 있는 다른 작업은 부담 없이 훑을 수 있도록 리스트로 정리했습니다.'
    },
    contact: {
      eyebrow: '편하게 연락 주세요',
      title: '같이 만들고 싶은 일이 있다면\n가볍게 말 걸어 주세요',
      intro:
        'GitHub Pages에서도 충분히 깔끔한 연락 흐름을 만들 수 있어서, 폼 링크와 직접 연락 링크를 함께 두었습니다.',
      formTitle: '문의 폼 자리',
      formBody:
        '지금 버튼은 Google Forms 기본 주소로 연결돼 있어요. 실제 배포 전에는 본인 폼 링크로 바꾸면 바로 사용할 수 있습니다.',
      formButton: '문의 폼 열기',
      directTitle: '바로 연락할 수 있는 곳',
      directIntro: '채용 담당자든 협업 제안이든, 편한 채널로 바로 들어올 수 있게 정리했습니다.',
      availabilityTitle: '지금 열어둔 기회',
      availabilityBody: '정규직, 프리랜스, 짧은 협업 중 어떤 제안을 받고 싶은지 한 줄로 적어 두면 좋습니다.',
      note: '이메일, LinkedIn, 이력서 링크는 공개 전에 꼭 실제 값으로 바꿔 주세요.'
    },
    common: {
      placeholderLabel: '샘플 정보',
      featuredLabel: '대표 작업',
      contributionsLabel: '제가 맡은 일',
      techStackLabel: '쓴 기술',
      resultLabel: '결과 메모 자리',
      locationLabel: '활동 기반',
      availabilityLabel: '열어둔 기회',
      contactLabel: '연락',
      primaryNavLabel: '주요 메뉴',
      repositoryCta: '보러 가기',
      viewSource: '코드 보기',
      livePreview: '사이트 보기',
      caseStudy: '설명 보기',
      viewAll: '프로젝트 전체 보기'
    }
  },
  projects: [
    {
      title: '포트폴리오 사이트 리디자인',
      summary:
        '처음 방문한 사람도 빠르게 감을 잡을 수 있게 정보 구조, 타이포, CTA 흐름을 다시 잡은 개인 사이트 샘플 프로젝트입니다.',
      role: '기획, UI 구조 설계, 프론트엔드 구현',
      contributions: [
        '첫 화면, 소개, 프로젝트, 연락 페이지를 한 흐름으로 묶는 멀티페이지 구조 설계',
        '한국어 중심 카피와 카드 기반 레이아웃으로 읽기 흐름 재정리',
        'GitHub Pages 하위 경로 배포를 고려한 빌드 설정과 배포 자동화 구성'
      ],
      techStack: ['Vite', 'TypeScript', 'CSS', 'GitHub Pages'],
      result: '실제 공개 후에는 포트폴리오 피드백, 인터뷰 반응, 문의 전환 같은 결과를 여기에 적어 넣으면 됩니다.',
      links: [
        { label: '사이트 보기', href: 'https://example.com/' },
        { label: '코드 보기', href: 'https://github.com/your-username/portfolio' }
      ],
      featured: true
    },
    {
      title: '랜딩 페이지 개선',
      summary:
        '브랜드 메시지와 CTA 위치를 다시 잡아, 처음 보는 사람도 핵심을 빠르게 이해할 수 있게 만든 랜딩 페이지 샘플입니다.',
      role: '프론트엔드 리드, 디자인 협업',
      contributions: [
        '콘텐츠 우선순위를 다시 정리해 첫 화면의 정보 밀도 조절',
        '모바일 우선 레이아웃과 강조 구간 패턴 재설계',
        '디자인 전달 문서를 정리해 구현 기준을 팀과 공유'
      ],
      techStack: ['TypeScript', '반응형 CSS', '디자인 시스템'],
      result: '이 자리에는 실제 사용자 반응, 수정 비용 감소, 전환 개선 같은 결과를 넣어주면 좋습니다.',
      links: [
        { label: '설명 보기', href: 'https://example.com/' },
        { label: '코드 보기', href: 'https://github.com/your-username/landing-refresh' }
      ],
      featured: true
    },
    {
      title: '운영 대시보드 정리',
      summary:
        '복잡한 운영 정보를 한눈에 훑을 수 있도록 카드 구조와 상태 표시 방식을 정리한 내부 도구 샘플 프로젝트입니다.',
      role: '프론트엔드 구현, 정보 설계',
      contributions: [
        '운영 데이터 우선순위에 맞춰 카드와 패널 배치 재구성',
        '상태 정보와 액션 요소를 분리해 읽는 속도 개선',
        '반복되는 인터페이스 결정을 재사용 가능한 규칙으로 정리'
      ],
      techStack: ['프론트엔드 아키텍처', '상태 모델링', 'CSS 시스템'],
      result: '도입 후 팀이 무엇을 편해했는지, 어떤 흐름이 빨라졌는지를 실제 사례로 바꿔 적으면 됩니다.',
      links: [
        { label: '사이트 보기', href: 'https://example.com/' },
        { label: '코드 보기', href: 'https://github.com/your-username/team-dashboard' }
      ],
      featured: true
    }
  ],
  repositories: [
    {
      name: 'design-notes',
      description: 'UI 패턴, 의사결정 메모, 실험 기록을 정리해 두는 저장소 샘플',
      href: 'https://github.com/your-username/design-notes'
    },
    {
      name: 'frontend-sandbox',
      description: '작은 인터랙션과 레이아웃 아이디어를 빠르게 실험하는 저장소 샘플',
      href: 'https://github.com/your-username/frontend-sandbox'
    },
    {
      name: 'workflow-scripts',
      description: '반복 작업을 줄이기 위해 만든 개발용 유틸 스크립트 저장소 샘플',
      href: 'https://github.com/your-username/workflow-scripts'
    }
  ]
};

export const content: Record<Locale, LocaleBundle> = {
  ko: koBundle,
  en: koBundle
};
