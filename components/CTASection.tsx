'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

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
            Ready to Start Your<br />
            <span className="text-saudi-gold">Saudi Property Journey?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Book your free 15-minute consultation today and discover how we can help 
            you navigate the Saudi real estate market with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-10 py-4"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="https://wa.me/966501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-saudi-green font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-300">
            No commitment required. Available in English, Arabic, and French.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
