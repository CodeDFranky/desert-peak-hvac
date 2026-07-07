import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — one document, pinned in the Studio structure.
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'emergencyLineActive',
      title: 'Emergency Line Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
