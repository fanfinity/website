# LiveLike — Competitor Profile & Sales Battle Card

**Competitor:** LiveLike (the "LiveLike Engagement Suite")
**Profiled for:** Fanfinity (fan/audience-engagement platform)
**Generated:** 2026-06-01
**Depth:** Deep profile (docs-grounded)
**Audience for this doc:** Fanfinity product marketing + sales (business/product buyers: sports leagues & teams, broadcasters & media, brands)

> **Sourcing & integrity note.** This profile is built entirely from LiveLike's own published product documentation, researched separately (the source docs are NOT stored in this repo — see Raw Data Sources). No live web scraping, SEO/traffic data, funding, headcount, customer logos, review-site ratings, or pricing were available, so those fields are marked **TBD / to confirm** rather than guessed. Every Fanfinity differentiation claim is a **hypothesis labeled "(to confirm)"** — none is stated as established fact.
>
> **Important caveat on Fanfinity-side facts.** Fanfinity's *product* capability baseline in this doc is drawn from the `_epic.md` specification files mirrored in this repo at `.agents/specs/`. Any Fanfinity *performance, architecture, pricing, or deployment* claim (throughput, latency, zero-data-loss, Kafka, self-hosting, cost model) is **NOT found in those product specs** — it originates from a separate internal analytics-microservice planning exercise and is treated here strictly as an **unverified design target / hypothesis (to confirm)**, never as a product fact. Lead sales conversations with buyer outcomes and use cases first; the developer/SDK detail in this doc is secondary reference.

---

## At a Glance

| Metric | Value |
|--------|-------|
| Tagline / positioning | Enhancing the "digital fan experience"; a "flexible, scalable loyalty ecosystem" (earn-and-burn points economy) — *from docs* |
| Category | Fan-engagement / interactivity platform (SaaS, CMS-hosted) |
| Founded | TBD / to confirm |
| Headquarters | TBD / to confirm |
| Team size | TBD / to confirm |
| Funding | TBD / to confirm |
| Domain rank / authority | TBD / to confirm (no SEO data pulled) |
| Est. organic traffic | TBD / to confirm |
| Referring domains | TBD / to confirm |
| Organic keywords | TBD / to confirm |
| Review ratings (G2/Capterra/TrustRadius) | TBD / to confirm (not available) |
| Pricing | Not published (no dollar amounts or named tiers documented). Docs reference **metered MAU billing** — "each new profile counts as a LiveLike user" and, *if using metered MAU billing*, integrators are warned not to create more profiles than they need (`user-profiles.md`, `javascript.md`). Whether metered MAU is the only/standard packaging is **TBD / to confirm**. Several capabilities are account-manager-gated add-ons. |
| Delivery model | SaaS / CMS-hosted (livelikecdn.com domains, Metabase analytics) — not documented as self-hostable |

---

## What LiveLike Is

LiveLike provides a fan-engagement / interactivity platform that lets product teams add interactivity to their apps and websites to enhance the digital fan experience. The suite spans:

- **Interactive widgets** (polls, quizzes, predictions, cheer meters, alerts, ask, social embeds, image sliders)
- **Chat & comments** (1:1 to large public rooms; comment boards on any content)
- **Arcade mini-games** (embeddable per-game web components)
- **A gamification / loyalty economy** (rewards, reward store, leaderboards, quests, badges, streaks, status tiers)
- **Identity & social graph** (profiles, follow/friend relationships)
- **Sponsorship, analytics, and a Producer Suite CMS**

It is delivered via client SDKs (iOS, Android, Web/JS, React Native), a REST API, and a GraphQL endpoint, plus a Producer Suite CMS for creating, scheduling, publishing, and moderating content. LiveLike is **AI-forward** in its documented tooling: it ships an in-CMS assistant ("LiveLike Genie") and an **MCP server** (`@livelike/mcp`) for AI-assisted management. Use cases skew heavily toward **live sports/media** (match commentary, in-play predictions, trivia, spoiler-free video sync), though the docs explicitly state chat and widgets work without video.

---

## Positioning & Messaging

**Primary value proposition (from docs):** Everything a team needs to build a flexible, scalable loyalty ecosystem and enhance the digital fan experience — interactivity layered onto existing apps/websites.

**Target audience (inferred from docs):**
- Sports leagues, teams, and rights-holders (live in-play interactivity)
- Broadcasters & media (second-screen, live blogging, spoiler-free sync)
- Brands & loyalty programs (earn-and-burn points economy, reward store)
- Engineering/product teams integrating via SDKs + REST/GraphQL

