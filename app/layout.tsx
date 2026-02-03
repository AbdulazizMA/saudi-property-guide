import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site'

const siteUrl = new URL(siteConfig.siteUrl)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'SaudiPropertyGuide | Real Estate Consultation for Foreign Buyers',
    template: '%s | SaudiPropertyGuide',
  },
  description: 'Clear, compliant guidance for foreign buyers exploring Saudi property opportunities.',
  keywords: [
    'Saudi Arabia real estate',
    'foreign property ownership',
    'Riyadh property',
    'Jeddah real estate',
    'property consultation',
    'expat housing Saudi Arabia',
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: 'SaudiPropertyGuide | Real Estate for Foreign Buyers',
    description: 'Guidance, due diligence, and local expertise for buying property in Saudi Arabia.',
    type: 'website',
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaudiPropertyGuide | Real Estate for Foreign Buyers',
    description: 'Guidance, due diligence, and local expertise for buying property in Saudi Arabia.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
