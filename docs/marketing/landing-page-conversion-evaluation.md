# Landing-Page Conversion Evaluation

**Question this report answers:** *Does the content of the home page and the landing pages convince a prospect to book a demo — and where does it leak conversion?*

**Date:** 2026-07-12 · **Scope:** home + marketing/product landing pages **only** (see Appendix A) · **Method:** applied the repo's own marketing skills (`cro`, `copywriting`, `marketing-psychology`, `copy-editing`, `positioning`, `sales-enablement`, `personas-jtbd`, `landing-page-design`) against the live page copy, grounded in `.agents/product-marketing.md`. Multi-lens, quote-backed. Internal doc — `docs/` is excluded from the Jekyll build.

> **Format note ("Hakui model").** "Hakui" resolves to nothing in this repo or the skill set, so I've delivered this in the most *usable* shape for acting on it: a 30-second verdict → scorecards → the one strategic tension → evidence by dimension → page-by-page teardown → a prioritized, effort-tagged action plan → swipe-ready copy. If "Hakui" refers to a specific template you have in mind (a named scorecard, a slide model, a one-pager), tell me and I'll recast this exact content into it — the analysis doesn't change, only the wrapper.

---

## 1. Executive verdict — the 30-second read

**Content grade: A−. Conversion-to-demo grade: C.** This is a beautifully written, unusually *honest* site whose words would earn a serious buyer's respect — and which, right now, **cannot take a demo booking and gives a convinced buyer almost nothing to tip them over the line.** The craft is well ahead of the conversion mechanics.

**Bottom line:** *The site convinces the head, not the gut — then drops the ball at the goal line.* Fix the plumbing and the proof, and the copy is good enough to carry the rest.

**The 3 things helping conversion**
1. **Radical honesty as a trust asset** — "design preview / live" labelling, fair competitor comparisons, and "we won't name-drop logos we can't stand behind" read as credibility, not weakness. Rare and disarming for a technical/due-diligence buyer (beIN-style).
2. **Genuinely bespoke vertical & team pages** — Sports, Media, Retail, Marketing, Engineering, AI each speak their audience's real language ("Own the fan, not just the seat"; "A perimeter board proves nothing"). Not templated filler.
3. **Strong objection-handling FAQs and a clean, disciplined IA** — the platform → solutions → trust structure matches how this ICP actually evaluates.

**The 3 things killing conversion**
1. 🔴 **The demo form is not wired** (`_config.yml → forms.endpoint: ""`). Every CTA on every page points to `/demo`; the form then shows an honest *"not connected yet"* message. **The entire site's single conversion action is currently non-functional.** Nothing else on this list matters until this is fixed.
2. 🔴 **The "believe" layer is empty.** Zero proof of outcome anywhere — no case studies, no illustrative scenarios, no numbers, no reference quotes. A prospect who is *sold by the story* has nothing between "interesting" and the (broken) demo form. Honesty is being used as a reason to show *nothing*, when it could license *illustrative, clearly-labelled* proof.
3. 🟠 **Hedge fatigue undercuts the differentiation.** The repeated "(to confirm)", "hypothesis we're grounding", and "posture, not a longer feature list" language — shipped into public copy — narrates the company's own doubt at exactly the moments meant to close the argument.

*Strategic watch-item:* the home page now leads with a **CDP/data-platform** pitch (a deliberate repositioning), which under-serves the business buyer who actually books the demo until they reach the (strong) vertical pages, and demotes the most demo-able capability (engagement) to "Preview" — see §5.6.

**The single highest-leverage fix:** **wire the form** (paste a Formspree/Basin endpoint) and add a response-time + no-commitment reassurance line beside it. Everything else is optimisation on top of a conversion path that, today, dead-ends.

---

## 2. Conversion scorecard — all lenses

Grades are for *ability to convert a cold-to-warm prospect into a booked demo* (not general quality). `cro`, `copywriting`, `marketing-psychology`, `positioning`, `sales-enablement` lenses combined.

