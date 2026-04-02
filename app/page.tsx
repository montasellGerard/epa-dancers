import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Testimonials  from '@/components/Testimonials'
import Schedule      from '@/components/Schedule'
import Events        from '@/components/Events'
import CallToAction  from '@/components/CallToAction'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Testimonials />
        <Schedule />
        <Events />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
