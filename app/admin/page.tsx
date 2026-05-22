import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, MessageSquare, Calendar, Package, Settings, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Panel | Khursheed Health Hub',
  description: 'Admin dashboard for managing Khursheed Health Hub operations',
  robots: 'noindex, nofollow',
}

export default function AdminPanel() {
  const adminSections = [
    {
      title: 'Patients',
      description: 'Manage patient records and consultations',
      icon: Users,
      stats: '500+',
      color: 'bg-blue-100',
      textColor: 'text-blue-700',
      href: '#patients',
    },
    {
      title: 'Messages',
      description: 'View WhatsApp and contact form messages',
      icon: MessageSquare,
      stats: '120+',
      color: 'bg-green-100',
      textColor: 'text-green-700',
      href: '#messages',
    },
    {
      title: 'Appointments',
      description: 'Manage and schedule appointments',
      icon: Calendar,
      stats: '45+',
      color: 'bg-purple-100',
      textColor: 'text-purple-700',
      href: '#appointments',
    },
    {
      title: 'Products',
      description: 'Manage health products and inventory',
      icon: Package,
      stats: '12+',
      color: 'bg-orange-100',
      textColor: 'text-orange-700',
      href: '#products',
    },
    {
      title: 'Analytics',
      description: 'View website traffic and performance',
      icon: Settings,
      stats: 'Data',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-700',
      href: '#analytics',
    },
    {
      title: 'Settings',
      description: 'Configure website settings',
      icon: Settings,
      stats: 'Config',
      color: 'bg-gray-100',
      textColor: 'text-gray-700',
      href: '#settings',
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.968 0.004 70)' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: 'oklch(0.48 0.06 160)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Website</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Lock className="w-5 h-5" />
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to the Admin Dashboard</h2>
          <p className="text-muted-foreground text-lg">
            Manage your healthcare clinic operations efficiently
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Patients</p>
                <p className="text-3xl font-bold text-foreground mt-2">500+</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-foreground mt-2">45</p>
                <p className="text-sm text-muted-foreground mt-1">Appointments Booked</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Messages</p>
                <p className="text-3xl font-bold text-foreground mt-2">120+</p>
                <p className="text-sm text-muted-foreground mt-1">Unread</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Admin Sections Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Management Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section) => {
              const Icon = section.icon
              return (
                <a
                  key={section.title}
                  href={section.href}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`${section.color} p-4 flex items-center justify-between`}>
                    <Icon className={`w-8 h-8 ${section.textColor}`} />
                    <span className={`text-2xl font-bold ${section.textColor}`}>{section.stats}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick Access Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Note</h3>
          <p className="text-blue-800">
            This admin panel is currently in development. Full functionality including database integration, authentication, and advanced features will be added soon. For now, use this dashboard to navigate to different admin functions.
          </p>
        </div>
      </div>
    </div>
  )
}
