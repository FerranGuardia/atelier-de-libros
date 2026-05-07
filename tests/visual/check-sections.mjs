import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
page.on('console', (msg) => console.log(`  [${msg.type()}]`, msg.text()))
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
const r = await page.evaluate(() => {
  const targets = document.querySelectorAll('[data-motion="m-rise"]')
  return Array.from(targets).map((el) => ({
    tag: el.tagName,
    cls: el.className,
    inView: el.hasAttribute('data-in-view'),
    opacity: getComputedStyle(el).opacity,
    rect: { y: el.getBoundingClientRect().y, h: el.getBoundingClientRect().height }
  }))
})
console.log(JSON.stringify(r, null, 2))
await browser.close()
