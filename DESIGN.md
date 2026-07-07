---
name: Desert Peak Heating & Cooling
description: Trustworthy, phone-first HVAC homepage for Henderson, NV — navy, brick red, and white.
colors:
  brand-navy: "#15293D"
  brand-red: "#B91C1C"
  brand-white: "#FFFFFF"
  red-deep: "#991616"
  slate: "#40505E"
  mist: "#EEF1F3"
  hairline: "#D8DEE3"
typography:
  display:
    fontFamily: "Libre Franklin, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Libre Franklin, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Libre Franklin, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Libre Franklin, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.brand-red}"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.brand-white}"
  button-secondary:
    backgroundColor: "{colors.brand-navy}"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.brand-white}"
    textColor: "{colors.slate}"
    rounded: "{rounded.md}"
    padding: "28px"
  input:
    backgroundColor: "{colors.brand-white}"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Desert Peak Heating & Cooling

## 1. Overview

**Creative North Star: "The Trusted Work Truck"**

A Desert Peak service van earns trust before anyone speaks: it's clean, every
tool has its place, nothing is chromed for show, and it's visibly built to
perform in 110° heat. This homepage is that van. It is **navy-solid and
white-clean**, with brick red reserved for the one thing that matters — reaching
a technician. The personality is established and neighborly, the density is
generous but disciplined, and the aesthetic philosophy is *competence made
visible*: real photography of real technicians and Nevada homes, plain confident
type, and structural depth instead of decorative effects.

This system explicitly rejects the look of a venture-backed app or an
AI-generated SaaS page. There are no purple gradients, no frosted glass, no
pill-shaped buttons scattered as decoration, no row of three identical feature
cards, no warm cream backgrounds, and no decorative SVG illustrations standing in
for photographs. When in doubt, it looks like a fifteen-year-old local business
that hired a real design studio — not like a template.

