import { Metadata } from 'next'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton, { WhatsAppIcon } from '@/components/WhatsAppButton'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Abdulaziz Mofleh | Makkah & Medinah Real Estate',
  description: 'Get in touch with Abdulaziz Mofleh for property inquiries in Makkah and Medinah. WhatsApp, email, or book a consultation. Available in English and Arabic.',
}

export default function ContactPage() {
  const encodedMessage = encodeURIComponent(siteConfig.contact.whatsappMessage)
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGeo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGeo)" />
          </svg>
          <div className="absolute top-1/3 -left-20 w-80 h-80 bg-saudi-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-saudi-gold">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to explore property near the Holy Mosques? Reach out and let&apos;s discuss
            your goals. Free initial consultation — no obligation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-saudi-green rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">Contact Abdulaziz</h2>
                <p className="text-gray-200 mb-8">
                  WhatsApp is the fastest way to reach me. I respond to all inquiries personally.
                </p>

                <div className="space-y-6">
                  {/* WhatsApp - Primary */}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-300 font-semibold">WhatsApp (Fastest)</p>
                      <p className="font-medium">{siteConfig.contact.phone}</p>
                      <p className="text-xs text-gray-300 mt-1">Typically reply within a few hours</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saudi-gold transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="font-medium">{siteConfig.contact.email}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saudi-gold transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <p className="font-medium">{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Location</p>
                      <p className="font-medium">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Languages</p>
                      <p className="font-medium">English & Arabic</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <WhatsAppButton
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                  >
                    Chat with Abdulaziz
                  </WhatsAppButton>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                  For a faster response, use WhatsApp.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Common Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What&apos;s the best way to reach you?</h3>
              <p className="text-gray-600 text-sm">
                WhatsApp is the fastest. I typically respond within a few hours.
                You can also email me for detailed inquiries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What time zone are you in?</h3>
              <p className="text-gray-600 text-sm">
                I&apos;m based in Makkah, Saudi Arabia (AST, UTC+3).
                I&apos;m flexible with scheduling calls across time zones.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Is the initial consultation free?</h3>
              <p className="text-gray-600 text-sm">
                Yes. The first consultation to discuss your needs and goals is completely free
                with no obligation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can you help if I&apos;m overseas?</h3>
              <p className="text-gray-600 text-sm">
                Most of my clients are based abroad. I handle everything locally in Makkah
                while keeping you informed via WhatsApp, email, and video calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-6">
            I speak English and Arabic — reach out in whichever language you prefer.
          </p>
          <p className="text-gray-500 text-sm">
            Abdulaziz Mofleh | Licensed Real Estate Agent | Makkah, Saudi Arabia
          </p>
        </div>
      </section>
    </main>
  )
}
