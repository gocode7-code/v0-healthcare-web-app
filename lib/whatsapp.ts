export interface WhatsAppMessageData {
  name: string
  phone: string
  service: string
  description: string
  preferredTime?: string
  formType: 'consultation' | 'appointment' | 'product' | 'contact'
}

export function generateWhatsAppMessage(data: WhatsAppMessageData): string {
  const lines = [
    '📋 *New Request from Khursheed Health Hub Website*',
    '',
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Type:* ${data.formType === 'consultation' ? 'Consultation' : data.formType === 'appointment' ? 'Appointment' : data.formType === 'product' ? 'Product Inquiry' : 'Contact'}`,
    `*Service:* ${data.service}`,
    `*Description:* ${data.description}`,
  ]

  if (data.preferredTime) {
    lines.push(`*Preferred Time:* ${data.preferredTime}`)
  }

  lines.push('')
  lines.push('*Source:* Website')

  return lines.join('\n')
}

export function createWhatsAppLink(data: WhatsAppMessageData): string {
  const phoneNumber = '923332103056'
  const message = encodeURIComponent(generateWhatsAppMessage(data))
  return `https://wa.me/${phoneNumber}?text=${message}`
}
