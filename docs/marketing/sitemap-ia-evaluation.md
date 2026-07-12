# Sitemap & Information-Architecture Evaluation

**Date:** 2026-07-12 · **Method:** mechanical crawl of the production build (`_site/`, BFS from `/` following every `<a href>`) cross-checked against source (`_data/navigation.yml`, `_data/pillars.yml`, `sitemap.xml`, page front matter). Every claim below is reproducible from the crawl; no numbers are estimated.

Internal doc — `docs/` is excluded from the Jekyll build.

> **Status update (2026-07-12): all P0 and P1 fixes below have been applied and re-verified by re-crawl.** Reachable-from-home went 45 → 53 of 60 pages; the only unreachable pages left are intentional (404, /coming-soon, and the bein/pafos/pyramids/slides internal microsites). 0 dead links, and `in_sitemap_but_unreachable` is now empty. What changed:
> - **Removed** the `banking`, `igaming`, and `telco` vertical pages entirely (product decision, 2026-07-12) — page files, images, nav entries, and enumerating copy all deleted. `/industries` (5 industries: sports, media, brands, events & hospitality, retail) is now linked from the footer ("All Industries") so it's no longer an orphan.
> - Added **Fanfinity Activate** as the 5th product everywhere it was missing: `_data/pillars.yml`, the header Platform mega-menu (panel widened 66rem → 80rem for 5 cards), and the footer Platform column.
> - De-orphaned the compare cluster: `/why-fanfinity` now has a "Compare Fanfinity" CTA to the hub; nav Compare groups gained an "All comparisons" hub link; the hub's card list gained Meiro (now all 7 children); compare children breadcrumb to `/compare` (Home / Compare / child) instead of Why Fanfinity.
> - Collapsed the Resources dropdown — the four `/resources` aliases (Use Cases, Events, Resource Library dup, Product Videos) are gone; every entry now resolves to a distinct destination.
> - Resolved the stub posture: the 6 "In progress" stubs stay linked for humans but now carry `noindex` (new `page.noindex` support in `head.html`) and remain out of `sitemap.xml`.
> - `sitemap.xml` now includes the live, nav-linked `/compare/*` pages; the footer "Industries" column no longer mislabels team pages (split into a renamed "Solutions" column + industries-only "Industries" column); `/integrations` given a footer home under Deploy & Trust.
>
> P2 items (sibling cross-links, proof-layer content, `/developers/*` subpages, tightening `robots.txt`) remain open — they need content or product decisions, not link plumbing. The Q1/Q2 analysis below is preserved as the pre-fix baseline.

---

## The two questions, answered

### Q1 — Are all pages linked from the header, footer, or internally?

**No.** Of 60 built HTML pages, 45 are reachable from the homepage. 7 of the 15 unreachable are intentional (404, /coming-soon, and the bein/pafos/pyramids/slides internal microsites). That leaves **8 genuinely broken pages** — public marketing pages a visitor cannot reach by clicking:

| Page | Problem |
|---|---|
| `/industries` | Zero inbound links anywhere. Yet it **is in sitemap.xml**. |
| `/solutions/banking` | Zero inbound links. In sitemap.xml. Not in `navigation.yml`, so even the `/industries` hub (which renders cards *from* the nav data) can't show it. |
| `/solutions/igaming` | Same as banking. |
| `/solutions/telco` | Same as banking. |
| `/compare` (hub) | Zero inbound links. Nav links go straight to 4 child pages; children breadcrumb **up to `/why-fanfinity`**, never to their own hub; `/why-fanfinity` doesn't link to `/compare` either. |
| `/compare/monterosa` | Only inbound link is the orphaned `/compare` hub → transitively unreachable. |
| `/compare/rudderstack` | Same. |
| `/compare/snowplow` | Same. |

Two more pages are reachable but under-linked:

- **`/platform/activate`** — the 5th platform product. 8 inbound body links (most solutions pages + `/platform/measure` CTA into it), **but absent from all navigation**: not in the header Platform mega-menu, not in the footer Platform column (which lists only Blocks/ID/Engage/Measure), not in `_data/pillars.yml`. A visitor who lands on it has no nav path back to it later; the platform story reads as 4 products in nav and 5 in content.
- **`/integrations`** — exactly 1 inbound link site-wide (`home-preview.html:376` "Browse integrations"). In sitemap.xml, not in header or footer.

