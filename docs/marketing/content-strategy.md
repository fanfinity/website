# Fanfinity Website — Content Strategy

> Internal foundation doc (Jekyll-excluded, like everything in `docs/`). The canonical
> product/positioning anchor is `.agents/product-marketing.md` — this file operationalizes it
> into a website content plan. Authored with the `content-strategy` + `copywriting` skills.
> Last updated 2026-07-11.

---

## 1. North-star positioning

**Fanfinity is a real-time, in-region fan data platform (CDP).** We collect fragmented fan
signals, resolve them into one consented first-party fan graph, activate it across every channel,
and prove the outcome.

**The model is horizontal — Meiro, not a sports point-tool.** Per the founder: *"sports is just
one [vertical], not the focus we serve."* So the shared spine (home, `/platform`, the product
pages, `/why-fanfinity`, `/pricing`) speaks the **generic fan-data-platform** story. Sports is
**one vertical among many** (media, brands, retail, banking, iGaming, travel, telco) — a real and
well-supported vertical, but not the exclusive narrative.

- **Lead noun stays "fan."** It is our brand word and the through-line across verticals (a
  broadcaster's audience, a brand's community, a bank's members are all "fans" in our framing).
  It does **not** imply sports on shared pages.
- **The master narrative — the one line every page ladders up to:**
  *Collect every fan signal → resolve one consented, in-region profile → activate it everywhere → prove the value.*
- **Origin, not ceiling.** Sports & live entertainment is where the highest-engagement fan data
  lives, so it's our proof-richest vertical — but the platform is industry-general.

### Brand voice (from `product-marketing.md`)
Confident, clear, outcome-first. Direct and conversational; lead with what the buyer gets, not how
it's built. Concrete over clever. No exclamation points, no buzzwords ("seamless", "cutting-edge",
"leverage"), no API-internal jargon as the lead.

---

## 2. Honesty guardrails (these override persuasion every time)

These come from `CLAUDE.md` + `product-marketing.md` and are **non-negotiable** — the
`copywriting` skill's "honest over sensational" rule, enforced hard because we are pre-revenue:

1. **No invented proof.** Zero customers, logos, testimonials, or metrics exist. Never publish a
   number we haven't independently measured. **When adapting Meiro copy, strip every metric** —
   Meiro's pages are saturated with them (+300% audience, +30% conversion, 4.8/5 G2, 184ms, 50–80%
   savings, 300+ integrations). Transplant the *messaging structure*, never the figures.
2. **Data layer is LIVE; engagement widgets are a design Preview.** Label Fanfinity Engage and any
   widget visual as **Preview / in design**. Never imply the engagement layer ships today.
3. **Never name the stack.** No Jitsu / Airbyte / ClickHouse / PubNub. Say "connector framework",
   "columnar analytical warehouse", "self-managed in-region", "real-time streaming layer".
4. **Unproven differentiators are hypotheses.** Label them "(to confirm)". We model our feature
   set on incumbents, so our edge is **posture** (ownership, in-region residency, cost model,
   deterministic proof), not a longer feature list.
5. **No pricing numbers.** Pricing is TBD — publish the *philosophy*, route to a demo.
6. **The perf numbers are a different project.** 1000 req/s, sub-200ms, Kafka, zero-data-loss come
   from an unrelated analytics brief — never present as Fanfinity product facts.

---

## 3. Content pillars (the 4 topics we own)

Each pillar maps to product capability and to a buyer's job-to-be-done. They are the spine of the
site and the seed list for future blog/resource clusters.

| # | Pillar | The claim | Anchored on | Backed by |
|---|--------|-----------|-------------|-----------|
| 1 | **First-party fan identity & data control** | One consented, real-time golden fan profile you own — not rented. | `/platform/id` (Live) | Live CDP; Profiles/Identity epics |
| 2 | **Real-time activation everywhere** | Reach known fans across WhatsApp, email, push & paid media the moment behavior changes. | `/platform/activate` | Segmentation/journey epics + Engage (Preview) |
| 3 | **Proof & monetization** | Verified reach and exposure-to-outcome — answer sponsors with names, not impressions. | `/platform/measure` | Analytics/Sponsorship epics |
| 4 | **Sovereignty & in-Kingdom / PDPL** | Resolved and stored in-Kingdom, PDPL-governed at the data layer — deploy in your cloud, on-prem, or managed. | `/why-fanfinity`, `/platform/deploy` | The sharpest, most defensible wedge |

