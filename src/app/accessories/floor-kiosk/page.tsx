'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { ASFloorKiosk, ASFloorKioskResponse } from '@/lib/types'

/**
 * Floor Kiosk Accessories Page
 * Fetches data from backend API and displays floor kiosk products with beautiful UI
 * Features modern kiosk technology for interactive customer engagement
 */
export default function FloorKioskPage() {
    const [products, setProducts] = useState<ASFloorKiosk[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [heroProduct, setHeroProduct] = useState<ASFloorKiosk | null>(null)

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get<ASFloorKioskResponse>('/api/accessories/floor-kiosk')

                if (response.data.success) {
                    setProducts(response.data.data)
                    // Set the first product as hero product
                    if (response.data.data.length > 0) {
                        setHeroProduct(response.data.data[0])
                    }
                } else {
                    setError('Failed to fetch Floor Kiosk products')
                }
            } catch (err) {
                console.error('❌ Error fetching Floor Kiosk data:', err)
                setError('Failed to load Floor Kiosk products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // Floor Kiosk specific features
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Interactive Touch Display",
            description: "High-resolution capacitive touch screen with multi-touch support for intuitive user interaction and seamless navigation."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Durable Construction",
            description: "Built with industrial-grade materials and vandal-resistant design for high-traffic environments and 24/7 operation."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "Wireless Connectivity",
            description: "Built-in WiFi and Bluetooth connectivity for easy content updates, remote management, and seamless integration with existing systems."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Energy Efficient",
            description: "Advanced power management system with automatic sleep mode and LED backlighting for optimal energy consumption and cost savings."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Easy Installation",
            description: "Modular design with simple mounting options and flexible positioning for quick deployment in various environments."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Analytics & Reporting",
            description: "Built-in analytics tools to track user interactions, content performance, and engagement metrics for data-driven insights."
        }
    ]

    // Loading state with beautiful skeleton
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading Floor Kiosk Series...</p>
                    <p className="text-gray-500 text-sm mt-2">Preparing interactive kiosk technology</p>
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

            {/* Enhanced CTA Section with Floor Kiosk specific messaging */}
            <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
                        Transform Your Customer Experience
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
                        Elevate your business with our advanced Floor Kiosk solutions. 
                        Provide interactive information, streamline customer service, and create 
                        engaging experiences that drive customer satisfaction and operational efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
                        <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                            Get Floor Kiosk Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
                            Schedule Demo
                        </button>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">24/7</div>
                            <div className="text-red-100">Always Available</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Multi-Touch</div>
                            <div className="text-red-100">Interactive Experience</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Vandal-Proof</div>
                            <div className="text-red-100">Durable Design</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 