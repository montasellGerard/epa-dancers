import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'
import About    from '@/components/About'
import Schedule from '@/components/Schedule'
import Events   from '@/components/Events'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Events />
      </main>
      <Footer />
    </>
  )
}