**Pillar 4 is our sharpest edge.** It's the one thing horizontal CDPs (Segment/RudderStack) and
engagement tools (LiveLike/Monterosa) structurally can't match for a Saudi buyer. Source material:
`../research/meiro/miscellaneous/cdp-for-saudi-arabia.md` (PDPL, in-Kingdom cloud, WhatsApp-first
channel logic). Lean into it on every shared page.

---

## 4. Messaging hierarchy

```
Master narrative:  Collect → Resolve → Activate → Prove, in-region, on one fan graph you own.
        │
        ├── Home ............ the whole loop, horizontal, sports as one of several verticals
        ├── /platform ....... the four products as one connected system
        │     ├── /platform/id ........ Pillar 1 (Live)
        │     ├── /platform/engage .... engagement layer (Preview)
        │     ├── /platform/activate .. Pillar 2
        │     └── /platform/measure ... Pillar 3
        ├── /why-fanfinity .. Pillars 1+4, the comparison hub
        ├── /pricing ........ philosophy only (no numbers)
        └── /solutions/* .... one vertical each; SPORTS carries all sport language
```

Every page: **one primary idea**, laddering to the master narrative, with a single primary CTA
(**Book a Demo → `/demo`**) and one secondary path (usually "Explore the platform").

---

## 5. Sports-isolation rules

The single most important editorial rule this pass. **Sport-specific language is quarantined to
`/solutions/sports`** (and, later, sports use-cases / the WC2026 deck). Everywhere else, use the
horizontal equivalent.

| Sports lexicon (sports page only) | Horizontal equivalent (everywhere else) |
|---|---|
| matchday, kickoff, halftime | live moment, live event, the moment it happens |
| season, season-long | over time, lifecycle, recurring |
| league, club, team, franchise | organization, rights-holder, brand |
| stadium, in-venue | on-site, venue, physical touchpoint |
| spoiler-safe, playback-position sync | (keep only where technically relevant, e.g. broadcast/media) |
| second-screen, fans in the stands | audience, viewers, participants |
| trophy/leaderboard/rivalry framing | gamification, loyalty, rewards |

**"Fan" itself is allowed everywhere** — it's the brand noun, not sports-specific.

### Shared-page edits this rule forces (the "de-sport" pass)
- `home-preview.html` hero — eyebrow `Sovereign customer platform · built for sports` → horizontal
  (`The real-time fan data platform`); subtitle drops "built for sports & entertainment" as its lead.
- `_includes/solution-cards.html` default heading `Built for sports first — ready for every
  industry` → vertical-neutral (`One platform, every fan-driven industry`).
- `platform/index.html` differentiator `Sports-built, industry-ready` → horizontal
  (`Fan-native core, every industry`).
- Keep sports as the **first solution card and the demo-form default** — it stays a first-class
  vertical, just not the site's thesis.

---

## 6. Meiro-adaptation map (source → target)

Meiro's copy is ~85% generic CDP messaging — directly adaptable. Its industry pages mostly get
swapped (Meiro has **zero** sports content). Strip all metrics on the way in.

