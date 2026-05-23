'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Languages, FileCheck, Handshake, GraduationCap } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppButton'

const trustFactors = [
  {
    icon: Shield,
    title: 'Licensed local guidance',
    description: 'Support from someone on the ground who knows how Saudi real estate transactions actually move.',
  },
  {
    icon: MapPin,
    title: 'Makkah born and based',
    description: 'Real neighborhood context, not just listing photos or generic online advice.',
  },
  {
    icon: GraduationCap,
    title: 'US-Educated',
    description: 'Clear communication for buyers abroad who expect structure, updates, and documentation.',
  },
  {
    icon: Languages,
    title: 'Bilingual Service',
    description: 'English and Arabic support for buyers, family members, sellers, and local offices.',
  },
  {
    icon: FileCheck,
    title: 'Document-first process',
    description: 'Every serious option is handled with attention to records, eligibility, and transaction steps.',
  },
  {
    icon: Handshake,
    title: 'Direct relationship',
    description: 'You work with Abdulaziz directly, so decisions do not get lost between agents or call centers.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-[#F7F4EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-saudi-green/70">Why Haramain Properties</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            For families who need more than a property listing.
          </h2>
          <p className="text-lg text-gray-600">
            Buying in Makkah or Medinah from abroad requires local judgment,
            clean communication, and someone who can separate real opportunities from noise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E7D5B7] shadow-[0_12px_28px_rgba(21,40,38,0.06)]"
            >
              <div className="w-12 h-12 bg-saudi-green/10 rounded-xl flex items-center justify-center mb-4">
                <factor.icon className="w-6 h-6 text-saudi-green" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-6 rounded-2xl border border-[#E7D5B7] bg-[#10201e] p-6 shadow-[0_12px_28px_rgba(21,40,38,0.1)] sm:flex-row sm:items-center sm:p-8"
        >
          <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white text-lg mb-1">Direct communication, not a sales desk</h3>
            <p className="text-white/70">
              When you message Haramain Properties, you reach Abdulaziz directly.
              That keeps the conversation practical, private, and accountable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
