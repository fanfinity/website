# Product Marketing Context

*Last updated: 2026-06-01*

> **What this is.** The canonical product-marketing foundation for Fanfinity. Every marketing skill in `.agents/skills/` reads this file first, so it stays the single source of truth for product, audience, and positioning. It is a **summary spine** — deeper standalone workups live alongside it:
> - Value pillars & messaging → [`docs/marketing/value-pillars-messaging.md`](../docs/marketing/value-pillars-messaging.md)
> - Competitor profile & battle card (the incumbent) → [`competitor-profiles/livelike.md`](../competitor-profiles/livelike.md)
> - Buyer personas & jobs-to-be-done → [`docs/marketing/personas-jtbd.md`](../docs/marketing/personas-jtbd.md)
> - Positioning (Dunford / Moore / Onliness) → [`docs/marketing/positioning.md`](../docs/marketing/positioning.md)
> - Proposed site architecture → [`docs/marketing/site-architecture.md`](../docs/marketing/site-architecture.md)
>
> **Grounding rules baked into this doc:** capabilities are drawn from Fanfinity's product specs, mirrored in this repo at `.agents/specs/*/_epic.md`; competitor facts are distilled in `competitor-profiles/livelike.md` (the incumbent source docs are researched separately and are NOT stored in this repo). No customers, logos, testimonials, metrics, or pricing are invented. Every competitive differentiator is a **hypothesis labeled "(to confirm)"**, never a stated fact. Anything ungrounded is marked **TBD / to confirm**. ⚠️ The performance/architecture numbers some readers expect (≈1000 req/s, sub-200ms, zero-data-loss, Kafka, self-hosting) are **NOT** product facts — they come from a *separate* analytics-microservice planning brief and are unvalidated targets only.

---

## Product Overview
**One-liner:** Fanfinity is the fan-engagement and loyalty platform that turns live audiences into active, returning, monetizable communities.

**Tagline (confirmed 2026-06-01):** *Where fans become players.* — hero subhead: "Add interactive widgets, rewards, and loyalty to your live moments — and keep fans coming back, season after season."

**What it does:** Adds real-time interactive widgets (polls, quizzes, predictions, cheer meters, and more) to live and on-demand content, layered on a connected gamification and rewards economy (quests, streaks, leaderboards, badges, status tiers), all tied to one persistent fan identity and measured with built-in analytics. Everything connects through a single program and profile model so engagement, loyalty, and rankings stay in sync by design.

**Product category:** Fan / audience engagement & loyalty platform for live sports, media, and brands. *(The "shelf" buyers file us under; sets expectations for the full stack rather than a single point tool.)*

**Product type:** B2B SaaS platform, delivered via REST API + client SDKs, with a producer/CMS authoring surface.

**Business model:** **TBD / to confirm** — no pricing or packaging exists in any source. (Do not publish or imply pricing, tiers, or a metered/MAU model until defined.)

## Scope — the product is exactly these 18 epics
Source of truth = the epics in `fanfinity/engage-api`, mirrored into this repo at `.agents/specs/*/_epic.md` (see `.agents/specs/README.md`). **Marketing describes ONLY these.** Build/priority order (P0 = first to ship):

- **P0 — foundation:** Applications · Profiles & Identity · Programs · Sponsorship · IDs & Attributes
- **P1** Widgets · **P2** Reactions · **P3** Flair
- **P4** Rewards, Leaderboards · **P5** Badges, Quests
- **P6** Streaks · **P7** Status Tiers · **P8** Redemption Keys
- **P9** Spoiler Prevention · **P10** Analytics, Custom Themes

**Near-term marketing can credibly emphasize P0–P1** (identity, programs, sponsorship, widgets). **Out of scope — never claim:** chat/comments, arcade mini-games, AI CMS assistant / MCP (these are competitor capabilities, not Fanfinity epics).

## Target Audience
**Target companies:** (1) Sports leagues, teams & rights-holders; (2) Broadcasters, streaming/OTT & media publishers; (3) Brands & sponsors running fan/loyalty campaigns. *(Project case-study context also references a MENA/Saudi sports focus — but that surfaced from a separate brief; geographic focus is **TBD / to confirm**.)*

