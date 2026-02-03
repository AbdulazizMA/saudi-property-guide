'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-saudi-green-dark/95 via-saudi-green/80 to-saudi-green-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-saudi-gold rounded-full animate-pulse" />
              <span className="text-saudi-gold font-medium text-sm">Vision 2030: New pathways for foreign buyers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Gateway to<br />
              <span className="text-saudi-gold">Saudi Real Estate</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
              Recent reforms have opened pathways for foreign ownership in designated areas.
              Our experts guide you through eligibility, due diligence, and every step of a confident purchase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact/"
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/guide/"
                className="btn-outline border-white text-white hover:bg-white hover:text-saudi-green flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>View Buying Guide</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">Local Expertise</p>
                  <p className="text-sm text-gray-300">On-the-ground guidance</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">Clear Process</p>
                  <p className="text-sm text-gray-300">Transparent milestones</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">Multilingual Team</p>
                  <p className="text-sm text-gray-300">English and Arabic support</p>
                </div>
              </div>
            </div>
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
