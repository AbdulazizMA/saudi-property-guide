import { Metadata } from 'next'
import { Target, Eye, Users, Award, TrendingUp, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | SaudiPropertyGuide.com',
  description: 'Learn about SaudiPropertyGuide.com and how we help foreigners invest in Saudi Arabian real estate.',
}

const values = [
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'Your goals and success are our top priority. We listen, understand, and deliver personalized solutions.'
  },
  {
    icon: Award,
    title: 'Expertise & Integrity',
    description: 'Years of experience combined with transparent, ethical practices you can trust.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand the needs of international investors and bridge cultural gaps seamlessly.'
  },
]

const differentiators = [
  {
    icon: TrendingUp,
    title: 'Vision 2030 Insight',
    description: 'Deep understanding of Saudi Arabia\'s transformative vision and how it creates investment opportunities.'
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    description: 'No one-size-fits-all approach. Every client receives a customized investment strategy.'
  },
  {
    icon: Eye,
    title: 'End-to-End Support',
    description: 'From initial inquiry to property registration, we handle every detail so you don\'t have to worry.'
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Partner in<br />
            <span className="text-saudi-gold">Saudi Real Estate</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Since the 2019 foreign ownership reforms, we've helped hundreds of international 
            investors navigate the Saudi property market with confidence and success.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SaudiPropertyGuide was founded in 2020, shortly after Saudi Arabia's historic 
                  decision to allow foreign property ownership. Recognizing the need for 
                  specialized guidance for international investors, we set out to bridge the 
                  gap between global investment ambitions and local market expertise.
                </p>
                <p>
                  Our team combines deep knowledge of Saudi real estate law with a genuine 
                  understanding of what foreign investors need. We've built relationships 
                  with developers, legal experts, and financial institutions across the Kingdom 
                  to offer our clients unmatched access and support.
                </p>
                <p>
                  Today, we're proud to have helped over 500 clients from 40+ countries 
                  successfully invest in Saudi real estate, with transactions totaling more 
                  than SAR 750 million.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-saudi-green">500+</p>
                  <p className="text-sm text-gray-500">Clients Helped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-saudi-green">SAR 750M+</p>
                  <p className="text-sm text-gray-500">Transactions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-saudi-green">40+</p>
                  <p className="text-sm text-gray-500">Countries</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Saudi architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-saudi-gold text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years Combined<br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Aligned with <span className="text-gradient">Vision 2030</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Saudi Arabia's ambitious transformation plan is reshaping the real estate 
              landscape, creating unprecedented opportunities for investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Economic Diversification',
                description: 'Moving beyond oil, Saudi Arabia is building a diversified economy with real estate as a key pillar. New industries mean new demand for housing and commercial space.'
              },
              {
                title: 'Mega Projects',
                description: 'NEOM, Red Sea Project, Qiddiya, and more are creating entirely new cities and destinations, offering early investment opportunities with massive upside potential.'
              },
              {
                title: 'Quality of Life',
                description: 'Improved infrastructure, entertainment options, and lifestyle amenities are making Saudi Arabia increasingly attractive for expats and foreign residents.'
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-saudi-green mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-16 h-16 bg-saudi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-saudi-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-saudi-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="text-saudi-gold">Us</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What sets us apart in the Saudi real estate consulting landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="w-14 h-14 bg-saudi-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-saudi-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
