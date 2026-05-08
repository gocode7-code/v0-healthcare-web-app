import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Khursheed Health Hub',
  description: 'Explore our comprehensive healthcare services including homeopathic treatments, wellness consultations, and family health programs.',
}

const services = [
  {
    icon: Leaf,
    title: 'Homeopathic Treatment',
    description: 'Safe, natural remedies for chronic and acute conditions with no side effects. Our homeopathic treatments work with your body\'s natural healing system.',
    benefits: ['No harmful chemicals', 'Personalized treatment', 'Long-lasting results']
  },
  {
    icon: Heart,
    title: 'General Health Consultation',
    description: 'Comprehensive health assessment and personalized wellness plans tailored to your specific needs and lifestyle.',
    benefits: ['Health assessment', 'Wellness planning', 'Lifestyle guidance']
  },
  {
    icon: Users,
    title: 'Family Wellness Programs',
    description: 'Complete healthcare solutions for the whole family, from children to elderly members with age-specific care plans.',
    benefits: ['All age groups', 'Preventive care', 'Family discounts']
  },
  {
    icon: Zap,
    title: 'Chronic Disease Management',
    description: 'Expert management of long-term conditions including diabetes, hypertension, arthritis, and other chronic diseases.',
    benefits: ['Disease management', 'Pain relief', 'Quality of life improvement']
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Healthcare Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive health solutions designed to bring wellness to every aspect of your life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50 hover:bg-card/50"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary font-bold">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/consultation"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-xl bg-primary/5 border border-primary/20 p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Specializations
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                <div key={i} className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <span className="h-6 w-6 text-primary font-semibold">✓</span>
                  </div>
                  <p className="font-medium text-foreground">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Start Your Wellness Journey?
            </h2>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
