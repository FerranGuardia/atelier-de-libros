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
      /* Settle: hero entrance choreography ends at t=1800ms (T14 timeline). */
      await page.waitForTimeout(2200)
      await page.screenshot({ path: `screenshots/${slug}-${vp.name}.png`, fullPage: true })
      console.log('ok')
    } catch (e) {
      console.log('FAIL', e.message)
    }
    await ctx.close()
  }
}
await browser.close()
