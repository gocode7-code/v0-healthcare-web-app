import Link from 'next/link'
import Image from 'next/image'
import { Heart, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t shadow-lg" style={{ backgroundColor: 'oklch(0.32 0.08 160)' }}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/android-chrome-512x512.png"
                alt="Khursheed Health Hub Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-white">Khursheed</span>
            </Link>
            <p className="text-sm text-white/80">
              Trusted homeopathic healthcare & wellness solutions in Karachi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-sm text-white/70 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/90" />
                <a
                  href="tel:+923332103056"
                  className="text-sm text-white/70 hover:text-white font-medium transition-colors"
                >
                  +92 333 2103056
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/90" />
                <a
                  href="https://www.google.com/maps/search/Khursheed+Health+Hub+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white font-medium transition-colors"
                >
                  Karachi, Pakistan
                </a>
              </li>
              <li className="text-sm text-white/70">
                <span className="font-medium">Hours:</span> Mon - Sat, 10 AM - 6 PM
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">Online Consultation</li>
              <li className="text-sm text-white/70">Health Products</li>
              <li className="text-sm text-white/70">Appointment Booking</li>
              <li className="text-sm text-white/70">Emergency Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70 text-center md:text-left">
              © {currentYear} Khursheed Health Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-white/70">
              Built with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by{' '}
              <span className="font-semibold text-white">Zayan Sheikh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
