import { Metadata } from 'next'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patient Testimonials | Khursheed Health Hub',
  description: 'Read real stories from our satisfied patients about their health transformation journey.',
}

const testimonials = [
  {
    name: 'Fatima Khan',
    location: 'Karachi',
    rating: 5,
    title: 'Life Changing Experience',
    text: 'I was suffering from chronic headaches and tried many treatments without success. The natural approach at Khursheed Health Hub changed my life completely. Within weeks, my headaches were gone and I feel more energetic than ever!',
    health: 'Chronic Headaches'
  },
  {
    name: 'Ahmed Ali',
    location: 'Lahore',
    rating: 5,
    title: 'Professional and Caring',
    text: 'Dr. Khursheed is incredibly professional and genuinely cares about patient wellness. He explained everything in simple terms and created a personalized treatment plan. I recommend them to all my family and friends.',
    health: 'Digestive Issues'
  },
  {
    name: 'Zainab Hassan',
    location: 'Islamabad',
    rating: 5,
    title: 'Finally Found Relief',
    text: 'Years of skin problems finally resolved! The natural remedies worked wonders where other treatments failed. The staff is friendly, the clinic is clean, and the results speak for themselves.',
    health: 'Skin Conditions'
  },
  {
    name: 'Muhammad Saeed',
    location: 'Rawalpindi',
    rating: 5,
    title: 'Worth Every Penny',
    text: 'My arthritis pain has significantly reduced since starting treatment at Khursheed Health Hub. The consultation was thorough and the follow-up care is excellent. Best healthcare decision I\'ve made.',
    health: 'Joint Pain'
  },
  {
    name: 'Aisha Malik',
    location: 'Karachi',
    rating: 5,
    title: 'Balanced Hormones, Better Life',
    text: 'I was struggling with hormonal imbalances affecting my quality of life. The natural treatment plan restored my balance without side effects. I feel like myself again!',
    health: 'Hormonal Imbalance'
  },
  {
    name: 'Usman Raza',
    location: 'Lahore',
    rating: 5,
    title: 'Sleep Quality Improved',
    text: 'After years of insomnia, I finally sleep peacefully thanks to the natural treatment. No drowsiness, no side effects - just natural, restful sleep every night.',
    health: 'Sleep Disorder'
  },
  {
    name: 'Hira Siddiqui',
    location: 'Islamabad',
    rating: 5,
    title: 'My Child Is Healthier',
    text: 'I brought my child for persistent cough and it was resolved naturally within weeks. The doctor is very gentle with kids and explains everything to the parents. Highly recommended!',
    health: 'Children Health'
  },
  {
    name: 'Hassan Khan',
    location: 'Peshawar',
    rating: 5,
    title: 'Stress Relief That Works',
    text: 'The stress and anxiety I carried for years finally lifted. The holistic approach addresses the root cause, not just symptoms. I\'m a completely different person now.',
    health: 'Anxiety & Stress'
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Patient Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who transformed their health with us
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-4 mb-16">
          {[
            { value: '500+', label: 'Happy Patients' },
            { value: '5★', label: 'Average Rating' },
            { value: '98%', label: 'Success Rate' },
            { value: '15+', label: 'Years Experience' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {testimonial.title}
              </h3>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Meta */}
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.health}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Trust Us */}
        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Patients Trust Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Proven Results',
                desc: '98% of our patients experience significant health improvements within 3-6 months'
              },
              {
                title: 'Natural Approach',
                desc: 'We use only natural remedies without harmful chemicals or long-term side effects'
              },
              {
                title: 'Expert Care',
                desc: 'Our practitioners have 15+ years of experience and genuine passion for healing'
              },
              {
                title: 'Personalized Treatment',
                desc: 'Every patient gets a unique treatment plan tailored to their specific needs'
              },
              {
                title: 'Affordable',
                desc: 'Quality healthcare accessible to everyone with transparent, fair pricing'
              },
              {
                title: '24/7 Support',
                desc: 'Always available for questions and support throughout your healing journey'
              }
            ].map((trust, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{trust.title}</h3>
                <p className="text-sm text-muted-foreground">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-card rounded-xl border border-border p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of patients who have already experienced remarkable health improvements. Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923332103056?text=Hello%20Khursheed%20Health%20Hub%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base font-medium transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/consultation"
              className="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 px-8 py-3 text-base font-medium transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
