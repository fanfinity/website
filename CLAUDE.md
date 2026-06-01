# Fanfinity Marketing Website — Repo Guide

Marketing/landing-page site for **Fanfinity**, a fan-engagement & loyalty platform for live sports, media, and brands (a competitor to incumbent fan-engagement platforms). Built with **Jekyll + Tailwind CSS**, deployed to GitHub Pages. Today the live site is a single "Coming Soon" page (`index.md`).

## 📌 Start here: product & positioning context
Before writing any marketing copy, page, or campaign, read **`.agents/product-marketing.md`** — the canonical product-marketing foundation (product, audience, positioning, brand voice). Every skill in `.agents/skills/` reads it first. Deeper workups:
- `docs/marketing/value-pillars-messaging.md` — value pillars + messaging/taglines
- `competitor-profiles/livelike.md` — competitor profile + sales battle card (the incumbent)
- `docs/marketing/personas-jtbd.md` — buyer personas + jobs-to-be-done
- `docs/marketing/positioning.md` — positioning (Dunford / Moore / Onliness)
- `docs/marketing/site-architecture.md` — proposed sitemap (not yet built)
- `.agents/specs/*/_epic.md` — the **18 product epics** (mirrored from engage-api; the capability source of truth — see `.agents/specs/README.md`)

**Grounding rules:** capabilities come from the product specs mirrored at `.agents/specs/*/_epic.md`; competitor facts are distilled in `competitor-profiles/livelike.md` (the incumbent source docs are not stored in this repo). Never invent customers, logos, testimonials, metrics, or pricing. Every competitive differentiator is a hypothesis labeled "(to confirm)". ⚠️ The performance numbers (≈1000 req/s, sub-200ms, Kafka, zero-data-loss) are from a *separate* analytics-microservice brief — **not** product facts.

## Build & develop
```bash
bundle install && npm install   # one-time setup (Ruby 3.x + Node 20.x)
npm run dev                      # Tailwind watch + Jekyll live-reload → http://localhost:4000
npm run build                   # production build (CSS + Jekyll) → _site/
npm run css:build               # build Tailwind CSS only (minified)
```
Deploy is **manual only**: GitHub → Actions → "Deploy Jekyll site to Pages" → Run workflow (`.github/workflows/jekyll-gh-pages.yml`).

## Where things live / how to add a page
- **Pages/content:** root `*.md` (e.g. `index.md`); layouts in `_layouts/` (`default.html`); partials in `_includes/`. Add a page by creating a `.md`/`.html` with `layout: default` front matter.
- **Styling:** edit `src/main.css` (Tailwind source + oklch theme vars) → builds to `assets/css/main.css`. Theme/colors/fonts in `tailwind.config.js`.
- **Brand tokens:** primary purple `#9969ff` (scale 50→950; foreground `#7c4dff`); fonts Poppins (headings) / Geist (body) / Geist Mono; dark-mode ready; logo `logo.svg`.
- **Marketing skills:** `.agents/skills/` (43 skills; all consume `.agents/product-marketing.md`).
- **Product specs:** `.agents/specs/*/_epic.md` — the 18 epics mirrored from engage-api (capability source of truth; cleaned of cross-repo refs). Refresh by re-copying from engage-api.

## Conventions / gotchas
- `docs/` and `competitor-profiles/` are **excluded from the Jekyll build** (`_config.yml`) — they're internal foundation docs, not public pages. Keep internal/competitive material there, not in root.
- `.agents/` and `.claude/` are dot-dirs and are ignored by Jekyll automatically.
- ⚠️ A separate, unrelated project (a "Fanfinity Analytics" Kafka/ClickHouse microservice) has its own CLAUDE.md elsewhere on this machine. It is **not** guidance for this marketing site — ignore it here.
