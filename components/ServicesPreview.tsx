'use client'

import { motion } from 'framer-motion'
import { Search, Building2, ArrowRight, CheckCircle, Clock, Shield, Globe } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

const services = [
  {
    icon: Search,
    title: 'Property Search & Acquisition',
    description: 'I find and secure your ideal property in Makkah or Medinah while you stay overseas. From the first search to handing you the keys — everything is handled.',
    features: [
      'Personalized property matching',
      'Virtual or in-person viewings',
      'Price negotiation on your behalf',
      'Full documentation & legal support',
      'Title verification & due diligence',
      'Registration assistance',
    ],
    cta: 'Start Your Property Search',
    highlight: true,
    whatsappMessage: "Assalamu Alaikum Abdulaziz, I'm interested in your Property Search & Acquisition service. I'd like to discuss buying property in Makkah/Medinah.",
  },
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Own property in the Holy Cities but live abroad? I manage everything — tenants, maintenance, rent collection — so your investment works for you.',
    features: [
      'Tenant sourcing & screening',
      'Rent collection & transfers',
      'Maintenance coordination',
      'Regular inspections with photos',
      'Monthly financial reporting',
      'Emergency response handling',
    ],
    cta: 'Manage My Property',
    highlight: false,
    whatsappMessage: "Assalamu Alaikum Abdulaziz, I'm interested in your Property Management service for my property in Makkah/Medinah.",
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
            <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How I Can <span className="text-gradient">Help You</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two focused services designed for Muslims living abroad who want to own or manage property in the Holy Cities.
            </p>
          </motion.div>
        </div>

        {/* Why Work With an Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Clock, title: 'Save Months of Effort', desc: 'I know the market — no wasted time on unsuitable properties or unreliable sellers.' },
            { icon: Shield, title: 'Avoid Costly Mistakes', desc: 'Title verification, legal compliance, and fair pricing — I protect your investment.' },
            { icon: Globe, title: 'Buy From Anywhere', desc: 'Video viewings, digital paperwork, WhatsApp updates. You never need to fly in.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-[#FBF9F4] rounded-2xl p-6 border border-[#E7D5B7]/50">
              <div className="w-12 h-12 bg-saudi-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-saudi-green" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-3xl p-8 border shadow-[0_12px_32px_rgba(21,40,38,0.08)] ${service.highlight
                ? 'bg-[#FBF8F0] border-saudi-gold/50'
                : 'bg-white border-gray-100'
              }`}
            >
              {service.highlight && (
                <div className="inline-flex items-center gap-2 bg-saudi-green/10 text-saudi-green text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <div className="w-16 h-16 bg-saudi-green/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-saudi-green" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-saudi-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <WhatsAppButton
                message={service.whatsappMessage}
                className="w-full justify-center"
              >
                {service.cta}
              </WhatsAppButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-saudi-green hover:text-saudi-green-dark font-semibold transition-colors"
          >
            View Full Service Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
