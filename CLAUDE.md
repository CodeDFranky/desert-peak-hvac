# CLAUDE.md — Desert Peak Heating & Cooling

## Project
Responsive homepage for Desert Peak Heating & Cooling, a fictional HVAC
company in Henderson, Las Vegas. Built as a trial task demonstrating
AI-assisted frontend development with Claude Code.

## Reference docs — read all of these before doing anything
- Brief: ./docs/brief.md
- Content: ./docs/content.md
- Design system: ./docs/design-system.md

## Stack
- Astro 5 — static output, chosen for performance on a
  mostly-static marketing site (Astro 6 pinned back to 5 because the
  Tailwind v3 integration doesn't support 6 yet)
- Tailwind CSS v3 with custom brand tokens (@astrojs/tailwind)
- TypeScript throughout
- Sanity v5 headless CMS — Studio embedded at /studio (@sanity/astro)
- Deploy target: Vercel

## Brand tokens (non-negotiable)
- brand-navy:  #15293D — primary backgrounds, headings
- brand-red:   #B91C1C — accent, CTAs, urgency
- brand-white: #FFFFFF — surfaces, body text on dark
- Font: Libre Franklin — self-hosted via @fontsource-variable/libre-franklin
  (variable, all weights). No <link> to Google Fonts in production.

## Images
All images are in /public/images/. Use these real files —
no placeholder boxes, no lorem picsum, no unsplash URLs.
Use Astro's built-in <Image> component for all images.

## Folder structure
src/
  components/     — reusable UI components
  layouts/        — Astro layout wrappers
  pages/          — index.astro + studio route
  styles/         — global CSS
  lib/            — Sanity client and query helpers
sanity/
  schemas/        — service, testimonial, siteSettings
public/
  images/         — all stock photography
docs/             — brief reference files

## Dev commands
npm run dev       — local dev server (localhost:4321)
npm run build     — production build
npm run preview   — preview production build locally

## Sanity
- Create project at sanity.io; put id in .env (SANITY_PROJECT_ID +
  PUBLIC_SANITY_PROJECT_ID, DATASET=production). See .env.example.
- Studio embedded at /studio in the Astro app
- Schemas: service, testimonial, siteSettings (singleton) in sanity/schemas/
- Query helpers in src/lib/sanity.ts: getServices / getTestimonials /
  getSiteSettings — all return safe fallbacks when Sanity is unset
- Seed content from ./docs/content.md with `npm run seed` (needs
  SANITY_API_WRITE_TOKEN). Do not hardcode content that belongs in Sanity.
- Node note: the Studio prefers Node >=22 (@sanity/icons). The site build
  runs fine on Node 20; use `nvm use 22` before running Studio if it complains.

## Tools in use
- Taste Skill (SKILL.md) — design decisions and anti-slop rules
- Impeccable (PRODUCT.md + DESIGN.md) — polish and animation pass
- Both markdown files are in project root

## Code rules
- Semantic HTML always — no div soup
- Mobile-first, tested at 375px / 768px / 1280px
- No window.addEventListener('scroll') ever —
  use IntersectionObserver or CSS scroll-driven animations
- No hardcoded content that belongs in Sanity
- No dead code, no commented-out blocks
- Meaningful commit messages — describe what and why
- Do NOT add "Co-Authored-By: Claude" or any AI attribution/trailer to commit
  messages. Keep commits clean and authored by the developer.