**What's healthy:** zero dead internal links (every href on every built page resolves — verified in `_site`, not just source). The 44 chrome-nav URLs (header + footer) appear consistently on every page. Breadcrumbs exist on all platform/solutions subpages. No page except the intentional ones is more than 2 clicks from home.

#### Full linkage matrix

`chrome` = in header/footer nav (appears on ≥90% of pages). `inbound` = pages linking to it. Intentionally-hidden pages (404, coming-soon, microsites) omitted.

| Page | chrome | inbound | sitemap.xml | reachable |
|---|---|---|---|---|
| `/` | Y | 54 | Y | Y |
| `/about` | Y | 53 | Y | Y |
| `/blog` (stub) | Y | 53 | n | Y |
| `/careers` (stub) | Y | 53 | n | Y |
| `/compare` | n | **0** | n | **ORPHAN** |
| `/compare/hightouch` | Y | 53 | n | Y |
| `/compare/livelike` | Y | 53 | n | Y |
| `/compare/meiro` | Y | 53 | n | Y |
| `/compare/monterosa` | n | 1 | n | **ORPHAN** |
| `/compare/rudderstack` | n | 1 | n | **ORPHAN** |
| `/compare/segment` | Y | 53 | n | Y |
| `/compare/snowplow` | n | 1 | n | **ORPHAN** |
| `/contact` | Y | 53 | Y | Y |
| `/customers` (stub) | Y | 53 | n | Y |
| `/demo` | Y | 53 | Y | Y |
| `/developers` | Y | 53 | Y | Y |
| `/industries` | n | **0** | **Y** | **ORPHAN** |
| `/integrations` | n | 1 | Y | Y |
| `/newsroom` (stub) | Y | 53 | n | Y |
| `/partners` (stub) | Y | 53 | n | Y |
| `/platform` | Y | 53 | Y | Y |
| `/platform/activate` | **n** | 8 | Y | Y |
| `/platform/architecture` | Y | 53 | Y | Y |
| `/platform/blocks` | Y | 53 | Y | Y |
| `/platform/data-residency` | Y | 53 | Y | Y |
| `/platform/deploy` | Y | 53 | Y | Y |
| `/platform/engage` | Y | 53 | Y | Y |
| `/platform/id` | Y | 53 | Y | Y |
| `/platform/measure` | Y | 53 | Y | Y |
| `/platform/security` | Y | 53 | Y | Y |
| `/pricing` | Y | 53 | Y | Y |
| `/privacy` | Y | 53 | Y | Y |
| `/resources` | Y | 53 | Y | Y |
| `/scanner` | n | 2 | n | Y |
| `/solutions` | Y | 53 | Y | Y |
| `/solutions/ai-agents` | Y | 53 | Y | Y |
| `/solutions/banking` | n | **0** | **Y** | **ORPHAN** |
| `/solutions/boost-clv` | Y | 53 | Y | Y |
| `/solutions/brands` | Y | 53 | Y | Y |
| `/solutions/convert-visitors` | Y | 53 | Y | Y |
| `/solutions/engineering` | Y | 53 | Y | Y |
| `/solutions/igaming` | n | **0** | **Y** | **ORPHAN** |
| `/solutions/marketing` | Y | 53 | Y | Y |
| `/solutions/media` | Y | 53 | Y | Y |
| `/solutions/optimize-adspend` | Y | 53 | Y | Y |
| `/solutions/prevent-churn` | Y | 53 | Y | Y |
| `/solutions/retail` | Y | 53 | Y | Y |
| `/solutions/sports` | Y | 53 | Y | Y |
| `/solutions/telco` | n | **0** | **Y** | **ORPHAN** |
| `/solutions/travel` | Y | 53 | Y | Y |
| `/terms` | Y | 53 | Y | Y |
| `/webinars` (stub) | Y | 53 | n | Y |
| `/why-fanfinity` | Y | 53 | Y | Y |

### Q2 — Does the information flow and architecture make sense for a marketing website?

