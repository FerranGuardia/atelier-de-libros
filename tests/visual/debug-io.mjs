import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
page.on('console', (msg) => console.log('  [page]', msg.type(), msg.text()))
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' })
const before = await page.evaluate(() => Array.from(document.querySelectorAll('[data-motion="m-rise"]')).map((el) => ({ cls: el.className, inView: el.hasAttribute('data-in-view') })))
console.log('BEFORE scroll:', JSON.stringify(before))
await page.evaluate(async () => {
  const total = document.documentElement.scrollHeight
  for (let y = 0; y <= total; y += 600) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 100))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(500)
const after = await page.evaluate(() => Array.from(document.querySelectorAll('[data-motion="m-rise"]')).map((el) => ({ cls: el.className, inView: el.hasAttribute('data-in-view'), opacity: getComputedStyle(el).opacity })))
console.log('AFTER scroll:', JSON.stringify(after, null, 2))
await browser.close()
