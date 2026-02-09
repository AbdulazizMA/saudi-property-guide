'use client'

import { motion } from 'framer-motion'
import { Heart, Users, TrendingUp, Sun } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const benefits = [
  {
    icon: Heart,
    title: 'Steps from the Haram',
    description: 'Wake up to the Adhan from Masjid al-Haram. Walk to Umrah whenever your heart desires. Live in the most blessed place on earth.',
  },
  {
    icon: Users,
    title: 'A Home for Generations',
    description: 'Create a spiritual legacy for your family. A place for Hajj, Ramadan stays, and blessed gatherings — passed down through generations.',
  },
  {
    icon: TrendingUp,
    title: 'Investment with Barakah',
    description: 'Makkah property values have seen steady appreciation year over year. Strong rental demand from millions of annual pilgrims.',
  },
  {
    icon: Sun,
    title: 'Retire Near the Kaaba',
    description: 'Spend your golden years in prayer and peace. Many of our clients plan their Makkah property as their forever home.',
  },
]

export default function WhyMakkahMedinah() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">Why It Matters</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Own Property in <span className="text-gradient">Makkah &amp; Medinah</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For Muslims around the world, owning a home near the Holy Mosques
              is more than an investment — it is a lifelong dream and a spiritual aspiration.
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-[#FBF9F4] p-6 shadow-[0_10px_30px_rgba(21,40,38,0.06)]"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-saudi-green/10 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-saudi-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 bg-[linear-gradient(120deg,_#1F3A38_0%,_#2B3E49_60%,_#3C2F22_100%)] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <p className="font-display text-2xl md:text-3xl font-semibold mb-4">
            &ldquo;The dream of every Muslim is to be near the House of Allah.&rdquo;
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let me help you turn that dream into reality. Whether it is a small apartment
            for Umrah visits or a family home for retirement — I will guide you every step of the way.
          </p>
          <WhatsAppButton variant="white" size="lg">
            Let&apos;s Discuss Your Dream Property
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
