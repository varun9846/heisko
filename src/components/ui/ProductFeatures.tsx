import React from 'react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface ProductFeaturesProps {
  features: Feature[]
}

/**
 * Features section component for IFP50 series
 * Displays key product features in a grid layout with a bold red theme and modern styling
 */
export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cutting-edge technology with our IFP50 series interactive displays
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl hover:bg-red-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-delay-2">
          <div className="inline-flex items-center px-6 py-3 bg-red-500/10 text-red-600 rounded-full text-lg font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            All features included in every IFP50 model
          </div>
        </div>
      </div>
    </section>
  )
}