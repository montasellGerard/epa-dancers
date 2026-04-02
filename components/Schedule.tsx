'use client'

import { schedule, prices } from '@/data/schedule'
import type { LevelColor } from '@/data/schedule'
import { useInView } from '@/hooks/useInView'

const WA_URL = 'https://wa.me/34600000000'

const levelDotColor: Record<LevelColor, string> = {
  inicio:     '#00C9B1',
  intermedio: '#F0B429',
  avanzado:   '#E0157A',
}

function ScheduleSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="horarios"
      ref={ref}
      className="py-20 px-6"
      aria-labelledby="horarios-heading"
      style={{ background: '#FEF3D0' }}
    >
      <div
        className="max-w-7xl mx-auto transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#00C9B1' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#00C9B1' }}>
            Horarios 2025–26
          </span>
        </div>
        <h2
          id="horarios-heading"
          className="font-black mb-8 leading-tight"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}
        >
          Clases <span className="font-normal" style={{ color: '#7A5230' }}>&</span> Precios
        </h2>

        {/* Schedule cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Salsa */}
          <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #E0157A' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ background: '#E0157A' }} />
              <span className="font-sans font-extrabold text-[9px] tracking-[2.5px] uppercase" style={{ color: '#E0157A' }}>
                Salsa
              </span>
            </div>
            {schedule.salsa.map((row) => (
              <div
                key={`salsa-${row.level}`}
                className="flex justify-between items-center py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: levelDotColor[row.levelColor] }}
                    aria-label={row.levelColor}
                  />
                  <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.level}</span>
                </div>
                <span className="text-xs font-sans" style={{ color: '#7A5230' }}>
                  {row.day} · {row.time}
                </span>
              </div>
            ))}
          </div>

          {/* Bachata */}
          <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #00C9B1' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ background: '#00C9B1' }} />
              <span className="font-sans font-extrabold text-[9px] tracking-[2.5px] uppercase" style={{ color: '#00C9B1' }}>
                Bachata
              </span>
            </div>
            {schedule.bachata.map((row) => (
              <div
                key={`bachata-${row.level}`}
                className="flex justify-between items-center py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: levelDotColor[row.levelColor] }}
                    aria-label={row.levelColor}
                  />
                  <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.level}</span>
                </div>
                <span className="text-xs font-sans" style={{ color: '#7A5230' }}>
                  {row.day} · {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Level legend */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {(Object.entries(levelDotColor) as [LevelColor, string][]).map(([key, color]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="font-sans text-[10px] capitalize" style={{ color: '#7A5230' }}>{key}</span>
            </div>
          ))}
        </div>

        {/* Prices */}
        <div className="flex flex-wrap justify-center gap-4">
          {prices.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl px-5 py-4 text-center min-w-[120px] transition-transform hover:-translate-y-1 relative"
              style={
                p.featured
                  ? { background: 'linear-gradient(160deg,#FFF8F0,#FFF3E0)', border: '2px solid #F45E0C', boxShadow: '0 4px 24px rgba(244,94,12,0.2)' }
                  : { background: '#fff', border: '2px solid #F0EDE5', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }
              }
            >
              {p.featured && 'badge' in p && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[8px] font-extrabold uppercase tracking-widest font-sans px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                  style={{ background: '#F45E0C' }}
                >
                  ★ {p.badge}
                </span>
              )}
              <span className="block font-black text-2xl mt-2" style={{ color: p.featured ? '#F45E0C' : '#1A0A00' }}>
                {p.amount}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest mt-1 block" style={{ color: '#7A5230' }}>
                {p.label}
              </span>
              {'description' in p && p.description && (
                <span className="font-sans text-[9px] mt-1.5 block leading-snug" style={{ color: '#7A5230', opacity: 0.7 }}>
                  {p.description}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <p className="text-center mt-8 font-sans text-sm" style={{ color: '#7A5230' }}>
          ¿Tienes dudas sobre qué tarifa elegir?{' '}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline transition-opacity hover:opacity-70"
            style={{ color: '#E0157A' }}
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}

export default function Schedule() {
  return <ScheduleSection />
}