**Key Characteristics:**
- High-contrast **navy (#15293D) / white (#FFFFFF)** structure; **brick red
  (#B91C1C)** only on actions.
- **Libre Franklin** carries the entire hierarchy through weight and size.
- Flat-by-default surfaces; depth is a navy band against white, not a shadow.
- Photography over illustration — always a real image, never a placeholder box.
- Phone-first: the call-to-action is the visual spine of every section.

## 2. Colors

A tight, high-contrast palette: a deep desert-night navy for structure, a brick
red for urgency and action, and clean white for breathing room, with cool
neutrals filling the gaps.

### Primary
- **Desert-Night Navy** (#15293D): The structural backbone. Used for the dark
  header/hero, the emergency-adjacent bands, footers, headings on white, and the
  secondary button. It is the "trust" color — it does most of the surface work.

### Secondary
- **Brick Red** (#B91C1C): The action color, and *only* the action color. Phone
  CTAs, the primary button, the emergency banner background, and urgent
  accents. Its hover partner is **Deep Brick** (#991616).

### Neutral
- **Slate** (#40505E): Body copy on light surfaces — softer than pure navy so
  long paragraphs read comfortably while staying well above 4.5:1.
- **Mist** (#EEF1F3): Cool, near-white section tint used to separate light
  sections without introducing a warm cream. Never a beige/cream.
- **Hairline** (#D8DEE3): Borders and dividers, used sparingly — a single
  1px line, never a stacked top-and-bottom frame on every row.
- **White** (#FFFFFF): Primary surface and all text on navy/red.

### Named Rules
**The Red-for-Action Rule.** Brick red is reserved for things a user can *do* —
call, submit, respond to the emergency line. It never decorates a heading, an
icon, or a border for flavor. On any given screen it covers **≤15%** of the
surface; its scarcity is exactly what makes the phone number impossible to miss.

**The No-Cream Rule.** Neutrals are *cool* (mist #EEF1F3, hairline #D8DEE3).
Warm cream / beige backgrounds are forbidden — they read as generic wellness-SaaS
and undercut the desert-tech, blue-collar-trust register.

## 3. Typography

**Display Font:** Libre Franklin (with 'Helvetica Neue', Arial, sans-serif)
**Body Font:** Libre Franklin (same stack)
**Label/Mono Font:** Libre Franklin — no second family

**Character:** Libre Franklin is a clean American grotesque with a full weight
range. It's confident and utilitarian without being cold — the type equivalent of
a plain-spoken expert. Hierarchy is built entirely from **weight and size**, which
keeps the page feeling like one coherent voice.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6vw, 4rem), 1.05, -0.02em): Hero headline only.
  Heavy and tight; two lines maximum.
- **Headline** (700, clamp(1.75rem, 3.5vw, 2.5rem), 1.15): Section titles.
- **Title** (600, 1.25rem, 1.3): Service names, card headings, sub-sections.
- **Body** (400, 1.0625rem, 1.6): Paragraphs and descriptions. Max line length
  65–75ch on wide screens.
- **Label** (600, 0.8125rem, +0.08em, UPPERCASE): Eyebrows, trust-badge tags,
  form labels. Used sparingly to introduce a section.

### Named Rules
**The One-Typeface Rule.** Libre Franklin does every job. A second font family is
forbidden; contrast comes from weight (400 → 800) and size, never from mixing
typefaces.

**The Two-Line Hero Rule.** The hero headline never exceeds two lines at any
breakpoint, and the subheading stays under ~20 words. If it doesn't fit, cut
words, don't shrink type.

## 4. Elevation

This is a **flat-by-default** system. Depth is communicated *structurally* — a
solid navy band sitting against white, a red banner interrupting the flow — not
through ambient shadows or glass blur. There is no decorative elevation.

### Shadow Vocabulary
- **Interactive lift** (`box-shadow: 0 6px 20px rgba(21, 41, 61, 0.14)`): Applied
  only on hover/focus of cards and buttons, as feedback that something is
  actionable. Tinted with navy, never neutral gray.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a *response*
to state (hover, focus), never an ambient decoration. If a card has a resting
drop shadow "to make it pop," remove it — separation comes from the navy/white
structure and the hairline, not from a glow. Glassmorphism and frosted panels are
forbidden outright.

## 5. Components

### Buttons
- **Shape:** Squared with a slight softening (4px radius). Deliberately **not**
  pills — a pill button here reads as SaaS.
- **Primary:** Brick red (#B91C1C) fill, white text, 16px/32px padding, label at
  600 weight. This is the phone/convert action.
- **Secondary:** Navy (#15293D) fill, white text, same geometry — for "See all
  services" and lower-urgency actions.
- **Hover / Focus:** Primary deepens to #991616; both lift with the interactive
  shadow and a 2px translateY. Focus shows a visible 2px navy (or white-on-navy)
  outline offset 2px — never suppressed.

### Cards / Containers
- **Corner Style:** 6px radius (`rounded.md`).
- **Background:** White on light sections; navy for inverted feature blocks.
- **Shadow Strategy:** Flat at rest; interactive lift only on hover (see
  Elevation).
- **Border:** At most a single 1px hairline (#D8DEE3). Never a colored left
  stripe, never top+bottom framing on every row.
- **Internal Padding:** 28px (`spacing` lg-ish); generous and consistent.

### Inputs / Fields
- **Style:** White field, 1px hairline border, 4px radius, navy text, 14px/16px
  padding. Labels use the uppercase Label style above the field.
- **Focus:** Border shifts to navy with a soft 2px navy ring; no glow.
- **Error:** Border and helper text in brick red, with a text message — never
  color alone.

### Navigation
- **Style:** Sticky top bar. Logo as confident wordmark (navy on white, or white
  on navy when over the hero). Text links in navy at 600 weight; the **phone
  number is a red primary CTA**, always visible.
- **States:** Links underline/redden on hover; active link carries a 2px navy
  underline. Mobile collapses to a hamburger that opens a full-width navy sheet
  with the phone CTA pinned at top.

### Emergency Banner (signature component)
Full-bleed brick-red band with white text and a large white/ghost phone CTA.
Maximum urgency, zero clutter: one line of copy, one number. It is the loudest
moment on the page by design and the clearest payoff of the Red-for-Action Rule.

## 6. Do's and Don'ts

### Do:
- **Do** keep brick red (#B91C1C) exclusively on actions and the emergency band —
  ≤15% of any screen (**The Red-for-Action Rule**).
- **Do** build hierarchy from Libre Franklin weight + size alone (**The
  One-Typeface Rule**).
- **Do** keep surfaces flat at rest; add shadow only on hover/focus (**The
  Flat-By-Default Rule**).
- **Do** use real photography of technicians, AC units, and Nevada homes for
  every image slot.
- **Do** make the phone number reachable in one thumb-tap on mobile, above the
  fold.
- **Do** vary section layouts — asymmetric service rows, a distinct area grid, a
  full-bleed banner — so no two sections share a layout family.

### Don't:
- **Don't** use purple gradients — anywhere.
- **Don't** use glassmorphism or frosted-glass panels.
- **Don't** use pill buttons everywhere; buttons are squared (4px).
- **Don't** lay out three equal feature cards in a row — the services section
  must be asymmetric or zig-zag.
- **Don't** use warm cream backgrounds; neutrals stay cool (mist #EEF1F3).
- **Don't** use decorative SVG illustrations in place of real photos.
- **Don't** let it look like a generic AI-generated / SaaS marketing template. If
  a section could be dropped unchanged onto a project-management startup's site,
  it's wrong.
- **Don't** frame every row with top+bottom borders, and never use a colored
  left-stripe as decoration.
