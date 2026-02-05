import { Metadata } from 'next'
import { BookOpen, FileText, Search, Scale, Landmark, CreditCard, DollarSign, Percent } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Property Buying Guide | How to Buy Property in Makkah & Medinah',
  description: 'A practical guide for Muslims buying property in Makkah and Medinah. Learn the process, requirements, and steps to own property near the Holy Mosques.',
}

const steps = [
  {
    icon: BookOpen,
    title: 'Define Goals and Budget',
    description: 'Clarify your goals, timeline, and preferred locations before starting the search.',
    details: [
      'Set a clear budget range and timeline',
      'Identify preferred cities and neighborhoods',
      'Decide on personal use vs. investment',
      'Review eligibility and ownership pathways',
    ],
  },
  {
    icon: FileText,
    title: 'Prepare Eligibility and Documents',
    description: 'Gather required documents and confirm eligibility for designated areas or projects.',
    details: [
      'Confirm residency and eligibility requirements',
      'Prepare identification and residency documents',
      'Document source of funds if requested',
      'Engage a licensed advisor or agent',
    ],
  },
  {
    icon: Search,
    title: 'Shortlist and Review Properties',
    description: 'Work with trusted professionals to compare listings and verify developer credentials.',
    details: [
      'Review vetted listings or developers',
      'Schedule virtual or in-person viewings',
      'Compare pricing, fees, and amenities',
      'Validate project timelines and delivery',
    ],
  },
  {
    icon: Scale,
    title: 'Legal Due Diligence',
    description: 'Confirm title, approvals, and contract terms before committing.',
    details: [
      'Verify ownership and title status',
      'Review approvals and compliance status',
      'Check service charges and community rules',
      'Have contracts reviewed by counsel',
    ],
  },
  {
    icon: Landmark,
    title: 'Offer and Agreement',
    description: 'Negotiate price, payment schedule, and conditions with clarity.',
    details: [
      'Submit an offer or reservation request',
      'Negotiate pricing and payment schedule',
      'Document all terms and conditions',
      'Align on handover or completion dates',
    ],
  },
  {
    icon: CreditCard,
    title: 'Transfer and Handover',
    description: 'Complete payment and finalize registration based on official procedures.',
    details: [
      'Complete payments per the agreement',
      'Finalize notarization or e-registration',
      'Receive deed or ownership documentation',
      'Arrange utilities and ongoing management',
    ],
  },
]

const legalRequirements = [
  {
    title: 'Eligibility Varies by Status',
    content:
      'Eligibility depends on nationality, residency status, and the location or project. We help confirm the right pathway for each buyer.',
  },
  {
    title: 'Designated Zones and Restrictions',
    content:
      'Some areas have restrictions on foreign ownership. Certain projects may offer leasehold or special structures subject to approval.',
  },
  {
    title: 'Ownership Structures Differ',
    content:
      'Freehold and long-term leasehold structures can differ by project. Terms and obligations should be reviewed carefully.',
  },
  {
    title: 'Registration and Compliance',
    content:
      'Transactions are typically registered through official portals or notary processes. Timelines and documentation requirements vary.',
  },
]

const financingOptions = [
  {
    icon: Landmark,
    title: 'Local Mortgages (Where Eligible)',
    description: 'Local lenders may offer financing to qualified residents depending on employment and income documentation.',
    requirements: [
      'Valid residency where required',
      'Income and employment verification',
      'Credit assessment by the lender',
      'Loan-to-value varies by bank',
    ],
  },
  {
    icon: DollarSign,
    title: 'International Financing',
    description: 'Some buyers use financing from home-country lenders, especially for cross-border investment strategies.',
    requirements: [
      'Property acceptance by the lender',
      'Currency and transfer planning',
      'Down payment requirements vary',
    ],
  },
  {
    icon: Percent,
    title: 'Developer Installment Plans',
    description: 'Off-plan projects often provide installment schedules during construction, with terms defined by each developer.',
    requirements: [
      'Reservation or down payment required',
      'Milestone-based payment schedules',
      'Final payment at handover',
    ],
  },
]

const costConsiderations = {
  title: 'Common Costs and Fees',
  items: [
    { label: 'Transfer and registration fees', value: 'Applies based on property type and location' },
    { label: 'VAT or sales taxes', value: 'Rules vary by property status and buyer profile' },
    { label: 'Agent and legal fees', value: 'Based on scope and complexity' },
    { label: 'Service charges', value: 'Ongoing community or maintenance fees' },
    { label: 'Financing costs', value: 'Interest and bank fees if applicable' },
  ],
}

const faqs = [
  {
    question: 'Can I buy property in Saudi Arabia without living there?',
    answer:
      'Some developments allow non-resident purchases, while others require residency or specific eligibility. We can confirm options based on your profile.',
  },
  {
    question: 'How long does the buying process take?',
    answer:
      'Timelines vary by property type, approvals, and payment structure. Resale transactions can be faster, while off-plan purchases follow construction schedules.',
  },
  {
    question: 'Do I need a lawyer to buy property?',
    answer:
      'Legal review is not always mandatory, but it is strongly recommended to protect your interests. We coordinate legal support as needed.',
  },
  {
    question: 'Can property ownership help with residency?',
    answer:
      'Residency pathways linked to investment can exist, but eligibility and thresholds change. We provide the latest guidance for your situation.',
  },
  {
    question: 'What are the additional costs beyond the purchase price?',
    answer:
      'Additional costs can include transfer and registration fees, legal and agent fees, service charges, and financing costs. We provide a clear cost summary upfront.',
  },
  {
    question: 'Can I rent out my property?',
    answer:
      'Rental is often possible but may depend on property type, licensing, and community rules. We help clarify the requirements before you proceed.',
  },
]

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-saudi-green-dark">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="guideGeo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="0" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="0" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#guideGeo)" />
          </svg>
          <div className="absolute top-1/3 -left-10 w-72 h-72 bg-saudi-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Property Buying <span className="text-saudi-gold">Guide</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            A practical overview of buying property in Makkah and Medinah.
            Learn the process, requirements, and steps to own property near the Holy Mosques.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="py-10 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-amber-200 bg-white rounded-2xl p-6">
            <p className="text-sm text-amber-900">
              This guide is general information only and not legal, tax, or investment advice.
              Rules and eligibility can change. Always confirm with licensed professionals and official sources.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white" id="steps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A high-level process to help you plan your purchase with confidence.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-2xl p-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-saudi-green rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-saudi-gold font-bold">Step {index + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-saudi-gold rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-20 bg-gray-50" id="legal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Legal <span className="text-gradient">Considerations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key areas to clarify before committing to a property purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalRequirements.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-saudi-green mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-white" id="financing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Financing <span className="text-gradient">Options</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consider the right financing path based on your residency and investment goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option) => (
              <div
                key={option.title}
                className="border border-gray-200 rounded-2xl p-8 hover:border-saudi-green transition-colors"
              >
                <div className="w-14 h-14 bg-saudi-green/10 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-saudi-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <h4 className="font-semibold text-gray-900 mb-3">Considerations:</h4>
                <ul className="space-y-2">
                  {option.requirements.map((req) => (
                    <li key={req} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-saudi-gold rounded-full mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Considerations */}
      <section className="py-20 bg-saudi-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cost <span className="text-saudi-gold">Considerations</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Typical cost categories to plan for beyond the purchase price.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costConsiderations.items.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-gray-400 text-sm mb-1">{item.label}</span>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about buying property in Saudi Arabia.
            </p>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
