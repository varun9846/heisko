import axios, { AxiosResponse } from 'axios'

/**
 * API utility functions for common operations
 * Provides consistent error handling and response formatting
 */

export interface ApiResponse<T> {
  success: boolean
  data: T[]
  message?: string
}

export interface ApiError {
  success: false
  error: string
  message: string
}

/**
 * Generic API client with default configuration
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Fetch data from API with proper error handling
 */
export async function fetchApiData<T>(url: string): Promise<T[]> {
  try {
    const response: AxiosResponse<ApiResponse<T> | ApiError> = await apiClient.get(url)
    
    if (response.data.success && 'data' in response.data) {
      return response.data.data
    } else {
      throw new Error('Invalid response format')
    }
  } catch (error) {
    console.error(`❌ API Error for ${url}:`, error)
    throw error
  }
}

/**
 * Transform product data for consistent formatting
 */
export function transformProductData<T extends { id: number; title: string; description: string; image: string }>(
  products: T[]
): T[] {
  return products.map(product => ({
    ...product,
    title: product.title.trim(),
    description: product.description.trim(),
    image: product.image.trim()
  }))
}

/**
 * Get product series from title
 */
export function getProductSeries(title: string): string {
  const titleLower = title.toLowerCase()
  
  if (titleLower.includes('ops') || titleLower.includes('open pluggable')) return 'OPS Series'
  if (titleLower.includes('tv stand') || titleLower.includes('tv-stand') || titleLower.includes('stand')) return 'TV Stand Series'
  if (titleLower.includes('meeting pod') || titleLower.includes('pod')) return 'Meeting Pod Series'
  if (titleLower.includes('portable panel') || titleLower.includes('panel')) return 'Portable Panel Series'
  if (titleLower.includes('floor kiosk') || titleLower.includes('kiosk')) return 'Floor Kiosk Series'
  if (titleLower.includes('smarttvlts') || titleLower.includes('smart tv lts')) return 'SmartTVLTS Series'
  if (titleLower.includes('smartliftingtouchtable') || titleLower.includes('lifting touch table')) return 'SmartLiftingTouchTable Series'
  if (titleLower.includes('smarttouchtable') || titleLower.includes('touch table')) return 'SmartTouchTable Series'
  if (titleLower.includes('smartblackboardm86') || titleLower.includes('m86')) return 'SmartBlackboardM86 Series'
  if (titleLower.includes('iwbp82') || titleLower.includes('p-82')) return 'IWBP82 Series'
  if (titleLower.includes('iwbs82') || titleLower.includes('s-82')) return 'IWBS82 Series'
  if (titleLower.includes('adv100')) return 'ADV100 Series'
  if (titleLower.includes('t982')) return 'T982 Professional Series'
  if (titleLower.includes('adv311d2')) return 'ADV311D2 Enterprise Series'
  if (titleLower.includes('rk3588')) return 'RK3588 Elite Series'
  if (titleLower.includes('ifp62')) return 'IFP62 Elite Series'
  if (titleLower.includes('ifp52')) return 'IFP52 Series'
  if (titleLower.includes('ifp51')) return 'IFP51 Series'
  if (titleLower.includes('m86lb')) return 'M86LB Series'
  
  return 'IFP50 Series'
}

/**
 * Get navigation path for a product
 */
export function getProductPath(title: string): string {
  const titleLower = title.toLowerCase()
  
  // Interactive Displays
  if (titleLower.includes('ifp50')) return '/interactive-displays/ifp50-series'
  if (titleLower.includes('ifp51')) return '/interactive-displays/ifp51-series'
  if (titleLower.includes('ifp52')) return '/interactive-displays/ifp52-series'
  if (titleLower.includes('ifp62')) return '/interactive-displays/ifp62-series'
  
  // IFPD Products
  if (titleLower.includes('rk3588')) return '/ifpd/rk3588'
  if (titleLower.includes('adv311d2')) return '/ifpd/adv311d2'
  if (titleLower.includes('t982')) return '/ifpd/t982'
  if (titleLower.includes('adv100')) return '/ifpd/adv100'
  if (titleLower.includes('iwbs82')) return '/ifpd/iwbs82'
  if (titleLower.includes('iwbp82')) return '/ifpd/iwbp82'
  
  // Smart Solutions
  if (titleLower.includes('smart-blackboard-m86lb')) return '/smart-solutions/smart-blackboard-m86lb'
  if (titleLower.includes('smart-blackboard-m86')) return '/smart-solutions/smart-blackboard-m86'
  if (titleLower.includes('smart-touch-table')) return '/smart-solutions/smart-touch-table'
  if (titleLower.includes('smart-lifting-touch-table')) return '/smart-solutions/smart-lifting-touch-table'
  if (titleLower.includes('smart-tv-lts')) return '/smart-solutions/smart-tv-lts'
  
  // Accessories
  if (titleLower.includes('floor-kiosk')) return '/accessories/floor-kiosk'
  if (titleLower.includes('portable-panel')) return '/accessories/portable-panel'
  if (titleLower.includes('meeting-pod')) return '/accessories/meeting-pod'
  if (titleLower.includes('tv-stand')) return '/accessories/tv-stand'
  if (titleLower.includes('ops')) return '/accessories/ops'
  
  return '/products'
}

/**
 * Group products by series
 */
export function groupProductsBySeries<T extends { title: string }>(products: T[]): [string, T[]][] {
  const grouped = new Map<string, T[]>()
  
  products.forEach(product => {
    const series = getProductSeries(product.title)
    if (!grouped.has(series)) {
      grouped.set(series, [])
    }
    grouped.get(series)!.push(product)
  })
  
  return Array.from(grouped.entries())
}

/**
 * Debounce function for search and filtering
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Adds cache-busting parameter to Supabase image URLs
 * @param imageUrl - The original image URL
 * @returns URL with cache-busting parameter
 */
export function getCacheBustedImageUrl(imageUrl: string): string {
  if (!imageUrl) return imageUrl;
  
  // Add timestamp as cache-busting parameter
  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}v=${Date.now()}`;
}

/**
 * Alternative: Add version parameter for more controlled cache-busting
 * @param imageUrl - The original image URL
 * @param version - Version string (e.g., '1.0', 'latest')
 * @returns URL with version parameter
 */
export function getVersionedImageUrl(imageUrl: string, version: string = 'latest'): string {
  if (!imageUrl) return imageUrl;
  
  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}version=${version}`;
}

/**
 * Adds cache-busting parameter to API URLs
 * @param apiUrl - The original API URL
 * @returns URL with cache-busting parameter
 */
export function getCacheBustedApiUrl(apiUrl: string): string {
  if (!apiUrl) return apiUrl;
  
  const separator = apiUrl.includes('?') ? '&' : '?';
  return `${apiUrl}${separator}t=${Date.now()}`;
}

/**
 * Creates axios headers for cache-busting API requests
 * @returns Headers object for no-cache requests
 */
export function getCacheBustingHeaders(): Record<string, string> {
  return {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  };
}

/**
 * Forces a fresh data fetch by clearing cache and refetching
 * @param refetchFunction - The refetch function from useProductData
 * @param cacheKey - Optional cache key to clear
 */
export async function forceDataRefresh(refetchFunction: () => Promise<void>, cacheKey?: string): Promise<void> {
  // Clear any local storage or session storage cache
  if (typeof window !== 'undefined') {
    if (cacheKey) {
      sessionStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheKey);
    }
  }
  
  // Call the refetch function
  await refetchFunction();
}
