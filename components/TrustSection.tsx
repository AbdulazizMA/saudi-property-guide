'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Languages, FileCheck, Handshake, GraduationCap } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppButton'

const trustFactors = [
  {
    icon: Shield,
    title: 'Licensed Agency',
    description: 'Fully authorized to conduct real estate transactions in the Kingdom of Saudi Arabia.',
  },
  {
    icon: MapPin,
    title: 'Makkah Born & Based',
    description: 'I grew up here — I know every neighborhood, every opportunity, and every risk to avoid.',
  },
  {
    icon: GraduationCap,
    title: 'US-Educated',
    description: "Bachelor of Science from an American university. I understand Western expectations.",
  },
  {
    icon: Languages,
    title: 'Bilingual Service',
    description: 'Fluent in English and Arabic — communicate in whichever language feels natural.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Process',
    description: 'Clear steps, honest pricing, full documentation. No hidden fees or surprises.',
  },
  {
    icon: Handshake,
    title: 'Personal Attention',
    description: "You work directly with me — not a call center. Every client gets my personal focus.",
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
          <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Families Worldwide Trust{' '}
            <span className="text-gradient">Haramain Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buying property abroad is a big decision. You need a local you can trust
            who understands both your world and the Saudi market.
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

        {/* Direct Communication Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7D5B7] shadow-[0_12px_28px_rgba(21,40,38,0.07)] flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">Direct Communication — No Middlemen</h3>
            <p className="text-gray-600">
              When you message Haramain Properties, you&apos;re talking directly to Abdulaziz.
              No call centers, no delays, no runaround. Just honest, personal service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
