---
name: Fanfinity
description: Light-editorial marketing site for a real-time, in-region fan data platform — Fanfinity purple as one disciplined accent
colors:
  brand: "#9969ff"
  brand-foreground: "#7c4dff"
  brand-600: "#854dff"
  brand-700: "#7c4dff"
  brand-950: "#351070"
  brand-50: "#f5f0ff"
  background: "oklch(97.53% 0.0045 254.98)"
  foreground: "oklch(14.5% 0 0)"
  card: "oklch(100% 0 0)"
  border: "oklch(92.2% 0 0)"
  muted: "oklch(97% 0 0)"
  muted-foreground: "oklch(55.6% 0 0)"
  dark-band: "#0b0712"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
spacing:
  card: "1.5rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-600}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-700}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  button-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.brand-950}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card}"
  pill:
    backgroundColor: "{colors.card}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
  badge:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-700}"
    rounded: "{rounded.md}"
    padding: "0.125rem 0.5rem"
---

# Design System: Fanfinity

## 1. Overview

**Creative North Star: "The Sovereign Editorial"**

Fanfinity is a serious, in-region fan data platform, and the site has to read like an institution you'd trust with your fan graph — not an AI startup landing page. The system is light-editorial: near-white backgrounds, generous whitespace, real photography of audiences and people-on-phones paired with honest product UI, and one disciplined purple accent that appears rarely enough to mean something. The register is brand (design IS the product), so craft and restraint carry the credibility that pre-revenue proof can't.

The palette is a cool near-white canvas with pure-white cards, near-black ink, and Fanfinity purple (`#9969ff`) reserved for buttons, links, one highlighted headline word, and small tokens (badges, icon chips). Dark is a guest, not the host: a single near-black band (`#0b0712`) is allowed for one intentional CTA moment and the footer, never as the default hero. Depth comes from tinted shadows (purple, not black) and subtle borders, not from glass or glow.

This system explicitly rejects the four "AI fingerprints" the design audit named and the redesign removed: the dark purple mesh-gradient hero, purple as a full-bleed wash, default icon sets, and the repeated symmetric three-equal-card grid. It also rejects anything that undermines a sovereignty/PDPL brand: uncanny stock, invented metrics, neon, and sports-only imagery leaking onto the horizontal shared pages.

**Key Characteristics:**
- Light-first surfaces; dark reserved for exactly one CTA band + footer.
- Purple as a single locked accent (≤ ~10% of any screen), never a wash.
- Real photography (audience / crowd / people-on-phones / live-event, not sport-specific) paired with honest product UI.
- Phosphor icons, one stroke weight, `currentColor`.
- Asymmetric / zig-zag rhythm and a signature bento over repeated 3-up grids.

## 2. Colors

A cool near-white canvas carrying a single purple accent, near-black ink, and a lone near-black band for contrast moments.

### Primary
- **Fanfinity Purple** (`#9969ff`, ramp 50→950; foreground `#7c4dff`, buttons use 600 `#854dff` → hover 700 `#7c4dff`): the brand. Used on primary buttons, links, one highlighted headline word (same-family bold), badges, and icon chips (`brand-50` fill). Its rarity is the point — it is an accent, never a surface wash.

### Neutral
- **Cool Paper** (`oklch(97.53% 0.0045 254.98)`): the default page background — a faintly cool near-white, not pure white.
- **Card White** (`oklch(100% 0 0)`): pure white for raised cards and panels, so cards separate from Cool Paper by one subtle step.
- **Ink** (`oklch(14.5% 0 0)`): near-black for headings and body. Body color stays toward the ink end — light gray body is prohibited.
- **Muted Ink** (`oklch(55.6% 0 0)`): secondary text and labels only, never long-form body.
- **Hairline** (`oklch(92.2% 0 0)`): borders, dividers, and card edges.
- **Obsidian Band** (`#0b0712`): the single dark surface — one CTA band and the footer. Not a hero.

### Named Rules
**The One Accent Rule.** Purple is used on ≤10% of any given screen — buttons, links, one headline word, small tokens. If the viewport reads purple, it's wrong; neutralize the surface and let the accent do the work.

**The Light-First Rule.** The default surface is Cool Paper. Dark (`#0b0712`) appears exactly twice per page at most: one intentional CTA band and the footer. A dark hero is forbidden.

**The Ink-End Rule.** Body text sits toward Ink, never light gray "for elegance" — the single biggest reason a design reads hard to read. Muted Ink is for labels and captions only.

## 3. Typography

**Display Font:** Poppins (with ui-sans-serif, system-ui fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)
**Label/Mono Font:** Geist Mono (labels, eyebrows, code)

**Character:** Poppins gives headings geometric character and confidence; Inter keeps body neutral and highly legible; Geist Mono marks eyebrows and technical labels. The pairing is grown-up and editorial, not techy.

### Hierarchy
- **Display** (Poppins 600, `clamp`-scaled, line-height ~1.1, letter-spacing -0.02em): hero headlines. `text-wrap: balance` applied.
- **Headline** (Poppins 600, line-height ~1.2): section headers. Sentence case, not Title Case.
- **Title** (Poppins 600 / Inter 600): card and feature titles.
- **Body** (Inter 400, line-height ~1.6): paragraphs; cap measure at 65–75ch.
- **Label** (Geist Mono 500, letter-spacing ~0.02em): eyebrows, kickers, small technical labels.

