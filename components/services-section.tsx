'use client'

import { Leaf, Brain, Heart, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ScrollLink } from './scroll-link'

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Treat anxiety, depression, stress, and emotional imbalances naturally through personalized care.',
      treatments: ['Anxiety Management', 'Sleep Disorders', 'Mood Support'],
      badge: 'Holistic Care',
    },
    {
      icon: Heart,
      title: 'Physical Wellness',
      description: 'Address chronic pain, digestive issues, and immune system support with safe remedies.',
      treatments: ['Pain Relief', 'Digestion Care', 'Immune Boost'],
      badge: 'Natural Relief',
    },
    {
      icon: Leaf,
      title: 'Skin & Beauty',
      description: 'Natural solutions for skin conditions, hair health, and overall radiant body wellness.',
      treatments: ['Skin Clarity', 'Hair Health', 'Skin Conditions'],
      badge: 'Chemical-Free',
    },
    {
      icon: Users,
      title: 'Family Health',
      description: 'Comprehensive preventive and restorative care for all age groups from children to seniors.',
      treatments: ['Child Health', 'Family Care', 'Elder Wellness'],
      badge: 'All Ages',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Background Blur Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Leaf className="w-4 h-4" />
            <span>NATURE & HEALING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Core Healthcare Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive natural healthcare solutions tailored to restore balance and long-term wellness to your body and mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-5 mt-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.treatments.map((treatment, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call To Action */}
        <div className="text-center mt-16">
          <ScrollLink
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Book a Service Today</span>
            <ArrowRight className="w-4 h-4" />
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}
