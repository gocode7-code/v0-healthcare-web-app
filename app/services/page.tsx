import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Users, Zap, Check, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Khursheed Health Hub',
  description: 'Explore our comprehensive healthcare services including homeopathic treatments, wellness consultations, and family health programs.',
}

const services = [
  {
    icon: Leaf,
    title: 'Homeopathic Treatment',
    description: "Safe, natural remedies for chronic and acute conditions with no side effects. Our homeopathic treatments work directly with your body's self-healing mechanisms.",
    benefits: ['No harmful chemicals or side effects', 'Tailored, personalized medicine', 'Sustainable long-lasting results']
  },
  {
    icon: Heart,
    title: 'General Health Consultation',
    description: 'In-depth holistic health assessments paired with realistic lifestyle and preventive health plans designed for your daily routine.',
    benefits: ['Root-cause analysis', 'Custom wellness planning', 'Preventive lifestyle guidance']
  },
  {
    icon: Users,
    title: 'Family Wellness Programs',
    description: 'Complete healthcare coverage for every generation under your roof, ensuring gentle care for children and comprehensive relief for elderly members.',
    benefits: ['Age-specific treatment plans', 'Family-wide preventive care', 'Priority appointment scheduling']
  },
  {
    icon: Zap,
    title: 'Chronic Disease Management',
    description: 'Expert long-term care management for persistent conditions such as diabetes, hypertension, arthritis, and joint pain.',
    benefits: ['Active pain management', 'Natural metabolic support', 'Enhanced quality of life']
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50/30 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>KHURSHEED HEALTH SERVICES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            Holistic Healthcare Solutions
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore dedicated natural care pathways crafted to bring vital health, energy, and balance back into your life.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const IconComponent = service.icon
            return (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 group transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Specializations Grid */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-bold mb-3">Our Core Specializations</h2>
              <p className="text-slate-300 text-sm sm:text-base">Targeted homeopathic strategies for common and complex health conditions.</p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
              {[
                'Women Health',
                'Children Care',
                'Skin Problems',
                'Digestive Issues',
                'Pain Management',
                'Sleep Disorders',
                'Mental Wellness',
                'Preventive Care'
              ].map((spec, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:bg-white/15 transition-colors">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary mb-2">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="font-semibold text-sm sm:text-base text-white">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 text-center bg-primary/5 border border-primary/20 rounded-3xl p-10 sm:p-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Get personalized homeopathic care tailored to your specific health needs today.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  )
}
