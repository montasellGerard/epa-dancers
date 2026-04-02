'use client'

import { useEffect, useRef, useState }  from 'react'
import { useTranslations }               from 'next-intl'
import { testimonials, avatarGradients } from '@/data/testimonials'
import type { Testimonial }              from '@/data/testimonials'
import { useInView }                     from '@/hooks/useInView'

const featured = [...testimonials].filter((t) => t.featured).sort((a, b) => a.order - b.order)

function TestimonialCard({ t: item }: { t: Testimonial }) {
  const trans = useTranslations('testimonials')

  const levelLabel: Record<string, string> = {
    'Iniciación': trans('levelBeginner'),
    'Intermedio': trans('levelIntermediate'),
    'Avanzado':   trans('levelAdvanced'),
  }

  return (
    <article className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden h-full"
      style={{ background: '#FDF6E3', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      <span className="absolute top-2 right-4 text-8xl font-black leading-none select-none pointer-events-none"
        style={{ fontFamily: 'Georgia, serif', color: 'rgba(224,21,122,0.05)' }} aria-hidden="true">"</span>

      {/* Avatar + info */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0"
          style={{ background: avatarGradients[item.avatarColor] }} aria-hidden="true">
          {item.initials}
        </div>
        <div>
          <p className="font-bold text-sm leading-none" style={{ color: '#1A0A00' }}>{item.name}</p>
          <p className="font-sans text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: '#7A5230' }}>
            {levelLabel[item.level] ?? item.level} · {item.style}
          </p>
        </div>
      </div>

      {item.highlight && (
        <span className="inline-flex w-fit text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: 'rgba(240,180,41,0.12)', color: '#7A5B00', border: '1px solid rgba(240,180,41,0.3)' }}>
          {item.highlight}
        </span>
      )}

      <blockquote className="font-sans text-sm leading-relaxed flex-1 relative z-10" style={{ color: '#4A3520' }}>
        "{item.quote}"
      </blockquote>

      <div className="flex items-center gap-1.5 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <span className="font-sans text-[9px] uppercase tracking-wider" style={{ color: '#7A5230' }}>{trans('sinceLabel')}</span>
        <span className="font-sans text-[9px] font-bold" style={{ color: '#F45E0C' }}>{item.since}</span>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const t                                   = useTranslations('testimonials')
  const { ref, inView }                     = useInView<HTMLElement>()
  const scrollRef                           = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex]       = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const cardWidth = el.scrollWidth / featured.length
      setActiveIndex(Math.round(el.scrollLeft / cardWidth))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / featured.length
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
  }

  return (
    <section id="alumnos" ref={ref} className="py-20 px-6" aria-labelledby="alumnos-heading" style={{ background: '#FEF3D0' }}>
      <div className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F45E0C' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#F45E0C' }}>{t('eyebrow')}</span>
        </div>
        <h2 id="alumnos-heading" className="font-black mb-2 leading-tight"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          {t('titleMain')}{' '}
          <span style={{ color: '#F45E0C' }}>{t('titleHighlight')}</span>
        </h2>
        <p className="font-sans text-sm mb-10" style={{ color: '#7A5230' }}>{t('subtitle')}</p>

        {/* Grid desktop / Carousel mobile */}
        <div ref={scrollRef}
          className="scroll-hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none lg:mx-0 lg:px-0 lg:pb-0">
          {featured.map((item) => (
            <div key={item.id} className="snap-start flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto">
              <TestimonialCard t={item} />
            </div>
          ))}
        </div>

        {featured.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 lg:hidden" aria-hidden="true">
            {featured.map((item, i) => (
              <button key={item.id} onClick={() => scrollToIndex(i)} className="rounded-full transition-all duration-200"
                style={{ width: activeIndex === i ? '20px' : '8px', height: '8px', background: activeIndex === i ? '#E0157A' : 'rgba(0,0,0,0.15)' }}
                aria-label={`Ver testimonio de ${item.name}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
