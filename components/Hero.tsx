'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Makkah + Madinah (Illustrated, no photos) */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="makkahBg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0B2E1F" />
              <stop offset="60%" stopColor="#0F4D34" />
              <stop offset="100%" stopColor="#0C3B29" />
            </linearGradient>
            <linearGradient id="madinahBg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0B2E1F" />
              <stop offset="55%" stopColor="#0F4D34" />
              <stop offset="100%" stopColor="#9C7A2B" />
            </linearGradient>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background halves */}
          <rect x="0" y="0" width="720" height="900" fill="url(#makkahBg)" />
          <rect x="720" y="0" width="720" height="900" fill="url(#madinahBg)" />

          {/* Subtle glow */}
          <rect x="0" y="0" width="1440" height="420" fill="url(#glow)" />

          {/* Stars */}
          {[
            [120, 120], [210, 80], [360, 140], [540, 100], [660, 160],
            [840, 120], [980, 90], [1140, 150], [1280, 110], [1320, 70]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2" fill="#F4D98A" opacity="0.8" />
          ))}

          {/* Makkah silhouette */}
          <g transform="translate(60,420)" fill="#0A2318" opacity="0.85">
            <rect x="0" y="260" width="600" height="120" />
            <rect x="40" y="200" width="90" height="180" />
            <rect x="160" y="180" width="120" height="200" />
            <rect x="320" y="210" width="90" height="170" />
            <rect x="450" y="190" width="100" height="190" />
            <circle cx="220" cy="165" r="55" />
            <circle cx="470" cy="175" r="40" />
            <rect x="210" y="70" width="20" height="120" />
            <rect x="465" y="80" width="18" height="110" />
            <polygon points="220,40 230,70 210,70" />
            <polygon points="474,55 483,80 465,80" />
          </g>

          {/* Madinah silhouette */}
          <g transform="translate(820,420)" fill="#0A2318" opacity="0.85">
            <rect x="0" y="260" width="560" height="120" />
            <rect x="30" y="210" width="110" height="170" />
            <rect x="180" y="190" width="120" height="190" />
            <rect x="360" y="210" width="90" height="170" />
            <circle cx="240" cy="170" r="50" />
            <circle cx="90" cy="185" r="40" />
            <rect x="80" y="70" width="18" height="130" />
            <rect x="235" y="60" width="20" height="140" />
            <rect x="395" y="90" width="18" height="120" />
            <polygon points="89,40 99,70 79,70" />
            <polygon points="245,30 255,60 235,60" />
            <polygon points="404,60 413,90 395,90" />
          </g>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-r from-saudi-green-dark/70 via-transparent to-saudi-green-dark/70" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/20 hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Main Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-saudi-gold font-semibold">Assalamu Alaikum</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Own Property Near the{' '}
              <span className="text-saudi-gold">Holy Mosques</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 mb-6">
              Makkah & Medinah Real Estate for Muslims Worldwide
            </p>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Licensed, Makkah-based agent helping you find, buy, and manage property
              near Masjid al-Haram and Masjid an-Nabawi — even while you&apos;re overseas.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Licensed Agent', 'Makkah Based', 'English & Arabic'].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-saudi-gold" />
                  <span className="text-white text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton variant="primary" size="lg">
                Start a Conversation
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="border-2 border-white text-white hover:bg-white hover:text-saudi-green flex items-center justify-center space-x-2 py-4 px-8 rounded-lg text-lg font-semibold transition-all"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Free consultation note */}
            <p className="text-gray-400 text-sm">
              Free initial consultation — no obligation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
