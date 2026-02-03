'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Building2, Globe } from 'lucide-react'

const stats = [
  {
    icon: Building2,
    value: 'Reform Era',
    label: 'Ownership Pathways',
    description: 'Designated zones and eligible projects for foreign buyers'
  },
  {
    icon: Users,
    value: 'Growing',
    label: 'International Community',
    description: 'Expanding expat base and new residential demand'
  },
  {
    icon: TrendingUp,
    value: 'Investment',
    label: 'City Transformation',
    description: 'Infrastructure projects reshaping key markets'
  },
  {
    icon: Globe,
    value: 'Structured',
    label: 'Regulated Process',
    description: 'Clear documentation and official registration steps'
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Saudi Real Estate at a <span className="text-gradient">Glance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key statistics highlighting the opportunities for foreign investors 
            in Saudi Arabia's rapidly evolving property market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-saudi-green/10 rounded-xl flex items-center justify-center mb-6">
                <stat.icon className="w-7 h-7 text-saudi-green" />
              </div>
              <p className="text-4xl font-bold text-saudi-green mb-2">{stat.value}</p>
              <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
