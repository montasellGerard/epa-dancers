import { events } from '@/data/events'

export default function Events() {
  return (
    <section id="eventos" className="py-20 px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F0B429' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#F0B429' }}>
            Agenda
          </span>
        </div>
        <h2 className="font-black mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          Próximos <span style={{ color: '#F0B429' }}>Eventos</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((evt) => (
            <div
              key={`${evt.day}-${evt.month}`}
              className="flex flex-col gap-3 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              {/* Top: date + type */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-center rounded-xl px-3 py-2 min-w-[50px]"
                  style={{ background: 'rgba(0,0,0,0.04)' }}>
                  <span className="font-black text-xl leading-none" style={{ color: '#1A0A00' }}>{evt.day}</span>
                  <span className="font-sans text-[8px] uppercase tracking-widest mt-0.5" style={{ color: '#7A5230' }}>{evt.month}</span>
                </div>
                <span
                  className="text-[8px] font-extrabold uppercase tracking-wider font-sans px-2.5 py-1 rounded-full"
                  style={
                    evt.type === 'congreso'
                      ? { background: 'rgba(224,21,122,0.12)', color: '#E0157A', border: '1px solid rgba(224,21,122,0.25)' }
                      : { background: 'rgba(240,180,41,0.12)', color: '#9A7000', border: '1px solid rgba(240,180,41,0.3)' }
                  }
                >
                  {evt.type === 'congreso' ? 'Congreso' : 'Taller'}
                </span>
              </div>

              {/* Name */}
              <p className="font-bold text-sm leading-snug flex-1" style={{ color: '#1A0A00' }}>
                {evt.name}
              </p>

              {/* Meta */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-sans" style={{ color: '#7A5230' }}>
                  <LocationIcon />
                  {evt.location}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans" style={{ color: '#7A5230' }}>
                  <ClockIcon />
                  {evt.time}
                </div>
              </div>

              {/* CTA */}
              <a
                href={evt.link}
                className="flex items-center gap-1.5 text-xs font-bold font-sans pt-2 transition-colors hover:opacity-80"
                style={{ color: '#00C9B1', borderTop: '1px solid rgba(0,0,0,0.06)' }}
              >
                Más info
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
