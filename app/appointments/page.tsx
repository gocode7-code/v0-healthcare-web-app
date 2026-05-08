import { Metadata } from 'next'
import { AppointmentForm } from '@/components/appointment-form'
import { Calendar, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book an Appointment | Khursheed Health Hub',
  description: 'Schedule your appointment with our healthcare practitioners. Easy booking via WhatsApp.',
}

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Schedule Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a time that works best for you. Our practitioners are available throughout the day.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Select Your Appointment</h2>
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/10 rounded-xl border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground mb-4">Available Hours</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Monday - Friday: 9 AM - 9 PM</span>
                </li>
                <li className="flex gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Saturday: 10 AM - 6 PM</span>
                </li>
                <li className="flex gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Sunday: 12 PM - 6 PM</span>
                </li>
                <li className="flex gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Emergency: 24/7 Available</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Appointment Benefits</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>No waiting time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>One-on-one consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Personalized treatment plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Follow-up care included</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Flexible rescheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-xl border border-secondary/20 p-6">
              <h3 className="font-semibold text-foreground mb-4">What to Bring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Valid ID or any identification</li>
                <li>• List of current medications</li>
                <li>• Previous medical reports</li>
                <li>• List of questions/concerns</li>
                <li>• Insurance details (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Appointment Process
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { num: '1', title: 'Book', desc: 'Select date, time & service' },
              { num: '2', title: 'Confirm', desc: 'Get confirmation on WhatsApp' },
              { num: '3', title: 'Consult', desc: 'Meet with our expert' },
              { num: '4', title: 'Follow-up', desc: 'Receive treatment plan' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