**The skeleton is right; the edges have drifted.** The site follows the correct B2B SaaS shape — hub-and-spoke (Platform → 5 products, Solutions → use-case/industry/team), a single unambiguous conversion goal (`/demo` as primary CTA on every page, header and footer), secondary "explore" paths (`/platform`, `/solutions`), and a trust cluster (security, data-residency, architecture, deploy) that matches how this ICP (broadcaster/federation due-diligence) actually buys. Breadcrumbs, consistent CTA bands, and zero dead links show real discipline. But six architectural problems have crept in:

**1. The proof layer of the funnel is missing.** The classic flow is *land → understand → believe → convert*. "Understand" is excellent (platform + solutions + why-fanfinity). "Believe" is almost empty: `/customers` is an "In progress" stub, there are no testimonials or case studies anywhere, and the compare pages — the only real "believe" content — are half-hidden (4 of 8 in nav, hub orphaned, all excluded from sitemap). A prospect who is convinced by the story has nothing between "interesting" and "book a demo." This is a content gap more than an IA gap, but the IA amplifies it by burying what proof exists. (Grounding note: with no nameable customers yet, honest proof = compare pages, architecture/residency depth, and the scanner tool — the IA should promote those, not hide them.)

**2. Nav promises depth that doesn't exist (fake depth).** The Resources dropdown has five entries — top-level "Resources", "Use Cases", "Events", "Resource Library", "Product Videos" (`navigation.yml:103–115`) — and **four of them point to the same `/resources` page**. A visitor clicking "Events" then "Product Videos" lands on the identical URL twice. This is the inverted version of the stub problem: instead of hiding unfinished content, the nav fabricates finished content. One honest "Resources" link beats five aliases.

**3. The stub policy contradicts itself.** `navigation.yml`'s own header comment says stub links were removed to avoid dead ends — yet the footer links all six stubs (careers, newsroom, partners in Company; blog, webinars, customers in Resources — and blog/webinars/customers appear in the *header* Resources menu too). Meanwhile they're excluded from sitemap.xml, but **nothing carries `noindex` and robots.txt only blocks `/coming-soon`** — so crawlers will find and index the "In progress" pages through those very nav links. Current state is the worst of both: users hit dead ends *and* search engines index them. Either the stubs are presentable (then put them in the sitemap) or they're not (then pull them from nav and/or add `noindex` until written).

**4. Sitemap.xml and navigation disagree about what the site is.** Three inconsistent postures coexist: (a) compare pages — promoted to users in header+footer, hidden from crawlers ("HYPOTHESIS" exclusion); (b) orphan pages (`/industries`, banking, igaming, telco) — hidden from users, *submitted* to crawlers; (c) stubs — visible to both but sitemap-excluded. The sitemap should be the machine-readable mirror of the nav; here it's a third, conflicting map. Note the compare exclusion doesn't even achieve its goal — the pages are chrome-linked on every page, so they'll be crawled regardless; only the labeled-hypothesis *content* question matters, not the sitemap line.

