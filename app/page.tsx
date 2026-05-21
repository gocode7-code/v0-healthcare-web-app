import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { organizationSchema } from './schema'
import { WhyChooseUs } from '@/components/why-choose-us'
import { VideoTestimonials } from '@/components/video-testimonials'
import { ServicesSection } from '@/components/services-section'
import { ProductsSection } from '@/components/products-section'
import { AboutSection } from '@/components/about-section'
import { ScrollLink } from '@/components/scroll-link'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="fade-in space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-pretty leading-tight">
                  Natural Healing, Real Results
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience compassionate, personalized healthcare with Khursheed Health Hub. Expert homeopathic treatments that address the root cause of your health concerns.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollLink
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ScrollLink>
                <a
                  href="https://wa.me/923332103056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '5000+', label: 'Patients Helped' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '100%', label: 'Natural Care' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="fade-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 sm:h-full min-h-96">
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
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Services */}
      <ServicesSection />

      {/* Products */}
      <ProductsSection />

      {/* About */}
      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach out to us today and start your healing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                label: 'Call Us',
                value: '+92 333 2103056',
                href: 'tel:+923332103056',
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                value: 'Karachi, Pakistan',
                href: 'https://www.google.com/maps/search/Khursheed+Health+Hub+Karachi',
              },
              {
                icon: Mail,
                label: 'WhatsApp',
                value: 'Message us 24/7',
                href: 'https://wa.me/923332103056',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="fade-in-up group bg-white/60 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:bg-white/80 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-border rounded-2xl p-8 fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact Form</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <textarea
                placeholder="Your health concern or message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