| Meiro source (`research/meiro/…`) | Fanfinity target | Keep (structure/message) | Strip |
|---|---|---|---|
| `HOME.md` — "From customer data to customer context" | `home-preview.html` | 3-layer collect→resolve→activate→prove narrative; "deploy anywhere"; "the full loop" | +300%/+160%/+330%, 4.8 G2, all client logos |
| `product/product_identity-resolution.md` | `platform/id.html` | 5 pillars: addressability, real-time stitching, flexible definitions, graph model, unlimited rules; anonymous→known | +30%/x3/x2.3/+92%, cart-abandon examples |
| `product/product_single-customer-view.md`, `product_composable-cdp.md` | `platform/id.html`, `platform/index.html` | golden profile, composable/warehouse-friendly, IT-governed, deploy anywhere, consent records | logos, benchmarks |
| `product/product_meiro-engage.md` | `platform/activate.html` | channels (email/push/SMS/WhatsApp/web), journey canvas, real-time decisioning, "your campaigns are only as good as your data layer" | Piper AI-agent, +260%/-35%/+20%, retail use-case metrics, MCP claims |
| `miscellaneous/pricing.md` | `pricing.html` | philosophy: volume not per-active-user, modules not feature-gates, same features any deployment, soft bands, unlimited seats, smooth tiers | 50–80% savings claim, "30-day free trial", tier specifics |
| `miscellaneous/cdp-for-saudi-arabia.md` | `why-fanfinity.html` residency + `platform/id` | PDPL/in-Kingdom residency, "data of individuals in KSA stays in-Kingdom", WhatsApp-first channel logic, private deployment vs SaaS | named cloud-region launch dates |
| `miscellaneous/industries_media.md` | `solutions/media.html` | anonymous audiences → known subscribers, audience monetization, subscription/content personalization | 92.1%/41%/10.7% metrics |
| *(no Meiro sports content exists)* | `solutions/sports.html` | write from Fanfinity's own epics + club decks | n/a |

**Adaptation method per page:** draft with `copywriting` (benefits over features, specificity,
customer language) → refine with `copy-editing` Seven Sweeps (esp. Sweep 4 "Prove It" — where we
*remove* claims rather than fabricate proof) → gut-check value-prop clarity and objection handling
with `cro`.

---

## 7. Per-page copy briefs (this pass — the core spine)

Each brief: **goal · primary JTBD/keyword · section skeleton · Meiro source · honesty flags.**

### `home-preview.html` — Homepage
- **Goal:** communicate the horizontal loop; route by intent (platform / solutions / demo).
- **JTBD:** "I have fragmented fan data and can't act on it in real time."
- **Skeleton:** horizontal hero → value pillars (de-sported) → collect→resolve→activate→prove flow
  → engagement widget library (Preview) → measure/monetization → by-team → solution cards (sports
  first, neutral heading) → developer band → CTA.
- **Source:** `HOME.md`. **Flags:** strip metrics; widgets labeled Preview; sports language out of hero.

### `platform/index.html` — Platform hub
- **Goal:** frame the four products as one connected system (no ETL between them).
- **JTBD:** "Do I need five vendors or one platform?"
- **Skeleton:** hero → pillar-cards (ID/Engage/Activate/Measure) → Deploy & trust link-cards →
  4 differentiators (de-sported: identity+engagement, deterministic proof, sovereign, fan-native core).
- **Source:** `product_composable-cdp.md`. **Flags:** "Fan-native core" replaces "Sports-built".

### `platform/id.html` — Fanfinity ID (Pillar 1, **Live**)
- **Goal:** the flagship live product — one consented golden fan profile, resolved in real time.
- **JTBD:** "Turn anonymous, fragmented touchpoints into one profile I own and can govern."
- **Skeleton:** hero (Live) → what it is (golden profile) → 5 pillars of identity resolution
  (feature-grid) → consent & governance / in-Kingdom residency split → "connect your data"
  connector-framework section (generic, never name the tool) → CTA to activate/measure.
- **Source:** `product_identity-resolution.md` + `product_single-customer-view.md` +
  `cdp-for-saudi-arabia.md`. **Flags:** strip metrics; connector framework unnamed.

### `platform/engage.html` — Fanfinity Engage (**Preview**)
- **Goal:** describe the *designed* engagement/loyalty layer honestly, without implying GA.
- **JTBD:** "Turn passive audiences into active, returning participants."
- **Skeleton:** hero (Preview badge) → honest preview banner → what's designed (widgets,
  gamification, loyalty, rewards) → what's live beneath it (Fanfinity ID) → CTA to a demo.
- **Source:** the widget epics. **Flags:** "in design, not yet generally available" stays prominent.

### `platform/activate.html` — Fanfinity Activate (Pillar 2)
- **Goal:** real-time activation across channels from one governed profile.
- **JTBD:** "Reach the right fan on the right channel the moment behavior changes."
- **Skeleton:** hero → "your campaigns are only as good as your data layer" problem/solution →
  channels (WhatsApp, email, push, web, ad audiences) → journeys & real-time decisioning →
  segmentation → CTA.
