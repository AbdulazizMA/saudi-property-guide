'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_#142826_0%,_#1F3A38_45%,_#2B3E49_100%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F9F2E6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F9F2E6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="900" fill="url(#heroGlow)" />
          {[
            [140, 120], [260, 80], [380, 160], [560, 110], [720, 150],
            [900, 120], [1080, 90], [1220, 170], [1320, 110]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="#E7D5B7" opacity="0.8" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-saudi-gold font-semibold tracking-wide">Assalamu Alaikum</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Your Dream Home Near{' '}
              <span className="text-saudi-gold">Masjid al-Haram</span>{' '}
              Starts Here
            </h1>
            <p className="text-xl sm:text-2xl text-slate-100 mb-4 max-w-2xl">
              Makkah-based licensed agent helping Muslim families worldwide
              buy, manage, and protect real estate in the Holy Cities.
            </p>
            <p className="text-base text-white/70 mb-6 max-w-2xl">
              Whether you live in London, New York, Toronto, or anywhere else &mdash;
              I handle everything on the ground so you don&apos;t have to.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Licensed Agent', 'Makkah Based', 'English & Arabic', 'Free Consultation'].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-saudi-gold" />
                  <span className="text-white text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-6">
              <WhatsAppButton variant="primary" size="lg">
                Chat on WhatsApp Now
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="border border-white/60 text-white hover:bg-white hover:text-saudi-green flex items-center justify-center space-x-2 py-4 px-8 rounded-lg text-lg font-semibold transition-all"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-sm text-white/70">No obligation &middot; Response within hours &middot; Available in English &amp; Arabic</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Social Proof Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-saudi-gold fill-saudi-gold" />
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-4">
                &ldquo;Abdulaziz made buying property from overseas feel effortless.
                He handled everything — from finding the right apartment near the Haram
                to completing all the paperwork. Truly trustworthy.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-saudi-gold/30 flex items-center justify-center text-white font-bold text-sm">
                  AH
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Ahmed H.</p>
                  <p className="text-white/60 text-xs">Property Buyer from London, UK</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '100%', label: 'Personalized Service' },
                { value: 'Hours', label: 'Response Time' },
                { value: 'End-to-End', label: 'Full Support' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <p className="text-saudi-gold font-bold text-lg">{stat.value}</p>
                  <p className="text-white/70 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <div className="w-7 h-11 border border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
