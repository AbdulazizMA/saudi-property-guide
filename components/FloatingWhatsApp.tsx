'use client'

import { siteConfig } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppButton'

export default function FloatingWhatsApp() {
  const encodedMessage = encodeURIComponent(siteConfig.contact.whatsappMessage)
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat with Abdulaziz on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Abdulaziz
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  )
}
