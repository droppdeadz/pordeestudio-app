# Implementation Plan: Pordee Studio Website

## Summary

Build a custom portfolio website for Pordee Studio using Astro + Sanity CMS + Cloudflare Pages. The site replaces the current Wix portfolio with a fast, cinematic, bilingual (TH/EN) website that the 3-person team can manage via Sanity Studio without coding.

## Prerequisites

- Node.js 20+ installed
- GitHub account and repository created
- Cloudflare account (free tier)
- Sanity account (free tier — supports 3 users)
- YouTube video URLs/IDs for all 12 existing projects
- Pordee Studio logo (available at `docs/logo/logo.png`)
- Project thumbnails (extract from YouTube or Wix)

---

## Implementation Phases

### Phase 1: Foundation (TASK-1, 2, 3, 4, 5) — ~3 days

**Goal**: Working Astro site skeleton with Sanity CMS connected, i18n routing, and deployed to Cloudflare.

**Steps**:
1. Initialize Astro project with TypeScript and Tailwind CSS v4
2. Set up project directory structure:
   ```
   src/
   ├── pages/[locale]/         # All routes under locale prefix
   ├── layouts/BaseLayout.astro
   ├── components/
   ├── lib/sanity.ts
   ├── i18n/en.json, th.json
   └── styles/globals.css
   ```
3. Create Sanity project with schemas (Project, BlogPost, SiteSettings)
4. Configure Astro + Sanity client with GROQ query helpers
5. Set up i18n routing (`/en/`, `/th/`) with language toggle
6. Deploy to Cloudflare Pages, verify basic page renders

**Done when**: Visiting the Cloudflare URL shows a basic dark page with header (logo + nav + language toggle) and footer. Sanity Studio is accessible and schemas are visible.

---

### Phase 2: Core Pages (TASK-6, 7, 8, 9, 10, 11, 12) — ~5 days

**Goal**: All main pages built and rendering content from Sanity.

**Steps**:
1. Build BaseLayout with Header (logo, nav, language toggle, mobile menu) and Footer (tagline, social icons, copyright)
2. Enable Astro View Transitions for smooth page navigation
3. Build Home page: hero section (full-screen dark background with tagline), featured projects grid
4. Build Work page: project grid with year filter tabs, project cards (thumbnail + title + duration)
5. Build Project Detail page: custom YouTube embed player, project info, credits, related projects
6. Build About page: team photo, studio story (bilingual), philosophy
7. Build Contact page: contact info + form (with Cloudflare Workers for email)

**Done when**: All 7 page types render correctly with data from Sanity. Navigation between pages works with smooth transitions. Contact form submits (even if email delivery is configured later).

---

### Phase 3: Content & Blog (TASK-13, 14, 15, 16) — ~3 days

**Goal**: All existing projects migrated to Sanity, blog system working, bilingual content populated.

**Steps**:
1. Build Blog list page with card grid
2. Build Blog post detail page with Portable Text renderer
3. Enter all 12 projects into Sanity with:
   - English titles and descriptions (from Wix site)
   - Thai translations
   - YouTube video URLs
   - Thumbnails
   - Client/architect credits
   - Year and duration metadata
4. Enter Site Settings (studio info, contact details, about text in TH/EN)
5. Create 1-2 sample blog posts for testing
6. Verify all content renders correctly in both languages

**Done when**: All 12 projects display on the Work page with correct videos. Blog page shows sample posts. Both Thai and English versions have complete content.

---

### Phase 4: SEO, Polish & Launch (TASK-17, 18, 19, 20) — ~3 days

**Goal**: Production-ready site with SEO, animations, auto-rebuild, and passing all quality checks.

**Steps**:
1. Add SEO component: dynamic meta tags, Open Graph, JSON-LD structured data
2. Configure sitemap generation and robots.txt
3. Add scroll animations (fade-in on project cards, subtle hover effects)
4. Design polish: typography, spacing, loading states, 404 page
5. Set up Sanity webhook → Cloudflare deploy hook (auto-rebuild on content publish)
6. Run Lighthouse audit, fix any issues below score 90
7. Cross-browser and responsive testing
8. Final end-to-end testing of all features

**Done when**: Lighthouse > 90 on all pages. All acceptance criteria from PRD are met. Sanity webhook triggers rebuild successfully. Site is ready for custom domain pointing.

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| YouTube video IDs not easily extractable from Wix | Medium | Medium | Manually visit each project on Wix, use Playwright to extract video IDs, or check YouTube channel directly |
| Sanity free tier limits (500K API requests/mo) | Low | Medium | Astro builds statically — API is only called at build time, not on every page view. 500K is more than enough |
| Cloudflare Pages build timeout | Low | Low | Astro builds are fast (<30s for small sites). No risk unless hundreds of pages |
| Thai font rendering issues | Medium | Low | Test with common Thai-supporting fonts (Noto Sans Thai, IBM Plex Sans Thai). Include as web fonts |
| Team unfamiliarity with Sanity Studio | Medium | Medium | Create a simple user guide/tutorial for the team. Sanity's UI is intuitive — main actions are "Create", "Edit", "Publish" |
| Contact form spam | Medium | Low | Add Cloudflare Turnstile (free CAPTCHA alternative) to the contact form |

---

## Verification Checklist

### Functionality
- [ ] All 12 project videos play correctly on their detail pages
- [ ] Year filter on Work page shows correct projects per year
- [ ] Language toggle switches all text (UI + content) between Thai and English
- [ ] Contact form submits and email is received at pordeestudio.official@gmail.com
- [ ] Blog posts render with rich text, images, and embedded videos
- [ ] Navigation works: all links go to correct pages
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Related projects section shows relevant projects

### CMS / Admin
- [ ] Sanity Studio loads and all schemas are visible
- [ ] Can create a new Project in Sanity → appears on site after rebuild
- [ ] Can create a new Blog Post in Sanity → appears on blog after rebuild
- [ ] Can edit Site Settings → changes reflect on site
- [ ] Sanity webhook triggers Cloudflare Pages rebuild automatically
- [ ] Media uploads (images) work in Sanity

### Performance & SEO
- [ ] Lighthouse Performance score > 90 on Home, Work, Project Detail
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse SEO score > 90
- [ ] Open Graph tags render correctly (test with Facebook Sharing Debugger)
- [ ] Sitemap.xml generated and accessible
- [ ] robots.txt present and correct

### Responsive & Cross-Browser
- [ ] Mobile (375px): all pages usable, hamburger menu works
- [ ] Tablet (768px): grid adjusts to 2 columns
- [ ] Desktop (1440px): full layout with proper spacing
- [ ] Chrome, Safari, Firefox: no visual bugs
- [ ] View Transitions work smoothly between pages

### Launch
- [ ] No Wix branding anywhere on the site
- [ ] Custom domain configured (if available)
- [ ] HTTPS enabled (automatic on Cloudflare)
- [ ] 404 page styled consistently with site design
- [ ] All social media links open in new tab and point to correct profiles
