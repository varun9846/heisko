"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { InteractiveDisplayIFP50, InteractiveDisplayIFP51, InteractiveDisplayIFP52, InteractiveDisplayIFP62, IFPDRK3588, IFPDADV311d2, IFPDT982, IFPDADV100, SmartBlackboardM86LB, SmartBlackboardM86, SmartTouchTable, SmartLiftingTouchTable, SmartTVLTS, IWBS82, IWBP82, ASFloorKiosk, PortablePanel, AMeetingPod, ATVStand, OPS1 } from '@/lib/types'
import { SkeletonLoader } from './SkeletonLoader'
import { getProductSeries, getProductPath, groupProductsBySeries, getCacheBustedImageUrl, forceDataRefresh } from '@/utils/api'

interface ProductGalleryProps {
  products: (InteractiveDisplayIFP50 | InteractiveDisplayIFP51 | InteractiveDisplayIFP52 | InteractiveDisplayIFP62 | IFPDRK3588 | IFPDADV311d2 | IFPDT982 | IFPDADV100 | SmartBlackboardM86LB | SmartBlackboardM86 | SmartTouchTable | SmartLiftingTouchTable | SmartTVLTS | IWBS82 | IWBP82 | ASFloorKiosk | PortablePanel | AMeetingPod | ATVStand | OPS1)[]
  category?: string
  loading?: boolean
  error?: string | null
  onRetry?: () => void
  onRefresh?: () => void
}

/**
 * Product gallery component for interactive display series
 * Displays all products in a responsive grid with a bold red theme and modern styling
 * Supports IFP50, IFP51, IFP52, and IFP62 series products
 */
export function ProductGallery({ products, category, loading = false, error = null, onRetry, onRefresh }: ProductGalleryProps) {
  const router = useRouter();
  
  // Group products by series using utility function
  // const groupedProducts = React.useMemo(() => {

     console.log("products on ProductGallery------------",products);
  //   return groupProductsBySeries(products);
  // }, [products]);


  const groupedProducts=products;
  // Show loading skeleton if loading
  if (loading) {
    return (
      <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Interactive Display Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category ? `${category} Products` : 'Tailored solutions for education, business, and engagement'}
            </p>
          </div>
          <SkeletonLoader type="gallery" count={2} />
        </div>
      </section>
    )
  }

  // Show error state if error exists
  if (error && onRetry) {
    return (
      <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Interactive Display Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category ? `${category} Products` : 'Tailored solutions for education, business, and engagement'}
            </p>
          </div>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Products</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={onRetry}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
   <>
       <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Interactive Display Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {category ? `${category} Products` : 'Tailored solutions for education, business, and engagement'}
          </p>
          {!category && (
            <p className="text-lg text-gray-500 mt-2">
              {products.length} products across {groupedProducts.length} categories
            </p>
          )}
        </div>
        
        {groupedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600">No products are currently available in this category.</p>
          </div>
        ) : (
          groupedProducts.map((product, index) => {
            const isEven = index % 2 === 0;
            const productPath = getProductPath(product.title);

            return (
              <div
                key={product.id}
                className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 p-6 lg:p-12`}>
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      {getProductSeries(product.title)}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {/* {product.description.substring(0, 250)}... */}
                      {product.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => router.push('/contact')}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
                      >
                        Learn More
                      </Button>
                      <Button
                        onClick={() => router.push('/contact')}
                        variant="outline"
                        className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-semibold transition-all"
                      >
                        Quotation
                      </Button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={getCacheBustedImageUrl(product.image)}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        
        <div className="text-center mt-12 space-y-4">
          <Button 
            onClick={() => router.push('/products')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            View All Models
          </Button>
          
          {onRefresh && (
            <div className="mt-4">
              <Button 
                onClick={onRefresh}
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-2 rounded-full text-sm transition-all"
              >
                Refresh Data
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
   
   </>
  )
}