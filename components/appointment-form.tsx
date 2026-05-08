'use client'

import { useState } from 'react'
import { createWhatsAppLink } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const services = [
  'First Consultation',
  'Follow-up Visit',
  'Homeopathic Treatment',
  'Health Checkup',
  'Medication Refill',
  'Other'
]

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM'
]

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: services[0],
    description: '',
    preferredTime: timeSlots[0],
    preferredDate: ''
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

    const preferredTimeText = formData.preferredDate 
      ? `${formData.preferredDate} at ${formData.preferredTime}`
      : formData.preferredTime

    const whatsappLink = createWhatsAppLink({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      description: formData.description,
      preferredTime: preferredTimeText,
      formType: 'appointment'
    })

    window.open(whatsappLink, '_blank')
    setIsLoading(false)

    setFormData({
      name: '',
      phone: '',
      service: services[0],
      description: '',
      preferredTime: timeSlots[0],
      preferredDate: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Full Name *</label>
          <Input
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
          <label className="block text-sm font-medium text-foreground">Phone Number *</label>
          <Input
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
        <label className="block text-sm font-medium text-foreground">Service Type *</label>
        <select
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

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Preferred Date</label>
          <Input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Preferred Time *</label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Additional Notes</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Any additional information or special requests..."
          rows={4}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium"
      >
        {isLoading ? 'Connecting...' : 'Book via WhatsApp'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Click above to confirm your appointment on WhatsApp. Our team will send you confirmation details.
      </p>
    </form>
  )
}
