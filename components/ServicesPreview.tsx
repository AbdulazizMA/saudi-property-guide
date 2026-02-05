'use client'

import { motion } from 'framer-motion'
import { Search, Building2, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Search,
    title: 'Property Search & Acquisition',
    description: 'We help you find and purchase your ideal property in Makkah or Medinah. From initial search to final registration, we handle everything while you\'re overseas.',
    features: [
      'Personalized property matching',
      'Virtual or in-person viewings',
      'Price negotiation on your behalf',
      'Full documentation support',
      'Title verification',
      'Registration assistance',
    ],
    cta: 'Start Your Search',
    highlight: true,
  },
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Living overseas? We manage your Makkah or Medinah property so you don\'t have to worry. Ideal for rental properties or second homes.',
    features: [
      'Tenant sourcing and screening',
      'Rent collection',
      'Maintenance coordination',
      'Regular property inspections',
      'Monthly reporting',
      'Emergency response',
    ],
    cta: 'Learn More',
    highlight: false,
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Can <span className="text-gradient">Help You</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer two core services to help Muslims worldwide own and manage
              property near the Holy Mosques.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 ${service.highlight ? 'border-saudi-green' : 'border-transparent'}`}
            >
              {service.highlight && (
                <div className="inline-block bg-saudi-green text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <div className="w-16 h-16 bg-saudi-green/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-saudi-green" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-saudi-green flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/"
                className={`flex items-center justify-center space-x-2 w-full font-semibold py-3 px-6 rounded-xl transition-colors ${service.highlight
                    ? 'bg-saudi-green hover:bg-saudi-green-dark text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
