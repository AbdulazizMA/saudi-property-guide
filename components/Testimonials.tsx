'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mohammed R.',
    location: 'Toronto, Canada',
    initials: 'MR',
    text: 'I was nervous about buying property overseas, but Abdulaziz walked me through every step. He found us a beautiful apartment in Aziziyah, just 10 minutes from the Haram. The entire process was smooth and transparent.',
    service: 'Property Acquisition',
  },
  {
    name: 'Fatima K.',
    location: 'Birmingham, UK',
    initials: 'FK',
    text: 'We wanted a place for our family to stay during Hajj and Umrah. Abdulaziz understood exactly what we needed and found options within our budget. His local knowledge is invaluable.',
    service: 'Property Search',
  },
  {
    name: 'Omar S.',
    location: 'Houston, USA',
    initials: 'OS',
    text: 'I own a rental property in Makkah and Abdulaziz manages everything. Monthly reports, tenant screening, maintenance — all handled. I get my rental income without any headaches.',
    service: 'Property Management',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">Client Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Families <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from Muslims around the world who turned their dream of owning
            property near the Haramain into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#E7D5B7] shadow-[0_12px_28px_rgba(21,40,38,0.07)] flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-saudi-gold fill-saudi-gold" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-saudi-green/20 mb-3" />

              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-saudi-green/10 flex items-center justify-center text-saudi-green font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-saudi-green/10 text-saudi-green px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
