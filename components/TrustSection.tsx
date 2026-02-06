'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Languages, MessageCircle, FileCheck, Handshake } from 'lucide-react'

const trustFactors = [
  {
    icon: Shield,
    title: 'Licensed Agency',
    description: 'Fully authorized to conduct real estate transactions in Saudi Arabia.',
  },
  {
    icon: MapPin,
    title: 'Makkah Based',
    description: 'Our team lives here — we know each neighborhood and opportunity.',
  },
  {
    icon: Languages,
    title: 'Bilingual',
    description: 'Communicate in English or Arabic, whatever feels natural.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Talk directly with us on WhatsApp — no call centers, no delays.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Process',
    description: 'Clear steps, honest pricing, and full documentation guidance.',
  },
  {
    icon: Handshake,
    title: 'Full Support',
    description: 'From search to paperwork — we handle it while you are overseas.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">Trust & Clarity</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Trust <span className="text-gradient">Haramain Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buying property from abroad requires transparency and a team on the ground.
            Here is why families worldwide choose us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E7D5B7] shadow-[0_12px_28px_rgba(21,40,38,0.07)]"
            >
              <div className="w-12 h-12 bg-saudi-green/10 rounded-xl flex items-center justify-center mb-4">
                <factor.icon className="w-6 h-6 text-saudi-green" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
