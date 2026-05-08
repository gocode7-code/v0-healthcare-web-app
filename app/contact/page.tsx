import { Metadata } from 'next'
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Khursheed Health Hub',
  description: 'Get in touch with Khursheed Health Hub. Find our location, hours, and multiple ways to reach us.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 (333) 210-3056',
      href: 'tel:+923332103056'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Karachi, Pakistan',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '9 AM - 9 PM Daily',
      href: '#'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 (333) 210-3056',
      href: 'https://wa.me/923332103056'
    }
  ]

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <info.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-muted-foreground mb-2">{info.label}</p>
              <p className="font-semibold text-foreground text-lg">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ & Quick Info */}
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Response</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fastest response on WhatsApp</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Available 24/7 for emergencies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert health advice</span>
                </li>
              </ul>

              <Link
                href="https://wa.me/923332103056?text=Hello%20Khursheed%20Health%20Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">FAQs</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">What&apos;s your response time?</p>
                  <p className="text-muted-foreground">Usually within 1-2 hours on WhatsApp</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Do you provide online consultations?</p>
                  <p className="text-muted-foreground">Yes, via WhatsApp and video calls</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Is there a consultation fee?</p>
                  <p className="text-muted-foreground">Initial consultation is complimentary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-800 p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Health Emergency?</h3>
          <p className="text-muted-foreground mb-6">
            If you&apos;re experiencing a medical emergency, please call our emergency line or visit the nearest hospital immediately.
          </p>
          <a
            href="tel:923332103056"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Call Emergency: +92-333-2103056
          </a>
        </div>
      </div>
    </div>
  )
}
