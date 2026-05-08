import Link from 'next/link'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-blue-50 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-emerald-700 mb-2">
              Khursheed Health Hub
            </h3>
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
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                <span className="font-medium">Phone:</span> 0333 2103056
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Location:</span> Karachi, Pakistan
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