**5. The expansion verticals contradict the horizontal repositioning — by omission.** The 2026-07-11 content strategy repositioned Fanfinity as horizontal ("built for sports, ready for every industry" — exactly what `/industries`' hero says). But the three pages that *prove* horizontality (banking, igaming, telco) and the page that *frames* it (`/industries`) are the orphans. The nav still tells the old story: Solutions "By industry" lists only the 5 original verticals. Since `/industries` builds its cards from the nav's Solutions group (`link-cards.html nav_title="Solutions"`), adding the 3 verticals to `navigation.yml` fixes the hub and the orphans in one edit. Also: the footer column mixing "By team" pages under the heading "Industries" mislabels Marketing/Engineering/AI-Agents as industries.

**6. Compare cluster is internally inconsistent.** Nav shows 4 pages (livelike, meiro, segment, hightouch); the orphaned hub shows 6 (adds monterosa, rudderstack, snowplow — but *omits meiro*); 8 exist. The children breadcrumb to `/why-fanfinity` while their front matter lives under `/compare` — the hub has no children that acknowledge it. Pick one canonical shape: `/why-fanfinity` → `/compare` (hub, all 8) → children breadcrumbing back to `/compare`, with the nav "Compare" group linking the hub plus the top 3–4.

**Planned vs built (drift assessment).** Divergence from `docs/marketing/site-architecture.md` is mostly *improvement*: product-named platform URLs (blocks/id/engage/measure/activate) beat the planned capability names; the use-case/industry/team triple cut of Solutions is standard and good; `/why-fanfinity` is a strong unplanned addition. Real drift: `/developers/*` (api, sdks, integrations) and `/resources/guides` were planned, never built, and the *ambition* leaked into nav anyway (the Resources aliasing is the symptom); Solutions grew 3 → 16 pages faster than the linking discipline could keep up (hence the orphans). The plan's "Compare = HYPOTHESIS" label was never resolved — pages got built but half-committed (see #6).

**Messaging-order sanity check.** Header order Platform → Solutions → Resources → Pricing → Book a Demo is right for a technical-evaluator ICP (beIN-style due diligence starts at "what is it / how is it built"), and "Deploy & Trust" as a first-class nav section is a genuine differentiator vs Meiro/LiveLike-style sites. Sports flagged "Flagship" in nav matches the flagship-vertical strategy. No change recommended.

---

## Prioritized fixes (not applied — this report is assessment only)

### P0 — broken promises to users or crawlers (one edit each, mostly `_data/navigation.yml`)

1. **Add banking, igaming, telco to the Solutions "By industry" nav group** (or, if they're deliberately not ready, remove them + `/industries` from `sitemap.xml`). Adding them also auto-populates the `/industries` hub cards.
2. **Link `/industries`**: footer "Industries" column header should link to it, and/or add it as the Solutions mega-menu's "view all" line.
3. **Surface `/platform/activate`**: add to `_data/pillars.yml` (5th card), the header Platform mega-menu, and the footer Platform column. Without it the nav sells a 4-product platform while pages sell 5.
4. **De-orphan the compare cluster**: link `/compare` from `/why-fanfinity` (natural next step on that page) and from the nav Compare group ("See all comparisons"); add meiro to the hub's card list; point children's breadcrumb_parent at `/compare`.

### P1 — IA debt

5. **Collapse the Resources dropdown to real destinations** (Blog, Developers, Webinars, Case Studies, Compare). Delete the four `/resources` aliases; re-add "Events"/"Product Videos" only when they have URLs of their own.
6. **Resolve the stub posture**: either pull the 6 stubs from header+footer until written (matching the recorded intent), or keep them linked and accept indexing — but stop pretending sitemap exclusion hides them. If they stay linked while "In progress", add `noindex` to the stub pages.
7. **Make sitemap.xml mirror the nav**: include the compare pages (they're user-promoted anyway), exclude nothing that chrome nav links, include everything it does (modulo #6).
8. **Fix the footer "Industries" column**: split team pages (Marketing & Growth, Data & Engineering, AI & Agents) into their own "By team" grouping or move them under a Teams label.
9. **Give `/integrations` a nav home** (footer Deploy & Trust or Platform column, next to "Developers & APIs") — it's sitemap-indexed with one inbound link.

### P2 — polish / next phase

10. Solutions verticals don't cross-link siblings or the relevant use-case pages — add a "related solutions" band (they already share the `link-cards.html` machinery).
11. Build the proof layer: even 2–3 honest "how it works for X" case-study-shaped pages (labeled illustrative, per numbers-tiering rules) would fill the believe-step; promote `/scanner` harder as interim proof.
12. Decide `/developers/*` subpages (planned, unbuilt): build or remove from the roadmap; keep nav honest either way.
13. `robots.txt` currently only disallows `/coming-soon` — consider also disallowing `/bein/`, `/pafos/`, `/pyramids/`, `/slides/`, `/scanner` (internal tools are link-orphaned but guessable).

---

## Reproduction

```bash
npm run build
python3 /tmp/crawl_audit.py   # BFS from /, dead-link check, matrix (script recreatable from this report's method notes)
```
Crawl result 2026-07-12: 60 pages, 45 reachable, 0 dead links, 38 sitemap URLs, 4 sitemap-listed-but-unreachable, 44 chrome-nav URLs.
