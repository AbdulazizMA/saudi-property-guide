'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Languages, MessageCircle, FileCheck, Handshake } from 'lucide-react'

const trustFactors = [
  {
    icon: Shield,
    title: 'Licensed Agency',
    description: 'Fully licensed and authorized to conduct real estate transactions in Saudi Arabia',
  },
  {
    icon: MapPin,
    title: 'Makkah Based',
    description: 'Our office is in Makkah - we know every neighborhood and opportunity in the Holy Cities',
  },
  {
    icon: Languages,
    title: 'Bilingual',
    description: 'We communicate in English and Arabic - whatever works best for you',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Talk directly with us via WhatsApp - no middlemen, no call centers',
  },
  {
    icon: FileCheck,
    title: 'Transparent Process',
    description: 'Clear steps, honest pricing, no hidden fees - we explain everything upfront',
  },
  {
    icon: Handshake,
    title: 'Full Support',
    description: 'From property search to final paperwork - we handle everything while you&apos;re overseas',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Trust <span className="text-gradient">Haramain Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buying property from abroad requires trust. Here&apos;s why families worldwide choose us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-saudi-green/10 rounded-xl flex items-center justify-center mb-4">
                <factor.icon className="w-6 h-6 text-saudi-green" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
