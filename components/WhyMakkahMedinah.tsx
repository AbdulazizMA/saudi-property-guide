'use client'

import { motion } from 'framer-motion'
import { Heart, Users, TrendingUp, Sun } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Steps from the Haram',
    description: 'Wake up to the Adhan from Masjid al-Haram. Walk to Umrah whenever your heart desires. Experience the blessing of living near the holiest sites in Islam.',
  },
  {
    icon: Users,
    title: 'A Home for Generations',
    description: 'Create a spiritual legacy. A place for your family to return to for Hajj, Ramadan, and blessed gatherings for generations to come.',
  },
  {
    icon: TrendingUp,
    title: 'Investment with Barakah',
    description: 'Properties in the Holy Cities have shown consistent appreciation. Strong rental demand year-round from pilgrims seeking accommodation.',
  },
  {
    icon: Sun,
    title: 'Your Retirement Near the Kaaba',
    description: 'Spend your golden years in the most blessed place on earth. Many diaspora Muslims dream of retiring near the Haramain.',
  },
]

export default function WhyMakkahMedinah() {
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
              Why Own Property in <span className="text-gradient">Makkah & Medinah</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For Muslims around the world, owning a home near the Holy Mosques
              is more than an investment - it&apos;s a lifelong dream and a spiritual aspiration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-saudi-green/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-saudi-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional Appeal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-saudi-green to-saudi-green-dark rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            &ldquo;The dream of every Muslim is to be near the House of Allah&rdquo;
          </p>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Let us help you turn that dream into reality. Whether it&apos;s a small apartment
            for Umrah visits or a family home for retirement, we&apos;ll guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
