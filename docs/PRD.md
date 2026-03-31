# PRD: Pordee Studio — Custom Portfolio Website

## Overview

A custom-built portfolio website for Pordee Studio, a video production studio in Chiang Mai specializing in architectural storytelling through film. Replaces the current Wix-hosted site with a performant, self-managed platform that better represents the studio's cinematic quality.

## Problem Statement

The current Wix site (pordeestudio.wixsite.com/home) has several limitations:
- Wix branding visible on every page ("This website was built on Wix")
- Limited customization of video playback and showcase experience
- No backend admin — content changes require editing the Wix template directly
- Slow load times due to Wix's heavy JavaScript framework
- No bilingual support (Thai + English)
- No blog/news section for behind-the-scenes or updates

The studio's film quality deserves a website that matches — fast, cinematic, and easy to manage.

## Goals

- **G1**: Remove Wix dependency and branding entirely
- **G2**: Provide a Sanity Studio admin panel so the 3-person team can add/edit projects and blog posts without coding
- **G3**: Achieve Lighthouse performance score > 90 across all pages
- **G4**: Support bilingual content (Thai + English) with URL-based locale routing
- **G5**: Enhanced video showcase with better playback UX than Wix's embedded YouTube widget

## Non-Goals (Out of Scope)

- Client portal or password-protected areas
- E-commerce or payment processing
- Booking/scheduling system
- User authentication or registration
- Custom video hosting (will continue using YouTube)

## Background

### Company Information
- **Studio**: Pordee Studio
- **Company**: I WORK THEREFORE I AM CO.,LTD.
- **Location**: Chiang Mai, Thailand
- **Founded**: 2023 by 3 people
- **Tagline**: "CAPTURE WHAT YOU FEEL"
- **Description**: "explore the architect's pure essence and deliver through the films."
- **Philosophy**: "Everything is connected, so what is the appropriate way to execute?"

### Contact
- **Email**: pordeestudio.official@gmail.com
- **Phone**: +66 64 954 6291
- **Instagram**: instagram.com/pordee.studio.official
- **Facebook**: facebook.com/pordee.studio.production
- **YouTube**: youtube.com/channel/UCeJOi_0rOW1SNYY4bI0rZJQ (channel name: พอดี)

### Existing Portfolio (12 projects)

**2023 (5 projects):**
| Project | Client/Architect | Duration | Description |
|---------|-----------------|----------|-------------|
| Hill Side Condo 3 | Client: Tammey House | 01:03 | — |
| Sher Maker Paamvillion | Architect: Sher Maker | 02:21 | ASA Lanna Event 2023, 40-day documentary about a pavilion inspired by natural features |
| Nimman House | — | 01:41 | Peaceful house in Nimman area, static shots, colors close to reality |
| Tammey Manor | Client: Tammey, Stylist: Re-styling space | 02:59 | Large space restoration, learning the house's location, mood, elements |
| KINTO Pop-up Exhibition | Client: KINTO Thailand, Architect: Sher Maker | 02:11 | — |

**2024 (6 projects):**
| Project | Client/Architect | Duration | Description |
|---------|-----------------|----------|-------------|
| Northern Thai Style Bushcraft: Pham | — | 07:48 | — |
| Teahouse Nanan Co | — | 01:30 | — |
| Rain Tree | Architect: Sher Maker | 03:15 | House built in a rain tree forest, design embraces nature |
| Archariyar Chair Designed | — | 01:40 | Furniture design film, Thai ancient house wood joint techniques |
| Wood Work Week Sher Maker | — | 02:00 | — |
| Nanan House | — | 02:58 | — |

