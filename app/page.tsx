import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Cities from '@/components/Cities'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <Cities />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
