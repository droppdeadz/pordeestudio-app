import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemapUrl = import.meta.env.SITE ?? 'https://pordeestudio.pages.dev';
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
