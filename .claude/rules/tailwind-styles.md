---
description: Rules for Tailwind CSS and styling
globs: ["src/styles/**/*.css", "tailwind.config.*", "**/*.astro", "**/*.tsx"]
---

# Tailwind CSS Rules

- Use Tailwind CSS v4 — config via CSS (`@theme`) not `tailwind.config.js`.
- Dark cinematic palette: backgrounds in `#000`/`#0a0a0a`/`#111`, text in white/neutral grays.
- Mobile-first responsive: base = mobile, `md:` = 768px+, `lg:` = 1024px+, `xl:` = 1440px+.
- Typography: clean sans-serif. Use Thai-supporting fonts (Noto Sans Thai or IBM Plex Sans Thai) alongside the main font.
- Spacing: generous — let content breathe. Use `py-16`, `py-24`, `gap-8` etc.
- Hover effects: subtle scale/opacity transitions on interactive cards.
- Avoid `@apply` unless composing truly reusable utility patterns.
- No custom CSS unless Tailwind utilities genuinely can't achieve it.
