---
description: TypeScript conventions
globs: ["**/*.ts", "**/*.tsx"]
---

# TypeScript Rules

- Strict mode enabled — no `any` types, no implicit returns.
- Prefer `interface` over `type` for object shapes.
- Type all Sanity GROQ query responses — define interfaces for Project, BlogPost, SiteSettings.
- Use `const` by default, `let` only when reassignment is needed.
- No `enum` — use `as const` objects or union types instead.
- Import types with `import type` when only the type is needed.
- File naming: `camelCase.ts` for utilities, `PascalCase.tsx` for React components.
