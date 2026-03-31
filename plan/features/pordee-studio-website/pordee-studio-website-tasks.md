# Task Breakdown: Pordee Studio Website

## Epics

### Epic 1: Project Setup & Infrastructure
Set up the Astro project, Sanity CMS, Cloudflare Pages deployment, and i18n routing.

**Tasks:**

- [ ] TASK-1: Initialize Astro project with Tailwind CSS v4
  - **Description**: Create new Astro project, configure Tailwind v4 with dark theme defaults, set up project structure
  - **Complexity**: S
  - **Dependencies**: none
  - **Subtasks**:
    - [ ] `npm create astro@latest` with TypeScript
    - [ ] Install and configure Tailwind CSS v4
    - [ ] Set up dark theme base styles (globals.css)
    - [ ] Configure project directory structure (`src/pages`, `src/components`, `src/layouts`, `src/lib`)

- [ ] TASK-2: Set up Sanity Studio project
  - **Description**: Create Sanity project, define schemas for Project, Blog Post, and Site Settings
  - **Complexity**: M
  - **Dependencies**: none
  - **Subtasks**:
    - [ ] Create Sanity project via `npm create sanity@latest`
    - [ ] Define Project schema (bilingual fields, image, video URL, year, etc.)
    - [ ] Define Blog Post schema (bilingual, portable text, thumbnail)
    - [ ] Define Site Settings singleton schema
    - [ ] Deploy Sanity Studio

- [ ] TASK-3: Configure Astro + Sanity integration
  - **Description**: Install `@sanity/client` and `@sanity/image-url`, set up data fetching utilities
  - **Complexity**: S
  - **Dependencies**: TASK-1, TASK-2
  - **Subtasks**:
    - [ ] Install Sanity client packages
    - [ ] Create `src/lib/sanity.ts` with client config and query helpers
    - [ ] Create image URL builder utility
    - [ ] Set up environment variables for Sanity project ID and dataset

- [ ] TASK-4: Configure i18n routing
  - **Description**: Set up Astro's built-in i18n with `/en/` and `/th/` locale prefixes, language toggle component
  - **Complexity**: M
  - **Dependencies**: TASK-1
  - **Subtasks**:
    - [ ] Configure `astro.config.mjs` with i18n settings (defaultLocale: 'en', locales: ['en', 'th'])
    - [ ] Create translation JSON files (`src/i18n/en.json`, `src/i18n/th.json`)
    - [ ] Create `useTranslation` helper utility
    - [ ] Create LanguageToggle component

- [ ] TASK-5: Deploy to Cloudflare Pages
  - **Description**: Connect GitHub repo to Cloudflare Pages, configure build settings, set environment variables
  - **Complexity**: S
  - **Dependencies**: TASK-1
  - **Subtasks**:
    - [ ] Create Cloudflare Pages project
    - [ ] Configure build command (`astro build`) and output directory (`dist`)
    - [ ] Set environment variables (Sanity project ID, dataset, token)
    - [ ] Verify deployment works

---

### Epic 2: Layout & Navigation
Build the shared layout components: header, footer, navigation, and page transitions.

**Tasks:**

- [ ] TASK-6: Create base layout with header and footer
  - **Description**: Build the main layout with dark theme, Pordee Studio logo, navigation links, footer with tagline and social links
  - **Complexity**: M
  - **Dependencies**: TASK-1, TASK-4
  - **Subtasks**:
    - [ ] Create `BaseLayout.astro` with `<html>`, `<head>` (meta, fonts), and `<body>`
    - [ ] Build Header component: logo (left), nav links (right), language toggle
    - [ ] Build Footer component: tagline, description, social icons, copyright
    - [ ] Mobile hamburger menu
    - [ ] Import Pordee Studio logo from `docs/logo/logo.png`

