import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import About          from '@/components/About'
import Testimonials   from '@/components/Testimonials'
import Schedule       from '@/components/Schedule'
import FAQ            from '@/components/FAQ'
import Gallery        from '@/components/Gallery'
import Events         from '@/components/Events'
import Location       from '@/components/Location'
import CallToAction   from '@/components/CallToAction'
import Footer         from '@/components/Footer'
import WhatsAppFloat  from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Testimonials />
        <Schedule />
        <FAQ />
        <Gallery />
        <Events />
        <Location />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
