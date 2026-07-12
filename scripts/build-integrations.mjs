// Build _data/integrations.json from the product's source-catalog export (sources.json).
//
// sources.json is a raw export (~600 connectors) that carries the underlying stack's
// names — `airbyte`, `jitsu`, `clickhouse` — in packageId/packageType/meta.name etc.
// Company rule + standing instruction: those names must never ship. This script keeps
// ONLY the third-party source name (meta.name), scrubs any banned-vendor names, dedupes,
// sorts, and writes a small JSON array the Jekyll page renders.
//
// The raw sources.json is NOT stored in the repo. To refresh the catalog: drop a fresh
// export at the repo root, run `npm run data:build`, review the _data/integrations.json
// diff, then delete sources.json again. When it's absent (the normal state) this script
// is a no-op so builds keep working. `_config.yml` also excludes sources.json + scripts
// from the build as a safety net so neither can ever be published.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcPath = join(root, 'sources.json');
const BANNED = ['airbyte', 'jitsu', 'clickhouse'];
const hasBanned = (s) => BANNED.some((b) => s.toLowerCase().includes(b));

if (!existsSync(srcPath)) {
  console.log('build-integrations: no sources.json at repo root — keeping existing _data/integrations.json.');
  process.exit(0);
}

const raw = JSON.parse(readFileSync(srcPath, 'utf8'));

const seen = new Set();
const names = [];
for (const entry of raw.sources || []) {
  let name = entry && entry.meta && entry.meta.name;
  if (typeof name !== 'string') continue;         // drop nameless entries
  name = name.trim();
  if (!name) continue;
  // Strip a trailing parenthetical only when it names a banned vendor,
  // e.g. "Xero (Jitsu version)" -> "Xero"; leave "Google Analytics (Universal Analytics)".
  name = name.replace(/\s*\([^)]*\)\s*$/, (m) => (hasBanned(m) ? '' : m)).trim();
  if (!name || hasBanned(name)) continue;         // drop banned-vendor sources outright
  const key = name.toLowerCase();
  if (seen.has(key)) continue;                    // dedupe (case-insensitive)
  seen.add(key);
  names.push(name);
}
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

writeFileSync(join(root, '_data', 'integrations.json'), JSON.stringify(names, null, 2) + '\n');
console.log(`Wrote _data/integrations.json — ${names.length} sources (from ${(raw.sources || []).length} entries)`);
