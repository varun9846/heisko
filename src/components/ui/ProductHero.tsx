import React from 'react'
import Image from 'next/image'
import { Button } from './button'

interface ProductHeroProps {
  title: string
  description: string
  image: string
}

/**
 * Enhanced Hero component for IFP50 series product page
 * Features a bold red theme with industry-leading specs and a clean CTA section
 */
export function ProductHero({ title, description, image }: ProductHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Interactive Display Series
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Specifications Section */}
            <div className="bg-red-600 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-center mb-4">Industry-Leading Specifications</h2>
              <p className="text-center text-sm mb-6">Numbers that define excellence</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">4K</h3>
                  <p className="text-xs">Resolution<br/>Ultra HD Clarity</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">1ms</h3>
                  <p className="text-xs">Response Time<br/>Lightning Fast</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">5yr</h3>
                  <p className="text-xs">Warranty<br/>Peace of Mind</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">99%</h3>
                  <p className="text-xs">Satisfaction<br/>Customer Love</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Ready to Transform Your Workspace?</h2>
              <p className="text-gray-600 mb-4">Experience the difference that Heisko displays can make for your business. Get started with a free consultation and demo today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-red-500/30 transition-all duration-300">
                  Schedule Free Demo
                </Button>
                <Button variant="outline" className="border-2 border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                  View Specifications
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}