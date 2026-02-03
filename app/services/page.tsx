import { Metadata } from 'next'
import { Calendar, Search, Scale, BarChart3, Check, Clock, Shield, Headphones } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | SaudiPropertyGuide.com',
  description: 'Comprehensive real estate consultation services for foreigners buying property in Saudi Arabia.',
}

const services = [
  {
    icon: Calendar,
    title: 'Free 15-Minute Consultation',
    description: 'Start your Saudi property journey with a complimentary consultation. We\'ll discuss your goals, budget, timeline, and answer all your questions about buying property as a foreigner.',
    price: 'FREE',
    duration: '15 minutes',
    features: [
      'Personalized investment strategy',
      'Overview of Saudi real estate market',
      'Location recommendations based on your needs',
      'Q&A on foreign ownership laws',
      'Budget planning guidance',
      'Next steps roadmap'
    ],
    popular: false
  },
  {
    icon: Search,
    title: 'Premium Property Search',
    description: 'Comprehensive property search service tailored to your specific requirements. We handle everything from property identification to final negotiations.',
    price: 'SAR 5,000 - 15,000',
    duration: '2-8 weeks',
    features: [
      'Detailed needs assessment',
      'Curated property selection (5-15 options)',
      'Virtual or in-person property viewings',
      'Market analysis and price benchmarking',
      'Negotiation support with sellers',
      'Documentation and paperwork assistance',
      'Post-purchase support for 30 days'
    ],
    popular: true
  },
  {
    icon: Scale,
    title: 'Legal Guidance Package',
    description: 'Expert legal support to ensure your property purchase is secure and compliant with all Saudi regulations. Peace of mind throughout the transaction.',
    price: 'SAR 3,000 - 8,000',
    duration: 'Per transaction',
    features: [
      'Contract review and analysis',
      'Title verification and due diligence',
      'Legal compliance check',
      'Notary coordination and attendance',
      'Government document processing',
      'Ownership transfer assistance',
      'Legal representation if needed'
    ],
    popular: false
  },
  {
    icon: BarChart3,
    title: 'Investment Analysis',
    description: 'Data-driven investment analysis to help you make informed decisions. Ideal for investors looking to maximize returns and build a property portfolio.',
    price: 'SAR 4,000 - 12,000',
    duration: '1-2 weeks',
    features: [
      'ROI projections and analysis',
      'Comprehensive market research',
      'Portfolio diversification strategy',
      'Risk assessment report',
      'Rental yield calculations',
      'Exit strategy recommendations',
      'Quarterly market updates (1 year)'
    ],
    popular: false
  },
]

const addOns = [
  {
    title: 'Mortgage Assistance',
    description: 'Help securing financing from Saudi banks for qualified foreign buyers',
    price: 'SAR 2,000'
  },
  {
    title: 'Property Management Setup',
    description: 'Connect with trusted property management for rental properties',
    price: 'SAR 1,500'
  },
  {
    title: 'Residency Visa Support',
    description: 'Guidance on property-based residency (Premium Residency) applications',
    price: 'SAR 3,000'
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-saudi-gold">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            From free consultations to comprehensive property search and legal support, 
            we offer services tailored to every stage of your Saudi real estate journey.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  service.popular ? 'ring-2 ring-saudi-gold' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-saudi-gold text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-saudi-green rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <span className={`text-2xl font-bold ${service.price === 'FREE' ? 'text-saudi-green' : 'text-saudi-gold'}`}>
                      {service.price}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact/"
                    className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                      service.popular 
                        ? 'btn-secondary' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon) => (
              <div key={addon.title} className="border border-gray-200 rounded-xl p-6 hover:border-saudi-green transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <p className="text-saudi-gold font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-saudi-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="text-saudi-gold">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your journey to owning property in Saudi Arabia, simplified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'Free 15-min call to discuss your goals' },
              { step: '02', title: 'Strategy & Search', desc: 'We curate properties matching your criteria' },
              { step: '03', title: 'Viewings & Selection', desc: 'Virtual or in-person property tours' },
              { step: '04', title: 'Purchase & Registration', desc: 'Legal support through closing' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-saudi-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-saudi-gold">{item.step}</span>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