**2025 (1 project):**
| Project | Client/Architect | Duration | Description |
|---------|-----------------|----------|-------------|
| AESOP Thonglor | — | 01:12 | — |

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | **Astro** | Ships zero JS by default, 95% less JS than Next.js, built for content/portfolio sites, supports React components via islands |
| **Styling** | **Tailwind CSS v4** | Utility-first, great for dark cinematic themes, responsive design |
| **CMS** | **Sanity Studio** | Free tier (3 users, 500K API/mo, 20GB assets), visual editor, media library, hosted — no server maintenance |
| **i18n** | **Astro i18n routing** | Built-in locale routing with `/th/` and `/en/` prefixes |
| **Video** | **YouTube embeds + custom player UI** | Leverage existing YouTube channel with polished overlay/controls |
| **Hosting** | **Cloudflare Pages** | Free unlimited bandwidth, 330+ edge locations, fastest TTFB globally |
| **Contact form** | **Resend or Cloudflare Workers** | Server-side email sending for the contact form |
| **Animations** | **CSS animations + View Transitions API** | Astro has built-in View Transitions support, lightweight |

---

## Site Structure

### Pages

| Page | Route (EN) | Route (TH) | Description |
|------|-----------|-----------|-------------|
| **Home** | `/en` | `/th` | Hero video/showreel, studio tagline, featured projects |
| **Work** | `/en/work` | `/th/work` | All projects, filterable by year |
| **Project Detail** | `/en/work/[slug]` | `/th/work/[slug]` | Video player, description, credits, related projects |
| **About** | `/en/about` | `/th/about` | Studio story, team photo, philosophy |
| **Blog** | `/en/blog` | `/th/blog` | News, behind-the-scenes, updates |
| **Blog Post** | `/en/blog/[slug]` | `/th/blog/[slug]` | Individual blog post |
| **Contact** | `/en/contact` | `/th/contact` | Contact info, form, social links |

### Navigation

```
PORDEE STUDIO [logo]          Work  About  Blog  Contact  [TH/EN]
```

---

## User Stories

### Visitor (potential client / collaborator)
- As a visitor, I want to watch Pordee Studio's portfolio videos so that I can evaluate their work quality
- As a visitor, I want to filter projects by year so that I can see recent work easily
- As a visitor, I want to read project details (client, architect, description) so that I understand the scope of each project
- As a visitor, I want to switch between Thai and English so that I can read in my preferred language
- As a visitor, I want to contact the studio via a form so that I can inquire about services
- As a visitor, I want to read blog posts so that I can learn about the studio's process and updates

### Admin (Pordee Studio team)
- As an admin, I want to add new projects via Sanity Studio so that I don't need to write code
- As an admin, I want to upload thumbnails and link YouTube videos so that projects display correctly
- As an admin, I want to write blog posts with images and embedded video so that I can share behind-the-scenes content
- As an admin, I want to edit existing content (text, images) so that I can keep the site up to date
- As an admin, I want content available in both Thai and English so that I can reach a wider audience

---

## Functional Requirements

### FR-1: Portfolio / Video Showcase
- FR-1.1: Display projects in a responsive grid with thumbnail, title, duration, and short description
- FR-1.2: Filter projects by year via tabs (2023, 2024, 2025, ...)
- FR-1.3: Project detail page shows large YouTube video player with custom dark overlay UI
- FR-1.4: Project detail includes: title, description, client, architect, duration, year, and related projects
- FR-1.5: Clicking a project from the grid navigates to its detail page with smooth transition

### FR-2: Blog / News
- FR-2.1: Blog list page with thumbnails, titles, dates, and excerpts
- FR-2.2: Individual blog post pages with rich content (text, images, embedded video)
- FR-2.3: Blog posts support tags/categories for organization

### FR-3: Bilingual (Thai + English)
- FR-3.1: Language toggle in the header switches between `/th/` and `/en/` routes
- FR-3.2: All static UI text (nav, footer, labels) translated in both languages
- FR-3.3: Content (projects, blog) has separate Thai and English fields in Sanity
- FR-3.4: Default language based on browser locale, fallback to English

### FR-4: Contact
- FR-4.1: Contact page displays email, phone, and social media links
- FR-4.2: Contact form with name, email, subject, and message fields
- FR-4.3: Form submissions sent via email to pordeestudio.official@gmail.com
- FR-4.4: Form validation and success/error feedback

