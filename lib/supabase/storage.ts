import { createClient } from './client'

export type StorageBucket = 'product-images' | 'testimonial-images' | 'patient-documents' | 'admin-uploads'

/**
 * Upload a file to Supabase storage
 */
export async function uploadFile(
  bucket: StorageBucket,
  file: File,
  path: string
): Promise<{ url: string; error: null } | { url: null; error: Error }> {
  try {
    const supabase = createClient()
    
    // Generate unique filename
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name}`
    const fullPath = `${path}/${filename}`

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fullPath, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) {
      return { url: null, error }
    }

    // Get public URL
    const { data: publicData } = supabase.storage
      .from(bucket)
      .getPublicUrl(fullPath)

    return {
      url: publicData.publicUrl,
      error: null,
    }
  } catch (error) {
    return {
      url: null,
      error: error instanceof Error ? error : new Error('Unknown error'),
    }
  }
}

/**
 * Delete a file from Supabase storage
 */
export async function deleteFile(
  bucket: StorageBucket,
  path: string
): Promise<{ error: null } | { error: Error }> {
  try {
    const supabase = createClient()

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      return { error }
    }

    return { error: null }
  } catch (error) {
    return {
      error: error instanceof Error ? error : new Error('Unknown error'),
    }
  }
}

/**
 * Get public URL for a file
 */
export function getPublicUrl(
  bucket: StorageBucket,
  path: string
): string {
  const supabase = createClient()

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

/**
 * List files in a bucket directory
 */
export async function listFiles(
  bucket: StorageBucket,
  path: string = ''
): Promise<{ files: any[]; error: null } | { files: null; error: Error }> {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.storage
      .from(bucket)
      .list(path, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' },
      })

    if (error) {
      return { files: null, error }
    }

    return { files: data, error: null }
  } catch (error) {
    return {
      files: null,
      error: error instanceof Error ? error : new Error('Unknown error'),
    }
  }
}

/**
 * Initialize storage buckets (call once during setup)
 */
export async function initializeStorageBuckets(): Promise<void> {
  try {
    const supabase = createClient()

    // Note: Bucket creation typically happens in Supabase dashboard
    // This is a helper to verify buckets exist
    const buckets: StorageBucket[] = [
      'product-images',
      'testimonial-images',
      'patient-documents',
      'admin-uploads',
    ]

    for (const bucket of buckets) {
      const { data: exists, error } = await supabase.storage
        .getBucket(bucket)

      if (error || !exists) {
        console.warn(`Storage bucket "${bucket}" may not exist. Please create it in Supabase dashboard.`)
      }
    }
  } catch (error) {
    console.error('Error initializing storage buckets:', error)
  }
}
