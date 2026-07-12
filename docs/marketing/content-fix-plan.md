# Fanfinity site — content fix plan (multi-agent dispatch)

> **Purpose.** Turn the content audit (2026-07-11) into parallelizable work packages. Each
> workstream below is a self-contained brief a single agent can execute without stepping on another
> agent's files. Internal doc — Jekyll-excluded (`docs/` is in `_config.yml` exclude).
>
> **Companion docs:** `content-audit` findings are summarized in §0; positioning anchor is
> `.agents/product-marketing.md`; content strategy is `docs/marketing/content-strategy.md`;
> design system is `DESIGN.md`; strategy/register is `PRODUCT.md`; completeness/launch state is
> `docs/marketing/completeness-audit.md`; incumbent battle card is `competitor-profiles/livelike.md`.

---

## 0. What the audit found (the problem we're fixing)

Measured real body content (`<main>`, words + structure) across 49 built public pages:

- **Home is strong** (1,142 words). **Not** the problem.
- **Core pages are one-pass moderate** (226–566): platform spine, 11 solutions, why-fanfinity,
  about, pricing, developers. Real but shallow — hero + 3–4 sections of 1–2 sentences each.
- **A long tail of stubs** (73–98 words): **all 8 `compare/*`**, plus `blog`, `webinars`,
  `customers`, `newsroom`, `partners`, `careers`, `resources`.
- **Missing *within* pages:** no proof/pilot framing, no FAQ/objection-handling, no real
  comparison tables, and the **11 verticals are one template with swapped nouns** (byte-identical
  structure).
- **Content bugs:** home `<meta description>` still uses the *old* "fan-engagement & loyalty
  platform… interactive widgets" positioning; compare stubs carry the same stale description;
  `why-fanfinity` + all compare stubs still render the retired dark `variant="gradient"` hero;
  em-dash overuse on 40 pages.
- **Fixed already:** `PRODUCT.md`/`DESIGN.md` were leaking into the public build → added to
  `_config.yml` exclude.

---

## 1. The Meiro-adapt method (READ FIRST — applies to every workstream)

We model depth on the Meiro CDP site mirror at **`../research/meiro/`** (relative to this repo;
absolute: `/home/abumusa/Desktop/fanfinity/marketing/research/meiro/`). Meiro is the mature
horizontal-CDP benchmark. **Transplant structure and messaging shape; never transplant facts.**

**Always strip when adapting Meiro copy:**
1. **Every metric.** Meiro pages are saturated with them (+300% audience, +30% conversion, 4.8/5
   G2, 184ms, 50–80% savings, 300+ integrations, $3M funding). Fanfinity is pre-revenue — **zero
   published numbers we haven't measured.** Keep the *sentence structure*, delete the figure.
2. **Meiro's names, logos, and success stories.** `research/meiro/success-story/*` is a **shape
   template only** — never reuse their customers (Megapixels, KB, Der Touristik, the SE-Asia bank)
   or their outcomes. Proof on our pages is honest "design partner / pilot" framing until real.
3. **Meiro product/tech names** → Fanfinity equivalents (ID / Engage / Activate / Measure).
4. **Never introduce** stack names (Jitsu / Airbyte / ClickHouse / PubNub / Kafka) — use
   "connector framework", "columnar analytical warehouse", "real-time streaming layer",
   "self-managed in-region".

**Always re-anchor to Fanfinity positioning:**
- Lead noun is **"fan"** (a broadcaster's audience, a bank's members, a brand's community are all
  "fans"). It does **not** imply sports on shared pages.
- Master narrative every page ladders to: **collect → resolve → activate → prove**, real-time,
  in-region, owned.
- **Data/CDP layer is LIVE; the engagement/widget layer (Fanfinity Engage) is a design Preview** —
  label it `Preview` every time; never imply it ships today.
- **Sports lexicon lives ONLY on `/solutions/sports`.** Every shared/spine page is horizontal.
- Unproven differentiators get a literal **"(to confirm)"** label.
- Voice (from `product-marketing.md`): confident, clear, outcome-first, concrete over clever. No
  exclamation points, no buzzwords ("seamless", "cutting-edge", "leverage"). **≤2 em-dashes per
  page.**

**Design/build guardrails (from `DESIGN.md`):**
- New/edited heroes are **light** (`variant` light, not `gradient`). Purple is one ≤10% accent.
- Reuse existing includes (`hero`, `feature-grid`, `feature-split`, `value-pillars`,
  `stat-band`, `pillar-cards`, `solution-cards`, `cta-band`). Icons come from `_includes/icon.html`
  (Phosphor keys only — **validate every icon name exists** before using).
- Every workstream ends with a clean `npm run build` (or `bundle exec jekyll build`) and an
  honesty regression pass.

---

## 2. Source → target mapping (Meiro mirror → Fanfinity page)

