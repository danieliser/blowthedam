import type { SupamodeImage } from '@/types/database-helpers';

/**
 * Extracts URL from a SupaMode image field (JSONB) or legacy string URL.
 * Handles both new JSONB format and any legacy TEXT URLs.
 *
 * @param image - SupaMode image object, string URL, or null
 * @returns The image URL or null if not available
 *
 * @example
 * // New JSONB format from SupaMode
 * getImageUrl({ url: 'https://...', filename: 'hero.jpg' }) // => 'https://...'
 *
 * // Legacy string (backward compatible)
 * getImageUrl('https://example.com/image.jpg') // => 'https://example.com/image.jpg'
 *
 * // Null/undefined
 * getImageUrl(null) // => null
 */
export function getImageUrl(
  image: SupamodeImage | string | null | undefined
): string | null {
  if (!image) return null;

  // Handle legacy string URLs (backward compatibility)
  if (typeof image === 'string') return image;

  // Handle SupaMode JSONB format
  if (typeof image === 'object' && 'url' in image) {
    return image.url;
  }

  return null;
}

/**
 * Gets image metadata from SupaMode image field.
 * Returns null for legacy string URLs or missing data.
 */
export function getImageMetadata(
  image: SupamodeImage | string | null | undefined
): Omit<SupamodeImage, 'url'> | null {
  if (!image || typeof image === 'string') return null;

  const { url, ...metadata } = image;
  return Object.keys(metadata).length > 0 ? metadata : null;
}

/**
 * Type guard to check if value is a SupaMode image object.
 */
export function isSupamodeImage(
  value: unknown
): value is SupamodeImage {
  return (
    typeof value === 'object' &&
    value !== null &&
    'url' in value &&
    typeof (value as SupamodeImage).url === 'string'
  );
}
