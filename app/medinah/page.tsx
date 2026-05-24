import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Home, CheckCircle, ArrowRight, Building, Heart } from 'lucide-react'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Medinah Property Buyer Representation',
  description: 'Explore Medinah property options with local buyer representation, neighborhood guidance, eligibility review, negotiation, and owner support.',
  keywords: [
    'buy property in Medinah',
    'Medinah real estate',
    'property near Prophet Mosque',
    'Madinah property investment',
    'own home in Medinah',
    'Medinah apartments for sale',
    'Madinah real estate agent',
    'property near Masjid Nabawi',
  ],
  openGraph: {
    title: 'Medinah Property Buyer Representation',
    description: 'Local guidance for serious buyers evaluating property options in Medinah.',
  },
}

const propertyTypes = [
  {
    name: 'Apartments',
    description: 'Modern units reviewed for access, building quality, services, and value',
    icon: Building,
  },
  {
    name: 'Villas',
    description: 'Spacious family homes in peaceful residential areas',
    icon: Home,
  },
  {
    name: 'Investment Properties',
    description: 'Units assessed for realistic demand, operating costs, and management needs',
    icon: TrendingUp,
  },
]

const neighborhoods = [
  {
    name: 'Al-Haram District',
    distance: 'Prime location',
    highlight: 'Near Masjid Nabawi',
  },
  {
    name: 'Al-Awali',
    distance: 'Short drive to Masjid Nabawi',
    highlight: 'Upscale residential',
  },
  {
    name: 'Quba',
    distance: 'Short drive to Masjid Nabawi',
    highlight: 'Near Masjid Quba',
  },
  {
    name: 'Al-Aziziyah',
    distance: 'Easy access to Masjid Nabawi',
    highlight: 'Growing area',
  },
]

const faqs = [
  {
    question: 'Can non-Saudis buy property in Medinah?',
    answer: 'Eligibility depends on nationality, residency status, property type, location, and current rules. I help buyers review their profile first, then confirm the available path before they spend time on the wrong listings.',
  },
  {
    question: 'How is Medinah different from Makkah for property investment?',
    answer: 'Medinah often attracts buyers who want a calmer lifestyle, family use, or long-term ownership near Masjid an-Nabawi. The right choice depends on access, budget, building quality, and how you plan to use the property.',
  },
  {
    question: 'What is the rental market like in Medinah?',
    answer: 'Demand can be steady in the right location, but returns depend on access, licensing, property condition, operating costs, and management. I help you review assumptions before treating a unit as an investment.',
  },
  {
    question: 'What makes Medinah special for Muslims?',
    answer: 'Medinah is the City of the Prophet, home to Masjid an-Nabawi and a place many families want to return to regularly. A property here should serve both your spiritual goals and your practical family needs.',
  },
]

