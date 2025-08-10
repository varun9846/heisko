import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { InteractiveDisplayIFP50, InteractiveDisplayIFP51, InteractiveDisplayIFP52, InteractiveDisplayIFP62, IFPDRK3588, IFPDADV311d2, IFPDT982, IFPDADV100, SmartBlackboardM86LB, SmartBlackboardM86, SmartTouchTable, SmartLiftingTouchTable, SmartTVLTS, IWBS82, IWBP82, ASFloorKiosk, PortablePanel, AMeetingPod, ATVStand, OPS1 } from '@/lib/types'

interface ProductGalleryProps {
  products: (InteractiveDisplayIFP50 | InteractiveDisplayIFP51 | InteractiveDisplayIFP52 | InteractiveDisplayIFP62 | IFPDRK3588 | IFPDADV311d2 | IFPDT982 | IFPDADV100 | SmartBlackboardM86LB | SmartBlackboardM86 | SmartTouchTable | SmartLiftingTouchTable | SmartTVLTS | IWBS82 | IWBP82 | ASFloorKiosk | PortablePanel | AMeetingPod | ATVStand | OPS1)[]
}

/**
 * Product gallery component for interactive display series
 * Displays all products in a responsive grid with a bold red theme and modern styling
 * Supports IFP50, IFP51, IFP52, and IFP62 series products
 */
export function ProductGallery({ products }: ProductGalleryProps) {
  const router = useRouter();
  
  // Helper function to determine series from product title
  const getSeriesBadge = (title: string) => {
    if (title.includes('OPS') || title.includes('Open Pluggable')) return 'OPS Series'
    if (title.includes('TV Stand') || title.includes('TV-Stand') || title.includes('Stand')) return 'TV Stand Series'
    if (title.includes('Meeting Pod') || title.includes('Pod')) return 'Meeting Pod Series'
    if (title.includes('Portable Panel') || title.includes('Panel')) return 'Portable Panel Series'
    if (title.includes('Floor Kiosk') || title.includes('Kiosk')) return 'Floor Kiosk Series'
    if (title.includes('SmartTVLTS') || title.includes('Smart TV LTS')) return 'SmartTVLTS Series'
    if (title.includes('SmartLiftingTouchTable') || title.includes('Lifting Touch Table')) return 'SmartLiftingTouchTable Series'
    if (title.includes('SmartTouchTable') || title.includes('Touch Table')) return 'SmartTouchTable Series'
    if (title.includes('SmartBlackboardM86') || title.includes('M86')) return 'SmartBlackboardM86 Series'
    if (title.includes('IWBP82') || title.includes('P-82')) return 'IWBP82 Series'
    if (title.includes('IWBS82') || title.includes('S-82')) return 'IWBS82 Series'
    if (title.includes('ADV100')) return 'ADV100 Series'
    if (title.includes('T982')) return 'T982 Professional Series'
    if (title.includes('ADV311D2')) return 'ADV311D2 Enterprise Series'
    if (title.includes('RK3588')) return 'RK3588 Elite Series'
    if (title.includes('IFP62')) return 'IFP62 Elite Series'
    if (title.includes('IFP52')) return 'IFP52 Series'
    if (title.includes('IFP51')) return 'IFP51 Series'
    if (title.includes('M86LB')) return 'M86LB Series'
    return 'IFP50 Series'
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Display Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of interactive displays designed for modern classrooms, boardrooms, and executive environments
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                    {getSeriesBadge(product.title)}
                  </span>
                </div>

                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300">
                    View Details
                  </Button>
                </div> */}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {product?.title}
                </h3>
              
                <p className="text-gray-600 mb-4  text-md">
                  {product?.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    onClick={() => router.push('/contact')}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    Get Quote
                  </Button>
                  <Button variant="outline" className="px-4 py-2 border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 rounded-lg transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in-delay-2">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-red-500/30 transition-all duration-300">
            View All Models
          </Button>
        </div>
      </div>
    </section>
  )
}