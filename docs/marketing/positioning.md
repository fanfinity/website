# Fanfinity Positioning

> A foundation document using April Dunford's positioning framework, with a Geoffrey Moore positioning statement and a Marty Neumeier Onliness statement.
>
> **Status of claims:** Capabilities below are drawn from Fanfinity's product specs (the `_epic.md` source files), which define the *intended* product scope. Two important caveats: (1) those spec files are themselves documented from the incumbent's platform docs and describe an incumbent-modeled feature set, so they represent target scope rather than independently verified, shipped Fanfinity behavior — several areas are spec-stage and some are SDK/config-only or have only partial API surfaces; and (2) the real-time/architecture posture (durability, throughput, latency, data store, deployment model) is **not** grounded in the product specs at all — it derives from internal project/planning context (a CTO case-study brief and architecture planning notes) and is therefore an engineering *target*, not a proven capability. Every claimed advantage *versus the incumbent* is a **hypothesis labeled "(to confirm)"** and is never stated as fact. Anything not grounded in a source file is marked **TBD / to confirm**. No customers, logos, testimonials, metrics, or pricing are invented.

---

## 0. Positioning statements (lead with these)

> **Decision (2026-06-01):** the headline wedge is the **connected, owned all-in-one stack** (grounded today), sharpened by two wedges to validate — **first-party data ownership** and an **engagement-friendly cost model**. Live-spike reliability is **deprioritized** as a lead (unproven; the numbers come from a separate analytics project) and appears below only as a discovery angle.

**Geoffrey Moore format**

> For **sports leagues, teams, broadcasters, media companies, and brands** who need to **turn passive viewers into active, returning fans**, **Fanfinity** is a **fan-engagement and loyalty platform** that **connects interactive widgets, gamification, a rewards economy, one fan identity, and built-in analytics into a single system — so engagement, loyalty, and data line up by design rather than by integration**. Unlike bundled SaaS engagement suites, we intend to give you **first-party ownership of the fan relationship and a cost model that doesn't grow with every active user** *(both wedges to confirm before claiming)*.

**Neumeier Onliness statement**

> Fanfinity aims to be the only **fan-engagement and loyalty platform** that **keeps interactivity, rewards, rankings, and fan identity connected in one system you own** for **leagues, broadcasters, and brands** across **every live and on-demand moment**.

*The connected-stack half of these statements is grounded in the specs and can be used now. The "you own" (ownership) and pricing halves are wedges to validate (see §6) — keep them as intent, not proof, until substantiated. Reliability/durability is an engineering target only (§2.F), not part of the lead.*

---

## 1. Competitive alternatives

What a buyer would use *instead of* Fanfinity. Positioning is relative to these, not to an abstract ideal.

> **Important provenance caveat:** Fanfinity's product specs are documented *from* the incumbent's platform. That means most of the engagement-to-loyalty feature set Fanfinity intends to offer is modeled on the same capabilities the incumbent already ships. Fanfinity therefore **cannot** position on having engagement/loyalty features the incumbent lacks. Any edge must come from posture (reliability, deployment, data ownership, pricing) — all of which are currently **(to confirm)**.