| # | Dimension | Grade | The gist |
|---|-----------|:-----:|----------|
| 1 | Value-proposition clarity | **B** | "Know every fan. Engage them. Prove the value." passes the 5-second test; the payoff stays abstract ("sovereign", "governed at the data layer"). |
| 2 | Headline & message craft | **B−** | Hero H1s are tight and outcome-led; interior headings drift into internal jargon ("Three wedges, each a hypothesis we're grounding"). |
| 3 | CTA strategy & hierarchy | **C−** | One action everywhere ("Book a Demo") with *no* lower-commitment step — and the destination is broken. High-consideration buyers need an off-ramp before a sales call. |
| 4 | Trust & social proof | **D** | Intentionally empty. The site's biggest, most fixable conversion gap. |
| 5 | Objection handling | **B+** | FAQs are direct and pre-empt the real questions (live? cheaper? non-eng? customers?) — best dimension. |
| 6 | Friction — form & path | **D** | The form itself isn't connected (**F** on the mechanic); 7 fields incl. a free-text box is otherwise moderate. |
| 7 | Persona fit (business buyer) | **C** | Home leads with a CDP/data pitch; the business buyer who books the demo only sees themselves once they reach the (strong) vertical pages. |
| 8 | Differentiation & persuasion | **C+** | Three real wedges exist but are hedged into mush; parity-talk neutralises the edge. |
| 9 | Emotional resonance | **C** | Mostly rational/architectural. One page (Sports) proves the site *can* do concrete + emotional; the rest doesn't. |
| 10 | Reason to act *now* (urgency) | **D** | No "why this quarter." The obvious clocks — WC2026, PDPL residency pressure — are used as features, never as urgency. |
| 11 | Scannability & structure | **B+** | Clean sections, consistent CTA bands, good hierarchy, breadcrumbs; home is long with no sticky/mid-page CTA. |
| — | **Overall conversion-to-demo** | **C** | *Content A−, conversion C.* A well-written site that can't currently take a booking and under-arms a convinced buyer. |

---

## 3. Page-group scorecard

Every primary CTA across all groups = **"Book a Demo" → /demo** (confirmed on all pages inventoried).

| Page / group | Role in funnel | Conv. readiness | Key conversion issue |
|---|---|:---:|---|
| **Home** (`/`) | Land → orient | **B−** | Clear spine; abstract payoff; "100+ connectors" contradicts the honesty posture; closing CTA line is muddy. |
| **Platform hub** (`/platform`) | Understand | **B** | Strong architecture story; no proof; ends on FAQ, no hard close. |
| **Platform products** (id/engage/activate/measure/blocks) | Understand | **B−** | ID/Measure rich; **Engage is a preview stub** (the flashiest capability is labelled "not built"); no proof. |
| **Platform trust** (architecture/security/data-residency/deploy) | Believe (technical) | **B+** | The best "believe" content the site has for a due-diligence buyer — but aimed at engineers, not the economic buyer. |
| **Solutions — industry** (sports/media/retail/travel/brands) | Understand → want | **B+** | Bespoke, audience-native, the strongest copy on the site. Still no proof or reason-to-act-now. |
| **Solutions — team** (marketing/engineering/ai-agents) | Understand → want | **B** | Genuinely distinct per audience; buries the business buyer under engineering framing on some. |
| **Solutions — use-case** (boost-clv/convert-visitors/optimize-adspend/prevent-churn) | Understand | **B−** | Solid but visibly templated (shared 4-step scaffold); risk of "stale" feel. |
| **Compare** (livelike/meiro/segment/hightouch) | Believe | **B+** | Honest, fair, table-backed — the only real "believe" content. Under-promoted; 3 siblings (monterosa/rudderstack/snowplow) are stubs. |
| **Why Fanfinity** (`/why-fanfinity`) | Believe → decide | **C+** | Should *close* the differentiation argument; instead narrates doubt ("wedges", "hypothesis", "(to confirm)"). |
| **Pricing** (`/pricing`) | Decide | **B−** | Handles "no public price" honestly and routes to demo well; still, "pricing is being defined" reads as "come back later". |
| **Demo** (`/demo`) | **Convert** | **D** | Good "working session, not a sales pitch" framing — attached to a **form that can't submit**. No response-time/next-step reassurance. |
| **Developers / Integrations** | Support | **C+** | Developers is honest and clear; Integrations claims "100+ connectors" with none named ("directory lands next iteration"). |
| **Customers** (`/customers`) | Believe | **F** | "In progress" stub. The one page whose entire job is proof has none. |

