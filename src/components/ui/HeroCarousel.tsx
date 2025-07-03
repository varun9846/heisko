"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { CTAButton } from "./CTAButton";

const images = [
  "/public/images/carousel-1.jpg",
  "/public/images/carousel-2.jpg",
  "/public/images/cables.jpg",
];

interface HeroCarouselProps {}

// Hero section with image carousel, red overlay, and CTA
export function HeroCarousel({}: HeroCarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
  });

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-red-50 overflow-hidden">
      {/* Carousel Images */}
      <div ref={sliderRef} className="keen-slider absolute inset-0 w-full h-full">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="object-cover w-full h-full opacity-70"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-red-500/60 z-10" />
      {/* Hero Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Future-Proof Your Workspace</h1>
        <p className="text-lg md:text-2xl font-medium drop-shadow">Elevate productivity with Heikos premium displays and solutions.</p>
        <CTAButton>Shop Now</CTAButton>
      </div>
    </section>
  );
} 