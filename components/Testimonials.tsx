'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Business Executive, USA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    content: 'SaudiPropertyGuide made my investment in Riyadh seamless. Their knowledge of local regulations and market conditions helped me secure an excellent apartment with great ROI.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Entrepreneur, Singapore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    content: 'As a foreign investor, I was initially hesitant about buying property in Saudi Arabia. The team guided me through every step, from legal requirements to final registration.',
    rating: 5
  },
  {
    name: 'Ahmed Hassan',
    role: 'Doctor, UK',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    content: 'Moving back to Saudi after years abroad, I needed help finding a family home in Jeddah. They understood exactly what we needed and found us the perfect villa.',
    rating: 5
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-saudi-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success <span className="text-saudi-gold">Stories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from international investors who have successfully navigated 
              the Saudi real estate market with our guidance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-saudi-gold fill-saudi-gold" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-saudi-gold/30" />
                <p className="text-gray-200 relative z-10 italic">{testimonial.content}</p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-saudi-gold"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
