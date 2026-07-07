import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

// Until a Sanity project exists, the client is null and every helper returns a
// safe empty fallback so builds don't crash. No content is hardcoded here.
const enabled = Boolean(projectId);

export const client: SanityClient | null = enabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-10-01',
      // Build-time fetch: bypass the CDN cache so each rebuild gets freshly
      // published content (builds are infrequent, so no rate-limit concern).
      useCdn: false,
    })
  : null;

const imageBuilder = enabled ? imageUrlBuilder({ projectId, dataset }) : null;

export interface SanityImage {
  asset?: { _ref: string; _type: string };
  alt?: string;
}

// Build an optimized Sanity CDN url for an uploaded image, or null if unset.
export function urlFor(source: SanityImage | null | undefined) {
  return source && imageBuilder ? imageBuilder.image(source as never) : null;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  order: number;
  image?: SanityImage | null;
}

export interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  suburb: string;
  rating: number;
}

export interface SiteSettings {
  phone: string;
  email: string;
  address: string;
  hours: string;
  emergencyLineActive: boolean;
}

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query);
  } catch (err) {
    console.warn(`[sanity] query failed, using fallback: ${(err as Error).message}`);
    return fallback;
  }
}

export function getServices(): Promise<Service[]> {
  return safeFetch<Service[]>(
    `*[_type == "service"] | order(order asc){
      _id, title, "slug": slug.current, description, iconName, order, image
    }`,
    [],
  );
}

export function getTestimonials(): Promise<Testimonial[]> {
  return safeFetch<Testimonial[]>(
    `*[_type == "testimonial"] | order(rating desc, _createdAt asc){
      _id, quote, authorName, suburb, rating
    }`,
    [],
  );
}

export function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings | null>(
    `*[_type == "siteSettings"][0]{
      phone, email, address, hours, emergencyLineActive
    }`,
    null,
  );
}
