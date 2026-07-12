# Product

## Register

brand

## Platform

web

## Users

The site sells to business and product leaders at three kinds of organizations that own a live or recurring audience: (1) sports leagues, teams, and rights-holders; (2) broadcasters, streaming/OTT, and media publishers; (3) brands and sponsors running fan or loyalty campaigns. Sports & live entertainment is the proof-richest origin vertical, not the ceiling — the platform is horizontal (media, brands, events & hospitality, and retail appear as verticals).

The economic buyer is a business/product leader — VP/Director Digital, Head of Fan Engagement/Experience, Audience/Growth lead, or Brand Activation / Loyalty / CRM lead. Engineering and data teams are secondary technical evaluators, not the buyer. Exact roles are hypotheses to validate (see `docs/marketing/personas-jtbd.md`). Their context: they have reach but no owned participation data, they're asked to prove value to boards and sponsors, and every season or campaign turns into a bespoke build.

## Product Purpose

Fanfinity is a real-time, in-region fan data platform (CDP). It collects fragmented fan signals, resolves them into one consented first-party fan graph the customer owns, activates that profile across every channel, and proves the outcome. The master narrative every page ladders up to: collect every fan signal → resolve one consented, in-region profile → activate it everywhere → prove the value. Success is a buyer who books a demo believing they can own — not rent — their fan data, and govern it in-region.

The data/CDP layer is live. The engagement/widget layer (Fanfinity Engage) is a design Preview and must be labeled as such everywhere — never implied to ship today.

## Positioning

The connected, owned, in-region fan data platform: one consented golden fan profile the customer holds and governs in-Kingdom, not a sports point-tool and not a rented hosted suite. The single claim every screen reinforces is ownership + sovereignty over the fan graph, with deterministic proof — horizontal across industries, with sports as one well-supported vertical.

## Conversion & proof

- Primary and secondary CTA: primary is **Book a demo** / **Get a demo**; secondary fallback is exploring the platform (the `/platform` spine and `/why-fanfinity`) for visitors not ready to talk.
- The line a visitor remembers after 10 seconds: one consented, in-region fan profile you own and can act on in real time — not rented.
- Belief ladder: (1) our fans are fragmented and unowned across channels; (2) a real-time CDP can resolve them into one profile; (3) Fanfinity resolves and stores that profile in-region, under our governance, and the data layer is live today; (4) we can activate it everywhere and prove exposure-to-outcome; (5) it's worth a demo.
- Proof on hand: none publishable. Zero customers, logos, testimonials, or metrics exist — the company is pre-revenue. Never publish a number not independently measured; when adapting competitor (Meiro) copy structure, strip every metric. Unproven differentiators are labeled "(to confirm)".

## Brand Personality

Confident, clear, outcome-first. Direct and conversational — lead with what the buyer gets, not how it's built. Concrete over clever. Editorial and grown-up rather than hype-y or "AI startup." No exclamation points, no buzzwords ("seamless", "cutting-edge", "leverage"), no API-internal jargon as the lead. The emotional goal is credibility and calm authority — a visitor should feel this is a serious, sovereign data platform they could trust with their fan graph.

## Anti-references

Do not look AI-built. The four fingerprints the design audit flagged and the redesign fixed, in the site's own words:
- The dark AI-purple-mesh-gradient hero — "the most common AI design fingerprint." Lead light.
- Purple used as a full-bleed wash instead of one disciplined accent.
- Default icon sets (the old Tabler set) — a "default AI" look.
- Repeated symmetric three-equal-card grids — "the most generic AI layout."
Also avoid: invented metrics and proof, sports-only imagery or examples on the horizontal shared pages (sports must not leak onto the home/platform narrative), naming the underlying stack (Jitsu/Airbyte/ClickHouse/PubNub), and any implication that Engage/widgets ship today.

## Design Principles

Honest over sensational — pre-revenue, so we never publish a claim, number, or logo we can't stand behind; unproven edges are labeled "(to confirm)". Own the outcome, not the feature checklist — lead with the business result per vertical, because our capability set is at parity with incumbents and our edge is posture (ownership, in-region residency, cost model, deterministic proof). Sovereignty is the sharpest wedge — resolved and stored in-region, PDPL-governed, deployable in your cloud/on-prem/managed. Horizontal by default, sports by proof — the shared spine speaks the generic fan-data-platform story; verticals are examples, never the exclusive narrative. Show the real thing — the live data layer can be shown as real product UI; the Preview layer must read as Preview.

## Accessibility & Inclusion

Accessible by construction: semantic HTML, visible `:focus-visible` rings (2px brand ring + offset), `prefers-reduced-motion` honored (reveal/animation disabled), body contrast kept toward the ink end of the ramp (the audit's standing rule — no light-gray-for-elegance body text), and `text-wrap: balance` on headings. Target is WCAG AA on text contrast and interaction. No formal WCAG conformance level has been externally certified — treat AA as the working bar, not a published claim.