- [ ] TASK-7: Configure Astro View Transitions
  - **Description**: Enable smooth page transitions between pages using Astro's built-in View Transitions API
  - **Complexity**: S
  - **Dependencies**: TASK-6
  - **Subtasks**:
    - [ ] Add `<ViewTransitions />` to BaseLayout
    - [ ] Configure transition animations (fade, slide)
    - [ ] Test transitions between all page routes

---

### Epic 3: Core Pages
Build all public-facing pages with content from Sanity.

**Tasks:**

- [ ] TASK-8: Build Home page
  - **Description**: Hero section with full-screen video/image, studio tagline, and featured projects grid
  - **Complexity**: M
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Hero section: full-screen background (video or image) with overlay text "CAPTURE WHAT YOU FEEL"
    - [ ] Featured projects section: grid of projects marked as `featured` in Sanity
    - [ ] Fetch featured projects from Sanity via GROQ query
    - [ ] Responsive layout (1 col mobile, 2 col tablet, 3 col desktop)

- [ ] TASK-9: Build Work (Portfolio) page
  - **Description**: Project grid with year tabs/filter, clicking a project goes to detail page
  - **Complexity**: M
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Year filter tabs (dynamically generated from available years)
    - [ ] Project grid: thumbnail, title, duration badge, short description
    - [ ] Fetch all projects from Sanity, group by year
    - [ ] Client-side filtering with Astro islands (React or vanilla JS)

- [ ] TASK-10: Build Project Detail page
  - **Description**: Full project page with YouTube video player, description, credits, related projects
  - **Complexity**: L
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Custom YouTube player component with dark overlay UI
    - [ ] Project info: title, description (bilingual), year, duration
    - [ ] Credits section: client, architect/stylist
    - [ ] Related projects grid (same year or similar tags)
    - [ ] Dynamic routes: `[locale]/work/[slug].astro`

- [ ] TASK-11: Build About page
  - **Description**: Studio story, team photo, philosophy text — all from Sanity Site Settings
  - **Complexity**: S
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Team photo section (from Sanity or static)
    - [ ] About text (bilingual, from Sanity Site Settings)
    - [ ] Philosophy quote section

- [ ] TASK-12: Build Contact page
  - **Description**: Contact info display + form that sends email
  - **Complexity**: M
  - **Dependencies**: TASK-5, TASK-6
  - **Subtasks**:
    - [ ] Contact info: email (mailto link), phone, social links
    - [ ] Contact form: name, email, subject, message fields
    - [ ] Form validation (client-side)
    - [ ] Server-side email sending via Cloudflare Workers + Resend (or similar)
    - [ ] Success/error feedback UI

- [ ] TASK-13: Build Blog list page
  - **Description**: Blog posts list with thumbnails, titles, dates, excerpts
  - **Complexity**: S
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Blog post card: thumbnail, title, date, excerpt
    - [ ] Responsive grid layout
    - [ ] Fetch blog posts from Sanity, sorted by date

- [ ] TASK-14: Build Blog post detail page
  - **Description**: Individual blog post with Sanity Portable Text rendering
  - **Complexity**: M
  - **Dependencies**: TASK-3, TASK-6
  - **Subtasks**:
    - [ ] Portable Text renderer for Sanity rich content
    - [ ] Support embedded images and YouTube videos in blog body
    - [ ] Post header: title, date, tags
    - [ ] Dynamic routes: `[locale]/blog/[slug].astro`

---

### Epic 4: Content Migration
Migrate all 12 existing projects from Wix to Sanity.

**Tasks:**

- [ ] TASK-15: Populate Sanity with existing projects
  - **Description**: Enter all 12 projects into Sanity Studio with titles, descriptions, YouTube URLs, thumbnails, and metadata
  - **Complexity**: M
  - **Dependencies**: TASK-2
  - **Subtasks**:
    - [ ] Extract YouTube video IDs from Wix embedded player
    - [ ] Download/screenshot project thumbnails or use YouTube thumbnails
    - [ ] Enter all 2023 projects (5) with bilingual content
    - [ ] Enter all 2024 projects (6) with bilingual content
    - [ ] Enter all 2025 projects (1) with bilingual content
    - [ ] Enter Site Settings (studio info, contact, about text)

