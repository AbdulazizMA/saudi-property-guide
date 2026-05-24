'use client'

import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

const steps = [
  {
    number: '01',
    title: 'Buyer Brief',
    description: 'Tell me your city, budget, timeline, intended use, and buyer profile. I will give you an honest first assessment.',
  },
  {
    number: '02',
    title: 'Market Shortlist',
    description: 'I filter properties against your brief, access needs, quality expectations, and local pricing context.',
  },
  {
    number: '03',
    title: 'Checks & Negotiation',
    description: 'I negotiate clearly and coordinate document, title, contract, and eligibility checks with the right local professionals.',
  },
  {
    number: '04',
    title: 'Handover & Owner Support',
    description: 'After completion, I can coordinate local owner support, inspections, tenant matters, and maintenance if you live abroad.',
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
            From First Brief to <span className="text-gradient">Clear Decision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured process for overseas buyers who need local clarity before committing.
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
          <p className="text-gray-600 mb-6">Ready to start with a clear buyer brief?</p>
          <WhatsAppButton size="lg">
            Send Your Property Brief
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
