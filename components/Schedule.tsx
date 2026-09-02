'use client'

import { useState }                                       from 'react'
import { useTranslations }                                from 'next-intl'
import { schedule, cubanStyles, scheduleByDay, prices }    from '@/data/schedule'
import type { LevelColor, DayKey, Discipline }             from '@/data/schedule'
import { useInView }                                       from '@/hooks/useInView'
import { waUrl }                                           from '@/lib/constants'

const levelDotColor: Record<LevelColor, string> = {
  inicio:     '#00C9B1',
  intermedio: '#F0B429',
  avanzado:   '#E0157A',
}

const disciplineDotColor: Record<Discipline, string> = {
  salsa:   '#E0157A',
  bachata: '#00C9B1',
  cubanos: '#F0B429',
}

type View = 'discipline' | 'day'

export default function Schedule() {
  const t                = useTranslations('schedule')
  const { ref, inView }  = useInView<HTMLElement>()
  const [view, setView]  = useState<View>('discipline')

  const dayLabel = (key: DayKey) => t(`days.${key}` as Parameters<typeof t>[0])

  const tabStyle = (active: boolean): React.CSSProperties => ({
    background: active ? '#1A0A00' : 'transparent',
    color:      active ? '#fff'    : '#7A5230',
  })

  return (
    <section id="horarios" ref={ref} className="py-20 px-6" aria-labelledby="horarios-heading" style={{ background: '#FEF3D0' }}>
      <div className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#00C9B1' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#00C9B1' }}>{t('eyebrow')}</span>
        </div>
        <h2 id="horarios-heading" className="font-black mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          {t('titleMain')} <span className="font-normal" style={{ color: '#7A5230' }}>{t('titleAmp')}</span> {t('titleSub')}
        </h2>
        <p className="font-sans text-sm mb-6" style={{ color: '#7A5230' }}>{t('seasonNote')}</p>

        {/* View toggle */}
        <div className="inline-flex bg-white rounded-full p-1 gap-1 mb-8 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.08)' }} role="tablist" aria-label={t('viewToggleAria')}>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'discipline'}
            onClick={() => setView('discipline')}
            className="font-sans font-bold text-[13px] px-5 py-2.5 rounded-full transition-colors"
            style={tabStyle(view === 'discipline')}
          >
            {t('viewByDiscipline')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'day'}
            onClick={() => setView('day')}
            className="font-sans font-bold text-[13px] px-5 py-2.5 rounded-full transition-colors"
            style={tabStyle(view === 'day')}
          >
            {t('viewByDay')}
          </button>
        </div>

        {view === 'discipline' ? (
          <>
            {/* Schedule cards — por disciplina */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {/* Salsa */}
              <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #E0157A' }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#E0157A' }} />
                  <span className="font-sans font-extrabold text-[9px] tracking-[2.5px] uppercase" style={{ color: '#E0157A' }}>{t('salsa')}</span>
                </div>
                {schedule.salsa.map((row) => (
                  <div key={`salsa-${row.level}`}
                    className="flex justify-between items-center py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: levelDotColor[row.levelColor] }} aria-label={row.levelColor} />
                      <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.level}</span>
                    </div>
                    <span className="text-xs font-sans" style={{ color: '#7A5230' }}>{dayLabel(row.dayKey)} · {row.time}</span>
                  </div>
                ))}
              </div>

              {/* Bachata */}
              <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #00C9B1' }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#00C9B1' }} />
                  <span className="font-sans font-extrabold text-[9px] tracking-[2.5px] uppercase" style={{ color: '#00C9B1' }}>{t('bachata')}</span>
                </div>
                {schedule.bachata.map((row) => (
                  <div key={`bachata-${row.level}`}
                    className="flex justify-between items-center py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: levelDotColor[row.levelColor] }} aria-label={row.levelColor} />
                      <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.level}</span>
                    </div>
                    <span className="text-xs font-sans" style={{ color: '#7A5230' }}>{dayLabel(row.dayKey)} · {row.time}</span>
                  </div>
                ))}
              </div>

              {/* Estilos cubanos — sin nivel, se muestran por estilo */}
              <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #F0B429' }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#F0B429' }} />
                  <span className="font-sans font-extrabold text-[9px] tracking-[2.5px] uppercase" style={{ color: '#F0B429' }}>{t('cubanos')}</span>
                </div>
                {cubanStyles.map((row) => (
                  <div key={`cubano-${row.name}`}
                    className="flex justify-between items-center py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors">
                    <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.name}</span>
                    <span className="text-xs font-sans" style={{ color: '#7A5230' }}>{dayLabel(row.dayKey)} · {row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Level legend */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {(Object.entries(levelDotColor) as [LevelColor, string][]).map(([key, color]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                  <span className="font-sans text-[10px]" style={{ color: '#7A5230' }}>
                    {t(`level${key.charAt(0).toUpperCase() + key.slice(1)}` as Parameters<typeof t>[0])}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Schedule cards — por día */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {scheduleByDay.map((day) => (
                <div key={day.dayKey} className="bg-white rounded-xl p-5 shadow-sm" style={{ borderTop: '3px solid #1A0A00' }}>
                  <div className="mb-4">
                    <span className="font-sans font-extrabold text-[11px] tracking-[1.5px] uppercase" style={{ color: '#1A0A00' }}>{dayLabel(day.dayKey)}</span>
                  </div>
                  {day.rows.map((row, i) => (
                    <div key={`${day.dayKey}-${i}`}
                      className="py-2.5 border-b last:border-b-0 border-stone-100 rounded-lg px-2 -mx-2 hover:bg-stone-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: disciplineDotColor[row.discipline] }} aria-hidden="true" />
                        <span className="font-semibold text-sm font-sans" style={{ color: '#1A0A00' }}>{row.label}</span>
                      </div>
                      <div className="flex justify-between items-center pl-3.5 mt-0.5">
                        <span className="font-sans text-[9px] uppercase tracking-wider" style={{ color: '#7A5230' }}>{t(row.discipline)}</span>
                        <span className="text-xs font-sans" style={{ color: '#7A5230' }}>{row.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Discipline legend */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {(Object.entries(disciplineDotColor) as [Discipline, string][]).map(([key, color]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                  <span className="font-sans text-[10px]" style={{ color: '#7A5230' }}>{t(key)}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Prices */}
        <div className="flex flex-wrap justify-center gap-4">
          {prices.map((p) => {
            const label = t(`${p.msgKey}Label` as Parameters<typeof t>[0])
            const desc  = t(`${p.msgKey}Desc`  as Parameters<typeof t>[0])
            const badge = p.featured ? t('price3Badge') : null
            return (
              <div key={p.msgKey}
                className="rounded-2xl px-5 py-4 text-center min-w-[120px] transition-transform hover:-translate-y-1 relative"
                style={p.featured
                  ? { background: 'linear-gradient(160deg,#FFF8F0,#FFF3E0)', border: '2px solid #F45E0C', boxShadow: '0 4px 24px rgba(244,94,12,0.2)' }
                  : { background: '#fff', border: '2px solid #F0EDE5', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }
                }>
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[8px] font-extrabold uppercase tracking-widest font-sans px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                    style={{ background: '#F45E0C' }}>
                    ★ {badge}
                  </span>
                )}
                <span className="block font-black text-2xl mt-2" style={{ color: p.featured ? '#F45E0C' : '#1A0A00' }}>{p.amount}</span>
                <span className="font-sans text-[10px] uppercase tracking-widest mt-1 block" style={{ color: '#7A5230' }}>{label}</span>
                <span className="font-sans text-[9px] mt-1.5 block leading-snug" style={{ color: '#7A5230', opacity: 0.7 }}>{desc}</span>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <p className="text-center mt-8 font-sans text-sm" style={{ color: '#7A5230' }}>
          {t('pricingDoubts')}{' '}
          <a href={waUrl(t('waMessage'))} target="_blank" rel="noopener noreferrer" className="font-bold underline transition-opacity hover:opacity-70" style={{ color: '#E0157A' }}>
            {t('pricingCta')}
          </a>
        </p>
      </div>
    </section>
  )
}
