// Build the integrations directory data from the product's source-catalog export (sources.json).
//
// sources.json is a raw export (~600 connectors) that carries the underlying stack's
// names — `airbyte`, `jitsu`, `clickhouse` — in packageId/packageType/meta.name etc.
// Company rule + standing instruction: those names must never ship. This script keeps
// ONLY the third-party source name (meta.name) and its brand logo (logoSvg), scrubs any
// banned-vendor names, dedupes, sorts, and writes what the Jekyll page renders:
//   - _data/integrations.json          → [{ name, slug, logo }]  (full directory)
//   - _data/integrations_featured.json → [{ name, slug, logo, category }]  (highlighted wall)
//   - assets/integrations/<slug>.svg   → one brand logo per source (safe to publish)
//
// The raw sources.json is NOT stored in the repo. To refresh the catalog: drop a fresh
// export at the repo root, run `npm run data:build`, review the diff, then delete
// sources.json again. When it's absent (the normal state) this script is a no-op so builds
// keep working. `_config.yml` also excludes sources.json + scripts from the build as a
// safety net so neither can ever be published.

import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcPath = join(root, 'sources.json');
const logoDir = join(root, 'assets', 'integrations');
const BANNED = ['airbyte', 'jitsu', 'clickhouse'];
const hasBanned = (s) => BANNED.some((b) => s.toLowerCase().includes(b));
const slugify = (n) =>
  n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Curated highlight wall — the most recognizable connectors, spread across the six
// categories the page advertises. Slugs must resolve to a catalog entry that has a logo;
// the script warns (and skips) any that don't so this list can't silently break the page.
const FEATURED = [
  { slug: 'salesforce',                 category: 'Ticketing & CRM' },
  { slug: 'hubspot',                    category: 'Ticketing & CRM' },
  { slug: 'stripe',                     category: 'Ticketing & CRM' },
  { slug: 'facebook-marketing',         category: 'Ad platforms' },
  { slug: 'google-ads',                 category: 'Ad platforms' },
  { slug: 'tiktok-marketing',           category: 'Ad platforms' },
  { slug: 'snapchat-marketing',         category: 'Ad platforms' },
  { slug: 'instagram',                  category: 'Ad platforms' },
  { slug: 'snowflake',                  category: 'Data warehouses' },
  { slug: 'bigquery',                   category: 'Data warehouses' },
  { slug: 'google-analytics-4-ga4',     category: 'Analytics & BI' },
  { slug: 'amplitude',                  category: 'Analytics & BI' },
  { slug: 'mixpanel',                   category: 'Analytics & BI' },
  { slug: 'segment',                    category: 'Analytics & BI' },
  { slug: 'twilio',                     category: 'Messaging' },
  { slug: 'mailchimp',                  category: 'Messaging' },
  { slug: 'braze',                      category: 'Messaging' },
  { slug: 'klaviyo',                    category: 'Messaging' },
];

if (!existsSync(srcPath)) {
  console.log('build-integrations: no sources.json at repo root — keeping existing _data/integrations.json.');
  process.exit(0);
}

const raw = JSON.parse(readFileSync(srcPath, 'utf8'));

// Reset the logo directory so a refresh never leaves orphaned logos behind.
rmSync(logoDir, { recursive: true, force: true });
mkdirSync(logoDir, { recursive: true });

const seen = new Map(); // slug -> record
const records = [];
let logoCount = 0;
for (const entry of raw.sources || []) {
  let name = entry && entry.meta && entry.meta.name;
  if (typeof name !== 'string') continue;         // drop nameless entries
  name = name.trim();
  if (!name) continue;
  // Strip a trailing parenthetical only when it names a banned vendor,
  // e.g. "Xero (Jitsu version)" -> "Xero"; leave "Google Analytics (Universal Analytics)".
  name = name.replace(/\s*\([^)]*\)\s*$/, (m) => (hasBanned(m) ? '' : m)).trim();
  if (!name || hasBanned(name)) continue;         // drop banned-vendor sources outright
  const slug = slugify(name);
  if (!slug || seen.has(slug)) continue;          // dedupe (slug-collision safe)

  // Keep the brand logo only when it carries no banned-vendor string (defensive; the
  // export's logoSvg is the third-party brand mark and in practice never does).
  let logo = null;
  const svg = entry.logoSvg;
  if (typeof svg === 'string' && svg.trim() && !hasBanned(svg)) {
    writeFileSync(join(logoDir, `${slug}.svg`), svg.trim() + '\n');
    logo = `assets/integrations/${slug}.svg`;
    logoCount++;
  }

  const record = { name, slug, logo };
  seen.set(slug, record);
  records.push(record);
}
records.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

// Resolve the curated highlight wall against the catalog.
const featured = [];
for (const f of FEATURED) {
  const rec = seen.get(f.slug);
  if (!rec) { console.warn(`build-integrations: featured slug "${f.slug}" not found — skipped.`); continue; }
  if (!rec.logo) { console.warn(`build-integrations: featured slug "${f.slug}" has no logo — skipped.`); continue; }
  featured.push({ ...rec, category: f.category });
}

writeFileSync(join(root, '_data', 'integrations.json'), JSON.stringify(records, null, 2) + '\n');
writeFileSync(join(root, '_data', 'integrations_featured.json'), JSON.stringify(featured, null, 2) + '\n');
console.log(
  `Wrote _data/integrations.json — ${records.length} sources (${logoCount} with logos) ` +
  `from ${(raw.sources || []).length} entries; ${featured.length} featured; logos in assets/integrations/.`
);
