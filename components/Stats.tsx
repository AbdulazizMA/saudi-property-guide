'use client'

import { motion } from 'framer-motion'
import { Shield, Home, MapPin, Headphones } from 'lucide-react'

const stats = [
  {
    icon: Shield,
    value: 'Licensed',
    label: 'Saudi guidance',
    description: 'A local professional who understands the transaction path',
  },
  {
    icon: Home,
    value: 'End-to-End',
    label: 'Buyer support',
    description: 'Search, shortlist, negotiation, paperwork, and handover',
  },
  {
    icon: MapPin,
    value: 'Makkah',
    label: 'Born and based',
    description: 'Neighborhood context that overseas buyers cannot get online',
  },
  {
    icon: Headphones,
    value: 'Direct',
    label: 'Communication',
    description: 'WhatsApp, calls, and video updates with Abdulaziz',
  },
]

export default function Stats() {
  return (
    <section className="bg-[#F7F4EF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#E7D5B7] bg-[#E7D5B7] shadow-[0_18px_55px_rgba(21,40,38,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white p-6 text-left sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-saudi-green/10">
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
