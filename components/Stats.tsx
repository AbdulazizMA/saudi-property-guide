'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, MapPin, Clock } from 'lucide-react'

const stats = [
  {
    icon: Shield,
    value: 'Licensed',
    label: 'Real Estate Agent',
    description: 'Authorized in Saudi Arabia',
  },
  {
    icon: Globe,
    value: '2',
    label: 'Languages',
    description: 'English & Arabic',
  },
  {
    icon: MapPin,
    value: 'Makkah',
    label: 'Based',
    description: 'Local knowledge & presence',
  },
  {
    icon: Clock,
    value: 'Full',
    label: 'Service',
    description: 'End-to-end support',
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#E7D5B7] shadow-[0_12px_40px_rgba(21,40,38,0.08)] p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-left"
              >
                <div className="w-12 h-12 bg-saudi-green/10 rounded-2xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-saudi-green" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-saudi-green mb-1">{stat.value}</p>
                <p className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
