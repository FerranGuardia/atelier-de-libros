#!/usr/bin/env node
// One-shot: subset the Cormorant Garamond + Inter WOFF2 files in
// public/fonts/ to a Spanish-language glyph set. Re-run only when the
// font set changes. Source files come from @fontsource at install time;
// this script trims them to ~half their size by dropping European
// language glyphs the project never renders.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import subsetFont from 'subset-font'

const __dirname = dirname(fileURLToPath(import.meta.url))
const fontsDir = join(__dirname, '..', 'public', 'fonts')

// Spanish-only glyph set: ASCII printable + Spanish accents + common
// editorial punctuation we use across the site (em dash, en dash, curly
// quotes, guillemets, ellipsis, prime, NBSP). Adjust here if a new
// glyph creeps in.
const charset = [
  // ASCII printable
  ...Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)),
  // Spanish accents
  'áéíóú', 'ÁÉÍÓÚ',
  'ñÑ', 'üÜ',
  '¿¡',
  // Editorial punctuation
  '–—', // en dash, em dash
  '‘’', // curly singles
  '“”', // curly doubles
  '«»',
  '…',
  '′″', // prime, double prime
  ' ', // NBSP
  '·', // middle dot
  '€$',
  '°'
].join('')

const files = [
  'cormorant-300.woff2',
  'cormorant-300-italic.woff2',
  'cormorant-400.woff2',
  'cormorant-400-italic.woff2',
  'inter-400.woff2',
  'inter-500.woff2'
]

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const path = join(fontsDir, file)
  const before = await readFile(path)
  const after = await subsetFont(before, charset, { targetFormat: 'woff2' })
  await writeFile(path, after)
  totalBefore += before.length
  totalAfter += after.length
  const pct = ((1 - after.length / before.length) * 100).toFixed(1)
  console.log(`  ${file}: ${before.length} → ${after.length} bytes (-${pct}%)`)
}

const beforeKB = (totalBefore / 1024).toFixed(1)
const afterKB = (totalAfter / 1024).toFixed(1)
const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(1)
console.log(`\nTotal: ${beforeKB} KB → ${afterKB} KB (-${pct}%)`)
