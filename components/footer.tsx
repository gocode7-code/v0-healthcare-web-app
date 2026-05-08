import Link from 'next/link'
import Image from 'next/image'
import { Heart, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-blue-50 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Khursheed Health Hub Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-emerald-700">Khursheed</span>
            </Link>
            <p className="text-sm text-gray-600">
              Trusted homeopathic healthcare & wellness solutions in Karachi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-600 hover:text-emerald-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-600 hover:text-emerald-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-sm text-gray-600 hover:text-emerald-600 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-600 hover:text-emerald-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+923332103056"
                  className="text-sm text-gray-600 hover:text-primary font-medium transition"
                >
                  +92 333 2103056
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <a
                  href="https://www.google.com/maps/search/Khursheed+Health+Hub+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary font-medium transition"
                >
                  Karachi, Pakistan
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Hours:</span> Mon - Sat, 10 AM - 6 PM
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Online Consultation</li>
              <li className="text-sm text-gray-600">Health Products</li>
              <li className="text-sm text-gray-600">Appointment Booking</li>
              <li className="text-sm text-gray-600">Emergency Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} Khursheed Health Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
              <span className="font-semibold text-gray-900">Zayan Sheikh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
