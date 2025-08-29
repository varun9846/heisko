import { useState, useEffect, useCallback } from 'react'
import axios, { AxiosError } from 'axios'

interface UseProductDataOptions<T> {
  url: string
  retryCount?: number
  retryDelay?: number
  cacheTime?: number
}

interface UseProductDataState<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

interface ApiResponse<T> {
  success: boolean
  data: T[]
  message?: string
}

interface ApiError {
  success: false
  error: string
  message: string
}

/**
 * Custom hook for fetching product data with caching, retry logic, and error handling
 * Optimized for performance and reusability across all product pages
 */
export function useProductData<T>(
  options: UseProductDataOptions<T>
): UseProductDataState<T> {
  const { url, retryCount = 3, retryDelay = 1000, cacheTime = 5 * 60 * 1000 } = options

  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryAttempts, setRetryAttempts] = useState(0)

  // Cache for storing fetched data
  const cache = new Map<string, { data: T[]; timestamp: number }>()

  const fetchData = useCallback(async (isRetry = false) => {
    try {
      setLoading(true)
      setError(null)

      // Check cache first
      const cached = cache.get(url)
      if (cached && Date.now() - cached.timestamp < cacheTime) {
        setData(cached.data)
        setLoading(false)
        return
      }

      console.log(`🔄 ${isRetry ? 'Retrying' : 'Fetching'} data from: ${url}`)
      
      // Add cache-busting parameter to URL
      const cacheBustedUrl = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`
      
      const response = await axios.get<ApiResponse<T> | ApiError>(cacheBustedUrl, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      })
      
      if (response.data.success && 'data' in response.data) {
        const productData = response.data.data
        setData(productData)
        
        // Cache the successful response
        cache.set(url, { data: productData, timestamp: Date.now() })
        
        console.log(`✅ Successfully fetched ${productData.length} products from ${url}`)
        setRetryAttempts(0) // Reset retry attempts on success
      } else {
        throw new Error('Invalid response format')
      }
    } catch (err) {
      const axiosError = err as AxiosError
      const errorMessage = (axiosError.response?.data as any)?.message || axiosError.message || 'Failed to fetch data'
      
      console.error(`❌ Error fetching data from ${url}:`, errorMessage)
      
      // Retry logic with exponential backoff
      if (retryAttempts < retryCount && !isRetry) {
        const delay = retryDelay * Math.pow(2, retryAttempts)
        console.log(`🔄 Retrying in ${delay}ms... (Attempt ${retryAttempts + 1}/${retryCount})`)
        
        setTimeout(() => {
          setRetryAttempts(prev => prev + 1)
          fetchData(true)
        }, delay)
      } else {
        setError(errorMessage)
        setRetryAttempts(0)
      }
    } finally {
      setLoading(false)
    }
  }, [url, retryCount, retryDelay, cacheTime, retryAttempts])

  // Initial data fetch
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Manual refetch function
  const refetch = useCallback(async () => {
    cache.delete(url) // Clear cache for fresh data
    setRetryAttempts(0)
    await fetchData()
  }, [fetchData, url])

  return {
    data,
    loading,
    error,
    refetch
  }
}
