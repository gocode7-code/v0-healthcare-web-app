import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Leaf, Users } from 'lucide-react'
import { organizationSchema } from './schema'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                  Holistic Healthcare for Your <span className="text-primary">Whole Family</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl text-balance">
                  At Khursheed Health Hub, we believe in treating the whole person, not just the symptoms. Experience compassionate, personalized healthcare that puts your wellness first.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Natural Approach</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden">
              <Image
                src="/khursheed.jpg"
                alt="Khursheed Health Hub - Professional Healthcare Clinic"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Khursheed Health Hub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional wisdom with modern healthcare practices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: 'Natural Remedies',
                description: 'Holistic treatments using nature&apos;s healing power, without harmful chemicals or side effects.'
              },
              {
                icon: Users,
                title: 'Expert Care',
                description: 'Experienced practitioners dedicated to understanding your unique health needs and concerns.'
              },
              {
                icon: Heart,
                title: 'Compassionate Service',
                description: 'We listen, understand, and care about your wellbeing with personalized attention.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step towards better health. Schedule your consultation with our experts today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
