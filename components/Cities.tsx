'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const cities = [
  {
    name: 'Riyadh',
    arabicName: 'الرياض',
    description: 'The capital and financial hub, offering luxury apartments, modern villas, and high-yield commercial properties in rapidly developing districts.',
    image: 'https://images.unsplash.com/photo-1578895210405-456dbad6c969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: '2,500+', avgPrice: 'SAR 8,500/m²', growth: '+10%' }
  },
  {
    name: 'Jeddah',
    arabicName: 'جدة',
    description: 'The cosmopolitan gateway to Mecca, featuring waterfront properties, luxury compounds, and a thriving expat community by the Red Sea.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: '1,800+', avgPrice: 'SAR 7,200/m²', growth: '+8%' }
  },
  {
    name: 'Makkah',
    arabicName: 'مكة المكرمة',
    description: 'The holy city offers unique investment opportunities in hospitality and serviced apartments near the Grand Mosque for pilgrimage visitors.',
    image: 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: '800+', avgPrice: 'SAR 12,000/m²', growth: '+15%' }
  },
  {
    name: 'Madinah',
    arabicName: 'المدينة المنورة',
    description: 'The city of the Prophet offers serene residential options and hospitality investments with strong rental demand year-round.',
    image: 'https://images.unsplash.com/photo-1565019188582-696288d864e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: '600+', avgPrice: 'SAR 9,500/m²', growth: '+12%' }
  },
  {
    name: 'Eastern Province',
    arabicName: 'المنطقة الشرقية',
    description: 'Home to the industrial heartland and beautiful coastal communities in Dammam, Khobar, and Dhahran with strong expat demand.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: '1,200+', avgPrice: 'SAR 5,800/m²', growth: '+6%' }
  },
  {
    name: 'NEOM',
    arabicName: 'نيوم',
    description: 'The futuristic megacity project representing the boldest vision of Saudi Arabia, offering unprecedented early investment opportunities.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { properties: 'Coming Soon', avgPrice: 'TBD', growth: 'High Potential' }
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
              Explore <span className="text-gradient">Key Cities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From bustling metropolises to spiritual centers, discover the unique 
              real estate opportunities each Saudi city offers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                  <p className="text-saudi-gold font-arabic">{city.arabicName}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-3">{city.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-bold text-saudi-green">{city.stats.properties}</p>
                    <p className="text-xs text-gray-500">Properties</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-saudi-green">{city.stats.avgPrice}</p>
                    <p className="text-xs text-gray-500">Avg Price</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-saudi-green">{city.stats.growth}</p>
                    <p className="text-xs text-gray-500">Growth</p>
                  </div>
                </div>

                <Link
                  href="/services/"
                  className="flex items-center justify-center space-x-2 text-saudi-green font-semibold group/link"
                >
                  <span>Explore Properties</span>
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
