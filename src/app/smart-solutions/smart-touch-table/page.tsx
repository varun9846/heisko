'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { SmartTouchTable, SmartTouchTableResponse } from '@/lib/types'

/**
 * SmartTouchTable Series Touch Table Page
 * Fetches data from backend API and displays products with beautiful UI
 * Features advanced touch table technology and collaborative capabilities
 * 
 * SmartTouchTable Series Highlights:
 * - Advanced touch table technology for interactive workspaces
 * - Multi-user collaboration with real-time interaction capabilities
 * - Gesture recognition with advanced touch and gesture support
 * - Content sharing with seamless presentation and collaboration features
 * - Smart connectivity solutions for modern collaborative environments
 * - Interactive applications with built-in tools and applications
 */
export default function SmartTouchTablePage() {
    const [products, setProducts] = useState<SmartTouchTable[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [heroProduct, setHeroProduct] = useState<SmartTouchTable | null>(null)

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get<SmartTouchTableResponse>('/api/smart-solutions/smart-touch-table')

                if (response.data.success) {
                    console.log('✅ SmartTouchTable data fetched successfully:', response.data)
                    setProducts(response.data.data)
                    // Set the first product as hero product
                    if (response.data.data.length > 0) {
                        setHeroProduct(response.data.data[0])
                        console.log('🎯 SmartTouchTable Hero product set:', response.data.data[0])
                    }
                } else {
                    setError('Failed to fetch SmartTouchTable products')
                }
            } catch (err) {
                console.error('❌ Error fetching SmartTouchTable series data:', err)
                setError('Failed to load SmartTouchTable products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // SmartTouchTable-specific features highlighting touch table capabilities
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            ),
            title: "Advanced Touch Table Technology",
            description: "State-of-the-art touch table technology with high-precision multi-touch capabilities, providing an intuitive and responsive interactive experience for collaborative workspaces."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Multi-User Collaboration",
            description: "Enable multiple users to interact simultaneously on the same touch table, fostering real-time collaboration, brainstorming sessions, and interactive group activities."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
            ),
            title: "Gesture Recognition",
            description: "Advanced gesture recognition technology that understands complex hand movements, pinch-to-zoom, rotation, and multi-finger gestures for intuitive interaction."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
            ),
            title: "Content Sharing",
            description: "Seamless content sharing capabilities allowing users to present, collaborate, and share digital content across multiple devices and platforms in real-time."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "Smart Connectivity",
            description: "Advanced wireless and wired connectivity options with cloud integration, device synchronization, and seamless content sharing across collaborative platforms."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Interactive Applications",
            description: "Built-in interactive applications and tools designed specifically for touch table environments, enhancing productivity and creativity in collaborative settings."
        }
    ]

    // Loading state with beautiful skeleton
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading SmartTouchTable Series...</p>
                    <p className="text-gray-500 text-sm mt-2">Preparing touch table technology</p>
                </div>
            </div>
        )
    }

    // Error state with retry functionality
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

            {/* Advanced Features Section */}
            <ProductFeatures features={features} />

            {/* Products Gallery */}
            {products.length > 0 && <ProductGallery products={products} />}

            {/* Enhanced CTA Section with SmartTouchTable specific messaging */}
            <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
                        Touch Table Technology for Collaboration
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
                        Transform your collaborative workspace with our SmartTouchTable series. 
                        Experience the perfect blend of advanced touch table technology and 
                        interactive collaboration designed for modern team environments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
                        <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                            Get SmartTouchTable Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
                            Schedule Touch Table Demo
                        </button>
                    </div>
                    
                    {/* Additional SmartTouchTable Features */}
                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Multi-Touch</div>
                            <div className="text-red-100">Collaborative Interface</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Gesture</div>
                            <div className="text-red-100">Recognition Ready</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Interactive</div>
                            <div className="text-red-100">Applications</div>
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