# Pordee Studio Website

## Project Overview

Custom portfolio website for **Pordee Studio** — a video production studio in Chiang Mai, Thailand specializing in architectural storytelling through film. Replaces their Wix site with a fast, cinematic, bilingual (TH/EN) platform managed via Sanity CMS.

- **Company**: I WORK THEREFORE I AM CO.,LTD.
- **Tagline**: "CAPTURE WHAT YOU FEEL"
- **Contact**: pordeestudio.official@gmail.com | +66 64 954 6291

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro (static-first, islands architecture) |
| Styling | Tailwind CSS v4 (utility-first, dark theme) |
| CMS | Sanity Studio (free tier, 3 users) |
| Hosting | Cloudflare Pages (static deploy) |
| Language | TypeScript (strict) |
| i18n | Astro built-in i18n (`/en/`, `/th/`) |
| Video | YouTube embeds with custom player UI |
| Contact form | Cloudflare Workers + Resend |
| Animations | CSS + Astro View Transitions API |

## Project Structure

```
src/
  pages/[locale]/           # Locale-based routes (en, th)
    work/[slug].astro       # Project detail
    blog/[slug].astro       # Blog post detail
    about.astro
    contact.astro
  components/
    layout/                 # Header, Footer, Navigation
    portfolio/              # ProjectCard, ProjectGrid, VideoPlayer
    blog/                   # BlogCard, BlogList
    ui/                     # LanguageToggle, Button, etc.
  layouts/
    BaseLayout.astro        # Root layout with View Transitions
  lib/
    sanity.ts               # Sanity client, GROQ queries, image URL builder
  i18n/
    en.json                 # English UI translations
    th.json                 # Thai UI translations
  styles/
    globals.css             # Tailwind base + dark theme defaults
docs/
  PRD.md                    # Product requirements
  basic-information.md      # Wix site reference links
  screenshot/               # Current Wix site screenshots
  logo/logo.png             # Studio logo
plan/
  features/pordee-studio-website/
    pordee-studio-website-plan.md   # 4-phase implementation plan
    pordee-studio-website-tasks.md  # 20 tasks across 5 epics
```

## Commands

```bash
npm run dev          # Start Astro dev server
npm run build        # Production build (static)
npm run preview      # Preview production build
npx sanity dev       # Start Sanity Studio locally (if embedded)
```

## Key Conventions

### Astro Components
- Use `.astro` for static components, React islands only when client interactivity is needed
- All pages live under `src/pages/[locale]/` for i18n routing
- Use `BaseLayout.astro` as the root layout for every page
- Import View Transitions in BaseLayout, not individual pages

### Styling
- Dark theme by default — black/near-black backgrounds (#000, #0a0a0a, #111)
- Tailwind CSS v4 utilities preferred over custom CSS
- Mobile-first responsive: base styles for mobile, `md:` for tablet, `lg:` for desktop
- Cinematic feel: generous spacing, clean sans-serif typography, minimal chrome

### Sanity CMS
- All content fields are bilingual: `{ en: string, th: string }`
- Use GROQ for queries, never the GraphQL API
- Image URLs via `@sanity/image-url` builder
- Sanity client config lives in `src/lib/sanity.ts`
- Content model: Project, BlogPost, SiteSettings (singleton)

### i18n
- Two locales: `en` (default), `th`
- Static UI strings in `src/i18n/{locale}.json`
- CMS content uses bilingual fields, selected by current locale
- Language toggle preserves current page path

### TypeScript
- Strict mode enabled
- Type all Sanity query responses
- Prefer interfaces over type aliases for object shapes

### Performance Targets
- Lighthouse > 90 on all pages (Performance, Accessibility, SEO)
- Zero JS shipped by default (Astro static), islands only when needed
- Lazy-load YouTube embeds (facade pattern)
- Optimize images via Sanity CDN transforms

## Environment Variables

```
PUBLIC_SANITY_PROJECT_ID    # Sanity project ID
PUBLIC_SANITY_DATASET       # Sanity dataset (production)
SANITY_API_TOKEN            # Read token for Sanity API
```

Never commit `.env` files. Use `.env.example` as template.

## Documentation

- **PRD**: `docs/PRD.md` — Full requirements, content model, acceptance criteria
- **Plan**: `plan/features/pordee-studio-website/pordee-studio-website-plan.md`
- **Tasks**: `plan/features/pordee-studio-website/pordee-studio-website-tasks.md`
- **Screenshots**: `docs/screenshot/` — Current Wix site for design reference

## Workflow

1. Read the relevant task from `plan/features/pordee-studio-website/pordee-studio-website-tasks.md`
2. Check the implementation plan for phase context
3. Reference `docs/PRD.md` for requirements and content model
4. Reference `docs/screenshot/` for current site design
5. Follow the dependency graph — don't skip ahead
