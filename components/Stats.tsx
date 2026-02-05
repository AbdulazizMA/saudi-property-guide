'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, MapPin, Clock } from 'lucide-react'

const stats = [
  {
    icon: Shield,
    value: 'Licensed',
    label: 'Real Estate Agent',
    description: 'Authorized in Saudi Arabia'
  },
  {
    icon: Globe,
    value: '2',
    label: 'Languages',
    description: 'English & Arabic'
  },
  {
    icon: MapPin,
    value: 'Makkah',
    label: 'Based',
    description: 'Local knowledge & presence'
  },
  {
    icon: Clock,
    value: 'Full',
    label: 'Service',
    description: 'End-to-end support'
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 bg-saudi-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-saudi-green" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-saudi-green mb-1">{stat.value}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
