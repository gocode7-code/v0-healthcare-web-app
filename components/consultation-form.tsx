'use client'

import { useState } from 'react'
import { createWhatsAppLink } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const services = [
  'General Consultation',
  'Homeopathic Treatment',
  'Chronic Diseases',
  'Women Health',
  'Children Health',
  'Skin Problems',
  'Digestive Issues',
  'Other'
]

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: services[0],
    description: '',
    preferredTime: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const whatsappLink = createWhatsAppLink({
      ...formData,
      formType: 'consultation'
    })

    window.open(whatsappLink, '_blank')
    setIsLoading(false)

    setFormData({
      name: '',
      phone: '',
      service: services[0],
      description: '',
      preferredTime: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="consult-name" className="block text-sm font-medium text-foreground">Full Name *</label>
          <Input
            id="consult-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="consult-phone" className="block text-sm font-medium text-foreground">Phone Number *</label>
          <Input
            id="consult-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03XX-XXXXXXX"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="consult-service" className="block text-sm font-medium text-foreground">Service Type *</label>
        <select
          id="consult-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {services.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="consult-description" className="block text-sm font-medium text-foreground">Describe Your Health Concern *</label>
        <Textarea
          id="consult-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please describe your health concern, symptoms, or what you'd like to consult about..."
          required
          rows={5}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="consult-preferredTime" className="block text-sm font-medium text-foreground">Preferred Consultation Time</label>
        <Input
          id="consult-preferredTime"
          type="text"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          placeholder="e.g., Morning, Evening, Weekends"
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium"
      >
        {isLoading ? 'Connecting...' : 'Send via WhatsApp'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Click above to connect with us on WhatsApp. You&apos;ll be redirected to start your consultation.
      </p>
    </form>
  )
}
