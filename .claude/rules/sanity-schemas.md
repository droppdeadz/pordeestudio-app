---
description: Rules for Sanity schema definitions
globs: ["**/sanity/**/*.ts", "**/schemas/**/*.ts", "src/lib/sanity.ts"]
---

# Sanity Schema Rules

- All user-facing text fields must be bilingual objects with `en` and `th` subfields.
- Use `defineType`, `defineField`, and `defineArrayMember` from `sanity` package.
- Slugs auto-generate from the English title field. Add uniqueness validation.
- SiteSettings uses the singleton pattern — prevent creating multiple documents.
- Portable Text fields (blog body) must support: headings, bold, italic, links, images, and YouTube embed blocks.
- GROQ is the only query language — never use Sanity's GraphQL API.
- Place all GROQ query helpers in `src/lib/sanity.ts`.
- Type all query responses with TypeScript interfaces.
- Use `@sanity/image-url` for image URL generation with responsive transforms.
