'use client'

import { useEffect, useState } from 'react'
import { useTranslations }     from 'next-intl'
import { WA_URL }              from '@/lib/constants'
import { trackWaClick }        from '@/lib/analytics'
const SNAPBAR_H      = 36   // px — keep in sync with Navbar's CSS var
const SESSION_KEY    = 'snapbar-dismissed'

export default function SnapBar() {
  const t = useTranslations('snapbar')
  const [visible, setVisible] = useState(false)

  // Mount: show only if not dismissed this session
  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true)
      document.documentElement.style.setProperty('--snapbar-h', `${SNAPBAR_H}px`)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(SESSION_KEY, '1')
    document.documentElement.style.setProperty('--snapbar-h', '0px')
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label={t('ariaLabel')}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center px-10"
      style={{
        height:     SNAPBAR_H,
        background: 'linear-gradient(90deg,#00C9B1 0%,#F0B429 40%,#F45E0C 70%,#E0157A 100%)',
      }}
    >
      {/* Message */}
      <p className="text-[11px] font-semibold tracking-wide text-white text-center leading-none flex items-center gap-2 flex-wrap justify-center">
        <span aria-hidden="true">✨</span>
        <span>{t('message')}</span>
        <span aria-hidden="true">·</span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWaClick('snapbar')}
          className="underline underline-offset-2 font-bold hover:no-underline whitespace-nowrap"
          aria-label={t('ctaAria')}
        >
          {t('cta')} →
        </a>
      </p>

      {/* Dismiss */}
      <button
        onClick={dismiss}
        aria-label={t('close')}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-150 p-1"
      >
        <svg
          width="12" height="12"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6"  x2="6"  y2="18" />
          <line x1="6"  y1="6"  x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
