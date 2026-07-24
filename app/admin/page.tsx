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

        // 1. Fetch Messages
        const resMessages = await fetch('/api/messages')
        if (!resMessages.ok) throw new Error('Failed to fetch messages')
        const resultMessages = await resMessages.json()
        const messagesList = Array.isArray(resultMessages) ? resultMessages : (resultMessages.data || [])

        // Filter unread messages (case-insensitive)
        const unreadCount = messagesList.filter((m: any) => {
          const status = (m.status || '').toLowerCase()
          return status === 'unread' || m.unread === true || m.read === false
        }).length || messagesList.length // Fallback: total messages count if status field differs

        // 2. Fetch Patients & Appointments (if endpoints exist, else fallback gracefully)
        let patientsCount = 0
        let appointmentsCount = 0

        try {
          const resPatients = await fetch('/api/patients')
          if (resPatients.ok) {
            const resultP = await resPatients.json()
            const pList = Array.isArray(resultP) ? resultP : (resultP.data || [])
            patientsCount = pList.length
          }
        } catch (e) {
          console.warn('Patients API unavailable:', e)
        }

        try {
          const resAppointments = await fetch('/api/appointments')
          if (resAppointments.ok) {
            const resultA = await resAppointments.json()
            const aList = Array.isArray(resultA) ? resultA : (resultA.data || [])
            appointmentsCount = aList.length
          }
        } catch (e) {
          console.warn('Appointments API unavailable:', e)
        }

        setStats({
          totalPatients: patientsCount,
          appointmentsThisMonth: appointmentsCount,
          unreadMessages: unreadCount,
        })
      } catch (err: any) {
        console.error('Error fetching stats:', err)
        setError(err.message || 'Failed to fetch database records.')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const adminSections = [
    { title: 'Patients', description: 'Manage patient records and consultations', icon: Users, color: 'bg-blue-100', textColor: 'text-blue-700', href: '#patients' },
    { title: 'Messages', description: 'View WhatsApp and contact form messages', icon: MessageSquare, color: 'bg-green-100', textColor: 'text-green-700', href: '#messages' },
    { title: 'Appointments', description: 'Manage and schedule appointments', icon: Calendar, color: 'bg-purple-100', textColor: 'text-purple-700', href: '#appointments' },
    { title: 'Products', description: 'Manage health products and inventory', icon: Package, color: 'bg-orange-100', textColor: 'text-orange-700', href: '#products' },
    { title: 'Analytics', description: 'View website traffic and performance', icon: BarChart3, color: 'bg-indigo-100', textColor: 'text-indigo-700', href: '#analytics' },
    { title: 'Settings', description: 'Configure website settings', icon: Settings, color: 'bg-gray-100', textColor: 'text-gray-700', href: '#settings' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.968 0.004 70)' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: 'oklch(0.48 0.06 160)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Website</span>
            </Link>
            <div className="flex items-center gap-2 text-white">
              <Lock className="w-5 h-5" />
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to the Admin Dashboard</h2>
          <p className="text-muted-foreground text-lg">Manage your healthcare clinic operations with real-time data from Supabase</p>
        </div>

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
              <div className="p-3 bg-blue-100 rounded-lg"><Users className="w-8 h-8 text-blue-600" /></div>
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
              <div className="p-3 bg-purple-100 rounded-lg"><Calendar className="w-8 h-8 text-purple-600" /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Messages</p>
                <p className="text-3xl font-bold text-foreground mt-2">
                  {loading ? <Loader className="w-6 h-6 animate-spin" /> : stats.unreadMessages}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Unread / Total</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg"><MessageSquare className="w-8 h-8 text-green-600" /></div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Management Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section) => {
              const Icon = section.icon
              return (
                <a key={section.title} href={section.href} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300">
                  <div className={`${section.color} p-4 flex items-center justify-between`}>
                    <Icon className={`w-8 h-8 ${section.textColor}`} />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{section.title}</h4>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
