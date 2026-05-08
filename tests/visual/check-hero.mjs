import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto('http://localhost:5181/', { waitUntil: 'networkidle' })
await page.waitForTimeout(2400)
const r = await page.evaluate(() => {
  const hero = document.querySelector('.hero')
  const img = document.querySelector('.hero-image')
  const text = document.querySelector('.hero-content')
  const get = (el) => {
    if (!el) return null
    const r = el.getBoundingClientRect()
    const s = getComputedStyle(el)
    return { rect: { x: r.x, y: r.y, w: r.width, h: r.height }, position: s.position, opacity: s.opacity, zIndex: s.zIndex, objectFit: s.objectFit, objectPosition: s.objectPosition }
  }
  return { hero: get(hero), img: get(img), text: get(text) }
})
console.log(JSON.stringify(r, null, 2))
await page.screenshot({ path: 'screenshots/hero-only.png', clip: { x: 0, y: 0, width: 1440, height: 900 } })
await browser.close()