| Fanfinity target | Primary Meiro source(s) to adapt |
|---|---|
| `platform/id` | `product/product_identity-resolution.md`, `product_single-customer-view.md`, `product_data-collection.md`, `pipes/pipes_identity-stitching.md` |
| `platform/activate` | `product/product_smart-segmentation.md`, `product_meiro-audiences.md`, `product_customer-journey-orchestration-tool.md`, `product_whatsapp-marketing.md`, `product_email.md`, `product_mobile-push.md` |
| `platform/measure` | `product/product_data-availability.md`, `use-cases/use-cases_enriched-signals-to-ad-platforms.md` |
| `platform/engage` | `product/product_meiro-engage.md`, `engage/engage_demo-scenario.md` *(label Preview)* |
| `platform/architecture` · `platform` | `product/product_architecture.md`, `product_composable-cdp.md`, `product_data-management.md` |
| `platform/data-residency` · `platform/deploy` · `platform/security` | `hosting/hosting_on-premise.md`, `hosting_private-cloud-cdp.md`, `hosting_aws.md`, `hosting_gcp.md`, `hosting_azure.md` |
| `why-fanfinity` | `miscellaneous/cdp-for-saudi-arabia.md`, `product_composable-cdp.md` |
| `pricing` | `miscellaneous/pricing.md` *(philosophy only — no numbers)* |
| `integrations` | `integrations/integrations_warehouse-activation.md` + connector index |
| `solutions/media` | `miscellaneous/industries_media.md` |
| `solutions/banking` | `miscellaneous/industries_banking.md` |
| `solutions/retail` | `miscellaneous/industries_retail.md`, `industries_health-beauty-retail.md` |
| `solutions/igaming` | `miscellaneous/industries_igaming.md` |
| `solutions/travel` | `success-story/…der-touristik…` *(shape only)*, `use-cases_win-back-dissatisfied-customers.md` |
| `solutions/telco` · `marketing` · `engineering` · `ai-agents` · `brands` · `sports` | closest `use-cases/*` + `product/*`; **sports = the only page allowed sports lexicon** |
| `compare/segment` | `competitors/competitors_twilio-segment.md`, `pipes/pipes_segment-alternative.md`, `pipes_segment-alternative-compare.md` |
| `compare/hightouch` | `competitors/competitors_hightouch.md` |
| `compare/livelike` | `competitor-profiles/livelike.md` **(in this repo)** — the incumbent battle card |
| `compare/meiro` | Fanfinity's own read of Meiro (`research/meiro/HOME.md`, `product/*`) — honest, posture-based |
| `compare/rudderstack` · `snowplow` · `monterosa` | **needs sourcing** — defer until research exists; keep nav-hidden |
| `blog` (seed posts) | `blog/blog_what-is-customer-data-platform.md`, `blog_solution-to-third-party-cookie-ban.md`, `blog_strategic-cdp-implementation-guide-insider-s-tips…md` *(evergreen; strip metrics/Meiro)* |
| `customers` | `success-story/*` = **structure template only**; ship honest no-logo/no-metric framing |

---

## 3. Workstreams (each = one agent; file sets are disjoint — safe to run in parallel)

> Every agent MUST read §1 (Meiro-adapt method) + `.agents/product-marketing.md` +
> `DESIGN.md` first, and finish with a clean build + honesty regression.

### WS-A · Content bugs & quick sweeps  *(small; 1 agent; touches many files — run FIRST, alone)*
- Fix home `<meta description>` in `home-preview.html` front matter → CDP framing
  ("real-time, in-region fan data platform… collect, resolve, activate, prove"), drop "widgets".
- Replace the stale "engagement" `description:` on all 8 `compare/*` stubs.
- Light-flip heroes off `variant="gradient"` → light on `why-fanfinity.html` and every `compare/*`.
- Em-dash sweep: reduce to ≤2 per page on the 40 flagged pages (commas/colons/periods).
- **Coordination:** WS-A edits front matter + hero variant lines only. Do it before B–G start so
  later agents inherit clean heroes/descriptions.

