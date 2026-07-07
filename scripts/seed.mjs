/**
 * Seed Sanity with the real content from ./docs/content.md.
 *
 * Prerequisites (Step 4):
 *   1. Create a project at https://sanity.io and put its id in .env as SANITY_PROJECT_ID
 *   2. Create a write token: sanity.io -> your project -> API -> Tokens -> "Editor" role
 *      and add it to .env as SANITY_API_WRITE_TOKEN
 *
 * Then run:  npm run seed
 *
 * Idempotent: uses createOrReplace with stable ids, so re-running updates in place.
 */
import { createClient } from '@sanity/client';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const projectId = env.SANITY_PROJECT_ID;
const dataset = env.SANITY_DATASET || 'production';
const token = env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === 'placeholder') {
  console.error('✖ Set SANITY_PROJECT_ID in .env to your real project id first.');
  process.exit(1);
}
if (!token) {
  console.error('✖ Set SANITY_API_WRITE_TOKEN in .env (sanity.io -> API -> Tokens, Editor role).');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-10-01', token, useCdn: false });

const services = [
  {
    _id: 'service-ac-repair',
    _type: 'service',
    title: 'AC Repair & Maintenance',
    slug: { _type: 'slug', current: 'ac-repair-maintenance' },
    description:
      'Fast diagnostics and repairs to get your cooling back online, plus tune-ups that prevent breakdowns before they start.',
    iconName: 'ac',
    order: 1,
  },
  {
    _id: 'service-ac-install',
    _type: 'service',
    title: 'Air Conditioning Installation',
    slug: { _type: 'slug', current: 'air-conditioning-installation' },
    description:
      'High-efficiency systems sized correctly for your home and the Nevada climate, installed clean and on schedule.',
    iconName: 'install',
    order: 2,
  },
  {
    _id: 'service-heating',
    _type: 'service',
    title: 'Heating Services',
    slug: { _type: 'slug', current: 'heating-services' },
    description:
      'Furnace and heat pump repair, maintenance, and installation to keep you warm through the cooler months.',
    iconName: 'heating',
    order: 3,
  },
  {
    _id: 'service-air-quality',
    _type: 'service',
    title: 'Indoor Air Quality',
    slug: { _type: 'slug', current: 'indoor-air-quality' },
    description:
      'Air purifiers, filtration, and duct cleaning to cut down on the dust and allergens that come with desert living.',
    iconName: 'air-quality',
    order: 4,
  },
  {
    _id: 'service-commercial',
    _type: 'service',
    title: 'Commercial HVAC',
    slug: { _type: 'slug', current: 'commercial-hvac' },
    description:
      'Reliable service and maintenance plans for offices, retail, and light industrial spaces across the valley.',
    iconName: 'commercial',
    order: 5,
  },
];

const testimonials = [
  {
    _id: 'testimonial-henderson',
    _type: 'testimonial',
    quote:
      'Our AC died at 4pm on the hottest day of July and Desert Peak had a tech at the house before dinner. Honest price, fixed on the first visit.',
    authorName: 'Marcus T.',
    suburb: 'Henderson',
    rating: 5,
  },
  {
    _id: 'testimonial-green-valley',
    _type: 'testimonial',
    quote:
      'They installed a whole new system last spring. The crew was clean, on time, and respectful of the house, and the quote was exactly what I paid.',
    authorName: 'Priya S.',
    suburb: 'Green Valley',
    rating: 5,
  },
  {
    _id: 'testimonial-anthem',
    _type: 'testimonial',
    quote:
      'I have used Desert Peak for three years for maintenance. They never upsell me on things I do not need, which is why I keep calling them.',
    authorName: 'Dana R.',
    suburb: 'Anthem',
    rating: 5,
  },
];

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  phone: '(555) 555-0182',
  email: 'service@desertpeakhvac.com',
  address: '1480 W Sunset Rd, Suite 120, Henderson, NV 89014',
  hours: 'Monday to Friday, 7am to 7pm\nSaturday, 8am to 4pm\nSunday emergency service only',
  emergencyLineActive: true,
};

try {
  // Clear any earlier service/testimonial docs (e.g. legacy dotted ids that the
  // API treats as release "versions") so nothing is left orphaned.
  await client.delete({ query: '*[_type in ["service", "testimonial"]]' });

  const tx = client.transaction();
  for (const doc of [...services, ...testimonials, siteSettings]) {
    tx.createOrReplace(doc);
  }
  await tx.commit();
  console.log(
    `✓ Seeded ${services.length} services, ${testimonials.length} testimonials, and site settings into ${projectId}/${dataset}.`,
  );
} catch (err) {
  console.error('✖ Seed failed:', err.message);
  process.exit(1);
}
