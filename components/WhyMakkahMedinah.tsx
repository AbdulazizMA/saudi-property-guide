'use client'

import { motion } from 'framer-motion'
import { Heart, Users, TrendingUp, Sun } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const benefits = [
  {
    icon: Heart,
    title: 'A Meaningful Base',
    description: 'A property near the Haramain can support regular Umrah, Ramadan visits, retirement plans, or family stays with deeper purpose.',
  },
  {
    icon: Users,
    title: 'A Family Asset',
    description: 'Many buyers want a place their family can return to again and again, with layout, access, and long-term care planned properly.',
  },
  {
    icon: TrendingUp,
    title: 'Practical Investment Review',
    description: 'Demand matters, but so do building quality, licensing, service costs, distance, management, and realistic rental assumptions.',
  },
  {
    icon: Sun,
    title: 'Retirement Planning',
    description: 'For buyers planning later-life stays, we look at comfort, healthcare access, transport, family needs, and local support.',
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
              Why Buyers Choose <span className="text-gradient">Makkah &amp; Medinah</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For Muslims around the world, property near the Holy Mosques is personal.
              The decision still needs clear numbers, local context, and proper checks.
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
            A meaningful purchase still deserves a disciplined process.
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you want a small apartment for Umrah visits, a family base, or a long-term
            asset, I will help you evaluate the opportunity before you commit.
          </p>
          <WhatsAppButton variant="white" size="lg">
            Discuss Your Property Goals
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
