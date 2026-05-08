#!/usr/bin/env node
// Subset Cormorant Garamond + Inter WOFF2 to the glyph set used by the
// site's languages (ES/CA/EN/FR/IT). Sources are pulled fresh from
// @fontsource each run, so the script is idempotent and will restore
// any glyph previously dropped.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import subsetFont from 'subset-font'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const fontsDir = join(root, 'public', 'fonts')
const modulesDir = join(root, 'node_modules')

const charset = [
  // ASCII printable
  ...Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)),
  // Latin accents — ES, CA, EN, FR, IT
  'àáâäãåèéêëìíîïòóôöõùúûüýÿñç',
  'ÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕÙÚÛÜÝŸÑÇ',
  'œŒæÆß',
  'ŀĿ', // Catalan geminated L
  '¿¡',
  // Editorial punctuation
  '–—',
  '‘’‚‛',
  '“”„‟',
  '«»‹›',
  '…',
  '′″',
  '  ', // NBSP, narrow NBSP
  '·•',
  '€$£¢¥',
  '°ªº',
  '©®™'
].join('')

const sources = {
  'cormorant-300.woff2':
    '@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2',
  'cormorant-300-italic.woff2':
    '@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff2',
  'cormorant-400.woff2':
    '@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2',
  'cormorant-400-italic.woff2':
    '@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff2',
  'inter-400.woff2':
    '@fontsource/inter/files/inter-latin-400-normal.woff2',
  'inter-500.woff2':
    '@fontsource/inter/files/inter-latin-500-normal.woff2'
}

let totalBefore = 0
let totalAfter = 0

for (const [outName, src] of Object.entries(sources)) {
  const srcPath = join(modulesDir, src)
  const outPath = join(fontsDir, outName)
  const before = await readFile(srcPath)
  const after = await subsetFont(before, charset, { targetFormat: 'woff2' })
  await writeFile(outPath, after)
  totalBefore += before.length
  totalAfter += after.length
  const pct = ((1 - after.length / before.length) * 100).toFixed(1)
  console.log(`  ${outName}: ${before.length} → ${after.length} bytes (-${pct}%)`)
}

const beforeKB = (totalBefore / 1024).toFixed(1)
const afterKB = (totalAfter / 1024).toFixed(1)
const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(1)
console.log(`\nTotal: ${beforeKB} KB → ${afterKB} KB (-${pct}%)`)
