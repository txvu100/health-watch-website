import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://healthwatchclinic.com',
  // Directory output (Astro's default) emits /about/index.html, which every
  // static host resolves. `format: 'file'` would emit about.html and rely on the
  // host retrying with a .html extension — Render does not do that, so every
  // page but the homepage would 404. One spelling of each URL is still enforced:
  // internal links, <link rel="canonical">, and sitemap <loc> all use the
  // trailing slash that directory output actually serves.
  trailingSlash: 'always',
  integrations: [
    vue(),
    sitemap({
      // A sitemap should only list canonical URLs. /patient-portal is noindexed,
      // and the two telemedicine service pages canonicalise to the standalone
      // landing pages (see `canonicalOverride` in src/data/services.ts).
      filter: (page) =>
        !['/patient-portal', '/services/telemedicine', '/es/servicios/telemedicina'].some((p) =>
          page.replace(/\/$/, '').endsWith(p),
        ),
      // No `i18n` block on purpose. @astrojs/sitemap pairs locales by matching
      // path structure, but our Spanish slugs are translated (/contact vs
      // /es/contacto), so it could only pair the homepage — and it emitted that
      // one with a trailing slash, contradicting the canonical. hreflang is
      // published as complete, reciprocal <link rel="alternate"> tags in <head>
      // instead (see SEOHead.astro); Google accepts either method, not both.
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
