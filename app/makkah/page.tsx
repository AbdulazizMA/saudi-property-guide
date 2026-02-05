import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Home, CheckCircle, ArrowRight, Building } from 'lucide-react'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Buy Property in Makkah | Own a Home Near Masjid al-Haram',
  description: 'Find apartments, villas, and investment properties in Makkah near the Holy Haram. Licensed local agent helping foreigners buy property in Makkah. Contact Abdulaziz Mofleh.',
  keywords: [
    'buy property in Makkah',
    'Makkah real estate',
    'apartment near Haram',
    'property near Kaaba',
    'Makkah property for foreigners',
    'own home in Makkah',
    'Makkah investment property',
    'Makkah apartment for sale',
    'real estate agent Makkah',
  ],
  openGraph: {
    title: 'Buy Property in Makkah | Own a Home Near Masjid al-Haram',
    description: 'Licensed real estate agent helping Muslims worldwide own property near Masjid al-Haram in Makkah.',
  },
}

const propertyTypes = [
  {
    name: 'Apartments',
    description: 'From studios to 4-bedroom units in prime locations',
    icon: Building,
  },
  {
    name: 'Villas',
    description: 'Spacious family homes in residential compounds',
    icon: Home,
  },
  {
    name: 'Investment Units',
    description: 'High-yield properties for pilgrimage rental',
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
    question: 'Can foreigners buy property in Makkah?',
    answer: 'Yes, under recent reforms, eligible foreigners can purchase property in designated areas of Makkah. I can help you understand the requirements and guide you through the process.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You\'ll typically need a valid passport, proof of income, and in some cases, a residency permit. I handle all documentation requirements for my clients.',
  },
  {
    question: 'How close to the Haram can I buy?',
    answer: 'Properties are available at various distances from Masjid al-Haram, from premium locations nearby to areas further out. Closer properties command higher prices.',
  },
  {
    question: 'What is the rental yield in Makkah?',
    answer: 'Makkah properties often see strong rental yields, especially during Hajj, Umrah season, and Ramadan. Many owners rent their properties to pilgrims when not using them.',
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
            Buy Property in <span className="text-saudi-gold">Makkah</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Own a home near Masjid al-Haram. Wake up to the Adhan, walk to Umrah,
            and build a legacy for your family in the holiest city on earth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your website and I'm interested in buying property in Makkah. Could we discuss my options?"
              size="lg"
            >
              Inquire About Makkah Properties
            </WhatsAppButton>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 bg-white text-saudi-green font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <span>Book Consultation</span>
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
              <p className="text-3xl font-bold text-saudi-green">Strong</p>
              <p className="text-gray-600 text-sm">Market Growth</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">High</p>
              <p className="text-gray-600 text-sm">Rental Demand</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">Year-Round</p>
              <p className="text-gray-600 text-sm">Pilgrim Traffic</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-saudi-green">Premium</p>
              <p className="text-gray-600 text-sm">Location Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Makkah */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Own Property in <span className="text-gradient">Makkah</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For Muslims, there&apos;s no place on earth more meaningful than the city of the Kaaba.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Live within walking distance of Masjid al-Haram',
                  'Perform Umrah whenever you wish',
                  'Pray in the holiest mosque in Islam daily',
                  'Experience Ramadan and Hajj season from your home',
                  'Build a spiritual legacy for future generations',
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
                  'Strong property value appreciation potential',
                  'High rental yields during pilgrimage seasons',
                  'Consistent demand from Hajj and Umrah visitors',
                  'Limited supply in prime locations',
                  'Tangible asset with long-term growth potential',
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
              I can help you find property in various areas of Makkah, each with its own advantages.
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
            Ready to Own Property in Makkah?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Let me help you find your perfect property near Masjid al-Haram.
            As a Makkah local, I know every neighborhood and can guide you to the best options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your Makkah properties page and I'd like to learn more about buying near Masjid al-Haram. Could we talk?"
              size="lg"
              variant="white"
            >
              Chat About Makkah Properties
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