**Positioning angles (docs-grounded):**
1. **Loyalty-economy-first** — frames the whole suite around an earn-and-burn points economy.
2. **Live-sports/media native** — match commentary, in-play predictions, pick'em, spoiler-free video sync are headline use cases.
3. **AI-forward operations** — Genie (natural-language CMS assistant) + MCP server for AI assistants (Cursor, Claude Desktop, Windsurf, VS Code).
4. **Integration-friendly identity** — your user IDs map to LiveLike profiles via custom IDs; integrates with CDPs/Segment/mParticle.

---

## Product & Features (LiveLike's documented surface area)

### Engagement & interactivity
- **Interactive Widgets** — text/image polls, image sliders, trivia/quizzes, text/image/number predictions with follow-ups, cheer meters, alerts, ask, social embeds. Popup / timeline / embedded modes; VOD widgets sync to on-demand video. Stock, themed-stock, or fully custom UI.
- **Chat** — public/private/group rooms, in-app notifications, member lists, avatars, stickers, reactions, spoiler prevention, message reporting, moderator tools, keyword + AI filtering. *Docs note: device push notifications, read receipts, and typing/presence indicators are not yet provided by the SDK and require custom development.*
- **Comments** — comment boards on any content, threaded replies, sorting/filtering, moderation (board bans, reporting).
- **Arcade Mini-Games** — Guess The Word, Guess The Image, Trivia, Pick Your Team, Play Predictor, Guess What, Spin The Wheel, Skill Game, Sweepstakes, Scratch Card (per-game JS SDKs).
- **Reactions & Social Graph** — emoji-style reactions; follow/friend relationships used to personalize/filter reactions.

### Loyalty & gamification
- **Rewards** — Items, Actions (built-in + custom), Tables; inventory, balance tracking, rule-based automation.
- **Reward Store** — catalog, point cost/stock rules, tier-gated access, automatic deduction, order management, tracking.
- **Leaderboards** — auto-updated from rewards in linked programs; many-to-many; all-time/seasonal/single-event.
- **Quests** — multi-step challenges, A/B test quests, eligibility windows, one-time rewards.
- **Badges, Streaks, Status Tiers** — achievement badges, periodic/consecutive streaks with milestones & freezing, VIP/loyalty tier groups with benefits.

### Platform, ops & integrations
- **Programs** — content containers; scheduling/status; links to leaderboards/reward tables; program-status pubsub.
- **Profiles** — canonical LiveLike ID + optional custom ID; OAuth-style tokens; persistent vs local. *Each new profile counts toward a monthly active user count (metered MAU billing).*
- **Sponsorship** — name/logo/brand-color attached to programs, chat rooms, quests; surfaced via SDK/API. Sponsors are created/linked in the Producer Suite (only the list endpoint is documented as REST).
- **Analytics** — Standard (pre-built reports, all users), **Visual Analytics** (Metabase dashboards, **add-on via account manager**), **Analytics API** (`x-api-key`, `metabase.livelikecdn.com`, **separate key from account manager**). Plus client-side analytics hooks.
- **Producer Suite (CMS) + LiveLike Genie** — full authoring/scheduling/moderation CMS; Genie is a natural-language AI assistant in the Producer CRM (**enabled via account manager / support**).
- **MCP Server** — `@livelike/mcp` (Node 20+) for AI assistants to manage programs/widgets and monitor engagement.
- **Spoiler-Free Video Sync** — widget/chat sync via HLS Program Date Time (PDT); other formats / custom ID3 tags require a custom plugin.
- **Loyalty/data integrations** — Prizeout (points → gift cards), documented NFT (ERC-721) support; CDP hook (`window.LLCDPInvoke`), Segment, mParticle, Segment→user-group audience sync.

### SDKs & platforms
- iOS (EngagementSDK, min iOS 10, ~3.5 MB, Swift)
- Android (min Android 6, ~2.1 MB, Kotlin)
- Web/JS (`@livelike/javascript`, `@livelike/engagementsdk`, ~430 KB prod; Chrome 64+/FF 75+/Safari 12+/IE 11/Edge 79+)
- React Native (`@livelike/react-native` + `@livelike/javascript`; react ^18.1, RN ^0.70.5)
- Arcade per-game JS SDKs
- REST API (OAuth 2.0 Bearer), GraphQL endpoint (`graphql.livelikecdn.com`), Analytics API (Metabase)
- MCP Server (`@livelike/mcp`)
- Flutter/Dart appears in some code samples (e.g. sponsorship/leaderboards)

