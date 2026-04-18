# GitHub Pages Developer Portfolio

Vite + Vanilla TypeScript + CSS로 만든 GitHub Pages용 멀티페이지 개발자 포트폴리오 템플릿입니다.

## Included

- `Home`, `About`, `Projects`, `Contact` 4개 페이지
- 한국어/영어 전역 토글과 `localStorage` 기반 언어 유지
- 정적 데이터 기반 프로젝트 큐레이션
- GitHub Pages 하위 경로 대응 Vite 설정
- GitHub Actions Pages 배포 워크플로

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

GitHub Actions에서는 `GITHUB_PAGES=true` 환경변수를 사용해 저장소 이름 기준 `base` 경로를 자동 계산합니다.

## Customize

주요 콘텐츠는 아래 파일에서 한 번에 수정할 수 있습니다.

- `src/lib/content.ts`
- `src/styles.css`

교체가 필요한 값들은 다음처럼 명확한 placeholder로 들어 있습니다.

- `YOUR NAME`
- `https://github.com/your-username`
- `https://docs.google.com/forms/`
- `https://example.com/resume.pdf`

## Deploy

1. GitHub 저장소에 코드를 푸시합니다.
2. 저장소 설정에서 `Pages` 소스를 `GitHub Actions`로 둡니다.
3. `.github/workflows/deploy.yml`이 빌드 후 자동 배포합니다.

