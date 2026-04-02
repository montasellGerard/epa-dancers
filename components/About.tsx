'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const WA_URL = 'https://wa.me/34600000000'

// Sustituir VIDEO_ID por el ID real del vídeo de YouTube cuando esté disponible
const YOUTUBE_VIDEO_ID = 'VIDEO_ID'

const tags = [
  { label: 'Salsa',             color: 'magenta'   },
  { label: 'Bachata',           color: 'turquoise' },
  { label: 'Congresos',         color: 'gold'      },
  { label: 'Individuales',      color: 'orange'    },
  { label: 'Todos los niveles', color: 'turquoise' },
] as const

const tagStyles: Record<string, React.CSSProperties> = {
  magenta:   { background: 'rgba(224,21,122,0.1)',  color: '#A00C58', border: '1px solid rgba(224,21,122,0.25)' },
  turquoise: { background: 'rgba(0,201,177,0.1)',   color: '#007A6E', border: '1px solid rgba(0,201,177,0.3)'  },
  gold:      { background: 'rgba(240,180,41,0.1)',  color: '#7A5B00', border: '1px solid rgba(240,180,41,0.3)' },
  orange:    { background: 'rgba(244,94,12,0.1)',   color: '#B83900', border: '1px solid rgba(244,94,12,0.25)' },
}

const profiles = [
  {
    name: 'Alicia',
    role: 'Especialista Salsa On2 & Sensual',
    colorKey: 'magenta',
    bg: 'rgba(224,21,122,0.06)',
    border: 'rgba(224,21,122,0.18)',
    text: '#A00C58',
  },
  {
    name: 'Pedro',
    role: 'Instructor Salsa & Bachata Moderna',
    colorKey: 'turquoise',
    bg: 'rgba(0,201,177,0.06)',
    border: 'rgba(0,201,177,0.2)',
    text: '#007A6E',
  },
]

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false)
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 px-6"
      aria-labelledby="nosotros-heading"
      style={{ background: '#FDF6E3' }}
    >
      <div
        className="max-w-7xl mx-auto transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#E0157A' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#E0157A' }}>
            Quiénes somos
          </span>
        </div>
        <h2
          id="nosotros-heading"
          className="font-black mb-8 leading-tight"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}
        >
          Alicia <span className="font-normal" style={{ color: '#7A5230' }}>&</span> Pedro
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#7A5230' }}>
              Alicia y Pedro llevan más de 8 años enseñando Salsa y Bachata con un estilo propio:{' '}
              <strong style={{ color: '#1A0A00' }}>cercano, divertido y con mucha pasión.</strong>
            </p>
            <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#7A5230' }}>
              Como parte de <strong style={{ color: '#1A0A00' }}>EPA Dancers</strong>, participan regularmente en
              congresos nacionales e internacionales y forman una comunidad de bailarines de todos los niveles.
            </p>
            <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#7A5230' }}>
              Tanto si nunca has bailado como si ya tienes experiencia, aquí encontrarás tu sitio.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((t) => (
                <span
                  key={t.label}
                  className="text-[11px] font-semibold font-sans px-3 py-1 rounded-full transition-transform duration-150 hover:scale-105 cursor-default"
                  style={tagStyles[t.color]}
                >
                  {t.label}
                </span>
              ))}
            </div>

            {/* Mini profile cards */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {profiles.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl flex-1"
                  style={{ background: p.bg, border: `1px solid ${p.border}` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                    style={{
                      background: p.colorKey === 'magenta'
                        ? 'linear-gradient(135deg,#E0157A,#A00C58)'
                        : 'linear-gradient(135deg,#00C9B1,#007A6E)',
                    }}
                  >
                    {p.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none" style={{ color: '#1A0A00' }}>{p.name}</p>
                    <p className="text-[10px] mt-0.5 font-sans" style={{ color: p.text }}>{p.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logros */}
            <div
              className="flex gap-6 pt-3 mt-1"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
            >
              {[
                { val: '20+', lbl: 'Congresos' },
                { val: '6',   lbl: 'Países'    },
                { val: '8+',  lbl: 'Años'      },
              ].map((item) => (
                <div key={item.lbl}>
                  <span className="font-black text-lg" style={{ color: '#F0B429' }}>{item.val}</span>
                  <span className="font-sans text-[10px] ml-1" style={{ color: '#7A5230' }}>{item.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video placeholder / player */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <div
              className="relative w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-3 overflow-hidden"
              style={{
                background: '#0E0B06',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(0,201,177,0.1), rgba(224,21,122,0.1))' }}
              />
              <button
                onClick={() => setVideoOpen(true)}
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:scale-110"
                style={{ background: '#F0B429', boxShadow: '0 4px 20px rgba(240,180,41,0.5)' }}
                aria-label="Reproducir vídeo de Alicia y Pedro"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0E0B06" style={{ marginLeft: 3 }} aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <span className="relative z-10 text-white/50 text-xs font-sans">
                Alicia y Pedro bailando
              </span>
              <span className="relative z-10 text-white/25 text-[10px] font-sans">
                Haz clic para ver el vídeo
              </span>
            </div>

            {/* CTA bajo el video */}
            <p className="text-center mt-4 text-sm font-sans" style={{ color: '#7A5230' }}>
              ¿Tienes dudas?{' '}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline transition-opacity hover:opacity-70"
                style={{ color: '#E0157A' }}
              >
                Escríbenos
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Modal de video YouTube */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setVideoOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo de Alicia y Pedro"
        >
          <div className="relative w-full max-w-3xl mx-4">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 font-sans text-white/60 hover:text-white transition-colors text-lg"
              aria-label="Cerrar vídeo"
            >
              ✕ Cerrar
            </button>
            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="Alicia y Pedro — EPA Dancers"
                allow="autoplay; fullscreen"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
