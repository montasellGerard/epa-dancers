import type { MetadataRoute } from 'next'

import { BASE_URL } from '@/lib/site'
const LOCALES  = ['es', 'en', 'ca'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url:          `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority:     locale === 'es' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }))
}
