import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-stretch overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C0800 0%, #2A1000 45%, #1A0D04 100%)' }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,201,177,0.2) 0%, transparent 65%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(224,21,122,0.15) 0%, transparent 65%)' }} />
      <div className="pointer-events-none absolute top-1/2 right-0 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(244,94,12,0.12) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 py-32 md:py-0">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-2 rounded-full text-[10px] tracking-[3px] uppercase font-bold font-sans"
            style={{ background: 'rgba(240,180,41,0.12)', border: '1px solid rgba(240,180,41,0.35)', color: '#F0B429' }}>
            ✦ Escuela de Baile Latino ✦
          </div>

          {/* H1 — nombres protagonistas */}
          <h1 className="font-black leading-none mb-3 text-white"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(48px, 7vw, 72px)' }}>
            Alicia <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>&</span> Pedro
          </h1>

          {/* Subtítulo — estilos de baile */}
          <p className="mb-4 font-bold leading-tight"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 3.5vw, 34px)' }}>
            <span className="italic" style={{ color: '#E0157A' }}>Salsa</span>
            <span className="text-white/40 mx-2 font-normal">&</span>
            <span className="italic" style={{ color: '#00C9B1' }}>Bachata</span>
          </p>

          <p className="text-white/55 font-sans text-base leading-relaxed mb-8 max-w-md">
            Clases grupales e individuales para todos los niveles.<br />
            Empieza cuando quieras.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold font-sans text-sm text-white px-7 py-3.5 rounded-full transition-transform hover:scale-105"
              style={{ background: '#E0157A', boxShadow: '0 6px 24px rgba(224,21,122,0.4)' }}
            >
              ¡Quiero empezar!
            </a>
            <a
              href="#horarios"
              className="inline-flex items-center gap-2 font-semibold font-sans text-sm px-6 py-3.5 rounded-full transition-colors"
              style={{ border: '2px solid rgba(0,201,177,0.5)', color: '#00C9B1' }}
            >
              Ver horarios
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { val: '8+',  lbl: 'Años' },
              { val: '4',   lbl: 'Niveles' },
              { val: '15+', lbl: 'Clases/sem' },
              { val: '80+', lbl: 'Alumnos' },
            ].map((s) => (
              <div key={s.lbl}>
                <span className="block font-black text-2xl" style={{ color: '#F0B429' }}>{s.val}</span>
                <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="w-full md:w-[340px] flex-shrink-0 flex items-end justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden"
            style={{
              border: '2px solid rgba(255,255,255,0.06)',
              boxShadow: '0 0 60px rgba(0,201,177,0.12), 0 0 100px rgba(224,21,122,0.08)',
              background: 'linear-gradient(160deg, rgba(0,201,177,0.1), rgba(224,21,122,0.1))',
            }}>
            <Image
              src="/alicia-pedro.jpg"
              alt="Alicia y Pedro — EPA Dancers"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)' }}>
              <p className="font-sans text-xs font-semibold tracking-wide text-center">
                <span style={{ color: '#E0157A' }}>Alicia</span>
                <span className="text-white/40 mx-1">&</span>
                <span style={{ color: '#00C9B1' }}>Pedro</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
