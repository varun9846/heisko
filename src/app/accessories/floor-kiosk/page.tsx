'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Backward Compatibility Redirect
 * Redirects old URL structure to new unified structure
 */
export default function LegacyRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to new URL structure
    router.replace('/products/accessories/floor-kiosk')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-medium">Redirecting...</p>
        <p className="text-gray-500 text-sm mt-2">Moving to new URL structure</p>
      </div>
    </div>
  )
} 