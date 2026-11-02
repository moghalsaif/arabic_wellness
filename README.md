# Arabian Life — Arabic Wellness

Bilingual English/Arabic longevity website built with Next.js App Router, TypeScript and Tailwind CSS. Includes research, leadership, corporate/community programmes, and academia pages.

## Development

Requires Node.js 22 and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Checks and production

```sh
pnpm lint
pnpm build
pnpm start
```

Deploy using the Next.js preset on Vercel. The language dropdown switches content and layout direction, and remembers the selection locally. Article data lives in `lib/`; website assets live in `public/images/`. Asset provenance and content coverage are recorded in `ASSET_SOURCES.md` and `CONTENT_COVERAGE.md`.
