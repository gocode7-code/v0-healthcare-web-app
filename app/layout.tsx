import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Khursheed Health Hub - Homeopathic Healthcare in Karachi',
  description: 'Discover natural healing with Khursheed Health Hub. Expert homeopathic treatments, wellness consultations, and family health services in Karachi. 24/7 support via WhatsApp.',
  keywords: 'homeopathy, healthcare, Karachi, wellness, natural healing, consultation, holistic medicine',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: 'https://khursheedhealthhub.com',
    title: 'Khursheed Health Hub - Holistic Healthcare Solutions',
    description: 'Expert homeopathic treatments and wellness consultations',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Khursheed Health Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khursheed Health Hub',
    description: 'Expert homeopathic treatments and wellness consultations',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
