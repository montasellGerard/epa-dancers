import type { Metadata }          from 'next'
import { Inter }                   from 'next/font/google'
import { NextIntlClientProvider }  from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound }                from 'next/navigation'
import { routing }                 from '@/i18n/routing'
import { Analytics }               from '@vercel/analytics/next'
import { SpeedInsights }           from '@vercel/speed-insights/next'
import '../globals.css'
import { BASE_URL as SITE_BASE_URL, ADDRESS, OPENING_HOURS } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = SITE_BASE_URL

// ─── SEO per locale ───────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title:       t('title'),
    description: t('description'),
    authors:    [{ name: 'EPA Dancers — Alicia y Pedro' }],
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title:       t('title'),
      description: t('description'),
      url:         `${BASE_URL}/${locale}`,
      siteName:    'EPA Dancers',
      images: [{
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'EPA Dancers — Alicia y Pedro, escuela de baile latino en Mollet del Vallès',
      }],
      type:   'website',
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_GB',
    },
    twitter: {
      card:        'summary_large_image',
      title:       t('title'),
      description: t('description'),
      images:      ['/og-image.jpg'],
    },
    robots:     { index: true, follow: true },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'es':    `${BASE_URL}/es`,
        'en':    `${BASE_URL}/en`,
        'ca':    `${BASE_URL}/ca`,
        'x-default': `${BASE_URL}/es`,
      },
    },
  }
}

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'DanceSchool',
  name:       'EPA Dancers',
  alternateName: 'EPA Dancers — Alicia y Pedro',
  description: 'Escuela de baile latino en Mollet del Vallès. Salsa, Bachata, Timba, Rumba y Afro para todos los niveles.',
  url:        BASE_URL,
  sameAs:     ['https://www.instagram.com/aliciaypedro.dancers/'],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted:    'Cash', // Confirmado por el cliente (ago 2026): solo efectivo. TODO(cliente): confirmar si también aceptan Bizum/transferencia.
  address: {
    '@type':           'PostalAddress',
    streetAddress:     ADDRESS.street,
    addressLocality:   ADDRESS.city,
    addressRegion:     ADDRESS.region,
    addressCountry:    'ES',
    postalCode:        ADDRESS.postalCode,
  },
  // TODO(cliente/Gerard): geo coords are still the Mollet del Vallès town centre, not the exact venue —
  // Nominatim/geocoding is blocked from this environment; grab the precise lat/lon from Google Maps (right-click the pin → coordinates).
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   '41.5363',
    longitude:  '2.2117',
  },
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(`${ADDRESS.venue}, ${ADDRESS.full}`)}`,
  openingHoursSpecification: OPENING_HOURS.map((h) => ({
    '@type':   'OpeningHoursSpecification',
    dayOfWeek: h.schemaDay,
    opens:     h.opens,
    closes:    h.closes,
  })),
  founder: [
    { '@type': 'Person', name: 'Alicia', jobTitle: 'Instructora de Salsa, Bachata y Afro',          sameAs: 'https://www.instagram.com/aliciaypedro.dancers/' },
    { '@type': 'Person', name: 'Pedro',  jobTitle: 'Instructor de Salsa, Timba y Rumba', sameAs: 'https://www.instagram.com/aliciaypedro.dancers/' },
  ],
  offers: [
    { '@type': 'Offer', name: '1 curso / mes',   price: '29.90', priceCurrency: 'EUR', description: '1 clase semanal, cualquier estilo' },
    { '@type': 'Offer', name: '2 cursos / mes',  price: '49.90', priceCurrency: 'EUR', description: '2 clases semanales' },
    { '@type': 'Offer', name: '3 cursos / mes',  price: '65', priceCurrency: 'EUR', description: 'El favorito de nuestros alumnos' },
    { '@type': 'Offer', name: 'Tarifa plana',    price: '75', priceCurrency: 'EUR', description: 'Acceso ilimitado a todas las clases' },
  ],
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params:   Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Guard: reject unknown locales → 404
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const messages = await getMessages()
  const t        = await getTranslations({ locale })

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
              .replace(/</g, '\\u003c')
              .replace(/>/g, '\\u003e')
              .replace(/&/g, '\\u0026'),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {/* Skip link — accesibilidad teclado */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:text-sm"
            style={{ background: '#00C9B1', color: '#0E0B06' }}
          >
            {t('skipLink')}
          </a>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
