# Fanfinity site — completeness audit (what's missing to launch)

**Method:** [impeccable.style](https://impeccable.style/docs/) phasing — **Evaluate → Refine →
Harden** — applied to *completeness* rather than design quality (the design pass shipped separately,
see `design-audit.md`). **Question:** what is missing to make the site launch-ready and whole?
**Date:** 2026-07-11. **Scope:** all 45 public pages, the nav graph (`_data/navigation.yml`),
and launch infrastructure.

**Severity:** **P0** = blocks public launch · **P1** = broken nav / credibility hole ·
**P2** = content depth · **P3** = harden/polish.

---

## Evaluate — the one-screen state

| Layer | State |
|---|---|
| **Real, built pages (~18)** | `home-preview`; `platform/` overview + id + engage + activate + measure + deploy; `why-fanfinity`; `solutions/` index + sports + media + brands; `industries`; `integrations`; `resources`; `compare/index`; `pricing`; `developers`; `demo`; `privacy`; `terms` |
| **"In progress" stub pages (27)** | 27-line scaffold shells — hero + "coming soon in the next iteration" card, no real content |
| **Public `/`** | still the **Coming Soon** splash — the real site lives at `/home-preview` and is not reachable by the public |
| **Forms** | neither `demo` nor `contact` submits anywhere — **no backend, no endpoint** |
| **Infra** | no sitemap.xml, no robots.txt, no analytics, og:image is a stand-in, favicon is SVG-only |

The bones are all there — IA, layouts, design system, honesty guardrails. What's missing is **content
in the stubs**, the **launch flip**, a **working contact path**, and **harden-layer infra**.

---

## The 27 stub pages (every one is a nav dead-end)

Grouped by where they're linked from — this is the priority order, because a dead link in the top nav
is worse than a missing page nobody can reach.

### Linked from the **header mega-menus** (P1 — most visible)
- **Platform › Deploy & trust (3):** `platform/architecture`, `platform/data-residency`,
  `platform/security` — *residency & security are the PDPL wedge; these being empty is the worst look.*
- **Solutions › By team (3):** `solutions/marketing`, `solutions/engineering`, `solutions/ai-agents`
- **Solutions › More industries (5):** `solutions/retail`, `solutions/banking`, `solutions/travel`,
  `solutions/igaming`, `solutions/telco`
- **Why Fanfinity › vs … (7):** `compare/segment`, `compare/rudderstack`, `compare/snowplow`,
  `compare/hightouch`, `compare/livelike`, `compare/monterosa` (+ `compare/meiro`, built but not linked)
- **Resources dropdown (2):** `blog`, `webinars`

### Linked from the **footer** only (P2)
- **Company (6):** `about`, `partners`, `careers`, `newsroom`, `contact`, `customers`

### Not in public nav (P3)
- `scanner` — internal sales tool, intentionally unlinked; leave as-is or gate it.

---

## Refine → prioritized "make it complete" list

### P0 — blocks public launch
1. **Flip the homepage to public.** Move the real site to `/` (set `home: /` in navigation, retire or
   repurpose the Coming Soon `index.md`, update the `home-preview` permalink). Right now nobody can
   reach the site you built.
2. **A working contact path.** `contact` is an empty stub, yet `privacy`, `terms`, and the footer all
   link to it as the way to reach Fanfinity. Either build a real contact page **or** point those links
   at `/demo`. Non-negotiable before launch — it's the only "reach us" route.
3. **Wire the forms to a backend.** `demo` (and contact, if built) collect data but submit nowhere.
   Pick a no-server option (Formspree / Netlify Forms / Basin / an email endpoint) so a booked demo
   actually arrives. Today the demo form honestly says it isn't wired — that can't ship as the CTA.
4. **Kill the dead-ends in the *header* nav (the 20 P1 stubs above).** Two honest ways:
   **(a)** write real content, or **(b)** temporarily remove un-built links from `navigation.yml` so
   the public nav only exposes finished pages. Recommend (b) for the long tail + (a) for the
   security/residency/one-flagship-compare pages that carry the pitch.

### P1 — credibility holes to fill with content
5. **`platform/security` + `platform/data-residency` + `platform/architecture`** — these three *are*
   the PDPL / in-Kingdom / "trust us with fan data" argument. Highest-value stubs to write.
6. **One or two flagship comparisons** — `compare/livelike` (the incumbent) and `compare/segment`
   (the data-platform anchor). A comparison hub with 7 empty children reads worse than 2 strong ones;
   ship those, hide the rest until written.
7. **`about`** — a real company/story page. Investors, partners, and press all check it first;
   an "In progress" About undercuts a data-sovereignty pitch.

### P2 — depth & proof
8. **The 8 secondary solution verticals** (`marketing`, `engineering`, `ai-agents`, `retail`,
   `banking`, `travel`, `igaming`, `telco`). Model on the built `solutions/sports|media|brands`.
   Keep the sport lexicon isolated to `/solutions/sports` (honesty rule).
9. **`customers`** — currently a stub, and `resources` promises "real customer results." Until real,
   logo/testimonial-free honest framing (pilots, approach) — **no invented logos or metrics.**
10. **`blog` + `webinars`** — the Resources hub links both. Either seed with 1–2 real posts / an
    empty-state that isn't "In progress," or drop them from nav until there's content.
11. **Remaining Company pages** — `partners`, `careers`, `newsroom`. Lightweight honest pages or
    nav-hide until real.
12. **The other 4 comparisons** — `rudderstack`, `snowplow`, `hightouch`, `monterosa` (+ link
    `compare/meiro`, which is already built but orphaned).

### P3 — Harden (infra & polish)
13. **`og:image`** — replace the `home-hero.jpg` stand-in with a branded **1200×630** card, then
    restart the Jekyll server (config isn't hot-reloaded).
14. **`sitemap.xml` + `robots.txt`** — add `jekyll-sitemap` to plugins and a `robots.txt`
    (currently neither is generated). Needed for SEO/crawlers at launch.
15. **Favicon set** — only `favicon.svg` exists; add PNG fallbacks + `apple-touch-icon` +
    `site.webmanifest` for older browsers, iOS, and pinned tabs.
16. **Analytics decision** — the cookie banner records consent but loads nothing. Decide on a
    privacy-respecting analytics (or none) and wire it to the consent flag.
17. **404 page** — exists, but is still on the old dark `bg-hero` treatment; light-flip it to match
    the new spine.
18. **Confirm `demo`/`contact` success/error states** once the backend is wired (validation exists;
    the success copy currently promises nothing was delivered).

---

## Harden — pre-launch checklist (binary)
- [ ] `/` serves the real homepage (not Coming Soon)
- [ ] Every link in the **header** resolves to real content (or is removed from nav)
- [ ] Every link in the **footer** resolves (or is removed)
- [ ] A demo/contact submission actually reaches a human
- [ ] `sitemap.xml` + `robots.txt` generated
- [ ] Branded `og:image` (1200×630) live
- [ ] Favicon/manifest set complete
- [ ] Analytics decision made & wired to consent
- [ ] Privacy + Terms reviewed by counsel (drafts in place)
- [ ] Honesty regression: Engage=Preview, no Jitsu/Airbyte/ClickHouse/PubNub, no invented
      metrics/logos, sport lexicon only on `/solutions/sports`

---

## Execution status (2026-07-11)

**Shipped & verified (clean `jekyll build`):**
- ✅ **P0 #1 Launch flip** — the full site now serves at `/` (`home-preview.html` → `permalink: /`);
  the Coming Soon splash is preserved at `/coming-soon` (`sitemap: false`); `navigation.yml`
  `home: /`; stale `/home-preview` back-links repointed. *(Goes public on the next manual deploy.)*
- ✅ **P0 #2 Real contact page** — `contact.html` rebuilt: "ways to reach us" + a working contact
  form (form-first, no invented email/phone/address).
- ✅ **P0 #3 Form backend wired (parameterized)** — `_config.yml → forms.endpoint` (empty by
  default). `demo` + `contact` forms POST to it via AJAX (Formspree/Netlify/Basin-compatible) with
  real success/error states; honest "not connected yet" fallback while empty. Shared handler in
  `assets/js/main.js` (`[data-lead-form]`), honeypot field included. **One line to go live.**
- ✅ **P3 SEO infra** — hand-rolled `sitemap.xml` (47 real URLs; decks/assets/scanner excluded) +
  `robots.txt` (no gem added — pure Liquid). `404.html` light-flipped to match the new spine.

**Content build — wave 1 shipped (2026-07-11), founder chose "write the safe pages now":**
- ✅ **12 stub pages written** (real content, honesty-verified, clean build): platform
  **security / data-residency / architecture**, **about**, and the 8 solution verticals
  **retail, banking, travel, igaming, telco, marketing, engineering, ai-agents**. Verticals drafted
  by two subagents against the `media.html` template, then verified: no sports lexicon, no invented
  metrics/logos, no forbidden tech names (Jitsu/Airbyte/ClickHouse/PubNub/Kafka), valid icons only,
  led with the live data layer, engagement labelled Preview, unproven claims "(to confirm)".
- ✅ **Deferred stubs hidden from nav** so the live site has **zero dead-ends** (verified by a
  full internal-link crawl of `_site`): the 7 `/compare/*` pages (+ hub), Blog, Webinars, Partners,
  Careers, Newsroom, Customers. Stub files remain but are orphaned; the `why-fanfinity` comparison
  section was removed; deferred stubs also excluded from `sitemap.xml`. Re-expose each as it's written.

**Still deferred (need real inputs, not design):** the 7 comparison pages (only LiveLike + Meiro are
sourced in-repo), Customers (real logos/permission), Blog/Webinars (real posts/events),
Partners/Careers/Newsroom. Plus the **branded og:image** (1200×630) and the **live form endpoint**.

## Recommended sequence
**Ship-minimal launch (fastest honest path):** P0 #1–3 + P1 #4b (hide un-built links) →
you have a live, fully-navigable, credible site with ~18 real pages, zero dead-ends, and a working
demo funnel. Then fill stubs (P1 #5–7, P2) in priority waves and re-expose each nav link as its page
lands. Harden infra (P3) in parallel — it's independent of content.
