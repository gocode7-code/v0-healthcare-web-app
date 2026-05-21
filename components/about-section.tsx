'use client'

import Image from 'next/image'
import { Heart, Leaf, Award, Users } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
              <Image
                src="/khursheed.jpg"
                alt="Khursheed Health Hub Clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About Khursheed Health Hub
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on principles of natural healing and patient care, Khursheed Health Hub has been a beacon of hope for thousands seeking holistic healthcare solutions in Karachi. We combine ancient wisdom with modern medical science.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: 'Patient-Focused', value: '5000+' },
                { icon: Award, label: 'Experience', value: '15+ Years' },
                { icon: Leaf, label: 'Natural Care', value: '100%' },
                { icon: Users, label: 'Team', value: 'Expert' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/40 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-primary/10 transition-colors"
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">Our Philosophy</h3>
              <p className="text-sm text-muted-foreground">
                We believe in treating the whole person, not just the symptoms. Every patient receives personalized care tailored to their unique health needs and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
