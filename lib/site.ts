export const siteConfig = {
  // Company Branding
  name: 'Haramain Properties',
  siteName: 'Haramain Properties | Makkah & Medinah Buyer Representation',
  tagline: 'Local Buyer Representation for Makkah and Medinah Property',
  domain: 'haramainproperties.site',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.haramainproperties.site',

  // CEO/Owner Profile
  owner: {
    name: 'Abdulaziz Mofleh',
    title: 'CEO & Founder',
    credentials: 'Licensed Real Estate Agent, BS',
    shortBio: 'Makkah-born, US-educated licensed agent representing serious buyers in Makkah and Medinah.',
    fullBio: 'Born and raised in Makkah, just minutes from Masjid al-Haram. After completing my Bachelor\'s degree in the United States, I returned home with a practical understanding of both international buyer expectations and the local Saudi market. I founded Haramain Properties to give families abroad a clear, local, documented way to evaluate property in Makkah and Medinah.',
    languages: ['English', 'Arabic'],
  },

  contact: {
    email: 'masakinkuday@gmail.com',
    phone: '+966 56 105 6054',
    whatsapp: '966561056054',
    whatsappLink: 'https://wa.me/966561056054',
    whatsappMessage: "Assalamu Alaikum Abdulaziz, I found Haramain Properties online and I'm interested in property options in Makkah or Medinah. My budget, timeline, and intended use are:",
    address: 'Makkah, Saudi Arabia',
    hours: 'Available by appointment',
  },

  // Focus Cities
  cities: {
    primary: ['Makkah', 'Medinah'],
    description: 'Buyer representation for property near Masjid al-Haram and Masjid an-Nabawi',
  },

  // Services
  services: [
    {
      id: 'property-search',
      name: 'Buyer Representation',
      shortDescription: 'Shortlist, verify, and negotiate Makkah or Medinah property options',
      description: 'We help you define the right brief, compare real options, verify details, negotiate clearly, and coordinate the purchase process with the right local professionals.',
      features: [
        'Personalized property matching',
        'Virtual or in-person viewings',
        'Price negotiation on your behalf',
        'Documentation and professional coordination',
        'Title verification',
        'Registration assistance',
      ],
    },
    {
      id: 'property-management',
      name: 'Owner Support',
      shortDescription: 'Peace of mind for overseas property owners',
      description: 'Living overseas? We coordinate tenant, maintenance, inspection, and reporting needs so your property is looked after locally.',
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
    'Makkah real estate for international buyers',
    'own property near Haram',
    'Medinah property investment',
    'property near Prophet\'s Mosque',
    'Saudi Arabia property consultant',
    'Saudi real estate buyer representative',
    'Haramain property consultant',
    'Makkah property advisor',
    'how to evaluate property in Makkah',
    'Makkah apartment for sale',
    'Medinah real estate agent',
    'Haramain Properties',
  ],
}
