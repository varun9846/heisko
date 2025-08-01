'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductHero } from '@/components/ui/ProductHero'
import { ProductFeatures } from '@/components/ui/ProductFeatures'
import { ProductGallery } from '@/components/ui/ProductGallery'
import { SmartBlackboardM86, SmartBlackboardM86Response } from '@/lib/types'

/**
 * SmartBlackboardM86 Series Smart Blackboard Page
 * Fetches data from backend API and displays products with beautiful UI
 * Features advanced smart blackboard technology and educational capabilities
 * 
 * SmartBlackboardM86 Series Highlights:
 * - Advanced smart blackboard technology for educational environments
 * - Enhanced touch capabilities with high precision for learning
 * - Educational software integration and collaborative learning
 * - Smart connectivity solutions for modern classrooms
 * - Interactive learning experiences with multi-user support
 */
export default function SmartBlackboardM86Page() {
    const [products, setProducts] = useState<SmartBlackboardM86[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [heroProduct, setHeroProduct] = useState<SmartBlackboardM86 | null>(null)

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get<SmartBlackboardM86Response>('/api/smart-solutions/smart-blackboard-m86')

                if (response.data.success) {
                    console.log('✅ SmartBlackboardM86 data fetched successfully:', response.data)
                    setProducts(response.data.data)
                    // Set the first product as hero product
                    if (response.data.data.length > 0) {
                        setHeroProduct(response.data.data[0])
                        console.log('🎯 SmartBlackboardM86 Hero product set:', response.data.data[0])
                    }
                } else {
                    setError('Failed to fetch SmartBlackboardM86 products')
                }
            } catch (err) {
                console.error('❌ Error fetching SmartBlackboardM86 series data:', err)
                setError('Failed to load SmartBlackboardM86 products. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // SmartBlackboardM86-specific features highlighting smart blackboard capabilities
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Smart Blackboard Technology",
            description: "Advanced smart blackboard technology with interactive capabilities, digital ink technology, and seamless integration with educational software for enhanced learning experiences."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Enhanced Touch Detection",
            description: "High-precision touch technology with multi-touch support, palm rejection, and ultra-responsive interaction for seamless educational presentations and collaborative learning."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: "Educational Integration",
            description: "Seamless integration with educational software, learning management systems, and digital curriculum tools for comprehensive classroom technology solutions."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Collaborative Learning",
            description: "Multi-user support with real-time collaboration features, interactive learning tools, and shared digital workspace capabilities for engaging group activities."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "Smart Connectivity",
            description: "Advanced wireless and wired connectivity options with cloud integration, device synchronization, and seamless content sharing across educational platforms."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Educational Workflow",
            description: "Intelligent integration with modern educational workflows, supporting lesson planning, student assessment, and interactive teaching methodologies."
        }
    ]

    // Loading state with beautiful skeleton
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading SmartBlackboardM86 Series...</p>
                    <p className="text-gray-500 text-sm mt-2">Preparing smart blackboard technology</p>
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

            {/* Enhanced CTA Section with SmartBlackboardM86 specific messaging */}
            <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
                        Smart Blackboard Technology for Education
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
                        Transform your classroom with our SmartBlackboardM86 series. 
                        Experience the perfect blend of advanced smart blackboard technology and 
                        educational innovation designed for modern learning environments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
                        <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-md hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
                            Get SmartBlackboardM86 Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
                            Schedule Educational Demo
                        </button>
                    </div>
                    
                    {/* Additional SmartBlackboardM86 Features */}
                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">4K</div>
                            <div className="text-red-100">Ultra HD Display</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Multi-Touch</div>
                            <div className="text-red-100">Interactive Learning</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <div className="text-3xl font-bold text-white mb-2">Educational</div>
                            <div className="text-red-100">Software Ready</div>
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