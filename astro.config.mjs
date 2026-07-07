import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  site: 'https://desert-peak-hvac-rouge.vercel.app',
  output: 'static',
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET || 'production',
      useCdn: false,
      // Studio is embedded and served at /studio
      studioBasePath: '/studio',
    }),
    react(),
    icon(),
    sitemap({ filter: (page) => !page.includes('/studio') }),
    tailwind({ applyBaseStyles: false }),
  ],
});
