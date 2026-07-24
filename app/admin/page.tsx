'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Users, MessageSquare, Calendar, Package, BarChart3, Settings, Lock, AlertCircle, Loader } from 'lucide-react'

export default function AdminPanel() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    appointmentsThisMonth: 0,
    unreadMessages: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('/api/messages')
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`)
        }

        const result = await response.json()
        
        if (result.error) {
          throw new Error(result.error)
        }

        const messagesList = Array.isArray(result) ? result : (result.data || [])
        const unreadCount = messagesList.filter((m: any) => m.status === 'Unread' || m.unread === true).length || 0

        setStats(prev => ({
          ...prev,
          unreadMessages: unreadCount,
        }))
      } catch (err: any) {
        console.error('Error fetching stats:', err)
        setError(err.message || 'Failed to load dashboard data. Please ensure Supabase environment variables are properly set in Vercel.')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const adminSections = [
    {
      title: 'Patients',
      description: 'Manage patient records and consultations',
      icon: Users,
      color: 'bg-blue-100',
      textColor: 'text-blue-700',
      href: '#patients',
    },
    {
      title: 'Messages',
      description: 'View WhatsApp and contact form messages',
      icon: MessageSquare,
      color: 'bg-green-100',
      textColor: 'text-green-700',
      href: '#messages',
    },
    {
      title: 'Appointments',
      description: 'Manage and schedule appointments',
      icon: Calendar,
      color: 'bg-purple-100',
      textColor: 'text-purple-700',
      href: '#appointments',
    },
    {
      title: 'Products',
      description: 'Manage health products and inventory',
      icon: Package,
      color: 'bg-orange-100',
      textColor: 'text-orange-700',
      href: '#products',
    },
    {
      title: 'Analytics',
      description: 'View website traffic and performance',
      icon: BarChart3,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-700',
      href: '#analytics',
    },
    {
      title: 'Settings',
      description: 'Configure website settings',
      icon: Settings,
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
            Manage your healthcare clinic operations with real-time data from Supabase
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Patients</p>
                <p className="text-3xl font-bold text-foreground mt-2">
                  {loading ? <Loader className="w-6 h-6 animate-spin" /> : stats.totalPatients}
                </p>
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
                <p className="text-3xl font-bold text-foreground mt-2">
                  {loading ? <Loader className="w-6 h-6 animate-spin" /> : stats.appointmentsThisMonth}
                </p>
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
                <p className="text-3xl font-bold text-foreground mt-2">
                  {loading ? <Loader className="w-6 h-6 animate-spin" /> : stats.unreadMessages}
                </p>
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

        {/* Info Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Supabase Integration Status</h3>
          <p className="text-blue-800 mb-3">
            The admin dashboard fetches data directly from your serverless Supabase backend API endpoints.
          </p>
        </div>
      </div>
    </div>
  )
}
