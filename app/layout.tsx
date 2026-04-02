import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ─── SEO ────────────────────────────────────────────────────────────────────
// Ubicación real: Mollet del Vallès (Vallès Oriental, Barcelona)
// Especialidades: Salsa, Bachata, Timba, Guaguancó, Afro, Clases privadas
// URL canónica: Vercel hasta migración a dominio propio
// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'EPA Dancers — Clases de Salsa, Bachata y Timba en Mollet del Vallès | Alicia y Pedro',
  description:
    'Escuela de baile latino en Mollet del Vallès. Clases de Salsa, Bachata, Timba, Guaguancó y Afro para todos los niveles con Alicia y Pedro. Clases grupales e individuales. ¡Empieza cuando quieras!',
  keywords: [
    // Local SEO — ubicación
    'clases de baile Mollet del Vallès',
    'baile latino Mollet del Vallès',
    'escuela de baile Mollet',
    'baile Vallès Oriental',
    'clases de baile Vallès',
    // Estilos
    'salsa Mollet del Vallès',
    'bachata Mollet del Vallès',
    'timba barcelona',
    'guaguancó barcelona',
    'baile afro barcelona',
    'salsa cubana Mollet',
    // Tipo de clase
    'clases privadas de baile latino',
    'clases individuales de salsa',
    'clases en pareja salsa bachata',
    // Marca
    'EPA Dancers',
    'Alicia Pedro bailarines',
    'aliciaypedro.dancers',
  ],
  authors: [{ name: 'EPA Dancers — Alicia y Pedro' }],
  openGraph: {
    title: 'EPA Dancers — Salsa, Bachata, Timba & Afro en Mollet del Vallès',
    description:
      'Clases grupales e individuales de Salsa, Bachata, Timba y Afro con Alicia y Pedro en Mollet del Vallès. Todos los niveles.',
    url: 'https://epa-dancers.vercel.app',
    siteName: 'EPA Dancers',
    // og-image: se añadirá cuando haya foto real. De momento usa la ruta reservada.
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EPA Dancers — Alicia y Pedro, escuela de baile latino en Mollet del Vallès',
      },
    ],
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPA Dancers — Salsa, Bachata, Timba & Afro | Mollet del Vallès',
    description: 'Clases de Salsa, Bachata, Timba y Afro con Alicia y Pedro',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  // Cuando tengan dominio propio, actualizar esta URL
  alternates: { canonical: 'https://epa-dancers.vercel.app' },
}

// ─── Schema.org JSON-LD ─────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DanceSchool',
  name: 'EPA Dancers',
  alternateName: 'EPA Dancers — Alicia y Pedro',
  description:
    'Escuela de baile latino en Mollet del Vallès. Salsa, Bachata, Timba, Guaguancó y Afro para todos los niveles.',
  url: 'https://epa-dancers.vercel.app',
  sameAs: ['https://www.instagram.com/aliciaypedro.dancers/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mollet del Vallès',
    addressRegion: 'Vallès Oriental',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Coordenadas aproximadas de Mollet del Vallès — actualizar si se conoce la dirección exacta
    latitude: '41.5363',
    longitude: '2.2117',
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Alicia',
      jobTitle: 'Instructora de Salsa, Bachata y Afro',
      sameAs: 'https://www.instagram.com/aliciaypedro.dancers/',
    },
    {
      '@type': 'Person',
      name: 'Pedro',
      jobTitle: 'Instructor de Salsa, Timba y Guaguancó',
      sameAs: 'https://www.instagram.com/aliciaypedro.dancers/',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Clases de baile latino',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases de Salsa' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases de Bachata' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases de Timba' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases de Guaguancó' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases de Baile Afro' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clases Privadas e Individuales' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip link para navegación por teclado (accesibilidad) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:text-sm"
          style={{ background: '#00C9B1', color: '#0E0B06' }}
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
