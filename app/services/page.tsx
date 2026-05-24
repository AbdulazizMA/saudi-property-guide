import { Metadata } from 'next'
import { Search, Building2, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Services | Buyer Representation & Owner Support',
  description: 'Buyer representation, property shortlisting, due diligence coordination, negotiation support, and owner support for Makkah and Medinah property clients.',
}

const services = [
  {
    icon: Search,
    title: 'Buyer Representation',
    description: 'I help you define the right brief, shortlist serious options, verify key details, negotiate clearly, and coordinate the purchase process while you are abroad.',
    features: [
      'Personalized property matching based on your needs',
      'Virtual viewings via video call or in-person tours',
      'Price negotiation on your behalf',
      'Documentation and professional coordination',
      'Title verification and due diligence',
      'Liaison with lawyers and notaries',
      'Registration assistance',
      'Post-purchase support',
    ],
    process: [
      { step: 'Buyer Brief', desc: 'We define your city, budget, use case, timeline, and eligibility questions' },
      { step: 'Market Shortlist', desc: 'I filter properties against access, value, quality, and ownership fit' },
      { step: 'Viewings', desc: 'You review options through video calls, photos, or in-person visits' },
      { step: 'Negotiation', desc: 'I negotiate based on local pricing context and your walk-away limits' },
      { step: 'Due Diligence', desc: 'I coordinate document review with the right local professionals' },
      { step: 'Completion', desc: 'We follow the approved process through payment, registration, and handover' },
    ],
    highlight: true,
  },
  {
    icon: Building2,
    title: 'Owner Support',
    description: 'Already own or planning to own from abroad? I coordinate local care, reporting, tenant matters, and maintenance so your property is not left unmanaged.',
    features: [
      'Tenant sourcing and screening',
      'Lease agreement preparation',
      'Rent collection and transfer',
      'Maintenance coordination',
      'Regular property inspections',
      'Monthly reporting with photos',
      'Emergency response handling',
      'Utility and bill management',
    ],
    process: [
      { step: 'Property Assessment', desc: 'I review the property, access, condition, and owner goals' },
      { step: 'Readiness Plan', desc: 'We prepare repairs, photos, pricing, and tenant requirements where needed' },
      { step: 'Tenant Placement', desc: 'I help screen and coordinate suitable tenant conversations' },
      { step: 'Local Oversight', desc: 'I coordinate maintenance, inspections, access, and urgent issues' },
      { step: 'Reporting', desc: 'You receive regular updates, photos, and financial summaries' },
    ],
    highlight: false,
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicesGeo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGeo)" />
          </svg>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-saudi-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Buyer Representation &amp; <span className="text-saudi-gold">Owner Support</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Practical support for serious buyers and owners who need trusted local
            representation in Makkah and Medinah.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden ${service.highlight ? 'ring-2 ring-saudi-green' : ''}`}
              >
                {service.highlight && (
                  <div className="bg-saudi-green text-white text-center py-2 text-sm font-semibold">
                    Most Requested Service
                  </div>
                )}

                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Service Info */}
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-saudi-green/10 rounded-2xl flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-saudi-green" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.title}</h2>
                      </div>

                      <p className="text-gray-600 text-lg mb-8">{service.description}</p>

                      <h3 className="font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-2">
                            <Check className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <WhatsAppButton
                        message={`Assalamu Alaikum Abdulaziz, I found your website and I'm interested in your ${service.title} service for Makkah/Medinah property. My budget, timeline, and intended use are:`}
                        size="lg"
                      >
                        Inquire About This Service
                      </WhatsAppButton>
                    </div>

                    {/* Right: Process */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-6">How It Works:</h3>
                      <div className="space-y-4">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-saudi-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                              {i + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{step.step}</p>
                              <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Pricing</h2>
          <p className="text-gray-600 mb-6">
            My fees depend on the scope of work and property value. I believe in transparent,
            fair pricing with no hidden costs. Let&apos;s discuss your needs and I&apos;ll provide
            a clear quote before we begin.
          </p>
          <p className="text-gray-600">
            <strong>Important:</strong> I only take on clients I&apos;m confident I can help.
            If I don&apos;t think I&apos;m the right fit for your situation, I&apos;ll tell you honestly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-saudi-green to-saudi-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Share your city, budget, timeline, buyer profile, and intended use.
            I will tell you what is realistic and what needs to be checked first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              variant="white"
              size="lg"
            >
              Start a Conversation
            </WhatsAppButton>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-saudi-green font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Abdulaziz Mofleh | Licensed Real Estate Agent | Makkah, Saudi Arabia
          </p>
        </div>
      </section>
    </main>
  )
}