export default function MedinahPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Medinah Skyline SVG */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medinahSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#002E18" />
                <stop offset="100%" stopColor="#004d26" />
              </linearGradient>
              <linearGradient id="medinahGlow" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#C5A028" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#C5A028" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#medinahSky)" />
            <rect width="1440" height="280" fill="url(#medinahGlow)" />
            {/* Stars */}
            {[[100,50],[260,80],[430,35],[600,95],[760,55],[930,70],[1090,40],[1260,85],[1370,30],[200,115],[540,25],[870,105],[1040,60],[1330,100]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2 : 1.5} fill="#F4D98A" opacity={0.4 + (i % 4) * 0.15} />
            ))}
            {/* City skyline */}
            <g fill="#001A0D" opacity="0.5">
              <rect x="60" y="390" width="80" height="210" rx="2" />
              <rect x="160" y="370" width="65" height="230" rx="2" />
              <rect x="250" y="400" width="75" height="200" rx="2" />
              <rect x="350" y="380" width="60" height="220" rx="2" />
              {/* Palm trees left */}
              <rect x="450" y="380" width="6" height="80" />
              <ellipse cx="453" cy="370" rx="25" ry="15" />
              <rect x="500" y="390" width="6" height="70" />
              <ellipse cx="503" cy="380" rx="22" ry="13" />
              {/* Green Dome */}
              <rect x="600" y="340" width="200" height="260" rx="3" />
              <ellipse cx="700" cy="340" rx="100" ry="60" />
              <circle cx="700" cy="300" r="55" fill="#1a6838" opacity="0.6" />
              {/* Dome crescent hint */}
              <circle cx="700" cy="240" r="5" fill="#C5A028" opacity="0.4" />
              {/* Minarets */}
              <rect x="560" y="250" width="12" height="200" />
              <polygon points="566,220 578,250 554,250" fill="#001A0D" />
              <rect x="830" y="250" width="12" height="200" />
              <polygon points="836,220 848,250 824,250" fill="#001A0D" />
              <rect x="630" y="260" width="10" height="120" />
              <polygon points="635,235 645,260 625,260" fill="#001A0D" />
              <rect x="765" y="260" width="10" height="120" />
              <polygon points="770,235 780,260 760,260" fill="#001A0D" />
              {/* Palm trees right */}
              <rect x="920" y="385" width="6" height="75" />
              <ellipse cx="923" cy="375" rx="23" ry="14" />
              {/* Buildings right */}
              <rect x="980" y="380" width="70" height="220" rx="2" />
              <rect x="1070" y="400" width="65" height="200" rx="2" />
              <rect x="1155" y="370" width="80" height="230" rx="2" />
              <rect x="1255" y="390" width="60" height="210" rx="2" />
              <rect x="1335" y="380" width="70" height="220" rx="2" />
            </g>
            {/* Ground */}
            <rect x="0" y="500" width="1440" height="100" fill="#001A0D" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-saudi-green-dark/80 via-saudi-green/50 to-saudi-green-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-saudi-gold font-arabic text-2xl mb-4">المدينة المنورة</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Medinah Property, <span className="text-saudi-gold">Chosen Carefully</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            For overseas buyers seeking a calmer base near Masjid an-Nabawi, with local
            guidance on neighborhoods, pricing, eligibility, and long-term ownership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your Medinah page and want to review property options. My budget, timeline, and intended use are:"
              size="lg"
            >
              Review Medinah Options
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
              <p className="text-3xl font-bold text-saudi-green">Calm</p>
              <p className="text-gray-600 text-sm">Residential Appeal</p>
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
              <p className="text-3xl font-bold text-saudi-green">Local</p>
              <p className="text-gray-600 text-sm">Buyer Representation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Medinah */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Buyers Focus on <span className="text-gradient">Medinah</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Medinah appeals to buyers who want a meaningful place to stay, a calmer pace, and a purchase that still makes practical sense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Significance</h3>
              <ul className="space-y-3">
                {[
                  'Compare realistic access to Masjid an-Nabawi',
                  'Choose a calm setting that suits family visits',
                  'Plan regular stays with fewer logistical surprises',
                  'Understand nearby services, transport, and daily convenience',
                  'Balance spiritual value with practical ownership needs',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Often more approachable pricing than central Makkah',
                  'Peaceful residential districts for family use',
                  'Neighborhoods with improving services and amenities',
                  'Long-term appeal for buyers seeking regular visits',
                  'Rental assumptions reviewed against local realities',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
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
              Property Types in Medinah
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
              Medinah Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From areas close to the Prophet&apos;s Mosque to peaceful residential suburbs, I can help you find the right location.
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
            Ready to Evaluate Medinah Seriously?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Share your budget, buyer profile, timeline, and reason for buying. I will help you understand which Medinah options are worth your attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Assalamu Alaikum Abdulaziz, I found your Medinah properties page. I want a serious review of available options. My budget, timeline, and intended use are:"
              size="lg"
              variant="white"
            >
              Start a Medinah Review
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Abdulaziz Mofleh | Licensed Real Estate Agent | English & Arabic
          </p>
        </div>
      </section>
    </main>
  )
}
