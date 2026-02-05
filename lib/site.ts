export const siteConfig = {
  // Company Branding
  name: 'Haramain Properties',
  siteName: 'Haramain Properties | Real Estate in Makkah & Medinah',
  tagline: 'Your Trusted Partner for Property Near the Holy Mosques',
  domain: 'haramainproperties.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://haramainproperties.com',

  // CEO/Owner Profile
  owner: {
    name: 'Abdulaziz Mofleh',
    title: 'CEO & Founder',
    credentials: 'Licensed Real Estate Agent, BS',
    shortBio: 'Makkah-born, US-educated licensed agent helping Muslims worldwide own property near the Holy Mosques.',
    fullBio: 'Born and raised in Makkah, just minutes from Masjid al-Haram. After completing my Bachelor\'s degree in the United States, I returned home with a unique perspective — understanding both Western expectations and the local Saudi market. I founded Haramain Properties to help Muslim families from around the world turn their dream of owning property near the Haramain into reality.',
    languages: ['English', 'Arabic'],
  },

  contact: {
    email: 'masakinkuday@gmail.com',
    phone: '+966 56 105 6054',
    whatsapp: '966561056054',
    whatsappLink: 'https://wa.me/966561056054',
    whatsappMessage: "Assalamu Alaikum Abdulaziz, I found Haramain Properties online and I'm interested in learning about buying property in Makkah or Medinah. Could we discuss my options?",
    address: 'Makkah, Saudi Arabia',
    hours: 'Available by appointment',
  },

  // Focus Cities
  cities: {
    primary: ['Makkah', 'Medinah'],
    description: 'Properties near Masjid al-Haram & Masjid an-Nabawi',
  },

  // Services
  services: [
    {
      id: 'property-search',
      name: 'Property Search & Acquisition',
      shortDescription: 'Find and purchase your ideal property in Makkah or Medinah',
      description: 'We help you find and purchase your ideal property in Makkah or Medinah. From initial search to final registration, we handle everything while you\'re overseas.',
      features: [
        'Personalized property matching',
        'Virtual or in-person viewings',
        'Price negotiation on your behalf',
        'Full documentation support',
        'Title verification',
        'Registration assistance',
      ],
    },
    {
      id: 'property-management',
      name: 'Property Management',
      shortDescription: 'Peace of mind for overseas property owners',
      description: 'Living overseas? We manage your Makkah or Medinah property so you don\'t have to worry. Ideal for rental properties or second homes.',
      features: [
        'Tenant sourcing and screening',
        'Rent collection',
        'Maintenance coordination',
        'Regular property inspections',
        'Monthly reporting',
        'Emergency response',
      ],
    },
  ],

  social: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  },

  // SEO Keywords
  keywords: [
    'buy property in Makkah',
    'Makkah real estate for foreigners',
    'own property near Haram',
    'Medinah property investment',
    'property near Prophet\'s Mosque',
    'Saudi Arabia property consultant',
    'foreign ownership Saudi real estate',
    'halal property investment Saudi',
    'Muslim property ownership Makkah',
    'how to buy property in Makkah as a foreigner',
    'Makkah apartment for sale',
    'Medinah real estate agent',
    'Haramain Properties',
  ],
}
