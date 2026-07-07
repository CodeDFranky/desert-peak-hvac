import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
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
    tailwind({ applyBaseStyles: false }),
  ],
});
