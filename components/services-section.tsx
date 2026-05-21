'use client'

import { Leaf, Brain, Heart, Users } from 'lucide-react'
import { ScrollLink } from './scroll-link'

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Treat anxiety, depression, stress, and emotional imbalances naturally',
      treatments: ['Anxiety Management', 'Sleep Disorders', 'Mood Support'],
    },
    {
      icon: Heart,
      title: 'Physical Wellness',
      description: 'Address chronic pain, digestive issues, and immune system support',
      treatments: ['Pain Relief', 'Digestion Care', 'Immune Boost'],
    },
    {
      icon: Leaf,
      title: 'Skin & Beauty',
      description: 'Natural solutions for skin conditions and overall body wellness',
      treatments: ['Skin Clarity', 'Hair Health', 'Skin Conditions'],
    },
    {
      icon: Users,
      title: 'Family Health',
      description: 'Comprehensive care for all ages from children to seniors',
      treatments: ['Child Health', 'Family Care', 'Elder Wellness'],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive natural healthcare solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group fade-in-up bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/30 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.treatments.map((treatment, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {treatment}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <ScrollLink
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Book a Service Today
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}
