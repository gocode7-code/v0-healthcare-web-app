import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { organizationSchema } from './schema'
import { WhyChooseUs } from '@/components/why-choose-us'
import { VideoTestimonials } from '@/components/video-testimonials'
import { ServicesSection } from '@/components/services-section'
import { ProductsSection } from '@/components/products-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
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
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm font-semibold">Trusted Natural Healthcare</span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold text-foreground text-pretty leading-tight">
                  Natural Healing &<br />Holistic Health<br />in Karachi
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert Homeopathic Care • Herbal Remedies • Chronic Illness Treatment
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Experience compassionate, personalized healthcare with Khursheed Health Hub. Our expert homeopathic treatments address the root cause of your health concerns with 15+ years of proven success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <ScrollLink
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ScrollLink>
                <ScrollLink
                  href="#video-testimonials"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
                >
                  Watch Our Story
                </ScrollLink>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
                {[
                  { value: '500+', label: 'Patients' },
                  { value: '15+', label: 'Years Experience' },
                  { value: 'Karachi', label: 'Based' },
                ].map((stat, index) => (
                  <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
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

      <ContactSection />
    </>
  )
}
