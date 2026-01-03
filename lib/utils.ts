import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * SupaMode Image Field Helper
 * 
 * SupaMode stores image uploads as JSON strings in TEXT fields:
 * '{"url":"https://...","filename":"image.jpg","size":12345,"type":"image/jpeg"}'
 * 
 * This helper extracts the URL safely, with fallback for plain URL strings.
 * 
 * @param imageField - The TEXT field value from SupaMode (JSON string or plain URL)
 * @returns The image URL or null
 * 
 * @example
 * // In a component:
 * import { getImageUrl } from '@/lib/utils'
 * const url = getImageUrl(post.featured_image)
 * {url && <Image src={url} alt={post.title} />}
 */
export function getImageUrl(imageField: string | null | undefined): string | null {
  if (!imageField) return null
  
  try {
    const parsed = JSON.parse(imageField)
    return parsed.url || null
  } catch {
    // Fallback: if it's already a plain URL string
    return imageField
  }
}

/**
 * Get full SupaMode image metadata
 * 
 * @param imageField - The TEXT field value from SupaMode
 * @returns Parsed image object or null
 */
export interface SupaModeImage {
  url: string
  filename?: string
  size?: number
  type?: string
}

export function getImageData(imageField: string | null | undefined): SupaModeImage | null {
  if (!imageField) return null
  
  try {
    const parsed = JSON.parse(imageField)
    if (parsed.url) return parsed as SupaModeImage
    return null
  } catch {
    // Fallback: plain URL string
    return { url: imageField }
  }
}
