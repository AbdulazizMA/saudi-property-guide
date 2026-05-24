'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare, CheckCircle } from 'lucide-react'
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Get Started Today</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Review Property<br />
            <span className="text-saudi-gold">in Makkah or Medinah?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Send your city, budget, timeline, intended use, and buyer profile.
            I will help you understand what is realistic and what needs checking first.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Free Consultation', 'No Obligation', 'Response Within Hours'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-4 h-4 text-saudi-gold" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton variant="white" size="lg">
              Chat on WhatsApp Now
            </WhatsAppButton>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 bg-saudi-gold hover:bg-saudi-gold-dark text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              <span>Send Property Brief</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact Methods */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <a href="tel:+966561056054" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+966 56 105 6054</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>English &amp; Arabic</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
