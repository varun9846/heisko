'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { InteractiveDisplayIFP62, IFP62SeriesResponse } from '@/lib/types'

/**
 * IFP62 Series Interactive Display Page
 * Premium executive-grade interactive displays with cutting-edge technology
 * 
 * Features:
 * - 12K Ultra HD resolution
 * - Neural network AI integration
 * - Quantum encryption and security
 * - Holographic projection capabilities
 * - Military-grade security protocols
 */
export default function IFP62SeriesPage() {
    const [products, setProducts] = useState<InteractiveDisplayIFP62[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [heroProduct, setHeroProduct] = useState<InteractiveDisplayIFP62 | null>(null)

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get<IFP62SeriesResponse>('/api/interactive-display/ifp62-series')

                if (response.data.success) {
                    setProducts(response.data.data)
                    // Set the first product as hero product
                    if (response.data.data.length > 0) {
                        setHeroProduct(response.data.data[0])

                    }
                } else {
                    setError('Failed to fetch IFP62 products')
                }
            } catch (err) {
                console.error('Error fetching IFP62 series data:', err)
                setError('Failed to load IFP62 products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // Premium features for IFP62 series - Executive Grade
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "12K Ultra HD Display",
            description: "Revolutionary 12K resolution with neural network-enhanced image processing for unparalleled visual clarity and realism in executive environments."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Neural Network AI",
            description: "Advanced neural network AI with machine learning capabilities for intelligent content optimization, user behavior analysis, and predictive analytics."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Quantum Encryption",
            description: "Military-grade quantum encryption with biometric authentication and quantum-resistant security protocols for ultra-secure corporate environments."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                </svg>
            ),
            title: "Holographic Projection",
            description: "Cutting-edge holographic projection technology with 3D spatial mapping and interactive holographic interfaces for immersive presentations."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Quantum Computing Ready",
            description: "Quantum computing integration capabilities with quantum neural networks for advanced data processing and future-proof technology infrastructure."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "7G Connectivity",
            description: "Next-generation 7G wireless connectivity with ultra-low latency and massive bandwidth for seamless real-time collaboration and data transfer."
        }
    ]

    // Loading state with premium styling
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-red-600 mx-auto mb-6"></div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading IFP62 Elite Series</h2>
                    <p className="text-gray-600">Preparing premium executive displays...</p>
                </div>
            </div>
        )
    }

    // Error state with premium styling
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Executive Access Error</h2>
                    <p className="text-gray-600 mb-8 text-lg">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                        Retry Access
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

            {/* Products Gallery */}
            {products.length > 0 && <ProductGallery products={products} />}

            {/* Features Section */}
            <ProductFeatures features={features} />


            {/* Premium CTA Section */}
            <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 animate-fade-in tracking-tight">
                        Elite Executive Experience
                    </h2>
                    <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-5xl mx-auto animate-fade-in-delay leading-relaxed">
                        Experience the pinnacle of interactive display technology with our IFP62 Elite Series.
                        Designed for Fortune 500 boardrooms, government headquarters, and ultra-secure corporate environments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-delay-2">
                        <button className="bg-white text-red-600 hover:bg-red-50 px-10 py-5 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300">
                            Schedule Elite Demo
                        </button>
                        <button className="border-3 border-white text-white hover:bg-white hover:text-red-600 px-10 py-5 text-xl font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white">
                            Contact Executive Sales
                        </button>
                    </div>

                    {/* Premium Badge */}
                    <div className="mt-12 animate-fade-in-delay-2">
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/20">
                            <svg className="w-6 h-6 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" />
                            </svg>
                            Elite Executive Series - Premium Technology
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 