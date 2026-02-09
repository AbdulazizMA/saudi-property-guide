'use client'

import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Tell me about your goals, budget, preferred city, and timeline. I will give you an honest assessment of what is achievable.',
  },
  {
    number: '02',
    title: 'Property Search',
    description: 'I curate a selection of properties matching your criteria. You review them via video tours and photos from anywhere in the world.',
  },
  {
    number: '03',
    title: 'Negotiation & Purchase',
    description: 'I negotiate the best price, handle all legal paperwork, coordinate with lawyers, and guide you through the purchase process.',
  },
  {
    number: '04',
    title: 'Keys in Your Hand',
    description: 'Your property is registered in your name. I can also manage it for you if you live abroad — tenants, maintenance, everything.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-saudi-green/70 mb-4">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From First Call to <span className="text-gradient">Keys in Hand</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process. No surprises, no hidden steps.
            Here is exactly how we work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-saudi-gold/40 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-saudi-green rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Ready to start with Step 1?</p>
          <WhatsAppButton size="lg">
            Book Your Free Consultation
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
