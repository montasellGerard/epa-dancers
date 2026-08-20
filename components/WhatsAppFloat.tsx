'use client'

import { useEffect, useState } from 'react'
import { useTranslations }     from 'next-intl'
import { WA_URL }              from '@/lib/constants'
import { trackWaClick }        from '@/lib/analytics'

export default function WhatsAppFloat() {
  const t               = useTranslations('whatsapp')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('ariaLabel')}
      onClick={() => trackWaClick('float')}
      className="group fixed bottom-6 right-6 z-[60] flex items-center gap-3"
      style={{
        opacity:       visible ? 1 : 0,
        transform:     visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(8px)',
        transition:    'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Tooltip desktop */}
      <span
        className="hidden md:block font-sans font-semibold text-xs text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
        style={{ background: 'rgba(14,11,6,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
        aria-hidden="true"
      >
        {t('tooltip')}
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full" aria-hidden="true"
        style={{ background: 'rgba(37,211,102,0.4)', animation: 'wa-pulse 2s ease-in-out infinite' }} />

      {/* Button */}
      <span
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110"
        style={{ background: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.5)' }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
        </svg>
      </span>
    </a>
  )
}