> *Caveat:* Several SDK/platform pages are documented as "Updated 8 months ago" and may be dated; version-gated feature notes indicate active iteration. **Treat version/size specifics as TBD / to confirm before quoting to a prospect.**

---

## Apparent Strengths (docs-supported)

1. **Breadth of the suite.** End-to-end coverage from real-time widgets and chat through a full loyalty economy (rewards, store, leaderboards, quests, badges, streaks, tiers) in one platform.
2. **Live-sports/media depth.** Spoiler-free video sync (HLS PDT / ID3), in-play predictions, cheer meters, live blogging — purpose-built for broadcast moments.
3. **AI-forward tooling.** Genie (natural-language CMS assistant) and an MCP server are documented, real AI-assisted production capabilities.
4. **Arcade mini-games.** A documented library of 10 embeddable games — an engagement surface beyond the core widget set.
5. **Integration & identity maturity.** Custom-ID mapping to existing user systems, CDP/Segment/mParticle integrations, GraphQL endpoint, and monetization hooks (Prizeout, NFT).
6. **Multi-platform SDK coverage.** Native iOS/Android, Web, React Native, plus REST + GraphQL for everything else.

---

## Apparent Gaps / Weaknesses

> Split into (A) **docs-supported** observations and (B) **hypotheses** that need confirmation. Do not present (B) as fact in sales conversations.

