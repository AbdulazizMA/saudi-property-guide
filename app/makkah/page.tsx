import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Home, CheckCircle, ArrowRight, Building } from 'lucide-react'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Makkah Property Buyer Representation',
  description: 'Explore Makkah property options with a local licensed agent. Shortlisting, neighborhood guidance, eligibility review, negotiation, and owner support for serious buyers.',
  keywords: [
    'buy property in Makkah',
    'Makkah real estate',
    'apartment near Haram',
    'property near Kaaba',
    'Makkah property for international buyers',
    'own home in Makkah',
    'Makkah investment property',
    'Makkah apartment for sale',
    'real estate agent Makkah',
  ],
  openGraph: {
    title: 'Makkah Property Buyer Representation',
    description: 'Local guidance for serious buyers evaluating property options in Makkah.',
  },
}

const propertyTypes = [
  {
    name: 'Apartments',
    description: 'Studios, family units, and serviced residences across practical Makkah locations',
    icon: Building,
  },
  {
    name: 'Villas',
    description: 'Spacious family homes in residential compounds',
    icon: Home,
  },
  {
    name: 'Investment Units',
    description: 'Units reviewed for demand, operating costs, and realistic rental potential',
    icon: TrendingUp,
  },
]

const neighborhoods = [
  {
    name: 'Ajyad',
    distance: 'Premium location',
    highlight: 'Close to Haram',
  },
  {
    name: 'Aziziyah',
    distance: 'Short drive to Haram',
    highlight: 'Best value',
  },
  {
    name: 'Al-Naseem',
    distance: 'Easy access to Haram',
    highlight: 'Family-friendly',
  },
  {
    name: 'Third Ring Road',
    distance: 'Accessible location',
    highlight: 'Affordable options',
  },
]

const faqs = [
  {
    question: 'Can non-Saudis buy property in Makkah?',
    answer: 'Eligibility depends on nationality, residency status, property type, location, and current rules. The first step is not guessing; it is reviewing your profile and confirming the available pathway through qualified local channels.',
  },
  {
    question: 'What documents do I need?',
    answer: 'Requirements vary by buyer profile and transaction route. I help you organize the usual identity, residency, funding, and approval documents, then coordinate with the appropriate professionals before you commit.',
  },
  {
    question: 'How close to the Haram can I buy?',
    answer: 'Properties are available at various distances from Masjid al-Haram, from premium locations nearby to areas further out. Closer properties command higher prices.',
  },
  {
    question: 'Is Makkah property good for rental income?',
    answer: 'Demand can be strong in the right location, but income depends on distance, building quality, licensing, seasonality, service costs, and management. I help buyers compare the numbers before treating a property as an investment.',
  },
]

