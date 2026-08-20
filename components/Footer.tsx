'use client'

import { useTranslations } from 'next-intl'
import Image                from 'next/image'
import { WA_URL, IG_URL }  from '@/lib/constants'

export default function Footer() {
  const t = useTranslations('footer')

  const navLinks = [
    { label: t('navClases'),   href: '#clases'   },
    { label: t('navNosotros'), href: '#nosotros' },
    { label: t('navAlumnos'),  href: '#alumnos'  },
    { label: t('navHorarios'), href: '#horarios' },
    { label: t('navEventos'),  href: '#eventos'  },
    { label: t('navDonde'),    href: '#donde'    },
  ]

  return (
    <footer style={{ background: '#0E0B06' }}>
      <div style={{ height: 6, background: 'linear-gradient(90deg,#00C9B1,#F0B429,#F45E0C,#E0157A)' }} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6">

          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image src="/images/logo.png" alt="EPA Dancers" width={660} height={421} className="h-14 w-auto" />
            <p className="font-sans text-xs tracking-wide text-center md:text-left" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t('tagline')}
            </p>
            <p className="font-sans text-[10px] tracking-wide text-center md:text-left mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {t('locationLabel')}
            </p>
          </div>

          {/* Col 2: Nav links */}
          <nav aria-label="Navegación pie de página">
            <p className="font-sans font-bold text-[9px] tracking-[3px] uppercase mb-3 text-center md:text-left" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t('sectionsTitle')}
            </p>
            <ul className="flex flex-col gap-2 items-center md:items-start">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-sans text-xs transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Social + hours */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-sans font-bold text-[9px] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t('followTitle')}
            </p>
            <div className="flex gap-3">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label={t('ariaWhatsapp')}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: '#25D366' }}>
                <WhatsAppIcon />
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label={t('ariaInstagram')}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)' }}>
                <InstagramIcon />
              </a>
            </div>
            <p className="font-sans text-[10px] text-center md:text-right" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {t('hours')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        {/* TODO(cliente): Aviso legal y Privacidad ocultos a propósito — Alicia sin alta como autónoma,
            titular sin NIF/domicilio fiscal confirmados. Las rutas devuelven 404 (ver page.tsx de cada una).
            Reactivar estos dos enlaces en cuanto CLIENT-QUESTIONS.md bloque 2 esté cerrado. */}
        <div className="mt-10 pt-6 flex items-center justify-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="font-sans text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.15)' }}>
            © {new Date().getFullYear()} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
