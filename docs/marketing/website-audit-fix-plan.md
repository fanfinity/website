# Fanfinity Website — Audit & Ready-to-Use Fix Plan

**Date:** 2026-07-12
**Scope:** All ~34 live pages at `http://localhost:4000/` — crawled via Chrome + 4 parallel audit agents, then filtered through a simulated marketing-council lens (Ogilvy / Dunford / Handley / Brunson, with Sutherland as dissenter).
**Method:** Rendered-HTML fetch of every page, asset status checks, source-file review, and visual inspection of the homepage and the two suspected-broken pages.

> Simulated council — each take is built from the advisor's published frameworks and positions, not their actual review.

---

## Overall verdict

The site is **~85% launch-ready and unusually honest** — build-state labeling ("Live" vs "Preview") is disciplined, there are **no broken content images**, **no dead nav/footer links**, **no banned vendor names** (Airbyte/ClickHouse/Jitsu), **no "Hubreeh" leftovers**, and **no invented customers/logos/testimonials** on the core pages. The `/platform/engage` page is a model of honest mockup labeling.

But **two pages are functionally broken by the same one-character YAML bug**, the **lead-capture forms don't submit anywhere**, and **`/integrations` names an active sales prospect (beIN/TOD) as a shipped integration** — which is both an honesty violation and a live-deal risk. Those must be fixed before this is "ready to use."

---

## P0 — Blockers (fix before anyone sees the site)

### 1. `/developers` is a completely broken, unstyled page — **VISUALLY CONFIRMED**
- **Symptom:** Serves as a raw static file: Times New Roman serif text, no header/nav, no footer, no CSS, no `<title>`/meta/OG (zero SEO), and the "An API-first platform" + "Integration model" feature grids render **empty**. Effective content ≈ 89 words.
- **Root cause:** `developers.html` line 5 — unquoted colon in front matter breaks YAML parsing, so Jekyll ignores the layout **and** the `permalink`:
  `description: Fanfinity is an API-first, multi-tenant platform: a REST API and client SDKs...`
- **Fix (one line):** wrap the value in quotes →
  `description: "Fanfinity is an API-first, multi-tenant platform: a REST API and client SDKs, with a producer surface your content team runs."`
- **File:** `developers.html:5`

### 2. `/why-fanfinity` — two core value-prop grids + entire FAQ silently missing — **VISUALLY CONFIRMED**
- **Symptom:** Same YAML-colon bug. Layout applies, but `page.flow`, `page.why`, and `page.faqs` never populate. Live result: the "Collect → Resolve → Activate → Prove" grid is **empty**, the "Three wedges" grid is **empty**, and the **6-item FAQ never renders** (including the honesty-critical "Is the engagement layer live?" answer). Page collapses to ~213 words.
- **Root cause:** `why-fanfinity.html:5` — `description: Fanfinity is the real-time, in-region fan CDP: one consented...`
- **Fix:** quote the value →
  `description: "Fanfinity is the real-time, in-region fan CDP: one consented first-party fan graph..."`
- **File:** `why-fanfinity.html:5`

### 3. Defensive: quote **every** front-matter `description:` (and any colon-bearing string)
- Two pages already shipped this exact bug; `contact.html`, `demo.html`, `pricing.html` only escape it because their descriptions happen to lack a mid-value colon. Quote them all so this class of bug can't recur.
- **Files:** every root/`platform/`/`solutions/` `*.html` with a `description:` line.

---

## P1 — Honesty & trust (violates the project's own grounding rules; some carry live-deal risk)

### 4. `/integrations` — remove the invented "100+ connectors" metric
- Stated as fact in 3 places (meta description, hero subtitle, section heading "100+ connectors across your stack") — while the copy itself admits "the full directory lands in the next iteration." No verifiable catalog exists.
- **Fix:** drop the number → "Connect the tools you already run" / "the connectors you already run."
- **File:** `integrations.html:5, 18, 26`

### 5. `/integrations` — **remove beIN & TOD from the connector list** (active prospect ≠ shipped integration)
- Line 8 lists *"beIN, TOD, and OTT platforms"* as an existing "Streaming & OTT" connector. beIN/TOD are an **active due-diligence prospect**, not a live integration or customer. Presenting them as shipped invents a customer relationship — and could surface awkwardly inside the actual beIN deal.
- **Fix:** describe generically → "Major OTT and broadcast platforms: unify viewing behavior with the rest of the fan record."
- **File:** `integrations.html:8`

