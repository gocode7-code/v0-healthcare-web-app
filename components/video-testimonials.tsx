'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Heart, Star, Video } from 'lucide-react'

export function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

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

  const videos = [
    {
      id: 'patient-stories',
      title: 'Real Healing Stories from Our Karachi Patients',
      description: 'Discover how natural homeopathic care has transformed lives',
      src: '/videos/testimonial.mp4',
      icon: Heart,
    },
    {
      id: 'clinic-journey',
      title: 'Our Journey & Expertise in Natural Healthcare',
      description: '15+ years serving the Karachi community',
      src: '/videos/testimonial-2.mp4',
      icon: Video,
    },
  ]

  const VideoCard = ({ video }: { video: (typeof videos)[0] }) => {
    const Icon = video.icon
    const isPlaying = playingVideo === video.id

    return (
      <div className="relative group h-full">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black/5">
          {!isPlaying ? (
            <div
              className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setPlayingVideo(video.id)}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 flex flex-col items-center justify-center gap-6 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/40 transition-all duration-300">
                <div className="h-28 w-28 rounded-full bg-white/95 group-hover:bg-white transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl group-hover:scale-110">
                  <Play className="h-14 w-14 text-primary fill-primary" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-2xl mb-2">{video.title}</p>
                  <p className="text-white/90 text-lg">{video.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <video
              src={video.src}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              onEnded={() => setPlayingVideo(null)}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="video-testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -ml-64 -mb-64"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-bold">REAL HEALING STORIES</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 text-pretty leading-tight">
            Transform Your Health,<br /> Transform Your Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch real stories from Karachi patients who discovered natural healing through homeopathic care. Join our community of 500+ transformed lives.
          </p>
        </div>

        {/* Dual Video Section - Premium Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 fade-in-up">
          {videos.map((video) => (
            <div key={video.id} className="fade-in-up" style={{ animationDelay: `${videos.indexOf(video) * 150}ms` }}>
              <div className="min-h-[500px] sm:min-h-[600px] relative">
                <VideoCard video={video} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Star, label: '500+ Patients', desc: 'Transformed lives' },
            { icon: Heart, label: '15+ Years', desc: 'Of expertise & care' },
            { icon: Video, label: '99% Satisfaction', desc: 'Happy patients' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-foreground mb-1">{stat.label}</p>
                <p className="text-muted-foreground">{stat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Patient Stories Grid */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Featured Patient Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {patientStories.map((story, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm border border-border hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {story.image && (
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="font-bold text-lg text-foreground">{story.name}</p>
                    <p className="text-primary text-sm font-semibold">{story.condition}</p>
                  </div>
                  <p className="text-foreground/80 italic mb-6 leading-relaxed">"{story.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="text-primary font-bold text-sm">{story.results}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
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
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md text-xl`}>
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/80 italic mb-3 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-primary text-xs font-semibold">{testimonial.condition}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10 rounded-3xl p-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Start Your Healing Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of patients who've discovered the power of natural homeopathic care. Your transformation starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/923332103056?text=Hi, I'd like to book a consultation for homeopathic care"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all duration-300 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
