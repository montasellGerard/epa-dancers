'use client'

import { useState }        from 'react'
import { useTranslations } from 'next-intl'
import { faqIds }          from '@/data/faq'
import type { FaqId }      from '@/data/faq'
import { useInView }       from '@/hooks/useInView'

const WA_URL = 'https://wa.me/34600000000'

export default function FAQ() {
  const t               = useTranslations('faq')
  const { ref, inView } = useInView<HTMLElement>()
  const [openId, setOpenId] = useState<FaqId | null>(null)

  const toggle = (id: FaqId) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" ref={ref} className="py-20 px-6" aria-labelledby="faq-heading" style={{ background: '#FDF6E3' }}>
      <div className="max-w-3xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#E0157A' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#E0157A' }}>{t('eyebrow')}</span>
        </div>
        <h2 id="faq-heading" className="font-black mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          {t('titleMain')}{' '}<span style={{ color: '#E0157A' }}>{t('titleHighlight')}</span>
        </h2>
        <p className="font-sans text-sm mb-10" style={{ color: '#7A5230' }}>{t('subtitle')}</p>

        {/* Accordion */}
        <dl className="flex flex-col gap-3">
          {faqIds.map((id) => {
            const isOpen = openId === id
            return (
              <div key={id} className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{ background: '#fff', border: isOpen ? '1px solid rgba(224,21,122,0.25)' : '1px solid rgba(0,0,0,0.07)', boxShadow: isOpen ? '0 4px 20px rgba(224,21,122,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
                <dt>
                  <button onClick={() => toggle(id)} aria-expanded={isOpen} aria-controls={`faq-answer-${id}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-bold font-sans text-sm leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? '#E0157A' : '#1A0A00' }}>
                      {t(`items.${id}.question` as Parameters<typeof t>[0])}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300" aria-hidden="true"
                      style={{ background: isOpen ? 'rgba(224,21,122,0.1)' : 'rgba(0,0,0,0.05)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ color: isOpen ? '#E0157A' : '#7A5230' }}>
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd id={`faq-answer-${id}`} className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}>
                  <p className="font-sans text-sm leading-relaxed px-6 pb-5" style={{ color: '#7A5230' }}>
                    {t(`items.${id}.answer` as Parameters<typeof t>[0])}
                  </p>
                </dd>
              </div>
            )
          })}
        </dl>

        {/* CTA bottom */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-5"
          style={{ background: '#FEF3D0', border: '1px solid rgba(0,0,0,0.06)' }}>
          <p className="font-sans text-sm text-center sm:text-left" style={{ color: '#7A5230' }}>{t('ctaQuestion')}</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold font-sans text-xs text-white px-5 py-2.5 rounded-full flex-shrink-0 transition-transform hover:scale-105"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
            </svg>
            {t('ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}