### 6. Lead forms capture **zero leads** — the primary conversion path is dead
- `_config.yml` has `forms.endpoint: ""`, so both `/contact` and `/demo` forms fall back to an honest "not connected yet" JS message instead of submitting. Forms validate but deliver nowhere.
- **Fix:** set `forms.endpoint` to a real Formspree/Basin/Netlify endpoint (a one-line switch). Test an end-to-end submission before launch.
- **File:** `_config.yml` → `forms.endpoint`

### 7. `/solutions/marketing` — unlabeled present-tense claims for the mockup layer
- Describes a "drag-and-drop journey canvas" and "point-and-click segment builder" as present capabilities. The engagement/journey UI is part of the **design-preview (mockup) layer**, not built — this is the one vertical page with unlabeled present-tense UI claims.
- **Fix:** confirm against build-state; if not live, add "(Preview)" as done elsewhere.
- **File:** `solutions/marketing.html`

### 8. `/developers` (post-fix) — REST API / SDKs / Widgets / Rewards presented as live
- Copy promises "REST API with OAuth 2.0," "client SDKs (iOS/Android/Web)," "Widgets, Rewards, Leaderboards." These are engagement-layer capabilities = mockup. A live, buildable API for widgets over-claims.
- **Fix:** add a preview/roadmap qualifier on the widget/rewards API surface; keep the data/identity API claims as live.
- **File:** `developers.html`

### 9. `/pricing` — verify the "(Live)" labels on Activation & Measurement
- Module grid tags **Activation (Live)** and **Measurement (Live)** alongside **Fan identity & data (Live)**. Only the data/identity/CDP layer is documented as confirmed live. If Activation/Measurement aren't generally available, downgrade to "(Preview)"/"(Beta)."
- **File:** `pricing.html`

---

## P2 — Content completeness & mismatches (page promises more than it renders)

### 10. `/industries` — hero names 7 verticals, page renders only 3
- Hero: "extensible to retail, banking, media, travel, iGaming, and telco"; but `link-cards` is called with `only="By industry"`, rendering just Sports/Media/Brands. Self-contradiction on a page titled "All industries."
- **Fix:** drop `only="By industry"` to render all groups, or add a second card group for the remaining verticals.
- **File:** `industries.html:19`

### 11. `/resources` — hero promises a content library that doesn't exist
- Hero + meta advertise "Blog, customer stories, the free Digital Scanner, webinars, developer docs… real customer results." The grid renders **one card: "Developers & Docs."** There are (correctly) no customer stories to show.
- **Fix:** either add real cards (Scanner, the `compare/*` pages, developers) to the Resources nav group, or rewrite the hero to match the single real link and delete "real customer results / customer stories."
- **File:** `resources.html` + `_data/navigation.yml` (Resources children)

### 12. `/demo` — label the preview items
- Bullet lists "widgets, loyalty, rewards, identity, and analytics" flat, with no preview qualifier (pricing labels the same items "(Preview)").
- **Fix:** add "(in design preview)" to widgets/loyalty/rewards.
- **File:** `demo.html`

---

## P2 — Polish, imagery & de-duplication

### 13. Imagery is sparse — most pages are text-on-gradient
- Only `about.jpg`, `platform-data-residency.jpg`, and `home-hero.jpg` are real content images. **8 of 9 platform pages and most solution/utility pages have no content imagery.**
- **Highest-value adds:** an **architecture/pipeline diagram** on `/platform/architecture` (a text-card pipeline that begs for a diagram); a hero visual on the `/platform/` hub; and product/UI preview visuals (clearly Preview-labeled) on `/platform/engage`.
- **Files:** `platform/architecture.html`, `platform/index.html`, `platform/engage.html`, others.

### 14. Cut the mail-merge "tells" across the 11 solution verticals
- ~35–40% of each vertical page is shared boilerplate. Most visible repeats: **"Book a walkthrough with our team."** closes 9 of 11 `cta-band`s verbatim; the "compliance is not a bolt-on," "residency never blocks the deal," and "no third-party cookies in the path" stock phrases recur across 3–4 pages each.
- **Fix:** vary the CTA closer and rotate the stock phrases so verticals don't read as generated from one template.
- **Files:** `solutions/*.html`, `_includes/cta-band.html`

### 15. Platform — dedupe the "Sovereignty without the trade-offs" section
- Near-identical feature-split appears on both `platform/data-residency.html` and `platform/deploy.html` (one click apart).
- **Fix:** differentiate — lead with infrastructure control on `deploy`, PDPL/regulator proof on `data-residency` — or cut one.

