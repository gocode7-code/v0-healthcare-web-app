'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Heart, Star } from 'lucide-react'

export function VideoTestimonials() {
  const [isPlaying, setIsPlaying] = useState(false)

  const patientStories = [
    {
      name: 'Amina & Family',
      condition: 'Child Health & Development',
      quote: 'Our son was frequently ill. After 6 months of homeopathic care, his immunity improved significantly. He\'s now healthy and thriving!',
      image: '/images/patient-1.jpg',
      results: '85% improvement in health',
    },
    {
      name: 'Zahra Khan',
      condition: 'Infant Wellness',
      quote: 'The natural approach gave us confidence. Our baby\'s development is on track and we\'ve never felt more supported as parents.',
      image: '/images/patient-2.jpg',
      results: 'Healthy development milestone',
    },
    {
      name: 'Fatima Ahmed',
      condition: 'Chronic Conditions',
      quote: 'After years of conventional treatment, homeopathy finally gave me real relief. The whole person approach is amazing!',
      initial: 'FA',
      results: '80% symptom reduction',
    },
  ]

  return (
    <section id="video-testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-semibold">Real Healing Stories</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-pretty">
            Real Healing Stories from Our Karachi Patients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how natural homeopathic care has transformed lives. These are real stories from real patients who trusted us with their health journey.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Video Section */}
          <div className="fade-in-up space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/5 group">
              {!isPlaying ? (
                <div
                  className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <video
                    src="/videos/testimonial.mp4"
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 flex flex-col items-center justify-center gap-6">
                    <div className="h-24 w-24 rounded-full bg-primary/90 group-hover:bg-primary transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110">
                      <Play className="h-12 w-12 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white font-semibold text-lg">Watch Patient Testimonial</p>
                  </div>
                </div>
              ) : (
                <video
                  src="/videos/testimonial.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setIsPlaying(false)}
                />
              )}
            </div>

            {/* Video Info Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-border rounded-xl p-6 fade-in-up">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground font-semibold mb-2">Trusted by 500+ Patients</p>
              <p className="text-muted-foreground text-sm">15+ years of natural healthcare expertise in Karachi</p>
            </div>
          </div>

          {/* Patient Stories Grid */}
          <div className="space-y-6 fade-in-up">
            {patientStories.map((story, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm border border-border hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {story.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-lg text-foreground">{story.name}</p>
                      <p className="text-primary text-sm font-semibold">{story.condition}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic mb-4">"{story.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="text-primary font-semibold text-sm">{story.results}</span>
                    <Heart className="h-5 w-5 text-primary/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Testimonials Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              name: 'Muhammad Hassan',
              condition: 'Digestive Health',
              quote: 'Personalized care and natural healing. My digestive system is completely transformed.',
              initial: 'MH',
              color: 'from-primary to-secondary',
            },
            {
              name: 'Ayesha Khan',
              condition: 'Skin Conditions',
              quote: 'Cleared up naturally without side effects. Best decision of my life!',
              initial: 'AK',
              color: 'from-secondary to-primary',
            },
            {
              name: 'Saher Ali',
              condition: 'Immune System',
              quote: 'My immunity strengthened and I feel energized. Highly recommend their approach.',
              initial: 'SA',
              color: 'from-primary via-secondary to-primary',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md`}>
                  {testimonial.initial}
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 italic mb-3 text-sm">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-primary text-xs">{testimonial.condition}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Start Your Healing Journey
            </a>
            <a
              href="https://wa.me/923332103056?text=Hi, I'd like to book a consultation for homeopathic care"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
