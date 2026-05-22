import { createClient } from './client'

/**
 * Get all patients
 */
export async function getPatients() {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Get patient by ID
 */
export async function getPatientById(id: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('id', id)
    .single()

  return { data, error }
}

/**
 * Get consultations
 */
export async function getConsultations(patientId?: string) {
  const supabase = createClient()
  
  let query = supabase
    .from('consultations')
    .select('*, patients(first_name, last_name, email)')
    .order('consultation_date', { ascending: false })

  if (patientId) {
    query = query.eq('patient_id', patientId)
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Get appointments
 */
export async function getAppointments(patientId?: string) {
  const supabase = createClient()
  
  let query = supabase
    .from('appointments')
    .select('*, patients(first_name, last_name, email, phone)')
    .order('appointment_date', { ascending: false })

  if (patientId) {
    query = query.eq('patient_id', patientId)
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Get products
 */
export async function getProducts(category?: string) {
  const supabase = createClient()
  
  let query = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Get product by ID
 */
export async function getProductById(id: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  return { data, error }
}

/**
 * Get messages
 */
export async function getMessages(status?: string) {
  const supabase = createClient()
  
  let query = supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Create message (contact form submission)
 */
export async function createMessage(message: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  message_type?: string
}) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('messages')
    .insert([message])
    .select()

  return { data, error }
}

/**
 * Update message status
 */
export async function updateMessageStatus(
  id: string,
  status: 'Unread' | 'Read' | 'Responded' | 'Archived'
) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('messages')
    .update({
      status,
      responded_at: status === 'Responded' ? new Date().toISOString() : null,
    })
    .eq('id', id)
    .select()

  return { data, error }
}

/**
 * Get testimonials
 */
export async function getTestimonials(approved = true) {
  const supabase = createClient()
  
  let query = supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (approved) {
    query = query.eq('status', 'Approved')
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Create testimonial
 */
export async function createTestimonial(testimonial: {
  name: string
  email?: string
  rating: number
  testimonial_text: string
  image_url?: string
  patient_id?: string
}) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('testimonials')
    .insert([testimonial])
    .select()

  return { data, error }
}

/**
 * Get prescriptions
 */
export async function getPrescriptions(patientId?: string) {
  const supabase = createClient()
  
  let query = supabase
    .from('prescriptions')
    .select('*, consultations(chief_complaint), patients(first_name, last_name)')
    .order('created_at', { ascending: false })

  if (patientId) {
    query = query.eq('patient_id', patientId)
  }

  const { data, error } = await query

  return { data, error }
}

/**
 * Get admin users
 */
export async function getAdminUsers() {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('admin_users')
    .select('id, email, name, role, is_active, last_login, created_at')
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Update admin user status
 */
export async function updateAdminUserStatus(
  id: string,
  isActive: boolean
) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('admin_users')
    .update({
      is_active: isActive,
      last_login: new Date().toISOString(),
    })
    .eq('id', id)
    .select()

  return { data, error }
}

/**
 * Get dashboard statistics
 */
export async function getDashboardStats() {
  const supabase = createClient()
  
  try {
    const [
      { count: totalPatients },
      { count: totalAppointments },
      { data: unreadMessages },
    ] = await Promise.all([
      supabase.from('patients').select('*', { count: 'exact', head: true }),
      supabase.from('appointments').select('*', { count: 'exact', head: true }),
      supabase.from('messages').select('*').eq('status', 'Unread'),
    ])

    return {
      data: {
        totalPatients: totalPatients || 0,
        totalAppointments: totalAppointments || 0,
        unreadMessages: unreadMessages?.length || 0,
      },
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error('Unknown error'),
    }
  }
}
