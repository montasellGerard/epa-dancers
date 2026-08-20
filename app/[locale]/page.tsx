import dynamic             from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import { faqIds }          from '@/data/faq'
import SnapBar  from '@/components/SnapBar'
import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'

// Lazy-load everything below the fold — smaller initial bundle → better LCP
const About       = dynamic(() => import('@/components/About'))
const Gallery     = dynamic(() => import('@/components/Gallery'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Schedule    = dynamic(() => import('@/components/Schedule'))
const FAQ         = dynamic(() => import('@/components/FAQ'))
const Events      = dynamic(() => import('@/components/Events'))
const Location    = dynamic(() => import('@/components/Location'))
const CallToAction = dynamic(() => import('@/components/CallToAction'))
const Footer      = dynamic(() => import('@/components/Footer'))
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'))

export default async function Home() {
  // FAQPage JSON-LD — rich results for the 7 FAQs already on the page
  const t = await getTranslations('faq')
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqIds.map((id) => ({
      '@type': 'Question',
      name: t(`items.${id}.question` as Parameters<typeof t>[0]),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`items.${id}.answer` as Parameters<typeof t>[0]),
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
            .replace(/</g, '\\u003c')
            .replace(/>/g, '\\u003e')
            .replace(/&/g, '\\u0026'),
        }}
      />
      <SnapBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Gallery />
        <Testimonials />
        <Schedule />
        <FAQ />
        <Events />
        <Location />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
