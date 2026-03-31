import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: import.meta.env.DEV,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- TypeScript interfaces ---

export interface BilingualField {
  en: string;
  th: string;
}

export interface Project {
  _id: string;
  slug: { current: string };
  title: BilingualField;
  description: BilingualField;
  year: number;
  thumbnail: SanityImageSource;
  videoUrl: string;
  duration: string;
  client?: string;
  architect?: string;
  tags?: string[];
  featured: boolean;
  order: number;
}

export interface BlogPost {
  _id: string;
  slug: { current: string };
  title: BilingualField;
  body: {
    en: unknown[];
    th: unknown[];
  };
  thumbnail: SanityImageSource;
  date: string;
  tags?: string[];
  excerpt: BilingualField;
}

export interface SiteSettings {
  studioName: string;
  tagline: BilingualField;
  description: BilingualField;
  email: string;
  phone: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  aboutText: BilingualField;
  aboutImage: SanityImageSource;
  footerText: BilingualField;
}

// --- GROQ Query Helpers ---

export async function getProjects(): Promise<Project[]> {
  return sanityClient.fetch(
    `*[_type == "project"] | order(year desc, order asc) {
      _id, slug, title, description, year, thumbnail,
      videoUrl, duration, client, architect, tags, featured, order
    }`
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return sanityClient.fetch(
    `*[_type == "project" && featured == true] | order(year desc, order asc) {
      _id, slug, title, description, year, thumbnail,
      videoUrl, duration, client, architect, tags, featured, order
    }`
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, slug, title, description, year, thumbnail,
      videoUrl, duration, client, architect, tags, featured, order
    }`,
    { slug }
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(date desc) {
      _id, slug, title, thumbnail, date, tags, excerpt
    }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, slug, title, body, thumbnail, date, tags, excerpt
    }`,
    { slug }
  );
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      studioName, tagline, description, email, phone,
      socialLinks, aboutText, aboutImage, footerText
    }`
  );
}
