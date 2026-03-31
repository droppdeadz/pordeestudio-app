# Pordee Studio

Custom portfolio website for **Pordee Studio** — a video production studio in Chiang Mai, Thailand, specializing in architectural storytelling through film.

> "CAPTURE WHAT YOU FEEL"

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| CMS | [Sanity Studio](https://www.sanity.io) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| Language | TypeScript |

## Features

- Dark cinematic portfolio showcasing architectural films
- Bilingual support (Thai / English)
- Year-based project filtering
- YouTube video integration with custom player UI
- Blog / news section
- Contact form
- Content managed via Sanity Studio (no code required)
- Astro View Transitions for smooth page navigation

## Getting Started

### Prerequisites

- Node.js 20+
- A Sanity account ([sanity.io](https://www.sanity.io))

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
  pages/[locale]/        # Locale-based routes (en, th)
    work/                # Portfolio pages
    blog/                # Blog pages
    about/
    contact/
  components/
    layout/              # Header, Footer, Navigation
    portfolio/           # ProjectCard, ProjectGrid, VideoPlayer
    blog/                # BlogCard, BlogList
    ui/                  # LanguageToggle, Button, etc.
  layouts/
    BaseLayout.astro
  lib/
    sanity.ts            # Sanity client and query helpers
  i18n/
    en.json              # English translations
    th.json              # Thai translations
  styles/
    globals.css
public/
  images/
  fonts/
docs/
  PRD.md                 # Product Requirements Document
  basic-information.md   # Original site reference
  screenshot/            # Current Wix site screenshots
  logo/                  # Studio logo assets
```

## Documentation

- [PRD](docs/PRD.md) — Full product requirements, content model, and acceptance criteria
- [Task Breakdown](plan/features/pordee-studio-website/pordee-studio-website-tasks.md) — 20 tasks across 5 epics
- [Implementation Plan](plan/features/pordee-studio-website/pordee-studio-website-plan.md) — 4-phase rollout plan

## License

Private. All rights reserved by I WORK THEREFORE I AM CO.,LTD.
