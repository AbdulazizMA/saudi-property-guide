'use client'

import { motion } from 'framer-motion'
import { Calendar, Search, Scale, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Calendar,
    title: 'Free 15-Min Consultation',
    description: 'Get personalized advice on your property investment goals. We\'ll discuss your budget, preferred locations, and answer all your questions.',
    price: 'FREE',
    features: ['Personalized investment strategy', 'Market overview', 'Location recommendations', 'Q&A session']
  },
  {
    icon: Search,
    title: 'Premium Property Search',
    description: 'Comprehensive property search tailored to your requirements. We handle viewings, negotiations, and paperwork.',
    price: 'From SAR 5,000',
    features: ['Curated property selection', 'Virtual/in-person viewings', 'Price negotiation', 'Documentation support']
  },
  {
    icon: Scale,
    title: 'Legal Guidance',
    description: 'Expert legal support through the entire purchase process. Contract review, title verification, and compliance assurance.',
    price: 'From SAR 3,000',
    features: ['Contract review', 'Title verification', 'Legal compliance', 'Notary coordination']
  },
  {
    icon: BarChart3,
    title: 'Investment Analysis',
    description: 'In-depth ROI analysis and portfolio planning. We help you make data-driven investment decisions.',
    price: 'From SAR 4,000',
    features: ['ROI projections', 'Market analysis', 'Portfolio planning', 'Risk assessment']
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to closing the deal, we provide comprehensive 
              support for every step of your property investment journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-saudi-green rounded-xl flex items-center justify-center"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`font-bold text-lg ${service.price === 'FREE' ? 'text-saudi-green' : 'text-saudi-gold'}`}>
                  {service.price}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-saudi-gold rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/"
                className="inline-flex items-center space-x-2 text-saudi-green font-semibold hover:text-saudi-green-dark transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
