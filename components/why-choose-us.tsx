'use client'

import { ShieldCheck, Leaf, Clock, Award } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Expert Practitioners',
      description: 'Certified homeopaths with 15+ years of experience in natural healing',
    },
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: '100% natural remedies with zero side effects for your wellness',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Quick WhatsApp consultations and emergency support available anytime',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '5000+ satisfied patients with documented healing stories',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose Khursheed Health Hub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of personalized, natural healthcare combined with expert knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group fade-in-up bg-white/60 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 hover:bg-white/80 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
