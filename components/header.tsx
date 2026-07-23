'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#why-us', label: 'Why Choose Us' },
    { href: '#video-testimonials', label: 'Testimonials' },
    { href: '#services', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#3d6852] text-white shadow-md">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/android-chrome-192x192.png"
              alt="Khursheed Health Hub Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">Khursheed</span>
              <span className="text-xs font-semibold text-white/90 leading-tight">Health Hub</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-white/80 scroll-smooth"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/consultation"
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#3d6852] transition-all hover:bg-white/90 shadow-sm"
            >
              Get Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden space-y-3 pb-6 pt-2 bg-[#3d6852]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-white transition-colors hover:text-white/80"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                  setIsOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/consultation"
              className="block rounded-full bg-white px-6 py-2 text-center text-sm font-semibold text-[#3d6852] transition-all hover:bg-white/90 w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
