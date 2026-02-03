import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us | SaudiPropertyGuide.com',
  description: 'Book a consultation or get in touch with our Saudi real estate experts. We help foreigners buy property in Saudi Arabia.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`
  },
  {
    icon: MapPin,
    title: 'Office',
    value: siteConfig.contact.address
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: siteConfig.contact.hours
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-saudi-gold">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your Saudi property journey? Book a consultation or reach out 
            to our team. We're here to help you every step of the way.
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
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-200 mb-8">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saudi-gold transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">{item.title}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={item.title}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">{item.title}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-300 mb-4">Prefer instant messaging?</p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Book a <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your complimentary 15-minute consultation. Choose a time that works for you, 
              and we'll discuss your property goals and how we can help.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {/* Calendly Inline Embed Placeholder */}
            <div className="bg-white rounded-xl shadow-inner p-8 text-center min-h-[600px] flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-saudi-green/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-10 h-10 text-saudi-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Calendar Integration</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                To enable booking, integrate your Calendly or Cal.com account here. 
                Replace this section with your scheduling widget.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Set Up Calendly</span>
                </a>
                
                <p className="text-sm text-gray-500">
                  Or integrate with{' '}
                  <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-saudi-green hover:underline">
                    Cal.com
                  </a>
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left max-w-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Integration Code Example:</p>
                <pre className="text-xs text-gray-600 overflow-x-auto">
{`// Install: npm install react-calendly

import { InlineWidget } from "react-calendly";

<InlineWidget 
  url="https://calendly.com/YOUR_USERNAME"
  styles={{ height: '600px' }}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
