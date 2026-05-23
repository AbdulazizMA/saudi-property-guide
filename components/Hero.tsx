'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Compass, FileCheck2, MapPinned, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

const proofPoints = [
  { icon: ShieldCheck, label: 'Licensed Saudi real estate guidance' },
  { icon: MapPinned, label: 'Makkah-based neighborhood insight' },
  { icon: FileCheck2, label: 'Documented buying process' },
]

const buyingSteps = [
  ['01', 'Clarify your budget, city, timeline, and ownership needs.'],
  ['02', 'Shortlist realistic options with photos, video, and local context.'],
  ['03', 'Check documents, negotiate terms, and coordinate registration.'],
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10201e]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1800&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(16,32,30,0.96)_0%,_rgba(16,32,30,0.82)_42%,_rgba(16,32,30,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(16,32,30,0.82)_0%,_transparent_42%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0 max-w-3xl text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Compass className="h-4 w-4 text-saudi-gold" />
              <span className="text-sm font-semibold tracking-wide text-white/90">For buyers abroad seeking the Holy Cities</span>
            </div>

            <h1 className="mb-6 max-w-[22rem] break-words font-display text-4xl font-bold leading-[1.02] text-white sm:max-w-full sm:text-6xl lg:text-7xl">
              Holy Cities property, handled from the ground.
            </h1>
            <p className="mb-8 max-w-[22rem] text-base leading-7 text-white/85 sm:max-w-2xl sm:text-xl sm:leading-8">
              Haramain Properties helps Muslim families buy and manage real estate
              in Makkah and Medinah with local representation, documented steps,
              and direct access to Abdulaziz Mofleh.
            </p>

            <div className="mb-9 grid max-w-2xl gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/12 bg-white/10 p-4 backdrop-blur-md">
                  <item.icon className="mb-3 h-5 w-5 text-saudi-gold" />
                  <p className="text-sm font-semibold leading-5 text-white">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:justify-start">
              <WhatsAppButton variant="primary" size="lg">
                Discuss My Property Goals
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-saudi-green"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="text-sm text-white/70">Free first conversation. English and Arabic. Based in Makkah.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Buying path</p>
                  <h2 className="font-display text-3xl font-semibold leading-tight text-white">
                    Search, verify, negotiate, register.
                  </h2>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-saudi-gold/20">
                  <CheckCircle className="h-6 w-6 text-saudi-gold" />
                </div>
              </div>

              <div className="space-y-4">
                {buyingSteps.map(([number, text]) => (
                  <div key={number} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="text-sm font-bold text-saudi-gold">{number}</span>
                    <p className="text-sm leading-6 text-white/78">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/12 pt-5">
                <p className="text-sm leading-6 text-white/72">
                  Built for overseas buyers who need a trusted person locally,
                  not another listing page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <div className="flex h-11 w-7 justify-center rounded-full border border-white/45">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  )
}
