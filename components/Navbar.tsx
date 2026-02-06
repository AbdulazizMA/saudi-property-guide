'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppButton'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Makkah', href: '/makkah/' },
  { name: 'Medinah', href: '/medinah/' },
  { name: 'Services', href: '/services/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const encodedMessage = encodeURIComponent(siteConfig.contact.whatsappMessage)
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-saudi-green rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <path d="M8 28 Q8 12 20 8 Q32 12 32 28 Z" className="fill-white" />
                <circle cx="20" cy="10" r="3" className="fill-saudi-gold" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-saudi-green' : 'text-white'
                }`}>
                Haramain <span className="text-saudi-gold">Properties</span>
              </span>
              <span className={`text-xs transition-colors ${scrolled ? 'text-gray-500' : 'text-gray-300'
                }`}>
                Real Estate in Makkah & Medinah
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-saudi-gold ${scrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-2.5 px-5 rounded-lg transition-colors flex items-center space-x-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-saudi-green hover:bg-gray-50 rounded-md font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1da851] text-white w-full text-center mt-4 py-3 rounded-lg font-semibold"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
