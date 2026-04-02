'use client'

import { useInView } from '@/hooks/useInView'

const WA_URL = 'https://wa.me/34600000000'

export default function CallToAction() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-24 px-6 text-center relative overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ background: 'linear-gradient(135deg, #1C0800 0%, #0E0B06 100%)' }}
    >
      {/* Ambient glows decorativos */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 rounded-full"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(224,21,122,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-1/4 w-72 h-72 rounded-full"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,201,177,0.1) 0%, transparent 70%)' }}
      />

      {/* Contenido */}
      <div
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
      >
        {/* Eyebrow */}
        <span
          className="font-sans font-bold text-[9px] tracking-[3px] uppercase"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          ¿Listo para empezar?
        </span>

        {/* Título */}
        <h2
          id="cta-heading"
          className="font-black leading-tight text-white"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
          }}
        >
          Tu primera clase{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #E0157A, #F45E0C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            te espera
          </span>
        </h2>

        {/* Subtítulo */}
        <p
          className="font-sans text-base leading-relaxed max-w-md"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Únete a más de 200 alumnos que ya disfrutan de la Salsa, Bachata, Timba y mucho más en Mollet del Vallès.
        </p>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-bold font-sans text-sm text-white px-8 py-4 rounded-full transition-transform hover:scale-105"
          style={{
            background: '#E0157A',
            boxShadow: '0 6px 32px rgba(224,21,122,0.45)',
            animation: 'pulse-glow 2.5s ease-in-out infinite',
          }}
        >
          <WhatsAppIcon />
          Reservar por WhatsApp
        </a>

        {/* Nota tranquilizadora */}
        <p className="font-sans text-[11px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Sin compromiso · Empieza cuando quieras
        </p>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
    </svg>
  )
}
