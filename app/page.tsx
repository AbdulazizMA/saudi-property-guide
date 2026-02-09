import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TrustSection from '@/components/TrustSection'
import ProcessSteps from '@/components/ProcessSteps'
import WhyMakkahMedinah from '@/components/WhyMakkahMedinah'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustSection />
      <ProcessSteps />
      <ServicesPreview />
      <WhyMakkahMedinah />
      <Testimonials />
      <CTASection />
    </>
  )
}
