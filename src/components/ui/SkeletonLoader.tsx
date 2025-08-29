    import React from 'react'

interface SkeletonLoaderProps {
  type?: 'product-card' | 'hero' | 'gallery' | 'features'
  count?: number
}

/**
 * Beautiful skeleton loading component with red theme
 * Provides smooth loading experience while maintaining the website's design
 */
export function SkeletonLoader({ type = 'product-card', count = 1 }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="animate-pulse">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        )

      case 'gallery':
        return (
          <div className="space-y-12">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-12">
                  {/* Text Section Skeleton */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-200 rounded-full w-24 h-6"></div>
                    <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/6"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-12 bg-gradient-to-r from-red-200 to-red-300 rounded-full w-32"></div>
                      <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-32 border-2 border-gray-300"></div>
                    </div>
                  </div>

                  {/* Image Section Skeleton */}
                  <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                    <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'features':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md animate-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-200 to-red-300 rounded-lg mb-6"></div>
                <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        )

      default: // product-card
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                  </div>
                  <div className="h-10 bg-gradient-to-r from-red-200 to-red-300 rounded-lg w-full"></div>
                </div>
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="w-full">
      {renderSkeleton()}
    </div>
  )
}

/**
 * Full page loading skeleton for product pages
 */
export function PageSkeletonLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mx-auto"></div>
        </div>

        {/* Hero Skeleton */}
        <SkeletonLoader type="hero" />

        {/* Gallery Skeleton */}
        <div className="mt-20">
          <SkeletonLoader type="gallery" count={2} />
        </div>

        {/* Features Skeleton */}
        <div className="mt-20">
          <SkeletonLoader type="features" count={6} />
        </div>
      </div>
    </div>
  )
}
