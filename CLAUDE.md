# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo has three independent parts at the top level:

- `src/` — the Next.js corporate site (all app work happens here; see below).
- `terraform/` — AWS infrastructure (S3 + CloudFront + ACM + Route53 for the static site; Lambda + SES for the contact form).
- `lambda/contact-form/` — Python handler for the contact form backend (see below).

There is no root `package.json` — always `cd src` before running any npm/node command.

## Commands (run from `src/`)

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # static export build -> src/out/ (next.config.ts sets output: "export")
npm run start    # serve a production build (next start) — not used for real deploys, see below
npm run lint     # eslint (flat config in eslint.config.mjs, next/core-web-vitals + next/typescript)
npx tsc --noEmit -p tsconfig.json   # typecheck only, no build
```

There is no test suite/runner configured in this project.

## Deployment (manual, no CI)

Deploys are done by hand from a local shell, described in `docs/deploy.md`:

```bash
cd terraform && terraform init && terraform apply   # provision infra (one-time / on infra change)

cd src
npm run build
aws s3 sync out/ s3://actipex.com --delete
aws cloudfront create-invalidation --distribution-id EK2RJ0VBWF9MM --paths "/*"
```

Because `next.config.ts` sets `output: "export"` and `images.unoptimized: true`, the app must stay compatible with static export — no server components that require a Node runtime, no `next/image` optimization API, no API routes/route handlers.

`terraform destroy` tears down the CloudFront/S3/ACM/Route53 stack (`terraform/main.tf`). Treat this as destructive and only run it if explicitly asked.

## Architecture

Standard Next.js App Router site, all client-rendered (`"use client"` on every page/component), styled with Tailwind v4 (via `@tailwindcss/postcss`) and animated with `framer-motion`.

- `src/app/` — one route per page: `/` (page.tsx), `/about`, `/services`, `/contact`. Each page is a large, self-contained component with inline Tailwind classes and hand-rolled SVG/motion graphics; there's minimal shared layout beyond `Header`.
- `src/app/layout.tsx` — root layout; renders `<Header />` + page content, sets metadata from `siteConfig`.
- `src/components/Header.tsx` — sticky nav, used globally via the root layout.
- `src/components/Footer.tsx` — **not used anywhere**. Every page currently hand-rolls its own `<footer>` inline instead of importing this component. If asked to change the footer, either update it in every page or wire up `Footer.tsx` and remove the duplicates — don't assume editing `Footer.tsx` alone changes what users see.
- `site.config.ts` (repo root of `src/`, i.e. `src/site.config.ts`) — single source of truth for company name/legal name/contact info, switched by the `entityType` flag (`"sole_proprietor" | "corporation"`). Per the file's own header comment, flipping to a corporation is meant to be a one-line change here with no other files touched — don't hardcode company/legal name strings elsewhere.
- `src/lib/useSiteConfig.ts` — thin wrapper re-exporting `site.config.ts` as `siteConfig` with an added `logoUrl`. Despite the `use`-prefixed name it is not a React hook, just a plain import.
- Path alias `@/*` → `src/src/*` (see `tsconfig.json`), e.g. `@/lib/useSiteConfig`, `@/components/Header`.
- The contact form (`src/app/contact/page.tsx`) posts JSON to a Lambda Function URL (`NEXT_PUBLIC_CONTACT_API_URL`, see `src/.env.local`) that sends a notification email via SES. Backend: `lambda/contact-form/handler.py`, provisioned by `terraform/contact_lambda.tf`. `terraform apply` redeploys the Lambda code (zipped via `data.archive_file`), so a handler.py change needs a `terraform apply`, not just a site rebuild.
  - CORS for the Function URL is controlled *only* by the `cors` block in `terraform/contact_lambda.tf` — AWS auto-injects `Access-Control-Allow-Origin` etc. into every response (preflight and actual). Do **not** add CORS headers in `handler.py` too; a prior bug did this and browsers rejected the resulting duplicate header as a CORS violation (fetch failed with a generic network error, masking the real cause).

## Content notes

- Site copy is Japanese (`<html lang="ja">`); primary brand color is red-600 (`#dc2626`/`#ef4444`) on slate backgrounds.
- Business domain: DX/AI consulting for the 軽貨物 (light-duty freight/courier) industry in Japan.
