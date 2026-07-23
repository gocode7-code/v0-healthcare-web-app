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
      quote: "Our son was frequently ill. After 6 months of homeopathic care, his immunity improved significantly. He's now healthy and thriving!",
      image: '/images/patient-1.jpg',
      results: '85% improvement in health',
    },
    {
      name: 'Zahra Khan',
      condition: 'Infant Wellness',
      quote: "The natural approach gave us confidence. Our baby's development is on track and we've never felt more supported as parents.",
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
    const isPlaying = playingVideo === video.id

    return (
      <div className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-black/10">
        {!isPlaying ? (
          <div
            className="relative w-full h-full flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
            onClick={() => setPlayingVideo(video.id)}
          >
            <video
              src={video.src}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col items-center justify-center p-6 text-center group-hover:from-black/90 transition-all duration-300">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/90 group-hover:bg-white transition-all duration-300 flex items-center justify-center shadow-xl group-hover:scale-110 mb-4">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-primary fill-primary ml-1" />
              </div>
              <p className="text-white font-bold text-xl sm:text-2xl mb-1 drop-shadow-md">
                {video.title}
              </p>
              <p className="text-white/90 text-sm sm:text-base max-w-md">
                {video.description}
              </p>
            </div>
          </div>
        ) : (
          <video
            src={video.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            onEnded={() => setPlayingVideo(null)}
          />
        )}
      </div>
    )
  }

  return (
    <section id="video-testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">REAL HEALING STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Transform Your Health,<br /> Transform Your Life
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch real stories from Karachi patients who discovered natural healing through homeopathic care. Join our community of 500+ transformed lives.
          </p>
        </div>

        {/* Dual Video Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          {videos.map((video) => (
            <div key={video.id} className="w-full">
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Star, label: '500+ Patients', desc: 'Transformed lives' },
            { icon: Heart, label: '15+ Years', desc: 'Of expertise & care' },
            { icon: Video, label: '99% Satisfaction', desc: 'Happy patients' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-xl font-bold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Patient Stories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Featured Patient Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {patientStories.map((story, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm border border-border hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {story.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <p className="font-bold text-lg text-foreground">{story.name}</p>
                      <p className="text-primary text-xs font-semibold">{story.condition}</p>
                    </div>
                    <p className="text-foreground/80 italic mb-6 text-sm leading-relaxed">"{story.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="text-primary font-bold text-xs sm:text-sm">{story.results}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Ready to Start Your Healing Journey?</h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of patients who've discovered the power of natural homeopathic care. Your transformation starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg inline-block"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/923332103056?text=Hi,%20I'd%20like%20to%20book%20a%20consultation%20for%20homeopathic%20care"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all duration-300 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