**Decision-makers:** Business/product leaders — e.g. VP/Director Digital, Head of Fan Engagement/Experience, Head of Product, Audience/Growth lead, Brand Activation / Loyalty / CRM lead. *(Exact roles are hypotheses to validate — see personas doc.)* Engineering/technical teams are **secondary evaluators**, not the economic buyer.

**Primary use case:** Turn passive live audiences into active, returning fans inside experiences the customer owns and brands — without a heavy or repeated engineering build.

**Jobs to be done:**
- Drive live, second-screen participation during matches/broadcasts
- Build season-long habits and retention (return visits, not one-off spikes)
- Monetize engagement — sponsorable inventory, rewards/redemption, premium tiers
- Own a unified, first-party fan identity and the engagement data around it
- Prove engagement and reach with credible reporting

**Use cases:** in-play polls/predictions/trivia synced to the moment; daily check-in streaks and multi-step quests; season/event leaderboards; sponsor-branded widgets and quests; controlled giveaways via redemption keys; spoiler-free live chat/widgets for delayed viewers.

## Personas
*All roles, triggers, and language are HYPOTHESES to validate via interviews — see [`personas-jtbd.md`](../docs/marketing/personas-jtbd.md). Confidence: capability mapping High; buyer framing Medium/Low.*

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **Fan Engagement Owner** (sports league/team) | Season-long retention; sponsor-able moments; first-party fan data | "Fans show up on match day and disappear"; sponsors want engagement proof | Habitual return visits + branded, measurable engagement inventory |
| **Audience / Second-Screen Lead** (broadcaster/media) | Watch time; monetizable interactive inventory; not harming the view | Passive viewers bounce; live reactions spoil delayed viewing; features not tied to schedule | Interactive moments mapped to content, spoiler-safe, with engagement reporting |
| **Brand Activation / Loyalty Lead** (brand) | Campaign activation; repeat engagement; on-brand, provable outcomes | Reach but no participation; every campaign a one-off agency build; can't prove impact | Reusable gamified campaigns with on-brand rewards and measurable results |

## Problems & Pain Points
**Core problem:** Audiences watch or visit passively, don't participate, and don't come back between events — and the engagement that does happen isn't owned, measurable, or monetizable.

**Why alternatives fall short:**
- **Hosted engagement suites (the incumbent and similar):** per their docs, metered-MAU billing can grow cost as engagement grows; several capabilities are account-manager-gated add-ons; SaaS/CMS-hosted only; no published throughput/latency/SLA numbers.
- **Build in-house:** high build/maintenance cost; live-spike reliability is hard; diverts the core roadmap.
- **Point tools stitched together:** fragmented identity and data; rewards, rankings, and analytics don't line up.
- **Do nothing / social platforms:** engagement and audience data live off-platform, unowned and weakly measured.

**What it costs them:** lost watch time and retention, unmonetized sponsorship inventory, repeated bespoke build spend, and no first-party data to act on.

**Emotional tension:** off-season/inter-content anxiety that the app is "dead"; inability to prove value to the board and sponsors; fear that brand identity gets diluted inside a vendor's experience.

## Competitive Landscape
**Direct:** **the incumbent** — a broad, mature hosted SaaS engagement suite (widgets, chat, comments, arcade games, loyalty economy, CMS, AI "Genie", MCP server, CDP integrations). Falls short for our buyer on cost-at-scale (metered MAU), add-on gating, SaaS-only hosting, and unpublished reliability numbers — *all per their own docs.* Full profile + battle card: [`livelike.md`](../competitor-profiles/livelike.md).

**Secondary:** building in-house; generic real-time/chat infrastructure (pub/sub + messaging vendors); separate point tools for polls/loyalty/leaderboards/analytics.

**Indirect:** status quo — do nothing, or push engagement to third-party social platforms the customer doesn't own or measure.

> ⚠️ **Honest framing (load-bearing):** Fanfinity's feature set is *modeled on the incumbent's own documentation*, so the engagement-to-loyalty surface area is broadly at parity. **We cannot position on features the incumbent lacks.** Any edge must come from posture — reliability, cost model, deployment/data-ownership, packaging transparency — and **every one of those is currently a hypothesis (to confirm)**, not a fact.

