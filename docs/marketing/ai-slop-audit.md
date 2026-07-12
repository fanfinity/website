# Fanfinity Website — AI-Slop Audit (taste-skill)

**Date:** 2026-07-12
**Rubric:** `leonxlnx/taste-skill` anti-slop frontend skill (Sections 0, 4, 9 — the AI-Tells).
**Method:** 4-agent panel, mixed models (2× Opus, 2× Sonnet), each on a different lens; graded against the rubric from live pages (`http://localhost:4000`) + source. Reference bar: Meiro (meiro.io), per the user's comparison.
**Framing:** Site is Jekyll+Tailwind (not React) — React/Motion/RSC rules were NOT applied. Brand purple `#9969ff` is deliberate, so the LILA rule's brand-override applies (we graded *execution*, not the choice).

---

## Scorecard (slop 0 = bespoke, 10 = pure template slop)

| Dimension | Model | Slop score | One-line verdict |
|---|---|---|---|
| **Type / Color / Motion / Theme** | Opus | **1.5 / 10** | Genuinely hand-tuned. Locked single purple accent, harmonised neutrals, no gradient headlines, best-in-class `prefers-reduced-motion`. Not AI-default. |
| **Copy & micro-labels** | Sonnet | **3.5 / 10** | Disciplined and honest (no invented metrics, no filler verbs) — dragged down almost entirely by one pervasive tell: ~50 em-dashes. |
| **Layout & structure** | Opus | **6.0 / 10** | Templated rhythm: an eyebrow on nearly every section + the same 3-equal-card grid repeated across pages. |
| **Imagery** | Sonnet | **6.5 / 10** | 31 of ~45 heroes have no real image; a hand-rolled abstract SVG fills 55+ placements; the homepage hero is a div-built fake product card. |
| **Overall** | — | **≈ 4.4 / 10** | **Not slop at the foundation — slop at the surface.** |

**Bottom line:** Your instinct is half-right. The *craft layer* (color system, type, motion, honesty) is real design work, well above AI-default. What makes it *read* as AI slop is concentrated in three surface signals: **imagery, template rhythm, and em-dash punctuation.** Fix those three and the "slop" feeling largely goes away.

---

## Where Meiro wins (and where we already beat it)

- **Meiro wins on imagery:** one vivid full-bleed hero photograph composited with a *realistic product-UI screenshot*, then clean typographic product cards everywhere else. We answer with a **div-built fake dashboard card** over the hero photo and an **abstract SVG "scattered nodes" placeholder** on ~31 pages.
- **Meiro wins on visual confidence:** every section earns a real visual. Our platform + utility pages are text-on-gradient-blob.
- **We beat Meiro on honesty:** Meiro leans on "+300% / +160% / 4.8/5" numbers; we ship zero invented metrics (a genuine, defensible differentiator — keep it).

---

## Remediation plan

### P0 — Mechanical, no new assets, high ROI (safe to ship now)

1. **Em-dash sweep — the #1 tell (§9.G).** ~50 visible `—` across 35+ files → replace with period / comma / colon. Start with shared includes that render site-wide: `_includes/cta-band.html:6`, `_includes/pillar-cards.html:10`, `_includes/cookie-consent.html:11`. Then pages. (No en-dashes found — good.)
2. **Drop numbered step prefixes (§9.F).** `"1 · Ingest"` … `"6 · Prove"` on 7 platform pages → `"Ingest"` … `"Prove"` (order already conveys sequence). Files: `platform/{architecture,index,engage,data-residency,measure,security,deploy}.html`.
3. **Drop the `01–06` corner numerals** on `value-pillars.html:31` (§9.F "if the user can count, they don't need the label").
4. **Fix the two 2-middle-dot eyebrows (§9.F):** `platform/id.html:41` and `platform/engage.html:37` → drop the `· Live` / `· Preview` suffix (the nav badge already carries state).
5. **No-JS reveal fallback (robustness — the "looks broken" risk).** Every `[data-reveal]` is `opacity:0` until JS reveals it; if JS fails/is slow, content stays invisible. Gate the hidden state behind a `.js` class or `@media (scripting: none){ [data-reveal]{opacity:1;transform:none} }`. `src/main.css:248`.
6. **Housekeeping:** tone down/remove the one `.glow` CTA halo (`src/main.css:221`, the last AI-purple-glow tell); delete dead `.text-gradient-light` + `.dark` token block + `darkMode:'class'` so future edits can't reach gradient-text/theme-flip slop.
7. **Remove the fake-precise `38,412 fans` number** and reconsider the `1 golden record` chip in the homepage hero card (§9.D).

