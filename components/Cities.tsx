'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react'

const cities = [
  {
    name: 'Makkah',
    arabicName: 'مكة المكرمة',
    englishSubtitle: 'Makkah al-Mukarramah',
    headline: 'Own Property Near Masjid al-Haram',
    description: 'The holiest city in Islam. Properties range from apartments in prime locations to residential compounds. Wake up to the Adhan from Masjid al-Haram. Easy access to Umrah whenever your heart desires.',
    highlights: [
      'Easy transportation to Masjid al-Haram',
      'High rental yields during Hajj & Umrah',
      'Growing infrastructure & development',
    ],
    link: '/makkah/',
    stats: { growth: 'Strong', demand: 'Very High' }
  },
  {
    name: 'Medinah',
    arabicName: 'المدينة المنورة',
    englishSubtitle: 'Al-Madinah al-Munawwarah',
    headline: 'Own Property Near the Prophet\'s Mosque',
    description: 'The City of the Prophet. A serene environment with excellent investment potential. Properties near Masjid an-Nabawi are highly sought after for both living and pilgrimage rental.',
    highlights: [
      'Near Masjid an-Nabawi',
      'Peaceful residential communities',
      'Consistent year-round rental demand',
    ],
    link: '/medinah/',
    stats: { growth: 'Steady', demand: 'High' }
  },
]

export default function Cities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Properties in the <span className="text-gradient">Holy Cities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize exclusively in Makkah and Medinah - helping Muslims worldwide
              own property in the most blessed places on earth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                {/* SVG City Illustration */}
                {city.name === 'Makkah' ? (
                  <svg className="w-full h-full" viewBox="0 0 500 256" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="makkahCardBg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#003319" />
                        <stop offset="100%" stopColor="#006C35" />
                      </linearGradient>
                    </defs>
                    <rect width="500" height="256" fill="url(#makkahCardBg)" />
                    {/* Stars */}
                    <circle cx="50" cy="25" r="1.5" fill="#F4D98A" opacity="0.7" />
                    <circle cx="130" cy="40" r="1" fill="#F4D98A" opacity="0.5" />
                    <circle cx="320" cy="20" r="1.5" fill="#F4D98A" opacity="0.6" />
                    <circle cx="420" cy="35" r="1" fill="#F4D98A" opacity="0.8" />
                    <circle cx="470" cy="15" r="1.5" fill="#F4D98A" opacity="0.5" />
                    {/* Skyline */}
                    <g fill="#002210" opacity="0.6">
                      <rect x="20" y="150" width="50" height="106" rx="1" />
                      <rect x="80" y="135" width="40" height="121" rx="1" />
                      <rect x="130" y="160" width="35" height="96" rx="1" />
                      {/* Clock Tower */}
                      <rect x="210" y="75" width="65" height="181" rx="2" />
                      <rect x="222" y="58" width="41" height="17" rx="1" />
                      <rect x="232" y="42" width="21" height="16" rx="1" />
                      <circle cx="242" cy="90" r="12" fill="none" stroke="#C5A028" strokeWidth="1" opacity="0.3" />
                      {/* Minarets */}
                      <rect x="180" y="110" width="8" height="100" />
                      <polygon points="184,90 192,110 176,110" />
                      <rect x="300" y="115" width="8" height="95" />
                      <polygon points="304,95 312,115 296,115" />
                      <rect x="340" y="140" width="45" height="116" rx="1" />
                      <rect x="395" y="150" width="40" height="106" rx="1" />
                      <rect x="445" y="135" width="35" height="121" rx="1" />
                    </g>
                  </svg>
                ) : (
                  <svg className="w-full h-full" viewBox="0 0 500 256" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="medinahCardBg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#003319" />
                        <stop offset="100%" stopColor="#006C35" />
                      </linearGradient>
                    </defs>
                    <rect width="500" height="256" fill="url(#medinahCardBg)" />
                    {/* Stars */}
                    <circle cx="60" cy="20" r="1.5" fill="#F4D98A" opacity="0.6" />
                    <circle cx="150" cy="35" r="1" fill="#F4D98A" opacity="0.8" />
                    <circle cx="350" cy="25" r="1.5" fill="#F4D98A" opacity="0.5" />
                    <circle cx="440" cy="15" r="1" fill="#F4D98A" opacity="0.7" />
                    <circle cx="400" cy="40" r="1.5" fill="#F4D98A" opacity="0.5" />
                    {/* Skyline */}
                    <g fill="#002210" opacity="0.6">
                      <rect x="15" y="155" width="45" height="101" rx="1" />
                      <rect x="70" y="145" width="35" height="111" rx="1" />
                      {/* Palm tree */}
                      <rect x="130" y="165" width="4" height="40" />
                      <ellipse cx="132" cy="158" rx="16" ry="10" />
                      {/* Green Dome */}
                      <rect x="190" y="130" width="120" height="126" rx="2" />
                      <ellipse cx="250" cy="130" rx="60" ry="32" />
                      <circle cx="250" cy="100" r="28" fill="#1a6838" opacity="0.5" />
                      <circle cx="250" cy="70" r="4" fill="#C5A028" opacity="0.35" />
                      {/* Minarets */}
                      <rect x="165" y="100" width="7" height="110" />
                      <polygon points="168.5,78 175,100 162,100" />
                      <rect x="330" y="100" width="7" height="110" />
                      <polygon points="333.5,78 340,100 327,100" />
                      {/* Palm tree */}
                      <rect x="380" y="170" width="4" height="35" />
                      <ellipse cx="382" cy="163" rx="14" ry="9" />
                      <rect x="420" y="145" width="40" height="111" rx="1" />
                      <rect x="470" y="155" width="30" height="101" rx="1" />
                    </g>
                  </svg>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-saudi-gold font-arabic text-lg mb-1">{city.arabicName}</p>
                  <h3 className="text-3xl font-bold">{city.name}</h3>
                  <p className="text-gray-300 text-sm">{city.englishSubtitle}</p>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-saudi-green" />
                  <span className="text-sm font-semibold text-saudi-green">{city.stats.demand} Demand</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{city.headline}</h4>
                <p className="text-gray-600 mb-6">{city.description}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {city.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-saudi-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3 h-3 text-saudi-green" />
                      </div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={city.link}
                  className="flex items-center justify-center space-x-2 w-full bg-saudi-green hover:bg-saudi-green-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors group/link"
                >
                  <span>Explore {city.name} Properties</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
