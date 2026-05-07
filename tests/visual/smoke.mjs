import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

mkdirSync('screenshots', { recursive: true })

const BASE = process.env.BASE || 'http://localhost:4321'
const ROUTES = process.env.ROUTES?.split(',') || ['/']
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 900 }
]

const browser = await chromium.launch()
for (const route of ROUTES) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
    const page = await ctx.newPage()
    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_')
    const url = BASE + route
    process.stdout.write(`  ${vp.name.padEnd(8)} ${url} … `)
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })
      /* Settle the hero entrance choreography (T14 timeline ends at
       * t=1800ms). */
      await page.waitForTimeout(2200)
      /* The site uses IntersectionObserver to flip [data-in-view] on
       * scroll-into-view; for fullPage screenshots we need every section
       * to settle into its revealed state. Force the flag on every
       * pending motion target so the screenshot reflects the steady
       * state a real user would see after scrolling. */
      await page.evaluate(() => {
        document
          .querySelectorAll('[data-motion]')
          .forEach((el) => el.setAttribute('data-in-view', ''))
      })
      await page.waitForTimeout(800)
      await page.screenshot({ path: `screenshots/${slug}-${vp.name}.png`, fullPage: true })
      console.log('ok')
    } catch (e) {
      console.log('FAIL', e.message)
    }
    await ctx.close()
  }
}
await browser.close()
