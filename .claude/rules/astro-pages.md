---
description: Rules for Astro page and component files
globs: ["src/pages/**/*.astro", "src/components/**/*.astro", "src/layouts/**/*.astro"]
---

# Astro Component Rules

- Use `.astro` components for static content. Only add React islands with `client:load` or `client:visible` when client-side JS is genuinely needed.
- Every page must extract locale: `const { locale } = Astro.params`
- Fetch Sanity data in the frontmatter (above the `---` fence), not in client scripts.
- Use `BaseLayout` as the wrapper for all pages — never create standalone HTML documents.
- Apply Tailwind utilities directly. Avoid `<style>` blocks unless scoped styles are truly necessary.
- Mobile-first: write base styles for mobile, add `md:` and `lg:` for larger screens.
- Dark theme: use `bg-black`, `bg-neutral-950`, `text-white`, `text-neutral-400` etc.
- All user-facing text must use the i18n translation helper, never hardcode strings.
- Add `transition:name` on elements that should animate during page transitions.
- Use semantic HTML: `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`.
