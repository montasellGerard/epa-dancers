'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations }              from 'next-intl'
import Image                            from 'next/image'

const WA_URL = 'https://wa.me/34600000000'

const STATS = [
  { val: 8,  suffix: '+' },
  { val: 4,  suffix: ''  },
  { val: 15, suffix: '+' },
  { val: 80, suffix: '+' },
] as const

function useCounter(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  const raf = useRef<number>(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [active, target, duration])
  return count
}

function StatItem({ val, suffix, lbl, active }: { val: number; suffix: string; lbl: string; active: boolean }) {
  const count = useCounter(val, active)
  return (
    <div>
      <span className="block font-black text-2xl" style={{ color: '#F0B429' }}>{count}{suffix}</span>
      <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{lbl}</span>
    </div>
  )
}

export default function Hero() {
  const t         = useTranslations('hero')
  const statsRef  = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  const STAT_LABELS = [t('statYears'), t('statLevels'), t('statClasses'), t('statStudents')]

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.unobserve(el) } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="clases"
      className="relative min-h-screen flex items-stretch overflow-hidden"
      aria-labelledby="hero-heading"
      style={{ background: 'linear-gradient(160deg, #1C0800 0%, #2A1000 45%, #1A0D04 100%)' }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,201,177,0.2) 0%, transparent 65%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(224,21,122,0.15) 0%, transparent 65%)' }} />
      <div className="pointer-events-none absolute top-1/2 right-0 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,94,12,0.12) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 py-32 md:py-0">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-2 rounded-full text-[10px] tracking-[3px] uppercase font-bold font-sans"
            style={{ background: 'rgba(240,180,41,0.12)', border: '1px solid rgba(240,180,41,0.35)', color: '#F0B429', animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.1s', opacity: 0 }}>
            ✦ {t('eyebrow')} ✦
          </div>

          <h1 id="hero-heading" className="font-black leading-none mb-3 text-white"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(48px, 7vw, 72px)', animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.25s', opacity: 0 }}>
            Alicia <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>&</span> Pedro
          </h1>

          <p className="mb-4 font-bold leading-tight"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 3.5vw, 34px)', animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.4s', opacity: 0 }}>
            <span className="italic" style={{ color: '#E0157A' }}>Salsa</span>
            <span className="text-white/40 mx-2 font-normal">&</span>
            <span className="italic" style={{ color: '#00C9B1' }}>Bachata</span>
          </p>

          <p className="text-white/60 font-sans text-base leading-relaxed mb-8 max-w-md"
            style={{ animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.55s', opacity: 0 }}>
            {t('ctaSecondary')}
          </p>

          <div className="flex flex-wrap gap-3 mb-10" style={{ animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.7s', opacity: 0 }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold font-sans text-sm text-white px-7 py-3.5 rounded-full transition-transform hover:scale-105"
              style={{ background: '#E0157A', animation: 'pulse-glow 2.5s ease-in-out infinite', boxShadow: '0 6px 24px rgba(224,21,122,0.4)' }}>
              {t('ctaPrimary')}
            </a>
            <a href="#horarios"
              className="inline-flex items-center gap-2 font-semibold font-sans text-sm px-6 py-3.5 rounded-full transition-colors hover:bg-[#00C9B1]/10"
              style={{ border: '2px solid rgba(0,201,177,0.5)', color: '#00C9B1' }}>
              {t('ctaSecondary')}
            </a>
          </div>

          <div ref={statsRef} className="flex gap-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {STATS.map((s, i) => (
              <StatItem key={i} val={s.val} suffix={s.suffix} lbl={STAT_LABELS[i]} active={statsVisible} />
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="w-full md:w-[340px] flex-shrink-0 flex items-end justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden"
            style={{ border: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 60px rgba(0,201,177,0.12), 0 0 100px rgba(224,21,122,0.08)' }}>
            <Image
              src="/images/Ali_Pedro_Presentaci%C3%B3n.jpg"
              alt={t('photoAlt')}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 90vw, 340px"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 100%)' }}>
              <p className="font-sans text-xs font-semibold tracking-wide text-center">
                <span style={{ color: '#E0157A' }}>Alicia</span>
                <span className="text-white/40 mx-1">&</span>
                <span style={{ color: '#00C9B1' }}>Pedro</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 bottom-8 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ animation: 'bounce-y 2s ease-in-out infinite', transform: 'translateX(-50%)' }} aria-hidden="true">
        <span className="font-sans text-[9px] uppercase tracking-[2px]" style={{ color: 'rgba(240,180,41,0.5)' }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(240,180,41,0.5)" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
