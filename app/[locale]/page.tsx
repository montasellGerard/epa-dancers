import dynamic from 'next/dynamic'
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

export default function Home() {
  return (
    <>
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
