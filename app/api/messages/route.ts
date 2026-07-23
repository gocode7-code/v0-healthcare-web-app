import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Safe client initialization
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export async function GET() {
  try {
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase env variables missing')
      return NextResponse.json({ data: [], count: 0 }, { status: 200 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data, error } = await supabase
      .from('messages')
      .select('*')

    if (error) {
      console.error('Database query error:', error.message)
      return NextResponse.json({ data: [], count: 0, error: error.message }, { status: 200 })
    }

    return NextResponse.json({ data, count: data?.length || 0 }, { status: 200 })
  } catch (err: any) {
    console.error('Server error in /api/messages:', err)
    // 500 dene ki jagah safe response bhejein taake frontend crash na ho
    return NextResponse.json({ data: [], error: 'Failed to fetch messages' }, { status: 200 })
  }
}
