# Desert Peak Heating & Cooling

A responsive marketing homepage for a fictional HVAC company in Henderson, Las Vegas. Built as a trial task. The copy and design system were provided; the job was to bring them to life as a real page that does not look AI-generated, and to make the content editable through a CMS.

- **Live link:** https://desert-peak-hvac-rouge.vercel.app
- **CMS Studio:** https://desert-peak-hvac-rouge.vercel.app/studio

## Why Astro, not Next.js

This is a marketing homepage. No accounts, no per-request data, nothing that needs a server while a visitor is on the page. Once I framed it that way, Astro was the obvious pick.

- **It is static, and static is the right shape here.** Astro renders everything to HTML at build time and ships no JavaScript unless a component asks for it. On this page only three tiny pieces need JS: the mobile menu, the scroll-reveal, and the contact form validation. Next.js would hand me a React runtime for a page that is almost entirely text and images.
- **Performance comes mostly for free.** The hero is the largest paint and loads eagerly; everything else is lazy and served as optimized, responsive images through Astro's `<Image>`. That covered most of the Core Web Vitals work without me fighting it.
- **SEO is simpler.** Real content sits in the HTML with no hydration step for a crawler to wait on.
- **Less to reason about.** One build command, a `dist/` folder, and Vercel serves it. No server runtime to configure or pay for.

Next.js is not wrong here, and if this site later grew a booking flow or a customer login, its server rendering would earn its keep. For a mostly-static page it was more than the job needed, and I would rather not carry complexity I am not using.

## Tech stack

- **Astro 5**, static output
- **Tailwind CSS v3** with custom brand tokens (navy, red, white)
- **TypeScript** throughout
- **Sanity v5** headless CMS, with the Studio embedded at `/studio`
- **Libre Franklin**, self-hosted through `@fontsource-variable` so there is no render-blocking font request
- Hosted on **Vercel**

## Why Sanity

The CMS was a bonus in the brief, but I wanted it in from the start rather than hardcoding copy and retrofitting later. If the point is that a client can edit the site, the content should live outside the code from day one.

Sanity fit well. The Studio embeds straight into the Astro app, so there is one thing to run and the client gets a clean editing UI at `/studio` without a separate deployment. Content and presentation stay separated: the page reads from typed GROQ queries and does not care where the words come from.

Three schemas map to what an owner would actually want to change:

- `service`: title, description, an icon key, and a sort order
- `testimonial`: quote, author, suburb, rating
- `siteSettings`: a singleton for phone, email, address, hours, and an emergency-line toggle

Query helpers live in `src/lib/sanity.ts` (`getServices`, `getTestimonials`, `getSiteSettings`), each with a safe fallback so a missing CMS never breaks the build.

## How I built this with Claude Code

I built the whole thing in Claude Code, and I ran it in three deliberate passes instead of asking for a finished page in one shot.

**Tools, and why each one earns its place:** Claude Code as the driver, plus three focused skills. I picked deliberately rather than grabbing everything available.

- **Taste Skill** for design direction. It front-loads design judgment with an anti-slop ruleset and a variance / motion / density dial system. That is exactly what this brief needed: a way to push the AI past its default look before a line of code gets written.
- **Impeccable** for review and polish. It gives a scored, structured critique and targeted commands like `typeset`, `colorize`, and `layout`, so I could fix specific weaknesses surgically instead of accepting a black-box rewrite.
- **Playwright** for visual QA. Type-checks and builds pass while a page still looks broken, so I screenshotted every breakpoint. That is how the invisible headline and the blank-section bug actually surfaced.
- **Humanizer** on the copy, to strip the patterns that read as machine-written.

I also made a point of keeping the tooling lean. No custom agents, no MCP plugins, no extra frameworks or state libraries. A static marketing page does not need any of that, and reaching for it would have added complexity I would then have to justify and maintain. Right-sizing the stack is part of the work, not a shortcut around it.

**1. Design planning pass, before any code.** I had it read the brief and the design system and commit to a design direction and three dials (variance, motion, density) tuned for a trust-first local business, then stop for my sign-off. That is where the anti-slop decisions got locked: asymmetric sections instead of three identical cards, one accent color reserved for actions only, real photography, no template tells. Getting this right up front is what kept the build from drifting into the generic look the client explicitly did not want.

**2. Build pass.** Only after I approved the direction did it scaffold the project, wire up Sanity and the schemas, and build the sections. Content came from the CMS from the first render, not hardcoded and swapped later.

**3. Impeccable polish, one command at a time.** I ran the Impeccable commands individually and reviewed after each, rather than firing them all off. `critique` gave a scored design review that told me where to spend effort; then `typeset`, `colorize`, `layout`, and `animate` tightened specific things. Running them one at a time meant I could accept some changes and reject others instead of taking a black-box rewrite.

**Where I stepped in and pushed back.** The AI got plenty wrong, and catching that was most of the actual work:

- It shipped a hero headline that was invisible, navy text on the navy hero, because a global heading rule forced the color. Build checks passed; the page still looked broken. I only caught it by screenshotting every breakpoint.
- It hid whole sections behind a scroll-reveal that set them to `opacity: 0` and relied on JS to bring them back, so anything above-the-fold JS had not reached rendered blank. I made the reveal degrade gracefully so content is visible without JS.
- The Impeccable critique flagged that the hero eyebrow was red on navy and failed contrast. I fixed the color and reworked the hero headline from three lines to two while I was in there.
- It defaulted to a light-and-dark theme. I overrode that to a single committed light theme, because the brand identity is a fixed navy/red/white and a dark mode would only dilute it.
- I kept the client-provided copy where it was already good instead of letting the model rewrite everything, and only edited the marketing microcopy that read as machine-written.

**Final QA.** I ran `npx impeccable detect src/` as a last deterministic pass over the source. It came back clean, no findings.

## Running it locally

```bash
npm install
cp .env.example .env    # add your Sanity project id
npm run dev             # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run seed` | Load content into Sanity from `scripts/seed.mjs` |
| `npm run check` | Type-check the project |

## Sanity setup

1. Create a project at [sanity.io](https://www.sanity.io) and copy the Project ID.
2. Put it in `.env` as both `SANITY_PROJECT_ID` and `PUBLIC_SANITY_PROJECT_ID`, with `SANITY_DATASET=production` (and the `PUBLIC_` version too).
3. Set the `production` dataset to **public** so the static build can read it at build time.
4. To seed the starter content, create an Editor token under Sanity API tokens, add it to `.env` as `SANITY_API_WRITE_TOKEN`, then run `npm run seed`.
5. Edit content anytime at `/studio`. To log in locally, add `http://localhost:4321` to the project's CORS origins.

For Vercel, import the repo with the default Astro settings and add the four `SANITY_*` and `PUBLIC_SANITY_*` variables plus `PUBLIC_WEB3FORMS_KEY` for the contact form. The Sanity write token is only for seeding and does not belong in the deploy.

## Notes

- The photos in `src/assets/images/` are placeholders. Swap in real ones using the same filenames and no code changes are needed.
- The contact form is wired to [Web3Forms](https://web3forms.com), so submissions email you with no backend. It validates inline, shows a success state, and falls back to an error message if a send fails. The access key lives in `PUBLIC_WEB3FORMS_KEY` and is safe to commit.