### FR-5: CMS (Sanity Studio)
- FR-5.1: Sanity schema for Projects with all fields (title, description, video URL, thumbnail, year, client, architect, duration, tags, featured flag) — bilingual
- FR-5.2: Sanity schema for Blog Posts with all fields (title, body, thumbnail, date, tags, excerpt) — bilingual
- FR-5.3: Sanity schema for Site Settings (studio info, social links, contact details)
- FR-5.4: Webhook triggers Cloudflare Pages rebuild on content publish
- FR-5.5: Media library for uploading images/thumbnails

### FR-6: Design
- FR-6.1: Dark theme — black/near-black backgrounds maintaining cinematic feel
- FR-6.2: Clean sans-serif typography with clear hierarchy
- FR-6.3: Smooth page transitions using Astro View Transitions API
- FR-6.4: Mobile-first responsive design (mobile, tablet, desktop)
- FR-6.5: Video-first layout with generous sizing and minimal UI chrome

---

## Non-Functional Requirements

- **Performance**: Lighthouse score > 90 on all pages; TTFB < 200ms via Cloudflare edge
- **SEO**: Meta tags, Open Graph, structured data (JSON-LD), XML sitemap, robots.txt
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, alt text on all media
- **Browser support**: Latest 2 versions of Chrome, Firefox, Safari, Edge; mobile Safari/Chrome
- **Build time**: Full site build < 30 seconds

---

## Content Model (Sanity Schema)

### Project
```typescript
{
  slug: string              // URL-friendly identifier
  title: {
    en: string
    th: string
  }
  description: {
    en: text                // Rich text
    th: text
  }
  year: number              // 2023, 2024, 2025...
  thumbnail: image          // Sanity image asset
  videoUrl: string          // YouTube URL
  duration: string          // "02:21"
  client: string            // Optional
  architect: string         // Optional
  tags: string[]            // Optional
  featured: boolean         // Show on homepage
  order: number             // Display order within year
}
```

### Blog Post
```typescript
{
  slug: string
  title: {
    en: string
    th: string
  }
  body: {
    en: portableText        // Sanity rich text (images, video embeds)
    th: portableText
  }
  thumbnail: image
  date: datetime
  tags: string[]
  excerpt: {
    en: string
    th: string
  }
}
```

### Site Settings (singleton)
```typescript
{
  studioName: string
  tagline: { en: string, th: string }
  description: { en: string, th: string }
  email: string
  phone: string
  socialLinks: {
    instagram: url
    facebook: url
    youtube: url
  }
  aboutText: { en: text, th: text }
  aboutImage: image
  footerText: { en: string, th: string }
}
```

---

## Acceptance Criteria

- [ ] All 12 existing projects migrated and displaying correctly with video playback
- [ ] Sanity Studio accessible, team can add a new project and it appears on site after rebuild
- [ ] Language toggle switches all UI text and content between Thai and English
- [ ] Contact form sends email successfully to pordeestudio.official@gmail.com
- [ ] Blog list and detail pages render with sample content
- [ ] No Wix branding anywhere on the site
- [ ] Lighthouse performance score > 90 on Home, Work, and Project Detail pages
- [ ] Site is responsive and usable on mobile (375px+), tablet, and desktop
- [ ] Site deployed and accessible on Cloudflare Pages with custom domain
- [ ] Astro View Transitions provide smooth page navigation
- [ ] All pages have proper meta tags and Open Graph for social sharing

## Open Questions

- [ ] Custom domain name? (currently pordeestudio.wixsite.com)
- [ ] Do they want a showreel/hero video on the homepage, or keep the current full-screen image style?
- [ ] Blog post frequency expectation? (affects build/rebuild strategy)
- [ ] Are there YouTube video IDs/URLs available for all 12 projects, or only what's on the Wix YouTube widget?