### Named Rules
**The Sentence-Case Rule.** Headers are sentence case. Title Case reads like a 2014 SaaS template.

**The Tabular Figures Rule.** Any stat or figure (`stat-band`, `value-pillars`) uses `tabular-nums` so numbers don't jitter across rows.

## 4. Elevation

Flat by default, with soft tinted shadows appearing on state and on raised cards — depth is conveyed through purple-tinted shadow and one subtle border step (Card White on Cool Paper), never black drop-shadows or glassmorphism.

### Shadow Vocabulary
- **Card hover** (`hover:shadow-xl` tinted `shadow-brand-500/10`, with `-translate-y-1`): cards lift slightly and warm on hover, never at rest.
- **Button primary** (`shadow-sm shadow-brand-700/30`): a faint purple-tinted seat under primary buttons.
- **Nav / menu panel** (`shadow-2xl shadow-brand-950/10`): dropdown panels float on a deep-but-tinted shadow.
- **Glow** (`box-shadow: 0 14px 48px -10px rgba(124,77,255,0.55)`): reserved, used sparingly on a single hero/product accent — not decoration.

### Named Rules
**The Tinted-Shadow Rule.** Shadows are purple-tinted (`brand-*`/alpha), never neutral black. A black drop-shadow reads cheap against this palette.

**The Flat-At-Rest Rule.** Surfaces are flat at rest; elevation is a response to state (hover, focus, open), not a default coat.

## 5. Components

### Buttons
- **Shape:** fully rounded pill (`rounded-full`), `px-5 py-2.5` (`.btn-lg` → `px-6 py-3`), semibold, `gap-2`, 200ms ease-out.
- **Primary:** `brand-600` fill, white text, faint `brand-700/30` shadow; hover → `brand-700` + `-translate-y-0.5`, active returns to baseline.
- **Secondary:** Card White fill, hairline border, ink text; hover borders `brand-300` and text goes `brand-foreground`.
- **Ghost:** transparent, ink text, hover fills `muted`.
- **On dark:** `btn-white` (white fill, `brand-950` text) and `btn-outline-light` (white/25 border) for the Obsidian CTA band.
- **Focus:** every button shows `:focus-visible` ring — 2px `brand-500` ring + offset.

### Chips / Pills / Badges
- **Pill:** hairline border, Card White fill, `muted-foreground` text, `rounded-full`, `text-xs` — for metadata and filters.
- **Badge:** `brand-50` fill, `brand-700` text, `rounded-md` — small status/label token; the one place purple fills a shape.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (1.5rem).
- **Background:** Card White on Cool Paper — one subtle step of separation.
- **Shadow Strategy:** flat at rest; `.card-hover` lifts `-translate-y-1`, borders `brand-200`, adds tinted `shadow-xl shadow-brand-500/10`.
- **Border:** hairline (`border-border`) at rest.
- **Internal Padding:** `p-6` (1.5rem).

### Inputs / Fields
- **Style:** Card White background, hairline border, medium radius.
- **Focus:** 2px `brand-500` `:focus-visible` ring + offset (site-wide focus treatment), not a raw browser outline.
- **Placeholder:** must hold ≥4.5:1 contrast — no faint gray placeholder.

### Navigation
- **Style:** light bar, Geist Mono / Inter labels, `muted-foreground` links going ink on hover; mega-menu panels are `rounded-2xl` Card White on tinted `shadow-2xl`, links lift into `muted` on hover, with `brand-50` icon chips.
- **States:** hover fills `muted`; chevrons rotate 200ms; mobile collapses to a toggle (class-driven, purge-safe).

### Signature: Value-Pillars Bento
The asymmetric `value-pillars` bento is the house layout and the deliberate antidote to the 3-equal-card grid. Prefer it (and the `feature-split` zig-zag rhythm) over symmetric grids when laying out capabilities.

## 6. Do's and Don'ts

### Do:
- **Do** lead light — Cool Paper hero, one highlighted purple headline word, real audience/product photography.
- **Do** keep purple to ≤10% of a screen: buttons, links, one word, small tokens.
- **Do** reserve `#0b0712` for exactly one CTA band + the footer.
- **Do** use Phosphor icons at one stroke weight with `currentColor`.
- **Do** use tinted (`brand-*`) shadows and the `feature-split` / bento rhythm.
- **Do** keep body text toward Ink, measure at 65–75ch, headers sentence case, figures `tabular-nums`.
- **Do** label the Engage/widget layer as **Preview**; show the live data layer as real UI.

### Don't:
- **Don't** ship a dark purple mesh-gradient hero — "the most common AI design fingerprint."
- **Don't** use purple as a full-bleed wash; it's an accent, not a surface.
- **Don't** use default icon sets (e.g. the old Tabler set) — a "default AI" look.
- **Don't** repeat symmetric three-equal-card grids — "the most generic AI layout."
- **Don't** use light-gray body text "for elegance", black (untinted) drop-shadows, neon, or glassmorphism.
- **Don't** publish invented metrics, or let sports-specific imagery/examples leak onto the horizontal home and `/platform` pages.
- **Don't** name the underlying stack (Jitsu / Airbyte / ClickHouse / PubNub) anywhere in the UI.
