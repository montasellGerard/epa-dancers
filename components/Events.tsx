'use client'

import { useState }        from 'react'
import { useTranslations } from 'next-intl'
import { events }          from '@/data/events'
import type { EventType }  from '@/data/events'
import { useInView }       from '@/hooks/useInView'
import { IG_URL }          from '@/lib/constants'

type Filter = 'todos' | EventType

function isPast(dateISO: string) {
  return new Date(dateISO) < new Date(new Date().toDateString())
}

function EventJsonLd({ evt }: { evt: typeof events[number] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'Event',
    name:       evt.name,
    startDate:  evt.dateISO,
    location: {
      '@type': 'Place',
      name:    evt.location,
      address: { '@type': 'PostalAddress', addressLocality: evt.location, addressCountry: 'ES' },
    },
    organizer: {
      '@type': 'Organization',
      name:    'EPA Dancers',
      url:     'https://epa-dancers.vercel.app',
    },
    eventStatus:      'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
          .replace(/</g, '\\u003c')
          .replace(/>/g, '\\u003e')
          .replace(/&/g, '\\u0026'),
      }}
    />
  )
}

export default function Events() {
  const t               = useTranslations('events')
  const [filter, setFilter] = useState<Filter>('todos')
  const { ref, inView } = useInView<HTMLElement>()

  const FILTERS: { value: Filter; label: string }[] = [
    { value: 'todos',    label: t('filterAll')     },
    { value: 'taller',   label: t('filterTaller')  },
    { value: 'congreso', label: t('filterCongreso') },
  ]

  // Past events are hidden — an outdated events grid reads as an abandoned site.
  const visible = events.filter((e) => (filter === 'todos' || e.type === filter) && !isPast(e.dateISO))
  const upcoming = events.filter((e) => !isPast(e.dateISO))

  return (
    <section id="eventos" ref={ref} className="py-20 px-6" aria-labelledby="eventos-heading" style={{ background: '#FDF6E3' }}>
      {/* JSON-LD para cada evento próximo */}
      {upcoming.map((evt) => <EventJsonLd key={evt.id} evt={evt} />)}
      <div className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F0B429' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#F0B429' }}>{t('eyebrow')}</span>
        </div>
        <h2 id="eventos-heading" className="font-black mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          {t('titleMain')} <span style={{ color: '#F0B429' }}>{t('titleHighlight')}</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label={t('ariaFilter')}>
          {FILTERS.map((f) => {
            const active = filter === f.value
            return (
              <button key={f.value} onClick={() => setFilter(f.value)}
                className="font-sans font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200"
                style={active
                  ? { background: f.value === 'congreso' ? '#E0157A' : f.value === 'taller' ? '#F0B429' : '#1A0A00', color: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }
                  : { background: 'rgba(0,0,0,0.06)', color: '#7A5230' }}
                aria-pressed={active}>
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center">
            <span className="text-4xl" aria-hidden="true">🗓️</span>
            <p className="font-sans text-sm" style={{ color: '#7A5230' }}>
              {t('emptyText')}{' '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-70" style={{ color: '#E0157A' }}>
                {t('emptyFollow')}
              </a>{' '}
              {t('emptyEnd')}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">
            {visible.map((evt) => {
              const past = isPast(evt.dateISO)
              return (
                <article key={evt.id}
                  className="flex flex-col gap-3 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', opacity: past ? 0.5 : 1 }}
                  aria-label={evt.name}>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-center rounded-xl px-3 py-2 min-w-[50px]" style={{ background: 'rgba(0,0,0,0.04)' }}>
                      <span className="font-black text-xl leading-none" style={{ color: '#1A0A00' }}>{evt.day}</span>
                      <span className="font-sans text-[8px] uppercase tracking-widest mt-0.5" style={{ color: '#7A5230' }}>{evt.month}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[8px] font-extrabold uppercase tracking-wider font-sans px-2.5 py-1 rounded-full"
                        style={evt.type === 'congreso'
                          ? { background: 'rgba(224,21,122,0.12)', color: '#E0157A', border: '1px solid rgba(224,21,122,0.25)' }
                          : { background: 'rgba(240,180,41,0.12)', color: '#9A7000', border: '1px solid rgba(240,180,41,0.3)' }}>
                        {evt.type === 'congreso' ? t('typeCongreso') : t('typeTaller')}
                      </span>
                      {past && (
                        <span className="text-[7px] font-bold uppercase tracking-wider font-sans px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.08)', color: '#7A5230' }}>
                          {t('finished')}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="font-bold text-sm leading-snug flex-1" style={{ color: '#1A0A00' }}>{evt.name}</p>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-sans" style={{ color: '#7A5230' }}>
                      <LocationIcon />{evt.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-sans" style={{ color: '#7A5230' }}>
                      <ClockIcon />{evt.time}
                    </div>
                  </div>
                  {!past && (
                    <a href={evt.link} className="flex items-center gap-1.5 text-xs font-bold font-sans pt-2 transition-opacity hover:opacity-70"
                      style={{ color: '#00C9B1', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {t('moreInfo')}<ArrowIcon />
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

function LocationIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
}
function ClockIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function ArrowIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
