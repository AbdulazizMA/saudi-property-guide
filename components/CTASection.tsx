'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-saudi-green to-saudi-green-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own Property<br />
            <span className="text-saudi-gold">Near the Holy Mosques?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking for a home near the Kaaba, an investment in Medinah,
            or a place for your family to return to — let&apos;s make it happen.
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

          <p className="mt-8 text-sm text-gray-300">
            Free initial consultation — available in English and Arabic
          </p>
        </motion.div>
      </div>
    </section>
  )
}
