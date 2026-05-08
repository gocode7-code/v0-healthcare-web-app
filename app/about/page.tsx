import { Metadata } from 'next'
import { CheckCircle, Award, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Khursheed Health Hub',
  description: 'Learn about Khursheed Health Hub, our mission to provide compassionate holistic healthcare, and our team of expert practitioners.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Khursheed Health Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to bringing holistic, compassionate healthcare to every family
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Khursheed Health Hub, we believe that true healthcare means treating the whole person—mind, body, and spirit. Our mission is to provide compassionate, holistic healthcare solutions that empower families to achieve lasting wellness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine the wisdom of traditional healing practices with modern medical knowledge to deliver safe, effective, and personalized care to every patient.
            </p>
          </div>
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Values</h3>
            <ul className="space-y-4">
              {[
                { title: 'Compassion', desc: 'Caring for every patient with empathy and understanding' },
                { title: 'Excellence', desc: 'Providing the highest quality healthcare services' },
                { title: 'Integrity', desc: 'Being honest and transparent in all our practices' },
                { title: 'Holism', desc: 'Treating the whole person, not just symptoms' }
              ].map((value, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{value.title}</p>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl border border-border p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Users, title: '500+', desc: 'Happy Patients' },
              { icon: Award, title: '15+', desc: 'Years Experience' },
              { icon: Heart, title: '24/7', desc: 'Support Available' },
              { icon: CheckCircle, title: '100%', desc: 'Natural Approach' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.title}</p>
                <p className="text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Homeopathic Medicine',
              'Chronic Disease Management',
              'Women Health & Wellness',
              'Children Healthcare',
              'Preventive Medicine',
              'Pain Management',
              'Mental & Emotional Health',
              'Digestive Health',
              'Skin & Hair Care'
            ].map((expertise, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:bg-card/50 transition-all">
                <p className="font-semibold text-foreground">{expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Our Patients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { name: 'Fatima Khan', city: 'Karachi', text: 'Dr. Khursheed changed my life! The natural approach helped me recover without side effects.' },
              { name: 'Ahmed Ali', city: 'Lahore', text: 'Professional, caring, and knowledgeable. I recommend them to all my family and friends.' },
              { name: 'Zainab Hassan', city: 'Islamabad', text: 'Finally found a doctor who listens and cares. Best healthcare experience ever!' },
              { name: 'Muhammad Saeed', city: 'Rawalpindi', text: 'The consultation was thorough and the treatment plan actually works. Very satisfied.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-6">
                <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
