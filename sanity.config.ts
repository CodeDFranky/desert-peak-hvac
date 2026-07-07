import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

// Robust env read: works in the browser (Vite/import.meta.env) and in the
// Sanity CLI (process.env). Studio runs client-side, so it needs the PUBLIC_ vars.
const viteEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : ({} as Record<string, string>);
const nodeEnv = typeof process !== 'undefined' && process.env ? process.env : ({} as Record<string, string>);

const projectId =
  viteEnv.PUBLIC_SANITY_PROJECT_ID ||
  nodeEnv.SANITY_PROJECT_ID ||
  nodeEnv.PUBLIC_SANITY_PROJECT_ID ||
  '';
const dataset =
  viteEnv.PUBLIC_SANITY_DATASET || nodeEnv.SANITY_DATASET || nodeEnv.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'desert-peak',
  title: 'Desert Peak Heating & Cooling',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
