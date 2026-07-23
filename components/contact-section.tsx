'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = `Hi, I'm ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/923332103056?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', phone: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 333 2103056',
      href: 'tel:+923332103056',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@khursheedhealthhub.com',
      href: 'mailto:contact@khursheedhealthhub.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: 'https://www.google.com/maps/search/Khursheed+Health+Hub+Karachi',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Sat, 10 AM - 6 PM',
      href: '#',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-pretty">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your healing journey? Contact us today and let's work together toward your wellness goals.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-8 fade-in-up">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="group bg-white/60 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-white/80"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </a>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 fade-in-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3042455555555!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6bffffffff%3A0x1234567890ab!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923332103056"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div>
                <p className="font-semibold text-lg">Quick Chat on WhatsApp</p>
                <p className="text-white/80 text-sm">Get instant answers to your health questions</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Send className="h-6 w-6" />
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm border border-border rounded-2xl p-8 fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll respond within 24 hours
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-primary font-semibold">Message sent! We'll contact you soon via WhatsApp.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your Health Concern
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your health concern or symptoms..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By clicking send, your message will be sent via WhatsApp. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
