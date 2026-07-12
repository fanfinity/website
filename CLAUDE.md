# Fanfinity Marketing Website — Repo Guide

Marketing/landing-page site for **Fanfinity**, a fan-engagement & loyalty platform for live sports, media, and brands (a competitor to incumbent fan-engagement platforms). Built with **Jekyll + Tailwind CSS**, deployed to GitHub Pages. The site is a multi-page marketing site (home in `index.html`, plus Platform, Solutions, Developers, Pricing, etc.).

## 📌 Grounding rules (read before writing any copy)
The marketing foundation docs (`docs/`, `competitor-profiles/`) were removed 2026-07-12 — the copy they produced now lives in the pages themselves. When writing or auditing content: never invent customers, logos, testimonials, metrics, or pricing. Every competitive differentiator is a hypothesis labeled "(to confirm)". ⚠️ The performance numbers (≈1000 req/s, sub-200ms, Kafka, zero-data-loss) are from a *separate* analytics-microservice brief — **not** product facts.

## Build & develop
```bash
bundle install && npm install   # one-time setup (Ruby 3.x + Node 20.x)
npm run dev                      # Tailwind watch + Jekyll live-reload → http://localhost:4000
npm run build                   # production build (CSS + Jekyll) → _site/
npm run css:build               # build Tailwind CSS only (minified)
```
Deploy is **manual only**: GitHub → Actions → "Deploy Jekyll site to Pages" → Run workflow (`.github/workflows/jekyll-gh-pages.yml`).

## Where things live / how to add a page
- **Pages/content:** root `*.html`/`*.md` (e.g. `index.html`); layouts in `_layouts/` (`default.html`); partials in `_includes/`. Add a page by creating a `.md`/`.html` with `layout: default` front matter.
- **Styling:** edit `src/main.css` (Tailwind source + oklch theme vars) → builds to `assets/css/main.css`. Theme/colors/fonts in `tailwind.config.js`.
- **Brand tokens:** primary purple `#9969ff` (scale 50→950; foreground `#7c4dff`); fonts **Poppins** (headings) / **Inter** (body) / **Geist Mono** (labels/code) — all via Google Fonts; icons = **Tabler** set (inline SVG in `_includes/icon.html`); dark-mode ready; logo `logo.svg`.

## Conventions / gotchas
- `.claude/` is a dot-dir and is ignored by Jekyll automatically.
- ⚠️ A separate, unrelated project (a "Fanfinity Analytics" Kafka/ClickHouse microservice) has its own CLAUDE.md elsewhere on this machine. It is **not** guidance for this marketing site — ignore it here.
