'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function VideoTestimonials() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video-testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-pretty">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our patients about their healing journey with Khursheed Health Hub
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/5">
              {!isPlaying ? (
                <div
                  className="relative w-full aspect-video bg-black/10 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <video
                    src="/videos/testimonial.mp4"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/80 group-hover:bg-primary transition-colors flex items-center justify-center">
                      <Play className="h-10 w-10 text-white fill-white ml-1" />
                    </div>
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
          </div>

          {/* Testimonials Cards */}
          <div className="space-y-6 fade-in-up">
            {[
              {
                name: 'Fatima Ahmed',
                condition: 'Chronic Migraines',
                quote: 'After 6 months of homeopathic treatment, my migraines have reduced by 80%. Finally living pain-free!',
                initial: 'FA',
              },
              {
                name: 'Muhammad Hassan',
                condition: 'Digestive Issues',
                quote: 'The personalized care and natural approach gave me hope. My digestive health has completely transformed.',
                initial: 'MH',
              },
              {
                name: 'Ayesha Khan',
                condition: 'Skin Conditions',
                quote: 'Best decision ever. My skin cleared up naturally without any side effects. Highly recommend!',
                initial: 'AK',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg hover:bg-white/80 transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/80 italic mb-3">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-primary text-xs">{testimonial.condition}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
