// @ts-check
import { defineConfig, sharpImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://atelierdelibros.com',
  prefetch: {
    defaultStrategy: 'viewport'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'fr', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  image: {
    service: sharpImageService()
  },
  integrations: [mdx(), sitemap()]
})
