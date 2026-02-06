'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-[linear-gradient(120deg,_#1F3A38_0%,_#2B3E49_55%,_#3C2F22_100%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Get Started</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own Property<br />
            <span className="text-saudi-gold">Near the Holy Mosques?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you are looking for a home near the Kaaba, an investment in Medinah,
            or a place for your family to return to — let us make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton variant="white" size="lg">
              Start a Conversation
            </WhatsAppButton>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 bg-saudi-gold hover:bg-saudi-gold-dark text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Free initial consultation — available in English and Arabic
          </p>
        </motion.div>
      </div>
    </section>
  )
}
