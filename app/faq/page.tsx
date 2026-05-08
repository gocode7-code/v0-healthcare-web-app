import { Metadata } from 'next'
import FAQClient from './faq-client'

export const metadata: Metadata = {
  title: 'FAQs | Khursheed Health Hub',
  description: 'Find answers to common questions about our treatments, appointments, pricing, and products. Get clarity on your health journey with us.',
}

export default function FAQPage() {
  return <FAQClient />
}
