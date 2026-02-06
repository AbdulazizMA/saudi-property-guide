import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppButton'

const footerLinks = {
  locations: [
    { name: 'Makkah Properties', href: '/makkah/' },
    { name: 'Medinah Properties', href: '/medinah/' },
  ],
  services: [
    { name: 'Property Search', href: '/services/' },
    { name: 'Property Management', href: '/services/' },
  ],
  resources: [
    { name: 'Buying Guide', href: '/guide/' },
    { name: 'About Us', href: '/about/' },
    { name: 'Contact', href: '/contact/' },
  ],
}

export default function Footer() {
  const encodedMessage = encodeURIComponent(siteConfig.contact.whatsappMessage)
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`

  return (
    <footer className="bg-[linear-gradient(135deg,_#142826_0%,_#1F3A38_50%,_#2B3E49_100%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-saudi-gold rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path d="M8 28 Q8 12 20 8 Q32 12 32 28 Z" className="fill-saudi-green-dark" />
                  <circle cx="20" cy="10" r="3" className="fill-white" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-xl block">
                  Haramain <span className="text-saudi-gold">Properties</span>
                </span>
                <span className="text-xs text-gray-400">Real Estate in the Holy Cities</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Helping Muslims worldwide own property in Makkah and Medinah.
              Your trusted partner for homes near the Holy Mosques.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Languages:</span>
              <span className="text-white">English & Arabic</span>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-saudi-gold">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mb-4 mt-8 text-saudi-gold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-saudi-gold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-saudi-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saudi-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Makkah, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-saudi-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saudi-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat Now</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Haramain Properties. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Abdulaziz Mofleh, CEO & Founder | Licensed Real Estate Agent — Makkah, Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  )
}
