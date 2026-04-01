export default function About() {
  const tags = [
    { label: 'Salsa',            color: 'magenta' },
    { label: 'Bachata',          color: 'turquoise' },
    { label: 'Congresos',        color: 'gold' },
    { label: 'Individuales',     color: 'orange' },
    { label: 'Todos los niveles', color: 'turquoise' },
  ] as const

  const tagStyles: Record<string, React.CSSProperties> = {
    magenta:   { background: 'rgba(224,21,122,0.1)',  color: '#A00C58', border: '1px solid rgba(224,21,122,0.25)' },
    turquoise: { background: 'rgba(0,201,177,0.1)',   color: '#007A6E', border: '1px solid rgba(0,201,177,0.3)'  },
    gold:      { background: 'rgba(240,180,41,0.1)',  color: '#7A5B00', border: '1px solid rgba(240,180,41,0.3)' },
    orange:    { background: 'rgba(244,94,12,0.1)',   color: '#B83900', border: '1px solid rgba(244,94,12,0.25)' },
  }

  return (
    <section id="nosotros" className="py-20 px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#E0157A' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#E0157A' }}>
            Quiénes somos
          </span>
        </div>
        <h2 className="font-black mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
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
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((t) => (
                <span key={t.label} className="text-[11px] font-semibold font-sans px-3 py-1 rounded-full" style={tagStyles[t.color]}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div className="w-full md:w-72 h-48 rounded-2xl flex flex-col items-center justify-center gap-3 relative overflow-hidden flex-shrink-0"
            style={{
              background: '#0E0B06',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}>
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(0,201,177,0.1), rgba(224,21,122,0.1))' }} />
            <button
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: '#F0B429', boxShadow: '0 4px 20px rgba(240,180,41,0.5)' }}
              aria-label="Reproducir vídeo"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0E0B06" style={{ marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="relative z-10 text-white/40 text-xs font-sans">Alicia y Pedro bailando</span>
          </div>
        </div>
      </div>
    </section>
  )
}
