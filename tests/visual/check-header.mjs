import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'screenshots/header-detail-desktop.png', clip: { x: 0, y: 0, width: 1440, height: 220 } })
const h = await page.evaluate(() => {
  const el = document.querySelector('.site-header')
  if (!el) return { found: false }
  const r = el.getBoundingClientRect()
  const style = getComputedStyle(el)
  const wm = document.querySelector('.wordmark')
  const wmStyle = wm ? getComputedStyle(wm) : null
  return {
    found: true,
    rect: { x: r.x, y: r.y, w: r.width, h: r.height },
    display: style.display,
    visibility: style.visibility,
    opacity: style.opacity,
    zIndex: style.zIndex,
    wordmark: wm
      ? { color: wmStyle.color, fontSize: wmStyle.fontSize, opacity: wmStyle.opacity, text: wm.textContent.trim() }
      : null,
    bodyOverflow: getComputedStyle(document.body).overflow
  }
})
console.log(JSON.stringify(h, null, 2))
await browser.close()
