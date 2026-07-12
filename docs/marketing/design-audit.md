# Fanfinity site — design audit vs Meiro

**Method:** [impeccable.style](https://impeccable.style/docs/) phasing — **Evaluate → Refine →
Harden** — with the [taste-skill](https://github.com/leonxlnx/taste-skill) anti-slop rubric as the
line-item checklist. **Benchmark:** [meiro.io](https://meiro.io), viewed live in Chrome (the mature
horizontal-CDP site we model on). Scope: the built **spine** (home, `/platform` + product pages,
`/why-fanfinity`, `/solutions/*`, `/pricing`, `/developers`, `/integrations`, `/demo`).

**Direction set by founder:** light-editorial like Meiro; **Fanfinity purple (#9969ff) kept as ONE
disciplined accent**, not a full-bleed wash; real/open-source imagery; dark reserved for a single
intentional CTA band + footer.

**Severity:** **P1** = blocks "premium/credible" perception · **P2** = major · **P3** = polish/harden.

---

## The one-screen story (Chrome, side by side)

| | Meiro (benchmark) | Fanfinity today | Verdict |
|---|---|---|---|
| Hero surface | light / white, editorial | **dark purple mesh-gradient** | ❌ P1 — the single most-flagged "AI fingerprint" |
| Headline | left-aligned, 1 accent word | centered, purple wash | ❌ P1 |
| Imagery | real photo **+** product UI screenshot | illustrated floating widget mock; **no photography anywhere** | ❌ P1 |
| Home hero mock | generic "High-credit-score" segment card | a **football** prediction ("Who scores next? — Marquez") | ❌ P1 — sports leak on the horizontal home |
| Icons | (its own set) | **Tabler** inline SVG — a "default AI" set | ⚠️ P1 (cheap global win) |
| Layout rhythm | asymmetric, generous whitespace | ~90% symmetric 3-equal-card grids | ⚠️ P2 |
| Accent discipline | one accent (orange), locked | purple as wash + accent, mesh glows | ⚠️ P2 |
| States / motion | — | already strong (focus rings, hover lift, reduced-motion, reveal) | ✅ keep |
| Trust (privacy/terms/cookies) | present | **absent** — for a PDPL-positioned brand | ❌ P1 (credibility) |

Net: the *bones* are good (clean tokens, tinted shadows, semantic HTML, real accessibility, a nice
bento). What reads "AI-built" instead of "premium" is concentrated in **four things**: the dark
purple hero, the missing photography, the default icon set, and the repeated 3-up card grid. Fixing
those four closes most of the gap to Meiro.

---

## Evaluate — findings by dimension

### 1. Color & surfaces — **P1** (biggest single finding)
- **Dark AI-purple-mesh hero as the default surface.** `.bg-hero` / `.bg-mesh` (base `#0b0712` +
  layered radial purple glows, 24s animated drift) fronts the home and most spine pages. taste-skill:
  *"Purple/blue 'AI gradient' aesthetic — the most common AI design fingerprint."* Meiro leads light.
  → **Fix:** light default hero; keep the mesh for **one** CTA band only.
- **Purple used as a wash, not an accent.** The hero bathes the whole viewport in purple. taste-skill
  *color-consistency lock*: pick one accent, use it as an accent. → **Fix:** purple on buttons + one
  highlighted headline word (same-family bold), neutral surfaces elsewhere.
- Shadows are already **tinted purple** (not black) and there is intentional grain/dot-grid — good,
  keep. The problem is *quantity and placement* of dark, not the tokens.
- Files: `src/main.css` (`.bg-hero`,`.bg-mesh`,`.bg-dark-band`,`.bg-soft`), `_includes/hero.html`,
  `_includes/cta-band.html`, and every spine page passing `variant="gradient"`.

### 2. Imagery — **P1**
- **Zero real photography.** Every "visual" is a CSS/illustrated mock. taste-skill: *"Empty, flat
  sections with no visual depth… add high-quality imagery"* and *"real photos over uncanny stock."*
  Meiro pairs a real photo (person, laptop) **with** a product UI card in the hero.
- **Product shown only as floating illustrated widgets.** Reads as concept art, not software.
- → **Fix:** open-source photography (generic **audience / crowd / people-on-phones / live-event** —
  not sport-specific) in the hero media slot and the flattest sections; pair with an **honest
  product-UI card** (Live-layer identity/segment UI can look real; **Engage UI must read Preview**).

### 3. Iconography — **P1 (low-risk global win)**
- **Tabler set**, inline SVG, `stroke-width="2"`, consistent — clean, but a recognizable default.
  taste-skill discourages the default sets; recommends **Phosphor**. → **Fix:** swap the ~31 paths in
  `_includes/icon.html` to Phosphor, **same name keys** so no page edits; keep one stroke weight.

### 4. Layout — **P2**
- **Symmetric 3-equal-card grid repeats** across `feature-grid`, `solution-cards`, `pillar-cards`,
  `link-cards`. taste-skill: *"Three equal card columns… the most generic AI layout."*
- The **`value-pillars` bento** is the exception and is genuinely good — **keep it, propagate the
  idea.** → **Fix:** convert the most-repeated feature-grids on home + `/platform` into a **zig-zag
  `feature-split` rhythm** / asymmetric grid; bottom-align card CTAs; equal list-start Y.
- Container `max-w-7xl`, section rhythm, whitespace are fine.

### 5. Typography — **P3**
- Poppins (headings) has character — good. **Inter** body is the flagged "default," but paired with
  Poppins it's acceptable; **defer** any font migration.
- **Missing `tabular-nums`** on stat figures (`stat-band`, `value-pillars`) — data jitters.
- Sweep any **Title Case** headers → sentence case; `text-wrap: balance` already applied. → **Fix:**
  tabular-nums + a header-case pass.

### 6. Interactivity & states — mostly ✅, one **P2 gap**
- Strong already: `:focus-visible` brand ring, hover lift on cards, `link-arrow` gap animation,
  `prefers-reduced-motion` disables motion, IntersectionObserver reveal with stagger. **Keep.**
- **Gap: the `/demo` form has no validation, loading, error, or success states** (and is not wired —
  honest disclaimer present). taste-skill *Strategic Omissions*. → **Fix:** client-side validation,
  loading + inline error + confident (no-exclamation) success in `assets/js/main.js`.

### 7. Component patterns — **P3**
- Repeated **generic card** (border + shadow + bg) — fine where elevation earns it; thin it where it
  doesn't. **Pricing FAQ = accordion** (`details/summary`) — taste-skill discourages; low priority.
- **Footer = 6-column link farm** — taste-skill: *simplify to main paths + legal.* → **Fix:** trim +
  add the legal row (see §8).

### 8. Strategic omissions (Harden) — **P1 credibility / P3 effort**
- **No privacy policy, no terms, no cookie consent** — glaring for a brand whose wedge is **PDPL /
  in-Kingdom data sovereignty.** → **Fix:** `privacy.html` + `terms.html` (PDPL-aware draft),
  footer legal links, privacy-first **decline-by-default** cookie banner.
- **No `og:image`** — social shares render blank. → **Fix:** add asset + meta.
- **~19 nav links dead-end into "In progress" stubs** — noted; **content pass, out of scope here.**

---

## Refine → Harden — prioritized execution list

**P1 (max impact / min risk, in taste-skill fix-order):**
1. Icon set → **Phosphor** (`_includes/icon.html`, global, no page edits).
2. **Light-flip** the hero: light default + left-aligned two-column (copy + media slot) in
   `_includes/hero.html`; retire `variant="gradient"` on home + spine; keep **one** dark CTA band.
3. Purple → **single accent** (buttons + one headline word); drop the full-bleed wash.
4. **Real open-source imagery** in hero + flattest sections; honest product-UI card; **de-sport the
   home hero mock**.
5. **Trust:** privacy + terms + cookie banner + `og:image`.

**P2:**
6. Layout variety — zig-zag/asymmetry on the repeated grids; bottom-align card CTAs.
7. `/demo` form states.
8. `tabular-nums` + header sentence-case + AI-cliché scrub ("Seamless/Unleash/Elevate/Next-gen").

**P3:** thin the footer link farm; reconsider the pricing FAQ pattern.

**Guardrails during execution:** Engage stays **Preview**; no Jitsu/Airbyte/ClickHouse/PubNub;
no invented metrics/logos; "(to confirm)" intact; sport lexicon on `/solutions/sports` only.

**Out of scope (content, not design):** fleshing stub pages; public-launch flip (`home: /`);
font migration.

---

## Execution status (Refine → Harden shipped)

**Done & verified in Chrome (2026-07-11):**
- ✅ **Icons → Phosphor** (MIT), pulled via Iconify, same name keys — `_includes/icon.html`. 0 old
  Tabler glyphs, 102 Phosphor on home.
- ✅ **Light-flip:** `_includes/hero.html` rewritten to lead light (flips all ~44 pages); home hero,
  connected-stack, and widgets gallery de-darkened; `feature-split` fallback panel now light.
  Dark now reserved for the CTA band + footer (+ the one code terminal).
- ✅ **Purple = single accent** (buttons + one headline word); dark mesh wash retired from the spine.
- ✅ **Real imagery** (Unsplash License, `assets/img/` + `CREDITS.md`): home hero = real crowd photo
  with the live-segment product card overlapping (Meiro pattern); sports/media/brands heroes carry
  contextual photos. Home hero's **football mock replaced** with an honest horizontal segment card.
- ✅ **Trust:** `privacy.html` + `terms.html` (PDPL-aware), footer legal row, privacy-first
  **cookie consent** (decline-by-default, working), `og:image` default set in `_config.yml`.
- ✅ **Demo form:** client-side validation + inline errors + loading + honest confirmation
  (no faked delivery) — `demo.html` + `assets/js/main.js`.
- ✅ `tabular-nums` on stats; AI-cliché scrub (none found in copy); headers already sentence-case.

**Deferred / needs the user:**
- ⏳ **`og:image` requires a Jekyll server restart** (config isn't hot-reloaded); it currently points
  at `home-hero.jpg` as a stand-in — replace with a branded **1200×630** card before launch.
- ⏳ Deeper **layout zig-zag** on the remaining 3-up card grids (the bento + splits + new asymmetric
  hero already broke up the worst of it — lower priority now).
- ⏳ Legal copy is a **draft for counsel to finalize** (privacy/terms).
