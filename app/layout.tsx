import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { siteConfig } from '@/lib/site'

const siteUrl = new URL(siteConfig.siteUrl)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Haramain Properties | Makkah & Medinah Buyer Representation',
    template: '%s | Haramain Properties',
  },
  description: 'Local buyer representation for serious overseas clients exploring property in Makkah and Medinah. Led by Abdulaziz Mofleh, a Makkah-based licensed real estate agent.',
  keywords: siteConfig.keywords,
  authors: [{ name: 'Haramain Properties' }],
  creator: 'Haramain Properties',
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      'en': siteConfig.siteUrl,
      'ar': `${siteConfig.siteUrl}/ar`,
      'ur': `${siteConfig.siteUrl}/ur`,
    },
  },
  openGraph: {
    title: 'Haramain Properties | Makkah & Medinah Buyer Representation',
    description: 'A clearer way to evaluate Makkah and Medinah property from abroad: local shortlisting, verification, negotiation, and owner support.',
    type: 'website',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565552684305-7e8ce3cc17d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Haramain Properties - Makkah & Medinah Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haramain Properties | Makkah & Medinah Buyer Representation',
    description: 'Local property guidance for serious buyers exploring Makkah and Medinah from abroad.',
    images: ['https://images.unsplash.com/photo-1565552684305-7e8ce3cc17d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': `${siteConfig.siteUrl}/#organization`,
      name: 'Haramain Properties',
      description: 'Real estate buyer representation and owner support for Makkah and Medinah property clients',
      url: siteConfig.siteUrl,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      founder: {
        '@type': 'Person',
        name: 'Abdulaziz Mofleh',
        jobTitle: 'CEO & Founder',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Makkah',
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.4225,
        longitude: 39.8262,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Makkah',
          sameAs: 'https://en.wikipedia.org/wiki/Mecca',
        },
        {
          '@type': 'City',
          name: 'Medinah',
          sameAs: 'https://en.wikipedia.org/wiki/Medina',
        },
      ],
      knowsLanguage: ['en', 'ar', 'ur'],
      priceRange: '$$',
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: 'Abdulaziz Mofleh',
      jobTitle: 'CEO & Founder of Haramain Properties',
      description: 'Makkah-based real estate professional helping international buyers evaluate property in Makkah and Medinah',
      knowsLanguage: ['en', 'ar', 'ur'],
      workLocation: {
        '@type': 'Place',
        name: 'Makkah, Saudi Arabia',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.siteName,
      publisher: {
        '@id': `${siteConfig.siteUrl}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