| # | Alternative | What it looks like | Where it falls short for our buyer |
|---|---|---|---|
| 1 | **Dedicated fan-engagement suites (the incumbent and similar)** | A hosted SaaS engagement suite: widgets, chat, comments, gamification, loyalty economy, CMS, AI assistant (Genie), Arcade mini-games, MCP server, CDP integrations (all per the incumbent's own docs). | Hosted/CMS-delivered model. The incumbent's docs reference metered-MAU billing, where (if on that plan) each profile counts as a user — relevant for cost at fan scale (per their docs). Throughput/latency/SLA characteristics are not published in the docs reviewed. *Whether Fanfinity is actually better on any of these is unvalidated — see §6.* |
| 2 | **Build it in-house** | Engineering builds polls, leaderboards, rewards, identity, and live delivery on internal infrastructure. | High build + maintenance cost; live-spike reliability and real-time delivery are hard to get right; diverts roadmap from core product. |
| 3 | **Generic real-time / chat infrastructure (e.g., pub/sub + messaging vendors)** | Low-level messaging primitives plus custom application logic. | No native fan-engagement domain model (no quests, streaks, tiers, rewards economy); teams still build the engagement and loyalty layer themselves. |
| 4 | **Point tools stitched together** | Separate vendors for polls, loyalty/points, leaderboards, and analytics. | Fragmented identity and data; rewards, rankings, and analytics don't line up automatically; integration tax and inconsistent fan experience. |
| 5 | **Status quo: do nothing / social platforms** | Push engagement to third-party social, or run static second-screen content. | Engagement and audience data live off-platform; no owned identity, no owned loyalty economy, no controllable sponsorship inventory, weak first-party measurement. |

> **Honest framing:** the incumbent is a capable, mature suite with broad surface area (chat, comments, Arcade mini-games, AI Genie, MCP server, CDP integrations — all confirmed in the incumbent's docs). Because Fanfinity's intended feature set is modeled on the same docs, Fanfinity should win on a **specific posture wedge** (reliability / data ownership / commercial model — all to confirm), not by claiming broader or unique engagement features.

---

## 2. Unique attributes (intended product scope, from the specs)

These are capabilities defined in Fanfinity's product specs, described as Fanfinity's own. They represent **intended scope** (the specs are modeled on the incumbent's platform and several areas are spec-stage). Attributes, where they ship, are facts about the feature set; the "better than alternatives" reading of them is a hypothesis (§6), not a fact — especially since the comparison platform shares the same lineage.

### A. A complete, connected engagement-to-loyalty stack
- **Interactive widgets** — Polls, Image Slider, Trivia/Quiz, Predictions, Number Prediction, Cheer Meter, Alerts, Ask, and Social Embeds, in three presentation modes (Popup, Timeline, Embedded), with a two-step create-then-publish lifecycle for scheduling ahead and releasing live, plus real-time delivery so published widgets appear live without polling. *(Per spec, real-time delivery is over a hosted pub/sub (PubNub) — note this when discussing deployment posture.)*
- **Quests** — Multi-step challenges with per-user instances, eligibility windows (time-window and Profile-Group restrictions), one-time rewards, and built-in **A/B testing of two variants** with server-side, consistent per-user assignment and per-variant metrics.
- **Streaks** — Periodic (timezone-aware) and Consecutive-Action streaks with milestone reward checkpoints, freezing (user-level or global), and user-group targeting.
- **Rewards economy** — Reward Items (score/XP/collectibles), Reward Tables mapping actions to amounts, capping and rate limiting, full balance check/credit/debit/**transfer (gifting/tipping)**, transaction history, a Reward Store catalog, and monetization-enabled cash-out for eligible items *(cash-out is via a third-party, Prizeout, per spec)*.
- **Leaderboards** — Auto-updating from rewards earned in linked programs, many-to-many program↔leaderboard links, all-time/seasonal/single-event structures, and curated Leaderboard Views.
- **Badges & Status Tiers** — Threshold-, quest-, or directly awarded badges; progressive VIP/loyalty tiers with rewardable benefits and a single assignment API for upgrade/downgrade.
- **Reactions & Flair** — Reactions-as-a-service against any content ID with social-graph filtering; a universal, reusable Flair label system (VIP, verified, moderator, rarity) across profiles, chat, widgets, quests, and events.

### B. Everything connects through one fan identity and one program model
- **Profiles & Identity** — One profile per fan collecting all activity, rewards, and scores; persistent and anonymous-then-linked profiles; immutable Profile ID plus your own custom ID for two-way mapping; OAuth2 Bearer token model; mutual blocking enforced across comments, chat, chatroom, and social graph; directed social-graph relationships.
- **Programs** — Containers that map any content unit (live stream, episode, post) to interactive experiences, with a future/live/past lifecycle, start/stop hooks for automation (the `program-status-updated` pubsub event), and rewards that auto-update linked leaderboards.
- **The compounding effect:** rewards earned in a program feed leaderboards automatically, can trip badge and tier thresholds, and accrue to a single cross-platform profile — so engagement, loyalty, and rankings stay in sync by design rather than by integration.

### C. Built-in measurement
- **Analytics** — Pre-built engagement reports at application/program/widget/quest/task levels; dashboards covering DAU/WAU/MAU, widget engagement scores, quest funnels, and chat-moderation metrics; per-widget impressions, unique reach, and engagement counts (impressions tracked automatically via SDK, or registered manually for API-only integrations); and a programmatic analytics API. *(The specific analytics packaging/tiering for Fanfinity — what is included vs. an add-on vs. API-gated — is **TBD / to confirm**. The three-tier "Standard / Visual / Analytics-API, with Visual as a paid add-on" structure described in the source is the incumbent's packaging, not a confirmed Fanfinity model; do not present it as Fanfinity's own.)*

### D. Monetization and sponsorship inventory
- **Sponsorship** — Sponsors (name, logo/banner, brand color) attachable to programs, quests, and resources, surfaced to apps so engagement moments can be branded. *(Per spec, sponsors are created/managed in the producer UI; only a list-sponsors endpoint is documented as an API. Flag this if a feature comparison implies full sponsor CRUD via API.)*
- **Redemption Keys** — Controlled codes for promotions, giveaways, and merchandise/ticket fulfillment, with reuse prevention (redeemed status) and optional per-profile assignment/locking.
- **Custom Themes** — Reusable cross-platform theme JSON (colors, borders, radii, fonts) including per-widget theming for sponsorship. *(Per spec, this is delivered via SDK/JSON theme config, not a REST API.)*

### E. Live-experience integrity for sports and broadcast
- **Spoiler Prevention** — Client-side sync that holds chat and widgets to each fan's own playback position (HLS Program Date Time / timecode), so fans on delay aren't spoiled. *(Per spec, this is an SDK/client capability with documented stream requirements, not a REST API.)*

### F. Architecture posture *(engineering targets — NOT grounded in the product specs)*
> Everything in this section comes from internal project/planning context (a CTO case-study brief and architecture planning notes), **not** from the product specs. These are targets to design toward and validate, not shipped or spec'd product behavior. Treat every line as **(to confirm)**.
- Intended as a **durability-first ingestion service**: write the fan interaction immediately, acknowledge fast, and process reliably — targeting **zero data loss** and live-spike capacity (the case-study brief cites ~1000 req/s, sub-200ms responses, 50k+ concurrent users as scenario requirements) **(to confirm with benchmarks; currently a target, not a measurement)**.
- **ClickHouse-backed analytics** for real-time, high-cardinality engagement queries **(to confirm — this appears only in architecture planning notes; the case-study brief itself suggested PostgreSQL/MongoDB/Redis, so the data store is not settled)**.
- **Self-hostable, single-tenant-isolated deployment** **(unvalidated hypothesis — not established in any reviewed source; the spec'd model is a hosted producer suite with hosted pub/sub delivery, which conflicts with this. Do not state, even softly, until a deployment model is actually defined.)**

---

## 3. The value those attributes enable

Buyers don't buy attributes; they buy outcomes. Mapping each cluster to the value it creates. Outcomes that depend on the unproven architecture posture are explicitly flagged.

| Buyer goal | Enabling attributes | Value (outcome) |
|---|---|---|
| **Turn passive viewers into participants** | Widgets, real-time delivery, presentation modes | More second-screen activity and time-in-app during live moments; interactive inventory that can be measured and sold. |
| **Bring fans back, season-long** | Streaks, Quests, Rewards, Status Tiers, Badges | Higher activation, repeat visits, and retention — the metrics leagues, broadcasters, and sponsors actually report on. |
| **Make loyalty and competition reinforce each other** | Connected rewards → leaderboards → tiers → one profile | A self-reinforcing engagement loop with less integration work; everything "just lines up" against the right game/show. |
| **Prove it worked** | Built-in reports + dashboards, per-widget reach/engagement | Defensible engagement reporting for retention strategy, content decisions, and **sponsorship ROI**. |
| **Monetize the audience** | Sponsorship, Custom Themes, Redemption Keys, rewards cash-out | New revenue: brandable engagement moments, sponsored quests/widgets, controlled giveaways, and points redemption. |
| **Protect the live experience** | Spoiler Prevention | Real-time chat and interactivity can run during a broadcast without ruining outcomes for fans on delay. |
| **Don't lose data when it matters most** *(target — to confirm)* | Durability-first ingestion (target), data store TBD | *If the reliability target is met,* confidence the platform keeps every interaction during peak traffic. Unproven today. |
| **Own the relationship and the environment** *(partly to confirm)* | Unified identity (spec'd); self-hostable single-tenant model *(unvalidated — see §2.F)* | First-party fan data via the identity model (spec'd). The isolation/self-host angle is an unvalidated hypothesis, not a present capability. |

---

## 4. Target market segments

Lead with business/product buyers; the developer track is secondary. *(Fanfinity's own context positions it as a Saudi/MENA sports-engagement venture connecting fans, clubs, and media — keep that home-market reality in mind when sequencing segments.)*

### Primary segments

**1. Sports leagues & teams**
- *Why now:* live matches are peak-engagement, peak-traffic moments; fans expect to predict, vote, and compete in-app.
- *Jobs to be done:* drive second-screen participation, build season-long loyalty, create sponsor-ready ranking and quest moments, protect live experiences from spoilers.
- *Who buys:* digital/product leads, fan-experience and membership teams, sponsorship/commercial teams.

**2. Broadcasters & media companies**
- *Why now:* competing for attention and watch-time against social; need owned, measurable interactivity tied to the content schedule.
- *Jobs to be done:* map interactivity to programs/episodes, prove engagement and reach, run sponsored interactive segments, sync to VOD and live without spoilers.
- *Who buys:* digital product, audience/insights, ad-sales/sponsorship.

**3. Brands & sponsors (and the rights-holders selling to them)**
- *Why now:* brands want measurable, branded engagement, not just impressions.
- *Jobs to be done:* run branded quests/widgets, distribute rewards and redemption codes, theme experiences per sponsor, attribute engagement to the brand.
- *Who buys:* brand/partnership marketers, loyalty managers.

### Secondary / influencer
**Engineering & developer teams** at the above — evaluators, not the economic buyer. They care about IDs & Attributes mapping to existing CMS/EPG/stats systems, the Applications tenant credential model (Client ID / Client Secret / OAuth2 tokens), the SDK/API surface, and the reliability/throughput posture *(to confirm)*. Sell the developer track as **"low integration tax,"** not as the headline.

### Best-fit "beachhead" hypothesis *(to confirm)*
The sharpest initial wedge is plausibly **live sports rights-holders running match-day experiences** who value **a connected loyalty loop + first-party data ownership** in one system they control. The connected loop and identity-based first-party data are grounded in the specs; the *ownership/deployment* and *pricing* angles are wedges to validate. Reliability is **not** part of the lead.

---

## 5. Market category

**Frame of reference:** the category the buyer files Fanfinity under determines who they compare us to and what they expect.

- **Primary category (recommended): Fan Engagement & Loyalty Platform.**
  - *Why:* it's the language buyers in sports/media use, it sets expectations for the full stack (widgets + gamification + rewards + analytics), and it places competitive alternatives (suites, in-house, point tools) in their natural slots.
- **Power-position sub-frame (the wedge): the *connected, owned* fan-engagement platform — one system where engagement, loyalty, rewards, identity, and analytics line up by design and the fan relationship is yours.**
  - *Why:* the connected stack is grounded today, and "owned" (data ownership) is a buyer-meaningful wedge to validate — a more defensible corner than fighting on feature breadth. Do **not** lead on reliability until benchmarked.
- **Categories to consciously avoid:**
  - *"Chat/messaging infrastructure"* — too low-level; reframes us against commodity pub-sub.
  - *"CDP / analytics tool"* — undersells the engagement surface and invites the wrong comparison.
  - *"Generic gamification"* — loses the live-sports/broadcast specificity that is our strongest ground.

---

## 6. Differentiation vs. the incumbent (decided wedges + validation plan)

Fanfinity's intended feature set is modeled on the incumbent's own docs, so **feature-parity differentiation is not available** — the edge is posture. Decision (2026-06-01): lead on the connected/owned stack and two wedges to validate; deprioritize reliability.

| Wedge | Status | How to validate |
|---|---|---|
| **① Connected, owned all-in-one stack** — engagement→loyalty→rewards→identity→analytics line up by design. | **Grounded today** (per specs) — usable now. | None needed for the "connected" claim; the "owned" half depends on wedge ②. |
| **② First-party data ownership** — the fan relationship and data are the customer's. | Wedge **(to confirm)** | First confirm a deployment / data-residency model exists (none defined; spec'd delivery uses hosted PubNub). Then win/loss interviews with security/procurement. |
| **③ Engagement-friendly pricing** — cost doesn't grow per active user like metered-MAU. | Wedge **(to confirm)** | Define Fanfinity pricing; model total cost vs. MAU-metered alternatives. |
| Reliability under live spikes | **Deprioritized — not a lead** | Numbers (~1000 req/s, sub-200ms) are from a *separate analytics project*, unbenchmarked. Benchmark before using even as support. |
| Analytics without add-on gating | Discovery angle only | Confirm Fanfinity analytics packaging (TBD). |

**Known gaps / not yet established (do not claim parity or advantage):**
- the incumbent offers **chat, comments, Arcade mini-games, an AI CMS assistant (Genie), an MCP server, and CDP integrations** (all confirmed in the incumbent's docs). Fanfinity's specs do **not** establish equivalents for several of these (notably chat/comments as first-class areas, Arcade, Genie, MCP, CDP). Treat these as **areas where the incumbent currently leads / Fanfinity coverage is TBD**, not as Fanfinity strengths.
- **Architecture posture (durability, throughput, latency, data store, deployment model): a target only**, sourced from internal planning/case-study context, not the product specs. Not yet built or benchmarked.
- **Self-hostable / single-tenant deployment: not established in any source.** The spec'd model is a hosted producer suite with hosted pub/sub (PubNub) delivery. Reconcile before any claim.
- **Pricing/packaging for Fanfinity: TBD / to confirm** (no pricing exists in any source; do not invent).
- Several Fanfinity areas are **SDK/config-only or partial in the specs** (Custom Themes and Spoiler Prevention are SDK/config; Sponsorship documents only a list endpoint; IDs & Attributes are cross-cutting parameters, not standalone endpoints) — flag accordingly in any feature comparison.

---

## 7. One-line elevator (internal shorthand)

> **Fanfinity** turns live moments into participation, participation into loyalty, and loyalty into revenue — on one connected platform where the fan relationship is yours *(data-ownership and pricing wedges to confirm)*.

---

*Sources: Fanfinity product specs mirrored in this repo at `.agents/specs/` (18 `_epic.md` areas) — note these are documented from the incumbent platform and describe intended scope; competitor facts from separate research on the incumbent (not stored in this repo; distilled in `competitor-profiles/livelike.md`) — chat, comments, Arcade, Genie AI assistant, MCP server, CDP, metered-MAU billing all confirmed there; architecture/posture context from a separate analytics-microservice project's planning notes / case-study brief (not in this repo; targets, not shipped behavior); brand tokens (primary purple #9969ff; Poppins/Geist/Geist Mono; dark-mode oklch theme; `logo.svg`) from this repo's config. No customers, logos, testimonials, metrics, or pricing have been invented. All competitive differentiators are labeled "(to confirm)"; anything not grounded is marked TBD.*
