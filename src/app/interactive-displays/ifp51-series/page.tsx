'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { InteractiveDisplayIFP51, IFP51SeriesResponse } from '@/lib/types'

/**
 * IFP51 Series Interactive Display Page
 * Fetches data from backend API and displays products with beautiful UI
 * Maintains the same design theme as IFP50 series with red color scheme
 */
export default function IFP51SeriesPage() {
  const [products, setProducts] = useState<InteractiveDisplayIFP51[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [heroProduct, setHeroProduct] = useState<InteractiveDisplayIFP51 | null>(null)

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get<IFP51SeriesResponse>('/api/interactive-display/ifp51-series')
        
        if (response.data.success) {
          console.log('✅ IFP51 Data fetched successfully:', response.data)
          setProducts(response.data.data)
          // Set the first product as hero product
          if (response.data.data.length > 0) {
            setHeroProduct(response.data.data[0])
            console.log('🎯 IFP51 Hero product set:', response.data.data[0])
          }
        } else {
          setError('Failed to fetch IFP51 products')
        }
      } catch (err) {
        console.error('Error fetching IFP51 series data:', err)
        setError('Failed to load IFP51 products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Feature data for the features section - IFP51 specific features
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "8K Ultra HD Display",
      description: "Revolutionary 8K resolution with exceptional clarity and vibrant colors for the most demanding professional environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
        </svg>
      ),
      title: "Advanced Multi-Touch",
      description: "Next-generation capacitive touch technology supporting up to 40 simultaneous touch points for ultimate collaboration."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Enterprise Android PC",
      description: "High-performance Android system with enterprise-grade security and management capabilities for corporate environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "5G Connectivity",
      description: "Built-in 5G and WiFi 6E for ultra-fast wireless connectivity and seamless cloud integration."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Advanced security protocols with biometric authentication and encrypted data transmission for sensitive environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-Powered Features",
      description: "Built-in AI capabilities for smart content recognition, automatic adjustments, and intelligent user interactions."
    }
  ]

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading IFP51 Series...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
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

      {/* Features Section */}
      <ProductFeatures features={features} />

      {/* Products Gallery */}
      {products.length > 0 && <ProductGallery products={products} />}

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Experience the Future of Interactive Displays
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Discover the power of IFP51 series with cutting-edge technology and enterprise-grade features. 
            Transform your workspace with the most advanced interactive displays available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact Sales Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 