'use client'

import { useTranslations } from 'next-intl'
import { useInView }       from '@/hooks/useInView'
import { WA_URL }          from '@/lib/constants'

const ADDRESS    = 'Carrer de la Pau, 12, 08100 Mollet del Vallès, Barcelona'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11952.123456789!2d2.2118!3d41.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4910000000001%3A0x0!2sMollet%20del%20Vall%C3%A8s!5e0!3m2!1ses!2ses!4v1700000000000'
const MAPS_LINK  = 'https://maps.google.com/?q=Mollet+del+Valles,Barcelona'

const HOURS = [
  { dayKey: 'dayMonday',    time: '19:00 – 22:00 h' },
  { dayKey: 'dayTuesday',   time: '19:00 – 22:00 h' },
  { dayKey: 'dayWednesday', time: '19:00 – 22:00 h' },
  { dayKey: 'dayThursday',  time: '19:00 – 22:00 h' },
  { dayKey: 'dayFriday',    time: '20:00 – 21:30 h' },
]

export default function Location() {
  const t               = useTranslations('location')
  const { ref, inView } = useInView<HTMLElement>()

  const howToGet = [
    { icon: <TrainIcon />, titleKey: 'trainTitle' as const, descKey: 'trainDesc' as const },
    { icon: <BusIcon />,   titleKey: 'busTitle'   as const, descKey: 'busDesc'   as const },
    { icon: <CarIcon />,   titleKey: 'carTitle'   as const, descKey: 'carDesc'   as const },
  ]

  return (
    <section id="donde" ref={ref} className="py-20 px-6" aria-labelledby="donde-heading" style={{ background: '#FEF3D0' }}>
      <div className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#00C9B1' }} />
          <span className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: '#00C9B1' }}>{t('eyebrow')}</span>
        </div>
        <h2 id="donde-heading" className="font-black mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', color: '#1A0A00' }}>
          {t('titleMain')}{' '}<span style={{ color: '#00C9B1' }}>{t('titleHighlight')}</span>
        </h2>
        <p className="font-sans text-sm mb-10" style={{ color: '#7A5230' }}>{t('subtitle')}</p>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map + address */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4 / 3', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.07)' }}>
              <iframe src={MAPS_EMBED} title={t('ariaMap')} className="w-full h-full" style={{ border: 0, filter: 'saturate(0.8)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,201,177,0.12)' }} aria-hidden="true">
                <PinIcon />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm leading-snug" style={{ color: '#1A0A00' }}>{ADDRESS}</p>
                <p className="font-sans text-[11px] mt-0.5" style={{ color: '#7A5230' }}>{t('addressNote')}</p>
              </div>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 font-sans font-semibold text-[11px] px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: '#00C9B1', color: '#0E0B06' }} aria-label={t('openMaps')}>
                {t('openMaps')}
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4 lg:w-[340px]">
            {/* Hours */}
            <div className="rounded-2xl px-6 py-5" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(240,180,41,0.12)' }} aria-hidden="true">
                  <ClockIcon />
                </span>
                <p className="font-bold text-sm" style={{ color: '#1A0A00' }}>{t('hoursTitle')}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {HOURS.map(({ dayKey, time }) => (
                  <li key={dayKey} className="flex items-center justify-between">
                    <span className="font-sans text-sm" style={{ color: '#7A5230' }}>{t(dayKey as Parameters<typeof t>[0])}</span>
                    <span className="font-bold font-sans text-sm" style={{ color: '#1A0A00' }}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to get */}
            <div className="rounded-2xl px-6 py-5 flex flex-col gap-4" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <p className="font-bold text-sm" style={{ color: '#1A0A00' }}>{t('howToGetTitle')}</p>
              {howToGet.map(({ icon, titleKey, descKey }) => (
                <div key={titleKey} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0,201,177,0.08)' }} aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    <p className="font-bold text-[12px] leading-none" style={{ color: '#1A0A00' }}>{t(titleKey)}</p>
                    <p className="font-sans text-[11px] mt-1 leading-relaxed" style={{ color: '#7A5230' }}>{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WA CTA */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold font-sans text-sm text-white py-4 rounded-2xl transition-transform hover:scale-[1.02]"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
              </svg>
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function ClockIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F0B429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
}
function TrainIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16M12 3v8M8 19l-2 2M16 19l2 2"/></svg>
}
function BusIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 6v6M16 6v6M2 12h20M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zM6 20h2M16 20h2"/></svg>
}
function CarIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17a2 2 0 104 0M15 17a2 2 0 104 0"/></svg>
}
