'use client'

import { track } from '@vercel/analytics'

/** Tracks WhatsApp CTA clicks so we can learn which section converts. */
export function trackWaClick(section: string) {
  track('wa_click', { section })
}
