'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslations }              from 'next-intl'
import { galleryItems, categoryConfig } from '@/data/gallery'
import type { GalleryCategory, GalleryItem } from '@/data/gallery'
import { useInView }                    from '@/hooks/useInView'

type Filter = GalleryCategory | 'todos'

export default function Gallery() {
  const t               = useTranslations('gallery')
  const { ref, inView } = useInView<HTMLElement>()
  const scrollRef       = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>('todos')
  const [activeIndex,  setActiveIndex]  = useState(0)
  const [canLeft,  setCanLeft]  = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  const FILTERS: { label: string; value: Filter }[] = [
    { label: t('filterAll'),       value: 'todos'     },
    { label: t('filterClase'),     value: 'clase'     },
    { label: t('filterCongreso'),  value: 'congreso'  },
    { label: t('filterActuacion'), value: 'actuacion' },
    { label: t('filterTaller'),    value: 'taller'    },
  ]

  const categoryLabel: Record<GalleryCategory, string> = {
    clase:     t('categoryClase'),
    congreso:  t('categoryCongreso'),
    actuacion: t('categoryActuacion'),
    taller:    t('categoryTaller'),
  }

  const filtered = activeFilter === 'todos' ? galleryItems : galleryItems.filter((g) => g.category === activeFilter)

  useEffect(() => {
    setActiveIndex(0)
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }, [activeFilter])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      const cardW = el.scrollWidth / filtered.length
      setActiveIndex(Math.round(el.scrollLeft / cardW))
      setCanLeft(el.scrollLeft > 10)
      setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    return () => el.removeEventListener('scroll', update)
  }, [filtered.length])

  const closeRef = useRef<HTMLButtonElement>(null)

  // Cierra el modal con Escape y devuelve el foco al elemento que lo abrió
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setVideoSrc(null)
  }, [])

  useEffect(() => {
    if (videoSrc) {
      document.addEventListener('keydown', handleKeyDown)
      // Mueve el foco al botón de cerrar cuando se abre el modal
      setTimeout(() => closeRef.current?.focus(), 0)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [videoSrc, handleKeyDown])

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardW = el.scrollWidth / filtered.length
    el.scrollBy({ left: dir === 'right' ? cardW * 2 : -cardW * 2, behavior: 'smooth' })
  }

  return (
    <section id="galeria" ref={ref} className="py-20 overflow-hidden" aria-labelledby="galeria-heading" style={{ background: '#0E0B06' }}>
      <div className="transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        {/* Header */}
        <div className="px-6 max-w-7xl mx-auto mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F0B429' }} />
            <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#F0B429' }}>{t('eyebrow')}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="galeria-heading" className="font-black leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#fff' }}>
              {t('titleMain')}{' '}
              <span style={{ background: 'linear-gradient(90deg, #F0B429, #F45E0C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t('titleHighlight')}
              </span>
            </h2>
            {/* Desktop arrows */}
            <div className="hidden sm:flex items-center gap-2" aria-label={t('ariaNav')}>
              <button onClick={() => scrollBy('left')} disabled={!canLeft} aria-label={t('prev')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: canLeft ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: canLeft ? '#fff' : 'rgba(255,255,255,0.2)', cursor: canLeft ? 'pointer' : 'default' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 12L6 8l4-4" /></svg>
              </button>
              <button onClick={() => scrollBy('right')} disabled={!canRight} aria-label={t('next')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: canRight ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: canRight ? '#fff' : 'rgba(255,255,255,0.2)', cursor: canRight ? 'pointer' : 'default' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 4l4 4-4 4" /></svg>
              </button>
            </div>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mt-6" role="group" aria-label={t('ariaFilter')}>
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.value
              return (
                <button key={f.value} onClick={() => setActiveFilter(f.value)}
                  className="font-sans font-semibold text-[11px] px-4 py-1.5 rounded-full transition-all duration-200"
                  style={{ background: isActive ? '#F0B429' : 'rgba(255,255,255,0.07)', color: isActive ? '#0E0B06' : 'rgba(255,255,255,0.5)', border: isActive ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)' }}
                  aria-pressed={isActive}>
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Scroll strip */}
        <div ref={scrollRef} className="scroll-hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ paddingLeft: 'clamp(1.5rem, 5vw, 4rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)' }}
          aria-label={t('ariaGallery')}>
          {filtered.map((item: GalleryItem) => {
            const cfg     = categoryConfig[item.category]
            const hasVideo = !!item.videoSrc
            return (
              <div key={item.id} className="snap-start">
                <article
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden select-none"
                  style={{ width: '220px', aspectRatio: '9 / 16', background: cfg.gradient, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'rgba(0,0,0,0.15)' }} />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 font-sans font-extrabold text-[9px] tracking-[2px] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', backdropFilter: 'blur(6px)' }}>
                    {categoryLabel[item.category]}
                  </span>

                  {/* Play button */}
                  {hasVideo ? (
                    <button
                      className="absolute inset-0 flex items-center justify-center group"
                      onClick={() => setVideoSrc(item.videoSrc!)}
                      aria-label={item.title}
                    >
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                        style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}

                  {/* Title + estado */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}>
                    <p className="font-sans font-semibold text-[11px] leading-snug text-white/90">{item.title}</p>
                    <p className="font-sans text-[9px] mt-0.5 uppercase tracking-widest" style={{ color: hasVideo ? cfg.accent : 'rgba(255,255,255,0.35)' }}>
                      {hasVideo ? '▶ Ver vídeo' : t('comingSoon')}
                    </p>
                  </div>
                </article>
              </div>
            )
          })}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </div>

        {/* Dots */}
        {filtered.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-4 px-6" aria-hidden="true">
            {filtered.map((item: GalleryItem, i: number) => (
              <span key={item.id} className="rounded-full transition-all duration-200"
                style={{ width: activeIndex === i ? '20px' : '6px', height: '6px', background: activeIndex === i ? '#F0B429' : 'rgba(255,255,255,0.2)' }} />
            ))}
          </div>
        )}

        <p className="text-center font-sans text-[11px] mt-6 px-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
          {t('comingSoonFull')}
        </p>
      </div>

      {/* Video modal */}
      {videoSrc && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setVideoSrc(null) }}
          role="dialog" aria-modal="true"
        >
          <div className="relative w-full max-w-3xl">
            <button
              ref={closeRef}
              onClick={() => setVideoSrc(null)}
              className="absolute -top-10 right-0 font-sans text-white/60 hover:text-white transition-colors text-lg"
              aria-label="Cerrar vídeo"
            >
              ✕ Cerrar
            </button>
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