- **Source:** `product_meiro-engage.md`. **Flags:** drop Piper/AI-agent + all metrics; keep channels generic (WhatsApp-first is a real KSA insight).

### `platform/measure.html` — Fanfinity Measure (Pillar 3)
- **Goal:** deterministic proof + sponsor/partner portal — verified reach, not impressions.
- **JTBD:** "Prove sponsorship/marketing outcomes with names, not impressions."
- **Skeleton:** hero → verified reach vs impressions → exposure-to-outcome attribution → sponsor
  portal / premium audiences → CTA.
- **Source:** measure spotlight on home + Sponsorship epics. **Flags:** no invented ROI numbers.

### `why-fanfinity.html` — Comparison hub (Pillars 1+4)
- **Goal:** sharpen the horizontal + in-region wedge; route to `/compare/*`.
- **Already fleshed** — this pass: tighten to the 4 pillars, strengthen the PDPL/in-Kingdom wedge
  from `cdp-for-saudi-arabia.md`, keep "(to confirm)" labels. **Source:** `cdp-for-saudi-arabia.md`.

### `pricing.html`
- **Goal:** disarm "how much / will it tax our growth?" without publishing numbers.
- **Skeleton:** hero → pricing philosophy (volume not per-active-user, modules, same features any
  deployment, unlimited seats, soft bands) → what's included → FAQ → CTA.
- **Source:** `pricing.md`. **Flags:** no numbers; drop the 50–80% claim; no "free trial" promise.

### `solutions/sports.html` — the ONE full-sports page
- **Goal:** the flagship vertical proof; absorbs any sport specifics pulled from shared pages.
- **Already fleshed** — polish only; this is where matchday/season/spoiler-safe language belongs.

### `solutions/media.html`
- **Goal:** turn anonymous audiences into known, monetizable subscribers.
- **JTBD:** "Identify my audience, grow subscriptions, monetize attention post-cookie."
- **Skeleton:** hero → anonymous→known → subscription & retention → audience monetization →
  spoiler-safe delivery (legit here) → CTA. **Source:** `industries_media.md`. **Flags:** strip metrics.

### `solutions/brands.html`
- **Already fleshed** — light copy-edit for consistency with the de-sported spine.

---

## 8. Funnel mapping & what stays stub

| Stage | Modifier intent | Pages (this pass) | Status |
|---|---|---|---|
| Awareness | "what is a fan CDP", "in-region CDP Saudi" | home, `/why-fanfinity`, (blog later) | spine live; blog = stub |
| Consideration | "vs Segment/LiveLike", "composable CDP" | `/platform/*`, `/why-fanfinity`, `/compare/*` | platform live; compare = stub (next pass) |
| Decision | "pricing", "demo", "book" | `/pricing`, `/demo` | live |

**Deliberately stubbed until real:** `/compare/*` battlecards, the other verticals
(retail/banking/igaming/travel/telco) + team pages, resources (blog/webinars), company pages, and
the deep trust pages (`/platform/{data-residency,security,architecture}`). No fake customers,
`/customers` stays a neutral shell.

---

## 9. SEO / AEO note (light — public site is still "Coming Soon")

- **Title/H1 pattern:** `{Outcome} — {Category}` or `Fanfinity {Product}`. Put the primary term
  (fan data platform, identity resolution, in-region CDP, sponsorship measurement) in title, H1,
  first paragraph, URL.
- **AEO:** the horizontal + in-region angle is our most citable, differentiated claim — state it
  plainly and consistently across pages so LLMs attribute the category to us.
- Pre-launch, `home: /home-preview` and `/` is the Coming Soon gate — nothing here is indexed yet,
  so "(to confirm)" labels carry no SEO cost. Revisit meta/schema at the public-launch flip.

---

## 10. Execution order (this pass)

1. This strategy doc ✅
2. De-sport shared components (home hero, solution-cards, platform differentiator).
3. Platform hub + 4 product pages (ID → Activate → Measure → Engage-preview).
4. `why-fanfinity` tighten · `pricing` rewrite · `solutions/media` · polish `sports`/`brands`.
5. Verify: Jekyll build clean · sports-isolation grep on `_site` · metric-leak grep · Engage=Preview
   · no stack names · "(to confirm)" intact · browser sanity pass.
