import type { Lang } from './translations'

/**
 * Paired EN/ES routes. `en` is also the hreflang cluster key, so keeping pairs
 * here means the nav, the language switcher, and <link rel="alternate"> can
 * never disagree about which two pages are counterparts.
 */
export const ROUTE_PAIRS = {
  home: { en: '/', es: '/es/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  services: { en: '/services/', es: '/es/servicios/' },
  insurance: { en: '/insurance/', es: '/es/seguros/' },
  telemedicine: { en: '/telemedicine/', es: '/es/telemedicina/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
} as const

export type RouteKey = keyof typeof ROUTE_PAIRS

export function route(key: RouteKey, lang: Lang = 'en'): string {
  return ROUTE_PAIRS[key][lang]
}

/** The `esPath` SEOHead expects: the ES route minus its /es prefix. */
export function esPathFor(key: RouteKey): string {
  const es = ROUTE_PAIRS[key].es
  return es === '/es/' ? '/' : es.replace(/^\/es/, '')
}

export function enPathFor(key: RouteKey): string {
  return ROUTE_PAIRS[key].en
}

/** Nav order shared by the header, the mobile menu, and the footer. */
export const NAV_KEYS: RouteKey[] = ['home', 'about', 'services', 'insurance', 'telemedicine', 'contact']