- [ ] TASK-16: Create sample blog posts
  - **Description**: Add 1-2 sample blog posts in Sanity for testing
  - **Complexity**: XS
  - **Dependencies**: TASK-2

---

### Epic 5: SEO & Polish
Final optimization, SEO, and design polish.

**Tasks:**

- [ ] TASK-17: SEO optimization
  - **Description**: Meta tags, Open Graph, structured data, sitemap, robots.txt
  - **Complexity**: M
  - **Dependencies**: TASK-8 through TASK-14
  - **Subtasks**:
    - [ ] Create SEO component for dynamic meta tags and OG per page
    - [ ] Add JSON-LD structured data (Organization, VideoObject)
    - [ ] Configure `@astrojs/sitemap` for automatic sitemap generation
    - [ ] Add robots.txt
    - [ ] Verify OG tags render correctly for social sharing

- [ ] TASK-18: Scroll animations and design polish
  - **Description**: Add subtle entrance animations, hover effects, and overall design refinement
  - **Complexity**: M
  - **Dependencies**: TASK-8 through TASK-14
  - **Subtasks**:
    - [ ] Scroll-triggered fade-in animations on project cards
    - [ ] Hover effects on project thumbnails (scale, overlay)
    - [ ] Typography refinement and spacing consistency
    - [ ] Loading states for Sanity content
    - [ ] 404 page

- [ ] TASK-19: Set up Sanity webhook for auto-rebuild
  - **Description**: Configure Sanity webhook to trigger Cloudflare Pages rebuild when content is published
  - **Complexity**: S
  - **Dependencies**: TASK-5, TASK-2
  - **Subtasks**:
    - [ ] Create Cloudflare deploy hook URL
    - [ ] Configure Sanity webhook to call deploy hook on publish
    - [ ] Test: edit content in Sanity, verify site rebuilds

- [ ] TASK-20: Performance audit and final testing
  - **Description**: Run Lighthouse, test all pages, responsive testing, browser testing
  - **Complexity**: M
  - **Dependencies**: all previous tasks
  - **Subtasks**:
    - [ ] Lighthouse audit on all pages (target > 90)
    - [ ] Mobile responsive testing (375px, 768px, 1024px, 1440px)
    - [ ] Cross-browser testing (Chrome, Safari, Firefox)
    - [ ] Test bilingual toggle on every page
    - [ ] Test contact form end-to-end
    - [ ] Verify all 12 project videos play correctly

---

## Dependency Graph

```
TASK-1 (Astro setup) ─────┬──> TASK-3 (Sanity integration) ──> TASK-8-14 (Pages)
                           ├──> TASK-4 (i18n) ──> TASK-6 (Layout) ──> TASK-7 (Transitions)
                           └──> TASK-5 (Cloudflare) ──> TASK-19 (Webhook)

TASK-2 (Sanity schemas) ──┬──> TASK-3 (Sanity integration)
                           ├──> TASK-15 (Content migration)
                           └──> TASK-19 (Webhook)

TASK-6 (Layout) ──────────┬──> TASK-8 (Home)
                           ├──> TASK-9 (Work)
                           ├──> TASK-10 (Project Detail)
                           ├──> TASK-11 (About)
                           ├──> TASK-12 (Contact)
                           ├──> TASK-13 (Blog list)
                           └──> TASK-14 (Blog detail)

TASK-8-14 (All pages) ────┬──> TASK-17 (SEO)
                           ├──> TASK-18 (Polish)
                           └──> TASK-20 (Final testing)

Parallel tracks:
- TASK-1 + TASK-2 can run in parallel (Astro setup + Sanity setup)
- TASK-4 + TASK-5 can run in parallel after TASK-1
- TASK-15 can start as soon as TASK-2 is done (independent of frontend)
- TASK-8 through TASK-14 can largely run in parallel once TASK-3 + TASK-6 are done
```
