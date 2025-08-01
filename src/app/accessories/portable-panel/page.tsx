'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { PortablePanel, PortablePanelResponse } from '@/lib/types'

/**
 * Portable Panel Accessories Page
 * Fetches data from backend API and displays portable panel products with beautiful UI
 * Features modern portable panel technology for flexible display solutions
 */
export default function PortablePanelPage() {
    const [products, setProducts] = useState<PortablePanel[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [heroProduct, setHeroProduct] = useState<PortablePanel | null>(null)

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get<PortablePanelResponse>('/api/accessories/portable-panel')

                if (response.data.success) {
                    setProducts(response.data.data)
                    // Set the first product as hero product
                    if (response.data.data.length > 0) {
                        setHeroProduct(response.data.data[0])
                    }
                } else {
                    setError('Failed to fetch Portable Panel products')
                }
            } catch (err) {
                console.error('❌ Error fetching Portable Panel data:', err)
                setError('Failed to load Portable Panel products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // Portable Panel specific features
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
            ),
            title: "Portable Design",
            description: "Lightweight and compact design for easy transportation and quick setup in any location."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Quick Setup",
            description: "Rapid deployment with minimal configuration required for immediate use in presentations and meetings."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Versatile Mounting",
            description: "Multiple installation options including wall mount, stand mount, and portable configurations for maximum flexibility."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "High Resolution",
            description: "Crystal clear display quality with high-resolution screens for stunning visual presentations and content."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                </svg>
            ),
            title: "Touch Technology",
            description: "Advanced capacitive touch technology supporting multi-touch gestures for interactive presentations and collaboration."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Energy Efficient",
            description: "Low power consumption design with intelligent power management for extended battery life and cost savings."
        }
    ]

    // Loading state with beautiful skeleton
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading Portable Panel Series...</p>
                    <p className="text-gray-500 text-sm mt-2">Preparing portable display technology</p>
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

            {/* Enhanced CTA Section with Portable Panel specific messaging */}
            <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
                        Take Your Display Anywhere
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
                        Experience the freedom of portable displays with our advanced Portable Panel solutions. 
                        Perfect for presentations, meetings, and collaborative sessions with easy setup and 
                        professional-quality performance wherever you go.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
                        <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                            Get Portable Panel Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
                            Schedule Demo
                        </button>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">5 Min</div>
                            <div className="text-red-100">Quick Setup</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Lightweight</div>
                            <div className="text-red-100">Easy Transport</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Multi-Touch</div>
                            <div className="text-red-100">Interactive Display</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 