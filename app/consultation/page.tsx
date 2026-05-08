import { Metadata } from 'next'
import { ConsultationForm } from '@/components/consultation-form'

export const metadata: Metadata = {
  title: 'Book a Consultation | Khursheed Health Hub',
  description: 'Schedule your personal health consultation with our expert practitioners. Quick and easy booking via WhatsApp.',
}

export default function ConsultationPage() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Book Your Health Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our expert healthcare practitioners for personalized consultation and guidance tailored to your needs.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Tell Us About Your Health</h2>
              <ConsultationForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/10 rounded-xl border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Info</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Quick consultation setup via WhatsApp</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert practitioners available 24/7</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Personalized treatment recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Affordable and transparent pricing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Natural, holistic approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Why Consult Us?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 15+ years of healthcare experience</li>
                <li>• 500+ satisfied patients</li>
                <li>• Certified practitioners</li>
                <li>• Holistic approach to wellness</li>
                <li>• Proven treatment methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
