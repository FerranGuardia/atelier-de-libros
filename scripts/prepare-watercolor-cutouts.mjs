import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDir = 'src/assets/watercolor'
const outputDir = 'src/assets/watercolor/cutouts'

const skipPattern = /(?:-cutout|-token|sheet)\.png$/i
const compositeSources = new Set(['editorial-desk.png', 'reader-paper-island.png'])

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

function samplePaper(data, info) {
  const samples = []
  const edge = Math.max(8, Math.round(Math.min(info.width, info.height) * 0.08))

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const isEdge =
        x < edge ||
        y < edge ||
        x >= info.width - edge ||
        y >= info.height - edge
      if (!isEdge || (x + y) % 4 !== 0) continue

      const i = (y * info.width + x) * info.channels
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const brightness = (r + g + b) / 3
      const colorSpread = Math.max(r, g, b) - Math.min(r, g, b)

      if (brightness > 206 && colorSpread < 36) {
        samples.push([r, g, b])
      }
    }
  }

  if (samples.length < 24) return [246, 245, 239]

  return [
    median(samples.map(([r]) => r)),
    median(samples.map(([, g]) => g)),
    median(samples.map(([, , b]) => b))
  ]
}

function backgroundScore(r, g, b, paper) {
  const [pr, pg, pb] = paper
  const distance = Math.hypot(r - pr, g - pg, b - pb)
  const brightness = (r + g + b) / 3
  const saturation = Math.max(r, g, b) - Math.min(r, g, b)
  const paperLike = distance * 1.5 + Math.max(0, 228 - brightness) * 0.55 + saturation * 0.25

  return paperLike
}

async function makeCutout(input, output) {
  const image = sharp(input).ensureAlpha()
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })
  const paper = samplePaper(data, info)
  const out = Buffer.from(data)

  let minX = info.width
  let minY = info.height
  let maxX = -1
  let maxY = -1

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const sourceAlpha = data[i + 3]
      const score = backgroundScore(r, g, b, paper)

      let alpha
      if (score < 20) alpha = 0
      else if (score > 82) alpha = sourceAlpha
      else alpha = Math.round(sourceAlpha * ((score - 20) / 62))

      out[i + 3] = clamp(alpha, 0, sourceAlpha)

      if (out[i + 3] > 18) {
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
      }
    }
  }

  if (maxX < minX || maxY < minY) {
    await sharp(input).png().toFile(output)
    return { output, paper, cropped: false }
  }

  const pad = Math.round(Math.min(info.width, info.height) * 0.045)
  const left = clamp(minX - pad, 0, info.width - 1)
  const top = clamp(minY - pad, 0, info.height - 1)
  const right = clamp(maxX + pad, 0, info.width - 1)
  const bottom = clamp(maxY + pad, 0, info.height - 1)

  await sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
    .extract({
      left,
      top,
      width: right - left + 1,
      height: bottom - top + 1
    })
    .png()
    .toFile(output)

  return {
    output,
    paper,
    cropped: true,
    crop: { left, top, width: right - left + 1, height: bottom - top + 1 }
  }
}

await fs.mkdir(outputDir, { recursive: true })
const entries = await fs.readdir(sourceDir)
const images = entries
  .filter(
    (entry) =>
      entry.endsWith('.png') &&
      !skipPattern.test(entry) &&
      !compositeSources.has(entry)
  )
  .sort()

const results = []
for (const image of images) {
  const input = path.join(sourceDir, image)
  const slug = image.replace(/\.png$/, '')
  const output = path.join(outputDir, `${slug}-cutout.png`)
  results.push({ slug, ...(await makeCutout(input, output)) })
}

console.table(
  results.map(({ slug, crop, paper }) => ({
    slug,
    paper: paper.join(','),
    crop: crop ? `${crop.width}x${crop.height}+${crop.left}+${crop.top}` : 'none'
  }))
)
