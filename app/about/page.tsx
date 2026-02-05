import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, GraduationCap, MapPin, Globe, Award, ArrowRight } from 'lucide-react'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us | Haramain Properties - Meet Our Founder',
  description: 'Meet Abdulaziz Mofleh, CEO of Haramain Properties - born in Makkah, US-educated, licensed real estate agent helping Muslims own property near the Holy Mosques.',
}

const credentials = [
  {
    icon: Award,
    title: 'Licensed Real Estate Agent',
    description: 'Fully licensed and authorized to conduct real estate transactions in Saudi Arabia',
  },
  {
    icon: MapPin,
    title: 'Makkah Native',
    description: 'Born and raised in Makkah - I know every neighborhood, every street, every opportunity',
  },
  {
    icon: GraduationCap,
    title: 'US-Educated',
    description: 'Bachelor of Science from an American university - I understand Western expectations',
  },
  {
    icon: Globe,
    title: 'Bilingual',
    description: 'Fluent in English and Arabic - communicate in your preferred language',
  },
]

const whyWorkWithMe = [
  'Personal service - you work directly with me, not a team',
  'Local expertise - I grew up here and know the market intimately',
  'International perspective - my US education helps me bridge cultural gaps',
  'Full support - I handle everything while you\'re overseas',
  'Trust and transparency - honest advice, no pressure tactics',
  'Flexible communication - WhatsApp, email, video calls at your convenience',
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutGeo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutGeo)" />
          </svg>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-saudi-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-saudi-gold">Haramain Properties</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Founded by Abdulaziz Mofleh - Makkah local, US-educated, licensed real estate agent
            helping Muslims worldwide own property near the Holy Mosques.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I was born and raised in Makkah, just minutes from the Holy Sites.
                Growing up, I witnessed countless visitors from around the world
                dreaming of owning a home in this blessed city.
              </p>
              <p>
                After completing my Bachelor&apos;s degree in the United States, I returned
                to Makkah with a unique perspective. I understand both the Western
                mindset and the local Saudi market. I know what it&apos;s like to navigate
                a foreign system, and I know Makkah like the back of my hand.
              </p>
              <p>
                Today, I help Muslim families from around the world turn their dream
                of owning property near the Haramain into reality. Whether you&apos;re in
                London, New York, Toronto, or anywhere else - I bridge the gap between
                you and your Holy Cities property.
              </p>
              <p className="font-semibold text-gray-900">
                When you work with me, you&apos;re working with someone who genuinely
                understands your dream and has the local expertise to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Credentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-saudi-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-saudi-green" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Work With <span className="text-gradient">Me</span>?
              </h2>
              <div className="space-y-4">
                {whyWorkWithMe.map((reason, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-saudi-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-saudi-green to-saudi-green-dark rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">My Promise to You</h3>
              <p className="text-gray-200 mb-6">
                I treat every client like family. Your dream of owning property near
                the Haramain is sacred to me. I will be honest, transparent, and work
                tirelessly to find you the right property at the right price.
              </p>
              <p className="text-gray-200 mb-8">
                If I don&apos;t think a property is right for you, I&apos;ll tell you. If I think
                you&apos;re overpaying, I&apos;ll tell you. Your success is my success.
              </p>
              <WhatsAppButton
                variant="white"
                size="lg"
                className="w-full justify-center"
                message="Assalamu Alaikum Abdulaziz, I read about your background on the Haramain Properties website. I'd like to discuss buying property in Makkah or Medinah."
              >
                Let&apos;s Talk About Your Goals
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you have questions or are ready to start looking, I&apos;m here to help.
            Reach out via WhatsApp for the fastest response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton size="lg">
              Chat with Abdulaziz
            </WhatsAppButton>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
