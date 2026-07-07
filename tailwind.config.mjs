/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens — see DESIGN.md (normative)
        'brand-navy': '#15293D',
        'brand-red': '#B91C1C',
        'brand-white': '#FFFFFF',
        'red-deep': '#991616', // primary button hover
        steel: '#40505E', // body copy on light (DESIGN.md "Slate")
        mist: '#EEF1F3', // cool section tint — never cream
        hairline: '#D8DEE3', // borders / dividers
      },
      fontFamily: {
        sans: [
          '"Libre Franklin Variable"',
          '"Libre Franklin"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        // Interactive lift — navy-tinted, hover/focus only (DESIGN.md Elevation)
        lift: '0 6px 20px rgba(21, 41, 61, 0.14)',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '10px',
      },
    },
  },
  plugins: [],
};