## Differentiation
> **Decided (2026-06-01):** lead on three wedges — (1) the connected all-in-one stack (grounded today), (2) first-party data ownership, (3) an engagement-friendly cost model. **Reliability-under-spikes is NOT a lead** (deprioritized; revisit only if independently benchmarked).

**Key differentiators:**
- **Connected all-in-one stack — our lead, grounded today:** engagement → loyalty → rewards → identity → analytics line up *by design, not by integration* — rewards auto-feed leaderboards, trip badge/tier thresholds, and accrue to one cross-platform profile. Safe to claim now.
- **First-party data ownership — chosen wedge (to confirm):** one persistent fan identity the customer owns. The identity/profile model is grounded; the *ownership/deployment* angle still needs a defined deployment/data-residency story (spec'd delivery uses hosted PubNub — reconcile before claiming).
- **Engagement-friendly pricing — chosen wedge (to confirm):** a cost model that doesn't grow per active user like the incumbent's metered-MAU. Requires our pricing to actually be defined this way (currently TBD).
- **Not a lead (discovery angles only):** reliability under spikes (unbenchmarked; numbers are from a separate analytics project), analytics-without-gating, self-serve onboarding.

**How we do it differently:** lead with **business outcomes and use cases per vertical**, not an API feature checklist — the checklist is at parity with the incumbent. Anchor on the connected, owned stack; substantiate the pricing and ownership wedges before claiming them.

**Why customers choose us:** the connected, owned stack is the defensible story today; the data-ownership and pricing wedges sharpen it once validated.

## Objections
| Objection | Response (honest, no invented claims) |
|-----------|----------------------------------------|
| "The incumbent has more — mini-games, AI Genie, MCP." | "On the engagement & loyalty core we're closely matched; what matters most is having **one connected platform you own** and a cost that doesn't grow with every active user. *(Our AI/MCP status is still being confirmed — don't overclaim.)*" |
| "Are you cheaper?" | "Can't quote until we scope usage. The incumbent model references per-profile/MAU billing that can grow with engagement; we'd want to show a model that doesn't penalize success. *(Our pricing: to confirm.)*" |
| "Will real-time interaction add latency / break our stream?" | "Reliability under live spikes is a core design goal; I'll bring specific benchmark figures rather than hand-wave. *(Figures to confirm before quoting.)*" |
| "Can a non-engineering team run this?" | Operability claim is **to confirm** — Fanfinity exposes CMS-style authoring + REST API; validate before promising no-code. |
| "Do you have customers like us?" | *Never invent logos.* "I'll connect you with the right references rather than name-drop." |

**Anti-persona:** organizations wanting an out-of-the-box, no-integration consumer app; teams needing first-class chat/comments/arcade/AI-CMS today (those are TBD/not established for Fanfinity); buyers with no live or recurring content moment to engage around.

## Switching Dynamics
*Four Forces — all hypotheses to validate (see personas doc). Frame from product/category, not observed behavior.*

**Push:** off-season/inter-content engagement collapses; sponsors & boards demand engagement proof; every season/campaign is a slow bespoke build; spoiler complaints undermine live; audiences drift to unowned social platforms.

**Pull:** one integrated, identity-connected engagement+loyalty stack; real-time widgets without polling; sponsor/per-widget theming for monetizable inventory; built-in spoiler prevention; built-in analytics; unified cross-platform fan identity.

**Habit:** an incumbent vendor already integrated and "good enough"; existing in-house/agency relationships; reliance on social-platform engagement.

**Anxiety:** migration/switching cost; "will it actually move retention?"; can a non-eng team operate it? *(to confirm)*; multi-platform integration effort + spoiler-sync prerequisites; data residency / where fan data lives *(TBD)*; pricing/packaging unknowns.

## Customer Language
> ⚠️ **No voice-of-customer research exists yet.** Everything here is *hypothesized* — replace with verbatim quotes from real interviews before using in copy.

**How they describe the problem (hypothesized):**
- "Fans show up on match day and disappear the rest of the week."
- "We get reach but no real participation."
- "Every campaign is a one-off custom build with an agency."

**How they describe us (hypothesized):** TBD — capture from interviews.

**Words to use:** match-day engagement, second screen, season-long, first-party fan data, sponsor-able moments, watch time, spoiler-free, activation, repeat engagement, earn-and-burn, loyalty.

**Words to avoid:** API-internal jargon as the lead; unverified performance numbers; any competitor's brand name inside Fanfinity capability copy; "click here."

**Glossary:**
| Term | Meaning |
|------|---------|
| Widget | Interactive overlay (poll, quiz, prediction, cheer meter, alert, ask, image slider, social embed) shown during content |
| Program | Container mapping a content unit (stream/episode/post) to its interactive experiences |
| Quest / Streak | Multi-step challenge / consistency-over-time mechanic that earns rewards |
| Rewards / Leaderboards | Points-and-items economy; auto-updating ranked scoreboards |
| Status Tiers / Badges / Flair | Progressive VIP levels / achievements / reusable identity labels |
| Profile | One persistent, cross-platform fan identity collecting all activity |
| Spoiler Prevention | Client-side sync holding chat/widgets to each viewer's playback position |

## Brand Voice
**Tone:** confident, clear, outcome-first; professional but not stiff.

**Style:** direct and conversational; lead with what the buyer gets, not how it's built; concrete over clever.

**Personality:** fan-obsessed, energetic, credible, modern, straight-talking.

**Brand tokens:** primary purple **`#9969ff`** (scale 50 `#f5f0ff` → 500 `#9969ff` → 950 `#351070`; brand foreground `#7c4dff`); fonts **Poppins** (headings), **Geist** (body), **Geist Mono** (code); dark-mode ready (oklch theme); logo `logo.svg`. *(Defined in `tailwind.config.js` + `src/main.css`.)*

## Proof Points
> ⚠️ **None exist yet.** No customers, logos, testimonials, or metrics may be cited until real. Do not use placeholders that imply real customers.

**Metrics:** TBD / to confirm. *(Analytics can measure DAU/WAU/MAU and engagement, but no lift figures exist — never publish a number that hasn't been measured.)*

**Customers:** TBD / none.

**Testimonials:** TBD / none.

**Value themes (theme → grounded support, not a metric):**
| Theme | Grounded support |
|-------|------------------|
| Turn watching into playing | Real-time widget library + presentation modes (Widgets, Programs) |
| Habits that last a season | Streaks, Quests, Badges, Status Tiers |
| Reward what matters | Rewards economy + auto-updating Leaderboards |
| Own your fan relationship | One persistent Profile + custom-ID mapping + Analytics |
| Make inventory sponsorable | Sponsorship + Custom Themes + Redemption Keys |
| Open new monetization paths | Reward Store, Prizeout cash-out (eligible items), tiers, exclusive packs |

## Goals
**Business goal:** establish Fanfinity as a credible, outcome-led alternative in the fan-engagement category and generate qualified pipeline. *(Refine — to confirm.)*

**Conversion action:** **Book a demo** (`/demo`) is the primary CTA across the proposed site.

**Current metrics:** none — the live site is a single "Coming Soon" placeholder (`index.md`); no marketing pages exist yet.

---

## Decisions & open items
**Resolved (2026-06-01):**
- ✅ **Tagline:** *Where fans become players.* (hero subhead above.)
- ✅ **Differentiation wedges:** connected all-in-one stack (lead, grounded), first-party data ownership (to validate), engagement-friendly pricing (to validate). Reliability-under-spikes deprioritized as a lead.
- ✅ **Pricing (marketing treatment):** keep TBD on-site — the pricing page routes to "Book a demo / talk to sales." No numbers or model published.
- ✅ **Scope:** exactly the 18 GitHub epics (see *Scope* above). Chat/comments, arcade mini-games, and AI CMS/MCP are **out of scope** — never claim them.

**Still open:**
- **Geographic/market focus** — confirm whether the MENA/Saudi sports framing applies.
- **Deployment & data-ownership model** — needed to substantiate the ownership wedge (spec'd delivery uses hosted PubNub).
- **Pricing model definition** — needed to substantiate the engagement-friendly-pricing wedge.
- **Analytics packaging & API-level sponsor management** — add-on/UI-only per source; specifics TBD.
- **Voice-of-customer research** — ~6–10 discovery interviews per vertical to replace hypothesized personas/language.
- **Performance numbers** stay non-facts (separate analytics project) unless independently benchmarked.
