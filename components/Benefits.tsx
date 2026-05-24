'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, FileCheck, Headphones, Building, Award } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Eligibility First',
    description: 'We review buyer profile, location, and transaction route before treating any listing as viable.'
  },
  {
    icon: TrendingUp,
    title: 'Local Market Context',
    description: 'We compare asking prices, access, building quality, and neighborhood tradeoffs with local judgment.'
  },
  {
    icon: FileCheck,
    title: 'Development Awareness',
    description: 'Infrastructure and urban growth can affect demand, but each purchase still needs property-level review.'
  },
  {
    icon: Building,
    title: 'Property-Level Review',
    description: 'We look past brochures and check layout, access, services, delivery status, and ongoing costs.'
  },
  {
    icon: Headphones,
    title: 'Expert Guidance',
    description: 'Bilingual consultants navigate documentation, language barriers, and cultural considerations.'
  },
  {
    icon: Award,
    title: 'Fee and Tax Clarity',
    description: 'We provide a transparent cost breakdown so you can plan with confidence.'
  },
]

export default function Benefits() {
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
              Why Work With <span className="text-gradient">Local Representation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Overseas buyers need more than listings. They need local checks, clear documents,
              realistic numbers, and a process that reduces avoidable mistakes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-saudi-green transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-saudi-green group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors"
              >
                <benefit.icon className="w-7 h-7 text-white group-hover:text-saudi-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