### P1 — Structural, changes the look (needs your sign-off)

8. **Eyebrow restraint (§4.7, the #1 violated rule).** The `.eyebrow` is baked into `hero/feature-split/feature-grid/solution-cards/pillar-cards/value-pillars/proof` includes, so *every* section inherits one (homepage: 13 eyebrows / 17 sections; budget is 6). Strip it from the reusable includes; reintroduce as opt-in, ≤1 per 3 sections.
9. **Break 3-equal-card repetition (§9.C, §4.7).** Keep one 3-up grid per page; convert the rest to 2-col splits, the (already-bespoke) `value-pillars` bento, or horizontal-scroll. De-card the `stat-band` (use `divide-x` columns).

### P2 — Imagery overhaul (needs real assets — no image-gen tool is available in this environment)

10. **Replace the div-based fake hero card** with a real composited product screenshot (the Meiro move). `home-preview.html:119-150`.
11. **Replace `brand-visual.html`** (the abstract SVG, 55+ placements: 12 heroes + 42 body splits) with real product screenshots / generated imagery. Even one real platform screenshot reused beats the repeating node-motif.
12. **Give the ~19 gradient-only heroes a real image**, priority: `demo`, `contact`, `platform/index`, `why-fanfinity`, `solutions/index`, `developers`, `integrations`.

**Kept as strengths (do not "fix"):** the honest no-metrics posture, the locked purple system, the `value-pillars` bento, `faq.html` divide-y, reduced-motion coverage, and the real solutions-vertical photography (12 pages).

---

## Implementation log (2026-07-12)

**P0 — done (verified: 0 visible em-dashes site-wide, clean build):**
- Em-dash sweep: ~36 in page files (2 parallel agents) + footer `descriptor` in `_data/navigation.yml` + 4 pillar bodies in `_data/pillars.yml` + shared includes (`cta-band`, `cookie-consent`, `pillar-cards`) + homepage. **Total visible em-dashes now: 0.**
- Dropped numbered step prefixes (`"1 · Ingest"` → `"Ingest"`) on 7 platform pages; removed the `01–06` corner numerals from `value-pillars.html`.
- Simplified the two 2-middle-dot eyebrows on `platform/id` and `platform/engage`.
- No-JS reveal fallback: added `<html class="js">` guard in `head.html` + scoped `.js [data-reveal]{opacity:0}` in `src/main.css` (content now renders visible if JS fails).
- Toned down the `.glow` CTA halo (0.55 → 0.3 alpha); deleted the dead `.text-gradient-light` class.
- Removed the fabricated `38,412 fans` number from the homepage hero card; labeled it `Illustrative`.

**P1 — done (include-level):**
- Stripped the default `.eyebrow` from the repeated body includes (`feature-grid`, `feature-split`, `pillar-cards`, `solution-cards`); kept it on hero / faq / link-cards / proof / value-pillars (≤1 per section-cluster). Result: `/platform` 10→0 body eyebrows, `/platform/id` 6→2, `/why-fanfinity` 6→3.
- De-carded the `stat-band` (boxed cards → `divide-x` columns).

**Not done — needs your input / assets:**
- **Imagery overhaul (P2 net-new):** no image-gen tool is available in this environment. The 19 gradient-only heroes, the abstract-SVG body panels (42 `feature-split` sections), and a real composited hero screenshot still need sourced/generated assets. Shot-list is in the "P2" section above.
- **Full card-grid diversification (P1 #9):** the 3-equal-card *grids* still exist structurally; converting them to varied layouts per page is bespoke design work, not a safe global edit.
- **Homepage inline eyebrows:** `home-preview.html` section headers are hand-written (not include-driven), so ~8 eyebrows remain there; trimming needs per-section judgment.
- Left in place (low value / small risk): the dead `.dark` token block + `darkMode:'class'`.