### A. Supportable from the docs
1. **Metered MAU billing creates cost-growth friction.** Docs explicitly warn integrations not to "generate more profiles than [they] need" because *each new profile counts as a LiveLike user* under metered MAU billing (`user-profiles.md`; reinforced in `javascript.md`). Where engagement success increases profile count, the bill can grow with it — a structural tension worth probing for high-volume live events. *(Note: docs phrase the warning conditionally — "if you are using metered MAU billing" — so confirm the prospect's actual contract before asserting it.)*
2. **Key capabilities are account-manager-gated add-ons, not self-serve.** Visual Analytics, the Analytics API, and Genie all require contacting an account manager / support to enable. Onboarding itself requires an invitation / contacting LiveLike Support to create an application.
3. **Chat SDK feature gaps are documented.** No device push notifications, no read receipts, no typing/presence indicators from the SDK (require custom development).
4. **No published pricing or packaging.** No tiers, no transparency — buyers cannot self-qualify on cost.
5. **No published scale/reliability commitments.** The reviewed docs contain **no throughput, latency, SLA, or uptime numbers.**
6. **SaaS/CMS-hosted only.** All surfaces run on livelikecdn.com / Metabase; no self-hosting or data-residency-control option is documented.
7. **Some docs appear dated.** "Updated 8 months ago" on platform-support and several SDK pages; version-gated feature notes — risk of stale specs.

### B. Hypotheses (must confirm before using)
- **(to confirm)** Whether LiveLike's documented theme-format limitation matches or differs from Fanfinity's. (Fanfinity's `custom-themes` epic — which itself describes the LiveLike Engagement SDK theme system — notes Cheer Meters/Rich Text aren't yet in the common theme format. Verify the competitor's current state before claiming parity or advantage either way.)
- **(to confirm)** Whether the breadth of the suite translates into **operational complexity / long integration timelines** for buyers.
- **(to confirm)** Whether metered MAU billing makes LiveLike **economically unattractive at very high concurrent-audience events** vs. an alternative cost model.
- **(to confirm)** Customer concentration, churn, support quality, and roadmap velocity — **no review or customer data was available.**

---

## Where Fanfinity Could Differentiate (ALL hypotheses — "(to confirm)")

These are **strategic hypotheses to validate**, not claims. They are framed against gaps observed above. **None should be stated to a prospect as established fact**, and several depend on Fanfinity facts that are not yet substantiated (see the integrity caveat at the top: performance, pricing, and deployment claims are NOT in Fanfinity's product specs).

1. **Performance & reliability as a headline. (to confirm)** A separate internal Fanfinity planning exercise references design targets of ~1000 req/s, sub-200ms latency, and zero data loss (Kafka-durable ingest). These numbers are **not in Fanfinity's product specs** and are unverified. LiveLike publishes **no comparable numbers**. *Hypothesis:* Fanfinity could lead on "proven for the biggest live moments" **only if** these targets are independently benchmarked and confirmed as product reality. **(to confirm.)**
2. **Cost model that doesn't penalize engagement. (to confirm)** If Fanfinity can offer a pricing model that decouples cost from raw profile/MAU counts, it directly answers LiveLike's metered-MAU friction. **(to confirm — Fanfinity pricing is TBD / not documented.)**
3. **Deployment/data-control flexibility. (to confirm)** If Fanfinity can offer self-hostable / microservice deployment or stronger data-residency control vs. LiveLike's SaaS-only hosting, that's a differentiator for rights-holders and enterprise procurement. **(to confirm — Fanfinity deployment model is not documented in the product specs.)**
4. **Transparent packaging / fewer gated add-ons. (to confirm)** If Fanfinity includes analytics depth without account-manager gating, it counters LiveLike's add-on model. **(to confirm.)**
5. **Faster / self-serve onboarding. (to confirm)** LiveLike requires invitation/support to create an application. A self-serve start would be a differentiator. **(to confirm.)**

> **Capability parity is roughly broad-for-broad.** Fanfinity's documented product areas (Widgets, Quests, Streaks, Rewards, Leaderboards, Badges, Status Tiers, Reactions, Flair, Redemption Keys, Sponsorship, Programs, Profiles, Applications, Analytics, Custom Themes, Spoiler Prevention, IDs & Attributes) overlap heavily with LiveLike's surface area. **Differentiation is unlikely to come from a feature checklist alone** — the candidate angles above (performance/reliability, cost model, deployment flexibility, packaging transparency, onboarding) all still require confirmation before any external use.

---

# Sales Battle Card — Fanfinity vs. LiveLike

> For sales use. **Hard rules:** never invent customers, metrics, or pricing; never state a differentiator as fact unless validated; describe Fanfinity's capabilities as Fanfinity's own; do not present unverified Fanfinity performance numbers as product facts.

## Why We Win (decided wedges 2026-06-01 — lead with the grounded one)
- **"One connected platform, not stitched-together tools." (grounded — LEAD)** Engagement → loyalty → rewards → identity → analytics line up *by design*: rewards auto-feed leaderboards, trip badge/tier thresholds, and accrue to one cross-platform profile. True today per the specs — lead here.
- **"Outcomes, not just widgets."** Use cases: live second-screen participation, season-long retention via streaks/quests, sponsor-able engagement inventory, and provable reach/engagement reporting.
- **"Own the fan relationship." (to confirm)** First-party data ownership and a single owned fan identity vs. a hosted SaaS model — *pending a confirmed deployment/data-ownership story (spec'd delivery uses hosted PubNub).*
- **"Your bill shouldn't punish you for fans engaging." (to confirm)** LiveLike's docs warn customers to limit profile creation because each profile counts toward MAU billing. Position Fanfinity's cost model as engagement-friendly — *pending confirmation of Fanfinity pricing, which is TBD.*
- **Comparable suite breadth.** We match the core engagement + loyalty surface area, so the conversation moves to *connectedness, ownership, and cost* — our chosen battleground.
- **Deprioritized — do NOT lead on reliability/performance.** The "biggest live moments / throughput" angle is unbenchmarked and the numbers come from a separate analytics project. Use only if/when validated.

## Watch-Outs (where LiveLike is genuinely strong — don't oversell against these)
- **AI-forward production tooling.** Genie (natural-language CMS assistant) + MCP server are real, documented strengths. If we lack an equivalent, **do not claim parity** — pivot to outcomes and reliability. (Our own AI/MCP status is **to confirm**.)
- **Arcade mini-games library.** 10 documented embeddable games. If a prospect wants out-of-the-box mini-games, acknowledge honestly and redirect to our strengths.
- **Mature integration ecosystem.** GraphQL, CDP hook, Segment, mParticle, Prizeout, NFT. Confirm our integration story before competing head-on here.
- **Live-sports/media pedigree.** Spoiler-free sync and in-play interactivity are well-developed on their side.

## Landmines (set these for LiveLike — only with docs-grounded framing)
- **"How does your pricing scale with audience size?"** Surfaces metered-MAU cost growth (their own docs flag it).
- **"Can we see your throughput / latency / uptime SLA?"** Their reviewed docs publish none — let them go quiet.
- **"Is analytics included, or an add-on?"** Visual Analytics + Analytics API are account-manager-gated add-ons.
- **"Can we self-host or control data residency?"** SaaS-only; no documented self-hosting.
- **"How fast can we get started?"** Onboarding requires an invitation / support to create an application.

## Objection Handling
| Prospect says | Response (honest, no invented claims) |
|---|---|
| "LiveLike has more features / mini-games / Genie." | "On the engagement and loyalty core we're closely matched. Where it matters most is having **one connected platform you own** — and a cost model that doesn't punish you as your audience grows — that's where we'd focus. *(If asked for our AI tooling, answer factually; don't overclaim — our AI/MCP status is still being confirmed.)*" |
| "We already use LiveLike." | "Then you know the suite. The questions worth asking your current vendor: how does cost scale with engaged users, and what throughput/latency commitments are in writing? Those are areas we'd want to earn the right to compare on. **(to confirm against your specific contract.)**" |
| "Are you cheaper?" | "I can't quote a number until we scope your usage. What I can say is the LiveLike model references per-profile/MAU billing, which can grow with engagement — we'd want to show you a model that doesn't penalize success. **(our pricing to confirm.)**" |
| "Do you have customers like us?" | *Do not invent logos.* "I'll connect you with the right references rather than name-drop. Let's first map your use case to what we do." |
| "Can you handle a World-Cup-scale spike?" | "Our design goal is high-throughput, durable ingestion. I'll bring the specific benchmark figures so we're precise rather than hand-wavy. **(figures to confirm before I quote them — they aren't yet validated product facts.)**" |

## Discovery Questions That Favor Fanfinity
1. What's your peak concurrent audience, and how does your current vendor's cost behave at that peak?
2. Do you have written throughput / latency / uptime commitments today?
3. Is your analytics fully included or gated behind an add-on?
4. Do you need data-residency control or self-hosting for compliance/procurement?
5. How long did onboarding/first-integration take, and was it self-serve?

---

## Raw Data Sources

- **Primary (LiveLike product docs):** LiveLike's published documentation pages, researched separately (NOT stored in this repo) — including `overview.md`, `getting-started.md`, `concepts.md`, `widgets.md`, `chat.md`, `comment-boards.md`, `arcade.md`, `rewards.md`, `reward-store.md`, `leaderboards.md`, `quests.md`, `badges.md`, `streaks.md`, `status-tier.md`, `user-profiles.md`, `javascript.md`, `react-native.md`, `programs.md`, `social-graph-service.md`, `reactions-and-social-graph.md`, `sponsorship.md`, `analytics-overview.md`, `mcp-server.md`, `supported-platforms.md`, `frequently-asked-questions.md`, `rest-api-getting-started.md`, `graphql.md`, `cdp-integration-guide.md`, `prizeout-for-rewards.md`, `nft-non-fungible-token.md`, `segment.md`, `mparticle.md`, `spoiler-free-sync.md`.
- **Load-bearing claims verified in-source this session:** metered-MAU billing warning (`user-profiles.md` line 95 + `javascript.md` line 111); invitation/support-gated onboarding (`rest-api-getting-started.md`); Genie account-manager enablement (`overview.md`); analytics add-on/API gating (`analytics-overview.md`); 10 arcade games (`arcade.md`); chat SDK gaps (`chat.md`); SDK sizes/platform minimums (`frequently-asked-questions.md`, `supported-platforms.md`); "flexible, scalable loyalty ecosystem"/earn-and-burn (`reward-store.md`); NFT ERC-721 (`nft-non-fungible-token.md`); CDP `window.LLCDPInvoke` hook (`cdp-integration-guide.md`).
- **Fanfinity product baseline:** `_epic.md` files mirrored in this repo at `.agents/specs/` (18 areas). *Note: these specs are themselves authored against LiveLike's documentation and reference it directly; they describe product capabilities, not performance/pricing/deployment.*
- **Not available (marked TBD / to confirm throughout):** SEO/traffic/backlink data, funding, headcount, HQ, founding date, customer logos, review-site ratings, and published pricing.

## To-Confirm Tracker (resolve before external use)
- [ ] Fanfinity's throughput/latency/uptime numbers — confirm they are product reality (not just a separate planning exercise) and independently benchmarked before any public claim
- [ ] Fanfinity pricing model defined (to substantiate the cost-vs-MAU narrative)
- [ ] Fanfinity deployment options (self-host / data residency) confirmed
- [ ] Fanfinity AI tooling / MCP equivalent status (to set watch-out vs. claim)
- [ ] LiveLike funding, HQ, headcount, founding date, review ratings, and SEO metrics (currently TBD)
- [ ] Whether LiveLike's theme-format gaps (Cheer Meters/Rich Text) match or differ from Fanfinity's
- [ ] Current SDK versions/sizes (LiveLike docs may be dated — several pages "Updated 8 months ago")
