'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { IFPDADV100 } from '@/lib/types'
import { useProductData } from '@/hooks/useProductData'
import { PageSkeletonLoader } from '@/components/ui/SkeletonLoader'
import { ErrorRetry } from '@/components/ui/ErrorRetry'

/**
 * IFPDADV100 Series Interactive Display Page
 * Fetches data from backend API and displays products with beautiful UI
 * Features advanced ADV100 technology and premium-grade capabilities
 */
export default function IFPDADV100Page() {
  const router = useRouter();
  
  // Use custom hook for data fetching with caching and retry logic
  const { data: products, loading, error, refetch } = useProductData<IFPDADV100>({
    url: '/api/ifpd/adv100',
    retryCount: 3,
    retryDelay: 1000,
    cacheTime: 1 * 60 * 1000 // 1 minute cache for faster updates
  })

  // Get hero product (first product)
  const heroProduct = products.length > 0 ? products[0] : null

  // Advanced features specific to ADV100 series
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "ADV100 Processor",
      description: "Powered by the advanced ADV100 quad-core processor delivering exceptional performance for premium applications and multimedia processing."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
        </svg>
      ),
      title: "Premium Multi-Touch",
      description: "Advanced capacitive touch technology supporting up to 50 simultaneous touch points for large-scale collaborative environments and presentations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Premium Android OS",
      description: "Customized Android Premium operating system with enhanced productivity tools, advanced security, and premium-grade features for demanding environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "Ultra-Fast Connectivity",
      description: "Quad-band WiFi 6E and Bluetooth 5.4 for ultra-fast wireless connectivity, seamless device integration, and premium networking capabilities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Premium Security",
      description: "Enterprise-level security with hardware encryption, secure boot, advanced threat protection, and compliance standards for premium environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI & Premium Tools",
      description: "Built-in AI capabilities for intelligent content analysis, automated workflows, premium collaboration tools, and predictive analytics."
    }
  ]

  // Loading state with beautiful skeleton
  if (loading) {
    return <PageSkeletonLoader />
  }

  // Error state with retry functionality
  if (error) {
    return (
      <ErrorRetry 
        error={error}
        onRetry={refetch}
        title="Failed to Load ADV100 Series"
      />
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with first product */}
      {heroProduct && (
        <ProductHero
          title={heroProduct.title}
          description={heroProduct.description}
          image={heroProduct.image}
        />
      )}


      {/* Products Gallery */}
      {products.length > 0 && (
        <ProductGallery 
          products={products} 
          category="ADV100 Series"
          loading={loading}
          error={error}
          onRetry={refetch}
        />
      )}
      {/* Advanced Features Section */}
      <ProductFeatures features={features} />



      {/* Enhanced CTA Section with ADV100 specific messaging */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
            Premium-Grade ADV100 Technology
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
            Experience the pinnacle of premium interactive display technology with our ADV100 series.
            Designed for the most demanding environments, these displays deliver unmatched performance,
            collaboration capabilities, and premium features for modern workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => router.push('/contact')}
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Get ADV100 Quote
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              Schedule Premium Demo
            </button>
          </div>

          {/* Additional Premium Features */}
          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">4K</div>
              <div className="text-red-100">Ultra HD Display</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">50-Point</div>
              <div className="text-red-100">Multi-Touch Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">Premium</div>
              <div className="text-red-100">Grade Security</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">5-Year</div>
              <div className="text-red-100">Warranty Coverage</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 