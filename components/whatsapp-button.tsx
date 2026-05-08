import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '923332103056'
  const message = encodeURIComponent('Hello! I would like to consult about your services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
