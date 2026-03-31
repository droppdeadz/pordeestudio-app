# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for **Pordee Studio** — a video production studio in Chiang Mai, Thailand. Replaces their Wix site with a fast, cinematic, bilingual (TH/EN) platform. Static-first Astro site with Sanity CMS content, deployed to Cloudflare Pages.

## Tech Stack

Astro (static/islands) · Tailwind CSS v4 · Sanity CMS (GROQ only) · Cloudflare Pages · TypeScript (strict) · Astro i18n (`/en/`, `/th/`) · YouTube embeds · Cloudflare Workers + Resend (contact form) · Astro View Transitions

## Commands

```bash
npm run dev          # Astro dev server
npm run build        # Production build (static output to dist/)
npm run preview      # Preview production build
npx sanity dev       # Sanity Studio locally (if embedded)
```

## Architecture

### Routing & i18n
All pages live under `src/pages/[locale]/` — Astro's built-in i18n creates `/en/` and `/th/` prefixed routes. Static UI strings go in `src/i18n/{locale}.json`; CMS content uses bilingual fields `{ en: string, th: string }` selected by current locale.

### Data Flow
Sanity CMS → GROQ queries in `src/lib/sanity.ts` → fetched in Astro frontmatter (server-side at build) → rendered as static HTML. No client-side data fetching. Images served via `@sanity/image-url` builder with responsive transforms.

### Layout System
`BaseLayout.astro` wraps every page — owns `<html>`, `<head>`, View Transitions, fonts, and meta. Pages extract `const { locale } = Astro.params` and pass it down. React islands (`client:load`/`client:visible`) only when JS interactivity is genuinely needed.

### Content Model (Sanity)
Three document types: **Project** (portfolio work), **BlogPost**, **SiteSettings** (singleton). All user-facing text fields are bilingual objects. Slugs auto-generate from English title.

### Styling Approach
Dark cinematic theme by default (black/near-black backgrounds). Tailwind v4 configured via CSS `@theme`, not `tailwind.config.js`. Mobile-first responsive. Thai-supporting fonts alongside main sans-serif.

## Environment Variables

```
PUBLIC_SANITY_PROJECT_ID    # Sanity project ID (client-safe)
PUBLIC_SANITY_DATASET       # Sanity dataset (client-safe)
SANITY_API_TOKEN            # Read token (server/build only)
```

## Task Workflow

1. Read the task from `plan/features/pordee-studio-website/pordee-studio-website-tasks.md`
2. Check phase context in `plan/features/pordee-studio-website/pordee-studio-website-plan.md`
3. Reference `docs/PRD.md` for requirements and content model
4. Reference `docs/screenshot/` for current Wix site design
5. Follow the dependency graph — don't skip ahead

## Key Documentation

- **PRD**: `docs/PRD.md` — requirements, content model, acceptance criteria
- **Plan**: `plan/features/pordee-studio-website/pordee-studio-website-plan.md` — 4-phase rollout
- **Tasks**: `plan/features/pordee-studio-website/pordee-studio-website-tasks.md` — 20 tasks, 5 epics
- **Design reference**: `docs/screenshot/` — current Wix site screenshots
- **Logo**: `docs/logo/logo.png`
