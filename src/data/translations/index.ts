import { en } from './en'
import { es } from './es'

export type Lang = 'en' | 'es'

/** Single entry point for UI copy. Content strings live in services.ts / faq.ts. */
export function useTranslations(lang: Lang = 'en') {
  return lang === 'es' ? es : en
}

export { en, es }
export type { Translations } from './en'
