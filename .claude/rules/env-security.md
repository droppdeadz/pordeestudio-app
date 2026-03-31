---
description: Security rules for environment variables and secrets
globs: [".env*", "**/*.env*", "wrangler.toml"]
---

# Environment & Security Rules

- NEVER commit `.env` files. Only `.env.example` (with placeholder values) is allowed in git.
- Sanity tokens, API keys, and secrets must only exist in `.env` and Cloudflare dashboard.
- Public env vars use `PUBLIC_` prefix (Astro convention): `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`.
- Private env vars (like `SANITY_API_TOKEN`) are only available server-side / at build time.
- Never expose Sanity write tokens to the client.