export default function MakkahPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Makkah Skyline SVG */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="makkahSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#002E18" />
                <stop offset="100%" stopColor="#004d26" />
              </linearGradient>
              <linearGradient id="makkahGlow" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#C5A028" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#C5A028" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#makkahSky)" />
            <rect width="1440" height="300" fill="url(#makkahGlow)" />
            {/* Stars */}
            {[[120,55],[280,85],[450,40],[620,100],[780,50],[940,75],[1100,45],[1280,90],[1380,35],[180,120],[520,30],[850,110],[1050,65],[1350,105]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2 : 1.5} fill="#F4D98A" opacity={0.4 + (i % 4) * 0.15} />
            ))}
            {/* Mountains backdrop */}
            <polygon points="0,420 180,340 350,370 520,310 700,350 900,330 1100,360 1300,320 1440,350 1440,600 0,600" fill="#001A0D" opacity="0.3" />
            {/* City skyline */}
            <g fill="#001A0D" opacity="0.5">
              <rect x="40" y="380" width="90" height="220" rx="2" />
              <rect x="150" y="360" width="70" height="240" rx="2" />
              <rect x="240" y="400" width="80" height="200" rx="2" />
              <rect x="340" y="370" width="65" height="230" rx="2" />
              <rect x="430" y="390" width="75" height="210" rx="2" />
              {/* Clock Tower */}
              <rect x="600" y="220" width="110" height="380" rx="3" />
              <rect x="615" y="190" width="80" height="30" rx="2" />
              <rect x="640" y="160" width="30" height="30" rx="2" />
              {/* Clock face hint */}
              <circle cx="655" cy="235" r="16" fill="none" stroke="#C5A028" strokeWidth="1" opacity="0.25" />
              {/* Minarets */}
              <rect x="540" y="290" width="12" height="170" />
              <polygon points="546,260 558,290 534,290" fill="#001A0D" />
              <rect x="750" y="300" width="12" height="160" />
              <polygon points="756,270 768,300 744,300" fill="#001A0D" />
              {/* Buildings right */}
              <rect x="800" y="370" width="80" height="230" rx="2" />
              <rect x="900" y="390" width="70" height="210" rx="2" />
              <rect x="990" y="360" width="90" height="240" rx="2" />
              <rect x="1100" y="380" width="65" height="220" rx="2" />
              <rect x="1185" y="400" width="80" height="200" rx="2" />
              <rect x="1285" y="370" width="75" height="230" rx="2" />
              <rect x="1380" y="390" width="60" height="210" rx="2" />
            </g>
            {/* Ground line */}
            <rect x="0" y="500" width="1440" height="100" fill="#001A0D" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-saudi-green-dark/80 via-saudi-green/50 to-saudi-green-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-saudi-gold font-arabic text-2xl mb-4">مكة المكرمة</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Makkah Property, <span className="text-saudi-gold">Properly Vetted</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            For buyers abroad who want more than listings: local neighborhood context,
            eligibility review, realistic pricing, and step-by-step representation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your Makkah page and want to review property options. My budget, timeline, and intended use are:"
              size="lg"
            >
              Review Makkah Options
            </WhatsAppButton>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 bg-white text-saudi-green font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <span>Send Property Brief</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-saudi-green">Local</p>
              <p className="text-gray-600 text-sm">Neighborhood Insight</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">Clear</p>
              <p className="text-gray-600 text-sm">Eligibility Review</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">Vetted</p>
              <p className="text-gray-600 text-sm">Property Shortlists</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">Direct</p>
              <p className="text-gray-600 text-sm">Buyer Representation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Makkah */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Buyers Focus on <span className="text-gradient">Makkah</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Makkah is emotionally powerful, but the right purchase still needs a disciplined process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Compare realistic access times to Masjid al-Haram',
                  'Understand how traffic and transport affect each neighborhood',
                  'Plan for personal stays during Ramadan or Umrah visits',
                  'Choose layouts that work for family use, not only photos',
                  'Evaluate long-term fit before making an emotional decision',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Compare asking prices against local market context',
                  'Review rental assumptions before relying on them',
                  'Check building quality, access, services, and ongoing costs',
                  'Understand scarcity and pricing near premium locations',
                  'Build a practical ownership plan for local management',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Property Types in Makkah
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type) => (
              <div key={type.name} className="text-center p-8 rounded-2xl border border-gray-200 hover:border-saudi-green hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-saudi-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-saudi-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Makkah Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each area has tradeoffs in access, price, building age, services, and resale appeal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((area) => (
              <div key={area.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-saudi-green" />
                  <h3 className="font-bold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{area.distance}</p>
                <span className="inline-block bg-saudi-gold/20 text-saudi-gold-dark text-xs font-semibold px-2 py-1 rounded">
                  {area.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-saudi-green to-saudi-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Evaluate Makkah Seriously?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Send your budget, timeline, intended use, and buyer profile. I will help you understand what is realistic before you waste time on weak listings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your Makkah properties page. I want a serious review of available options. My budget, timeline, and intended use are:"
              size="lg"
              variant="white"
            >
              Start a Makkah Review
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Abdulaziz Mofleh | Licensed Real Estate Agent | Makkah Local
          </p>
        </div>
      </section>
    </main>
  )
}
