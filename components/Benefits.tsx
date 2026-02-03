'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, FileCheck, Headphones, Building, Award } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Clear Ownership Pathways',
    description: 'We help you navigate eligibility and ownership structures in designated areas and approved projects.'
  },
  {
    icon: TrendingUp,
    title: 'Market Momentum',
    description: 'Major development projects and urban expansion are creating new demand across key cities.'
  },
  {
    icon: FileCheck,
    title: 'Vision 2030 Growth',
    description: 'Large-scale infrastructure and economic diversification are reshaping housing and commercial needs.'
  },
  {
    icon: Building,
    title: 'Premium Developments',
    description: 'Access modern communities, mixed-use districts, and new developments built to global standards.'
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
              Why Invest in <span className="text-gradient">Saudi Real Estate</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the compelling advantages that make Saudi Arabia one of the most 
              attractive real estate markets for international investors.
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
