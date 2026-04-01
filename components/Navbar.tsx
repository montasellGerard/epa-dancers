'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Clases',    href: '#clases'    },
    { label: 'Horarios',  href: '#horarios'  },
    { label: 'Nosotros',  href: '#nosotros'  },
    { label: 'Eventos',   href: '#eventos'   },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0E0B06]/90 shadow-lg' : 'bg-[#0E0B06]'
      }`}
      style={{ borderBottom: '2px solid rgba(240,180,41,0.35)' }}
    >
      {/* Color stripe */}
      <div style={{ height: 6, background: 'linear-gradient(90deg,#00C9B1,#F0B429,#F45E0C,#E0157A)' }} />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div
            className="rounded-lg px-3 py-1.5 flex flex-col"
            style={{ background: '#111', border: '1.5px solid rgba(255,255,255,0.1)' }}
          >
            <span
              className="font-black italic text-xl leading-none"
              style={{
                fontFamily: 'Georgia, serif',
                background: 'linear-gradient(90deg,#00C9B1,#F0B429,#F45E0C,#E0157A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              EPA
            </span>
            <span className="text-[7px] tracking-[4px] uppercase text-white/40 font-sans mt-0.5">
              Dancers
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/50 hover:text-[#00C9B1] text-xs tracking-widest uppercase font-sans transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          {/* WhatsApp */}
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
            style={{ background: '#25D366' }}
          >
            <WhatsAppIcon />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/aliciaypedro.dancers"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
            style={{ background: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)' }}
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0E0B06] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-[#00C9B1] text-sm tracking-widest uppercase font-sans py-1"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
              <WhatsAppIcon />
            </a>
            <a href="https://instagram.com/aliciaypedro.dancers" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)' }}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.84 1.564 5.4L2 22l4.722-1.538A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