### WS-B · Flagship comparison pages  *(1–2 agents)*
- **B1:** `compare/livelike` (source: `competitor-profiles/livelike.md`) + `compare/meiro`.
- **B2:** `compare/segment` + `compare/hightouch`.
- Each: light hero, a real **posture comparison table** (ownership, in-region residency, real-time
  vs batch, cost model, deployment — Fanfinity's edge is posture, not feature count), a short
  narrative, honest "(to confirm)" on unproven rows, CTA to `/demo`. Target **600–900 words**.
- Then **re-expose** each finished page in `_data/navigation.yml` (currently nav-hidden).
- Leave `rudderstack` / `snowplow` / `monterosa` hidden (unsourced).

### WS-C · Deepen the platform spine  *(1–2 agents)*
- Pages: `platform` (overview), `platform/id`, `activate`, `measure`, `engage`, `architecture`,
  `data-residency`, `security`, `deploy`. Sources per §2 table.
- Add per page: a real **how-it-works** section, technical substance for the engineering evaluator,
  and one honest proof/FAQ block (WS-E include). Keep `engage` labelled **Preview**.
- Target **500–700 words**. Keep `id`/`activate` (already 460–512) as the depth bar.

### WS-D · Differentiate the 11 solution verticals  *(2–3 agents; split the list)*
- `solutions/{media,banking,retail,igaming,travel,telco,marketing,engineering,ai-agents,brands,sports}`.
- **Kill the swapped-noun template.** Each vertical needs ≥1 genuinely vertical-specific argument,
  a vertical-real use case (from mapped `industries_*` / `use-cases_*`), and vertical-appropriate
  signal examples. Target **450–600 words**.
- **Sports lexicon ONLY on `/solutions/sports`.** All others stay horizontal.

### WS-E · Proof + FAQ + objections (cross-cutting)  *(1 agent; build includes first)*
- Build `_includes/faq.html` (accordion, accessible) and `_includes/proof.html` (honest
  "design partners / in pilot" framing — **no invented logos/metrics**).
- Source FAQ content from the `product-marketing.md` **Objections** table ("the incumbent has
  more", "are you cheaper?", "will it add latency?", "can a non-eng team run it?", "do you have
  customers like us?").
- Drop FAQ onto: `index`, `platform`, `why-fanfinity`, `pricing`. Drop proof onto the spine.
- **Coordination:** create the includes first; WS-C/D reference them by include, so land WS-E's
  includes before C/D's proof/FAQ sections (or C/D add the include call and WS-E fills it).

### WS-F · Company / resources stubs  *(1 agent; lower priority)*
- `about` (deepen to a real story — founders/mission/why-in-region), `customers` (honest
  no-logo framing), `blog` (seed 1–2 evergreen CDP posts adapted from mapped Meiro blog, metrics
  stripped), `webinars`/`newsroom`/`partners`/`careers` (honest lightweight **or** keep nav-hidden).
- Re-expose in nav only when real.

### WS-G · Pricing depth  *(1 agent; small)*
- `pricing` (566w, decent) → add module/package framing + a "how pricing works" explainer adapted
  from `miscellaneous/pricing.md`. **Philosophy only — no numbers** (pricing is TBD). Add the WS-E
  FAQ block ("are you cheaper?").

---

## 4. Suggested execution order & parallelism

1. **WS-A alone** (touches many files; clears heroes/descriptions for everyone).
2. **Then in parallel:** WS-B, WS-C, WS-D, WS-E, WS-G (disjoint file sets).
3. **WS-F last** (needs real inputs; partly deferrable).
4. **Final gate (one agent):** full `npm run build`; internal-link crawl of `_site` (zero
   dead-ends); honesty regression — Engage=Preview, no stack names, no invented metrics/logos,
   sports lexicon only on `/solutions/sports`, "(to confirm)" on unproven claims, ≤2 em-dashes/page;
   re-run the length audit to confirm the stub tail is gone.

## Execution status (2026-07-12 — wave 1 shipped)

Ran WS-A (me) + a 7-agent parallel fleet (WS-B/C1/C2/D1/D2/E/G) + an em-dash sweep agent. Clean `jekyll build`, honesty regression passed (0 stack-name leaks, 0 sports-lexicon leaks outside `/solutions/sports`), 0 nav dead-ends.

- **Length win:** median public page **295 → 588 words**. Platform pages 433–1082 (was 226–388); solutions verticals 588–841, now genuinely differentiated (was ~320–375 swapped-noun template); comparisons `livelike/meiro/segment/hightouch` 593–690 with real posture tables (was ~90 stubs), re-exposed in nav; pricing 759; home 1447 (added FAQ + proof).
- **WS-A:** home meta description re-positioned to CDP; `PRODUCT.md`/`DESIGN.md`/`.impeccable` added to `_config.yml` exclude (were leaking as public pages); built `_includes/faq.html` + `_includes/proof.html`.
- **WS-E:** FAQ + honest proof band on home + why-fanfinity (objections-sourced).
- **Still deferred (nav-hidden, no dead-ends):** `compare/rudderstack|snowplow|monterosa` (unsourced), `blog`, `webinars`, `customers`, `newsroom`, `partners`, `careers`, `resources` = WS-F, not yet run.
- **Known minor tail:** a few content-rich pages (home 8, solutions/index 8, platform/index 7) still show 3–8 em-dashes sourced from shared-include composition (P3, not egregious); `integrations` carries a "full directory lands next iteration" note; verify prod-build `canonical`/`og:image` (dev serve shows `0.0.0.0`).

## 5. Done = 
- No public page under ~250 words except intentional hubs (`compare` index, `industries`) and forms
  (`demo`, `contact`).
- Every nav-exposed page has real content (no "In progress / coming soon" shells).
- Home meta description on-position; no `variant="gradient"` heroes remain.
- Every vertical is genuinely differentiated; every comparison page has a real posture table.
- Clean build, zero dead-ends, honesty regression passes.
