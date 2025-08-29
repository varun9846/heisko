import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import { useRouter } from 'next/navigation';

interface ProductHeroProps {
  title: string;
  description: string;
  image: string;
}

/**
 * Full-width hero with gradient background and asymmetrical layout
 * Features large product image with parallax, circular specs badges, and bold CTAs
 */
export function ProductHero({ title, description, image }: ProductHeroProps) {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-r from-gray-50 via-white to-red-50">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Special Offer: Aug 25 - Sep 30
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">{description}</p>
            {/* Specs Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <span className="text-yellow-400">🎥</span>
                <span className="text-gray-900 font-medium">4K Resolution</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <span className="text-yellow-400">⚡</span>
                <span className="text-gray-900 font-medium">1ms Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <span className="text-yellow-400">🛡️</span>
                <span className="text-gray-900 font-medium">5-Year Warranty</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => router.push('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Learn More
              </Button>
              <Button
                onClick={() => router.push('/contact')}
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-semibold transition-all"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-105"
                style={{ transform: 'translateY(-10px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}