'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Khursheed Health Hub?',
        a: 'Khursheed Health Hub is a dedicated healthcare center offering holistic, natural treatments for various health conditions. We combine traditional wisdom with modern healthcare practices to provide comprehensive wellness solutions.'
      },
      {
        q: 'How many years of experience do you have?',
        a: 'Our team has over 15 years of combined healthcare experience with a track record of treating 500+ satisfied patients successfully.'
      },
      {
        q: 'Are your treatments scientifically proven?',
        a: 'Yes, all our treatments are based on scientific research and proven methodologies. We stay updated with the latest healthcare advancements while maintaining our holistic approach.'
      }
    ]
  },
  {
    category: 'Treatments',
    questions: [
      {
        q: 'Are your treatments safe?',
        a: 'Absolutely. We use only natural remedies with no harmful chemicals. Our treatments have minimal to no side effects and are safe for all age groups.'
      },
      {
        q: 'How long does treatment usually take?',
        a: 'Treatment duration varies based on the condition and individual factors. Some conditions improve within weeks, while chronic conditions may require longer-term management. We provide personalized timelines during consultation.'
      },
      {
        q: 'Can I continue my current medications?',
        a: 'Yes, you can. We assess your current medications and adjust our treatment plan accordingly to ensure safe and effective care. Always inform us about all medications you\'re taking.'
      },
      {
        q: 'Do you treat chronic diseases?',
        a: 'Yes, we specialize in managing chronic diseases naturally. Our holistic approach addresses the root cause rather than just symptoms, providing long-term relief.'
      }
    ]
  },
  {
    category: 'Appointments',
    questions: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book appointments through our website using the appointment form. Simply select your preferred date, time, and service. We\'ll confirm via WhatsApp.'
      },
      {
        q: 'What are your operating hours?',
        a: 'We are available Monday-Friday 9 AM - 9 PM, Saturday 10 AM - 6 PM, and Sunday 12 PM - 6 PM. Emergency consultations are available 24/7.'
      },
      {
        q: 'Can I reschedule my appointment?',
        a: 'Yes, you can reschedule anytime. Simply contact us via WhatsApp with your new preferred date and time. We\'ll adjust accordingly.'
      },
      {
        q: 'Do you offer online consultations?',
        a: 'Yes, we offer both in-person and online consultations via WhatsApp video calls. Choose the option that works best for you.'
      }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'What is the consultation fee?',
        a: 'Initial consultations are complimentary. You only pay for the treatment plan and medications if you decide to proceed.'
      },
      {
        q: 'Are your prices transparent?',
        a: 'Yes, we believe in complete transparency. We provide detailed cost breakdowns before starting any treatment, with no hidden charges.'
      },
      {
        q: 'Do you offer discounts for family packages?',
        a: 'Yes! We offer special family wellness packages with significant discounts. Contact us for details on family subscription plans.'
      },
      {
        q: 'Do you accept insurance?',
        a: 'We provide detailed invoices that you can submit to your insurance provider. Please check with your insurance about coverage details.'
      }
    ]
  },
  {
    category: 'Products',
    questions: [
      {
        q: 'Are your products natural?',
        a: 'Yes, 100% of our products are made from natural ingredients with no artificial chemicals or harmful additives.'
      },
      {
        q: 'How can I order products?',
        a: 'You can inquire about products during your consultation. Our practitioners recommend products tailored to your specific health needs.'
      },
      {
        q: 'Do you ship nationwide?',
        a: 'Yes, we ship across Pakistan. Orders are carefully packaged and delivered within 3-5 business days.'
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
      >
        <span className="font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-primary/5 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQClient() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, treatments, and how we can help you.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, j) => (
                  <FAQItem key={j} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/5 rounded-xl border border-primary/20 p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Still have questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team is always ready to help. Feel free to contact us via WhatsApp or book a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923332103056?text=Hello%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base font-medium transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 px-8 py-3 text-base font-medium transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