### 16. Thin hub/router pages
- `/solutions/` and `/platform/` hubs are mostly card routers. Add one paragraph of original framing to each.
- **Files:** `solutions/index.html`, `platform/index.html`

### 17. Global / SEO / footer
- **OG image** uses an absolute prod URL (`https://fanfinity.io/assets/img/home-hero.jpg`) that 404s until the prod domain is live, and one generic image is reused for every page incl. Privacy/Terms. Confirm prod serves the path; consider per-section OG images.
- **No social links** in the footer — add real profiles or leave intentionally.
- **Privacy/Terms** are real, substantive pages but use bare "Fanfinity" with no registered legal entity/jurisdiction address — flag for counsel before real data collection.

---

## Council synthesis (the lens over the plan)

**Ogilvy — facts before flourish.** "The consumer isn't a moron." Two flagship pages render blank grids and a raw serif `/developers` page; the "100+ connectors" is a number you can't defend. Fix what's broken and what you can't prove *first* — a factual claim you can't stand behind poisons the credible ones around it. **Bottom line:** ship nothing with an unverifiable number or an empty section on it.

**Dunford — positioning integrity.** The honest "Live vs Preview" labeling *is* the differentiation against incumbents who over-promise — protect it. The two leaks (unlabeled journey canvas on `/solutions/marketing`, live-API claims on `/developers`) quietly erode the exact posture that makes Fanfinity distinct. **Bottom line:** every capability claim must carry its true build-state, no exceptions.

**Handley — nobody reads boilerplate.** 11 verticals from one template with a 9×-repeated closing line reads as mail-merge; `/resources` promises a library that's one link. Thin-but-honest beats padded, but "empty grid" and "hero that lies about what's below it" are craft failures. **Bottom line:** make each vertical earn its page, and make every hero cash the check it writes.

**Brunson — the funnel has no bucket.** Every page routes to "Book a Demo," but the form submits nowhere. You're driving traffic into a bucket with no bottom. **Bottom line:** wire `forms.endpoint` before you send a single visitor.

**Sutherland (dissenter) — don't over-sanitize.** The instinct to "professionalize" could strip the candor ("Fanfinity is early, and honest about it") that is itself persuasive to a sophisticated buyer like beIN. Fix the broken and the false — but keep the honesty; it's a feature, not an apology. **Bottom line:** repair, don't launder.

**Chair's synthesis:** The disagreement is narrow and the priority order is clear. **Do, in order:** (1) fix the two YAML bugs and quote all descriptions; (2) wire the form endpoint; (3) purge the beIN/TOD + "100+" claims and the unlabeled preview leaks. That alone makes the site truthful and functional. Then (4) resolve the hero-vs-content mismatches on `/industries` and `/resources`, and (5) invest in a real architecture diagram and de-templated vertical copy. **Tripwire:** watch for any *new* capability claim shipping without a build-state label — that's the failure mode most likely to recur and the one that costs the most with a diligence-stage buyer.

---

## Fix checklist (copy-paste worklist)

- [ ] `developers.html:5` — quote `description` (unbreaks whole page)
- [ ] `why-fanfinity.html:5` — quote `description` (restores 2 grids + FAQ)
- [ ] Quote all remaining front-matter `description:` values defensively
- [ ] `_config.yml` — set `forms.endpoint` to a real endpoint; test submission
- [ ] `integrations.html` — remove "100+ connectors" (3 spots) and beIN/TOD (line 8)
- [ ] `solutions/marketing.html` — Preview-label the journey canvas/segment-builder claims (or confirm live)
- [ ] `developers.html` — Preview/roadmap-label the widget/rewards API surface
- [ ] `pricing.html` — verify Activation/Measurement "(Live)" vs downgrade
- [ ] `industries.html:19` — render all verticals (drop `only="By industry"`) or add a second group
- [ ] `resources.html` — match hero to real links (or add real resource cards)
- [ ] `demo.html` — add "(in design preview)" to widgets/loyalty/rewards
- [ ] Add architecture diagram + hub hero imagery; add Preview-labeled UI visuals to engage
- [ ] De-templatize vertical CTA closers + stock phrases; dedupe platform "Sovereignty" section
- [ ] Global: fix/confirm OG image path; decide on footer social links; counsel adds legal entity to Privacy/Terms