---

## 4. The defining tension: honesty vs. conversion

Everything on this site is downstream of one deliberate, admirable choice: **tell the exact truth about a pre-revenue product.** No invented customers, no fake metrics, hedged differentiators, "design preview" labels, fair competitor write-ups. For a buyer doing technical due diligence, this is a *moat* — it is the reason a skeptical broadcaster's team will trust the room.

But the same discipline, applied without craft, becomes the site's biggest **conversion tax**, in three compounding ways:

1. **Honesty is being read as a licence to show nothing.** "We have no customers yet" has been allowed to mean "the believe-layer is empty." It shouldn't. You can be 100% truthful *and* show an **illustrative, clearly-labelled** scenario ("A fan scans in at the gate, predicts the score, redeems points at half-time — today that's three disconnected logs; here it's one profile your sponsor can reach on Tuesday"). The site *already* uses this device once ("Illustrative view of the audience builder") — it just doesn't extend it to the proof layer.

2. **Visible self-doubt is different from honest hedging — and it's on the wrong pages.** "This capability is in design preview" builds trust (it's about *product stage*). "Our edge is posture, not a longer feature list. Every claim below is labeled until proven" destroys it (it's about *your own value claim*). The first is honesty; the second is narrating your uncertainty. Keep the former everywhere; delete the latter from public copy — you can be truthful without confessing doubt.

3. **The absence of proof + absence of an intermediate CTA + a broken form** means the honesty never gets a chance to pay off. A buyer whom the words *did* convince arrives at a goal line with no ball.

**The reframe:** the honesty is right. The mistake is treating "no metrics" as "no proof" and treating "not sure yet" as something to *print*. Recover the conversion **without** spending the credibility: illustrative scenarios (labelled), the trust/architecture depth promoted to the business buyer, the compare pages surfaced, the `scanner` tool as interim interactive proof — and the doubt-language moved off the page and into the sales call where it belongs.

---

## 5. Findings by dimension (the evidence)

### 5.1 Value proposition & message clarity — **B**
The Collect → Resolve → Activate → Prove spine is coherent and repeated well; the hero H1 "**Know every fan. Engage them. Prove the value.**" lands in five seconds. Two leaks:
- **The payoff is abstract.** The hero subhead is a 34-word comma-chain — "Collect every fan signal, resolve it into one consented profile, activate it across every channel, and prove the outcome, in real time, in-region, and yours to own." It recites the architecture instead of landing one concrete hook. *Fix:* "Every ticket scan, stream, and tap becomes one consented fan profile you own — resolved in-Kingdom, in real time."
- **"Engage them" is a cheque the product can't fully cash yet** — the engagement layer is a preview. The hero promises the most exciting verb; the product delivers the other three. Not dishonest, but set up for a small let-down.

### 5.2 Trust & proof — the empty "believe" layer — **D** (the #1 fixable gap)
There is **no proof of outcome anywhere on the site**: no case studies, no testimonials, no numbers, no logos, no illustrative worked example. This is intentional (pre-revenue, design partners only) and the honesty is correct — but the execution over-corrects into a vacuum. Consequences:
- The classic funnel is *land → understand → believe → convert*. **"Understand" is excellent; "believe" is missing.** (The IA audit reached the same conclusion from the linkage side.)
- The only real "believe" content — the **compare pages** and the **architecture/security/residency** depth — is either under-promoted or pitched at engineers.
- `/customers`, the one page whose entire job is proof, is a stub.

**This is fixable without inventing anything:** (a) 2–3 *illustrative* "how it works for X" scenarios, labelled illustrative per the numbers-tiering rules; (b) promote the `scanner` tool as interactive interim proof; (c) surface the compare pages into the believe-step; (d) turn the trust/architecture pages into business-buyer language, not just engineer language.

### 5.3 CTA strategy & the demo path — **C−** (destination currently broken)
- 🔴 **The form isn't wired.** `_config.yml` sets `forms.endpoint: ""`; `assets/js/main.js` (≈L181–188) detects the empty action and shows *"This form isn't connected to our inbox yet."* Validation and the honeypot work; **delivery does not** — the single conversion action of the entire site silently fails. The form is also `novalidate` with no `required` fields, so a visitor can submit it near-empty. Wiring it is a one-line fix (paste a POST endpoint) and the most important sentence in this report.
- **CTA monoculture.** Every page's primary CTA is "Book a Demo." For a high-consideration, pre-revenue B2B purchase, that's the *only* and *highest-commitment* ask — with no lower-friction step for the 90% who aren't ready to talk to sales. Latent intermediate offers already exist in the repo and are hidden: the **`/scanner`** tool, the **beIN/WC2026 deck** (`bein/`), and a potential product tour. Give the not-yet-ready buyer *something* to convert on.
- **Demo button copy** is fine ("Book a Demo" > "Submit"), but the button *inside* the form ("Request my demo") and the reassurance around it can work harder (see 5.7).

### 5.4 Persuasion & emotional resonance — **C**
The site is almost entirely rational/architectural. It uses **authority** well (in-region, PDPL, sovereignty) but barely uses **specificity, story, loss-aversion, or concreteness**, and — by design — no **social proof**. The result is a site that explains *what it is* clearly and never makes the buyer *feel what they'd gain*.
- **The proof that it can be better is on the Sports page:** "Own the fan, not just the seat." and "A perimeter board proves nothing." — concrete, emotional, industry-native. That register appears almost nowhere else.
- **Hedge fatigue** is the persuasion killer. "(to confirm)" appears ~7× and almost always *inside the answer to a buying objection* (differentiation, price, non-eng usability), so the reader's takeaway is "even they don't believe this yet."

**Verbatim leaks + fixes (highest-cost first):**

| Where | Quote (verbatim) | Why it leaks | Punchier |
|---|---|---|---|
| `why-fanfinity.html` | "Three wedges, each a hypothesis we're grounding" | Internal strategy language shipped as a public headline; reads as "we're guessing." | "Three reasons teams pick us over a stitched-together stack." |
| `why-fanfinity.html` | "our edge is posture, not a longer feature list. Every claim below is labeled until proven." | Thesis line of the differentiation page pre-emptively discredits itself. | "Same capabilities as the incumbents — built in-region and first-party from day one. The part they bolt on, we start with." |
| `home` / `pricing` | "(to confirm: pricing is being defined)" | Turns the *best* pricing idea (no MTU tax) into a reason to wait. | "You won't pay more just because more fans engage. We scope a fixed volume price and put it in writing before you sign." |
| `home` (FAQ) | "How far that goes without engineering support is something we'd rather demonstrate than overclaim. (to confirm)" | Double-doubt on a core business-buyer objection. | "Engineers connect it once. After that your marketing team builds segments, journeys, and campaigns from a console — no tickets." |
| `home` (hero subhead) | the 34-word comma-chain (see 5.1) | The eye slides off; no single hook. | see 5.1 rewrite |
| `home` (final CTA) | "Turn customer data into revenue that's provably yours." | Muddy — revenue is always yours; *data* is what's yours. Fumbles the closing promise. | "Turn your fan data into sponsorship revenue you can prove." |
| `platform/id.html` | "Identity questions engineers ask" (FAQ heading) | Tells the economic (business) buyer "this page isn't for you." | "The questions teams ask before trusting us with fan identity." |
| `home` | "100+ connectors, with zero data egress." | A hard number on a site that elsewhere refuses numbers — and none are named. Contradicts the honesty posture; collapses credibility if probed. | "Connects to the ticketing, streaming, CRM, and ad tools you already run — zero data egress." |

**Quotes that already work (keep, and clone the register):** "Own the fan, not just the seat." · "A perimeter board proves nothing." · "A working session, not a sales pitch." · "Instead of name-drop logos we can't yet stand behind, we'll connect you with the right reference when it's real." · "…put pricing in writing before you commit."

### 5.5 Differentiation & competitive framing — **C+**
The three decided wedges — (1) connected all-in-one stack, (2) first-party data ownership, (3) engagement-friendly cost — are all present but **neutralised by parity-talk and hedges** on the very page (`why-fanfinity`) meant to sharpen them. The **compare pages**, by contrast, are the site's most persuasive "believe" asset: fair, table-backed, and honest about where the competitor wins — exactly what earns a technical buyer's trust. They are under-promoted (the hub was orphaned until the IA fix; 3 children are stubs). *Move confidence up: state the wedges as reasons, prove them on the compare pages, and stop apologising for them on `why-fanfinity`.*

**The inversion to fix:** the site *amplifies* the wedge it can't yet prove (data ownership / self-host — which `positioning.md` flags as "do not state, even softly") while *muting* the one wedge it can prove today (the connected engagement→loyalty→identity stack, now re-cast as dry "no ETL between products"). Lead with the provable wedge; support — don't headline — the aspirational one.

### 5.6 Persona fit — the three business buyers — **C** *(positioning lens)*
`product-marketing.md` is explicit: the economic buyer is a **business/product leader** — Fan Engagement Owner (league/team), Audience/Second-Screen Lead (broadcaster/media), Brand Activation/Loyalty Lead (brand); **engineering is a secondary evaluator, not the buyer.**

**The structural issue: the home page leads with a CDP/data pitch, not a fan/business outcome.** The hero ("Collect every fan signal, resolve it into one consented profile, activate it across every channel…") speaks to a data/CDP buyer; the words the business buyer lives in — *season, matchday, watch time, sponsorable moments, activation, loyalty* — barely appear above the fold. This is partly deliberate (the documented 2026-07-11 horizontal repositioning and the "lead with the data engine" rule), so it's a **tension to manage, not a bug to swat** — but the conversion cost is real: the person who books the demo doesn't see themselves until they scroll or navigate into a vertical page, and the most *demo-able* capability (engagement) is stamped "Preview." The risk is being evaluated as a half-built CDP against Segment/Meiro rather than as a fan platform against LiveLike.

**Per-buyer verdict (does the site convince THEM to book a demo?)**
- **Fan Engagement Owner (sports) — Yes, but only once they reach `/solutions/sports`.** That page is the best on the site: it opens on their exact pain ("Fans show up for the match and disappear until the next one"), then covers between-match habit, spoiler-safe delivery, and sponsor inventory. The home page doesn't route them there fast, and their headline capability (matchday participation) is Preview-hedged repeatedly.
- **Audience/Second-Screen Lead (broadcaster/media) — Partially.** A dedicated, on-persona page *does* exist (`/solutions/media` — "Reach you rent is not an audience you own"; subscription + ad-monetization; spoiler-safe) and it's good. The gap is **discovery + emphasis**: the home addresses them only obliquely (as a "streaming super-watchers" data segment), and spoiler-prevention — their signature concern — is a footnote, not a headline. *(An earlier lens flagged this page as missing; it exists and is strong. The real problem is that the buyer may never reach it from the home framing.)*
- **Brand Activation/Loyalty Lead (brand) — Weakest.** `/solutions/brands` exists and is sponsor-framed ("Sponsored reach you can prove, not just buy") — closer than it first appears — but a brand buyer who lands on the "by team" `/solutions/marketing` page meets in-house **growth-ops** copy ("Segment… without waiting on engineering", "no Jira ticket"), not brand **activation** (branded quests, redemptions, per-sponsor theming, on-brand rewards). Their JTBD language is thin across both.

**Net:** the *vertical pages* serve the buyers well (B+ content); the *home page and first screen* under-serve them (the CDP lead). Persona fit is a **routing-and-emphasis** problem, not a missing-content problem — fix the home's first screen to lead with the fan/business outcome and route the three buyers to their (already strong) pages.

### 5.7 Friction, wiring & current-state defects
- 🔴 **Demo form not connected** — `forms.endpoint: ""` (see 5.3). Blocks 100% of conversions today.
- **Demo form** asks 7 fields incl. a free-text "What are you hoping to do?" — acceptable for a qualified B2B demo, but it lacks **reassurance at the point of action**: no expected response time, no "no commitment", no privacy line, no "what happens next." Add these; they measurably lift form completion.
- **"100+ connectors"** (`home-preview.html:374`) — live, unsubstantiated, and none are named on `/integrations` ("directory lands next iteration"). Contradicts the site's own no-unproven-numbers rule.
- **Stubs on believe-critical pages** — `/customers` and 3 compare pages are "In progress." They're `noindex`'d and linked for humans (per the IA audit), but a prospect who clicks "Case Studies → Customers" mid-consideration hits an empty room.
- **The exciting layer is a preview** — Engage (widgets/gamification/loyalty), the most *demo-able* capability, is explicitly "not yet generally available." Honest, but it means the demo has to sell mostly the data layer.

*(IA-level issues — orphans, dead links, sitemap drift — are owned and largely fixed by `sitemap-ia-evaluation.md` (2026-07-12). This report does not re-litigate them; it focuses on content's ability to convert.)*

### 5.8 Reason to act *now* — **D** *(positioning lens)*
Every page ends on "Book a Demo," but nothing answers *why this quarter*. The buyers' real trigger events — a new broadcast/sponsorship deal that needs engagement proof, a flagship event approaching, a board mandate to build first-party fan data — are never activated as urgency. The single biggest available clock, **WC2026 + PDPL residency pressure**, appears only as a *feature* (in-Kingdom, PDPL-governed), never as a deadline ("get your consented fan graph in-region before the tournament"). Worse, the dominant temporal signal across the site is "being defined / a hypothesis we're grounding / not yet generally available" — which actively tells the buyer to **wait**. Give them one concrete, honest reason to move now.

---

## 6. Page-by-page teardown

### Home (`/`) — B−
**Job:** orient a cold visitor and route them to a demo.
**Strengths:** clear H1, coherent 4-product spine, honest "design preview" labelling, the animated audience-builder card is a genuinely good *show-don't-tell* device, strong FAQ, "we won't name-drop logos" trust move.
**Leaks:** abstract 34-word subhead; "100+ connectors" credibility crack; muddy closing CTA; "engage them" over-promises vs preview reality; no proof/illustrative outcome; the developer/REST section pulls the *business* buyer into engineering territory mid-page.
**Top 3 fixes:** (1) rewrite hero subhead to one concrete hook; (2) add one labelled illustrative outcome scenario above the FAQ; (3) fix "100+ connectors" and the closing CTA line.

### Platform hub + products — B / B−
**Strengths:** the architecture/one-engine/no-ETL story is genuinely differentiated and well told. **Leaks:** ID and Measure are strong but proof-free; **Engage is a preview stub** carrying the flashiest promise; pages end on FAQs/cross-links, not a hard close. **Fix:** add a business-language "what this means for your season/sponsor" band; give each product page one illustrative outcome.

### Platform trust pages (architecture/security/data-residency/deploy) — B+
The best believe-content for a due-diligence buyer, and the in-Kingdom/PDPL story is a real regional moat. **Leak:** written for engineers/legal, not the economic buyer. **Fix:** add a one-paragraph "why this wins you the deal" business framing at the top of each.

### Solutions — industry (sports/media/retail/travel/brands) — B+
The strongest copy on the site: bespoke, audience-native, real pains in real language. **Leak:** still no proof and no reason-to-act-now; use-case siblings are visibly templated. **Fix:** one illustrative scenario per flagship vertical (Sports first); clone the concrete/emotional register into the use-case pages.

### Compare (livelike/meiro/segment/hightouch) — B+
Honest, fair, table-backed — promote these into the main believe-path (they were orphaned until the IA fix). **Leak:** 3 stub siblings dilute the set. **Fix:** finish or hide the stubs; link the hub from `/why-fanfinity` (IA audit already did this).

### Why Fanfinity — C+
Should be the closer; currently the most self-doubting page on the site. **Fix:** the three rewrites in §5.4 turn it from "hypotheses we're grounding" into "reasons to choose us."

### Pricing — B−
Handles "no public price" with dignity and routes to demo well. **Leak:** "pricing is being defined" reads as "not ready." **Fix:** lead with the promise (no growth tax, in writing before you sign), drop the "being defined" hedge.

### Demo — D (the conversion page)
Great framing ("A working session, not a sales pitch"), **broken mechanic** (unwired form), thin reassurance. **Fix (in order):** wire the endpoint; add response-time + no-commitment + "what happens next"; consider trimming the free-text field to optional.

---

## 7. Prioritized action plan

*Effort: S ≤ half-day · M ≤ 2 days · L = multi-day/content. Impact is on demo-bookings.*

### Quick wins (do this week)
| # | Action | Effort | Impact | Why |
|---|--------|:---:|:---:|---|
| 1 | **Wire `forms.endpoint`** (Formspree/Basin/Netlify) + test a real submission | S | 🔴 Critical | Un-breaks the only conversion action on the site. |
| 2 | Add reassurance beside/under the demo submit button: response time, "no commitment", privacy, "what happens next"; mark email + company `required`; label the free-text box "(optional)" | S | High | Lifts form completion at the decision point; clarifies the real ask; blocks near-empty submits. |
| 3 | Delete "(to confirm)" / "hypothesis" / "posture, not a longer feature list" from **public** copy (keep for the sales call) | S | High | Stops the site narrating its own doubt on closing pages. |
| 4 | Fix "100+ connectors" → capability language; fix the muddy home closing CTA | S | Med | Removes a credibility crack + sharpens the final ask. |
| 5 | Rewrite the home hero subhead to one concrete hook (§5.1) | S | Med | The 5-second payoff currently slides off the eye. |
| 6 | Add a sticky-header "Book a Demo" + one mid-page CTA anchor on the long home page | S | Med | Recaptures intent without forcing a scroll to the footer band. |

### High-impact (worth the effort)
| # | Action | Effort | Impact | Why |
|---|--------|:---:|:---:|---|
| 7 | **Build the believe-layer:** 2–3 *illustrative* "how it works for X" scenarios, labelled illustrative; start with Sports | L | 🔴 High | Fills the empty middle of the funnel without inventing customers. |
| 8 | Add a **lower-commitment CTA** alongside "Book a Demo" — build/promote `/scanner`, a guided product tour, or the beIN/WC2026 walkthrough as a soft-conversion rung | M | High | Captures the ~90% not ready for sales; feeds them to demo later. |
| 9 | Re-pitch the **trust/platform pages** to the business buyer (add a "why this wins the deal" band); keep the engineer detail below | M | High | Aligns the site with the actual economic buyer per `product-marketing.md`. |
| 10 | Rebalance the **home first screen** to lead with the fan/business outcome; route the 3 buyers to their vertical pages; keep the data/CDP story as reason-to-believe | M | High | The business buyer who books the demo currently doesn't see themselves above the fold (§5.6). |
| 11 | Turn `/why-fanfinity` into a real closer (the §5.4 rewrites) and link the compare pages into the believe-path | M | High | Converts the differentiation page from apology to argument. |
| 12 | Add a concrete, honest **reason-to-act-now** (WC2026 / PDPL residency clock) as a recurring band | M | Med | Converts the site's strongest latent trigger from a feature into urgency. |
| 13 | Add a **founder + in-region/PDPL trust object** near CTAs (not just FAQ prose); finish or hide the `/customers` + 3 compare stubs | M | Med | Answers "who's behind this + where's my data" for a cautious KSA buyer; no empty rooms mid-funnel. |

### Test ideas (A/B when traffic allows)
- Hero: current spine vs. one concrete-scenario hero.
- Primary CTA: "Book a Demo" vs. "See it on your content" vs. dual "Book a demo / Take the tour."
- Demo form: 7 fields vs. 4 (name, work email, company, vertical) with the free-text optional.
- Proof: page with vs. without an illustrative scenario band above the FAQ.

**Highest-leverage fix:** **#1 (wire the form).** It is a one-line change that flips the site from *cannot convert* to *can convert*. Do it before anything else in this report.

---

## 8. Swipe-ready copy alternatives

**Hero subhead (home)**
- A — "Every ticket scan, stream, and tap becomes one consented fan profile you own — resolved in-Kingdom, in real time."
- B — "One consented profile per fan, built from every signal you already collect. Reach them anywhere. Prove it worked."

**Primary CTA (pair a low-commitment option with the demo)**
- "Book a demo" *+* secondary "Take the 3-minute tour" (or "Try the Digital Scanner").

**Differentiation headline (`why-fanfinity`, replacing "Three wedges…")**
- "Three reasons teams choose us over a stitched-together stack."

**Pricing objection (replacing "pricing is being defined")**
- "You won't pay more just because more fans engage. We scope a fixed volume price and put it in writing before you sign."

**Demo-form reassurance (new, beside the form)**
- "A working session, not a sales pitch. We reply within one business day. No commitment — and your data never leaves the room."

---

## Appendix A — Scope

**In scope (home + landing pages):** `/` · `/platform` + product pages (blocks, id, engage, activate, measure) + trust pages (architecture, security, data-residency, deploy) · `/solutions` + industry (sports, media, retail, travel, brands) + team (marketing, engineering, ai-agents) + use-case (boost-clv, convert-visitors, optimize-adspend, prevent-churn) · `/compare` + children · `/industries` · `/why-fanfinity` · `/pricing` · `/demo` · `/developers` · `/integrations` · `/customers`.

**Out of scope (not landing pages):** blog, webinars, resources, newsroom, careers, partners, about, contact, privacy, terms, 404, `/scanner` (internal sales tool), `/coming-soon`, and the `bein/pafos/pyramids/slides` microsites.

## Appendix B — Method & skills used
`cro` (7-dimension framework + output shape) · `copywriting` + `copy-editing` (headline/value-prop/tightness) · `marketing-psychology` (persuasion principles, hedge audit) · `positioning` + `product-marketing` + `personas-jtbd` (message-market fit, differentiation, buyer alignment) · `sales-enablement` (does it arm the buyer) · `landing-page-design` (above-fold, CTA mechanics). Grounded in `.agents/product-marketing.md`.

Run as **three parallel skill-anchored lenses** over the live page copy, then synthesised and cross-checked: (1) copy & persuasion, (2) positioning / persona / sales, (3) CRO mechanics & funnel. Where a lens made a claim contradicted by the full page inventory, the inventory won — e.g. one lens reported the Media and Brands solution pages as missing; they exist and are strong, so the finding was recast as a discovery/emphasis gap, not an absence.

## Appendix C — Grounding rules honoured
No customers, logos, testimonials, metrics, or pricing were invented. Every recommended proof element is *illustrative and to be labelled as such*. Differentiators remain hypotheses until validated. No competitor is named inside Fanfinity capability copy. Performance numbers (req/s, latency) are treated as non-facts.

## Appendix D — Relationship to prior audits
Complements, does not repeat: `sitemap-ia-evaluation.md` (IA/orphans/dead-links — fixes applied) · `ai-slop-audit.md` (em-dash/eyebrow hygiene) · `completeness-audit.md` (stub posture) · `website-audit-fix-plan.md` (broken-YAML, dead-form flag). **This report is the first to grade the content on *conversion to a booked demo*** and to surface the still-live `forms.endpoint: ""` blocker and the "100+ connectors" drift.
