"use client";
import React, { useState, useCallback } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { CTAButton } from "./CTAButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Carousel images with proper paths
const images = [
  "/images/carousel/image-1.jpg",
  "/images/carousel/image-2.jpg",
  "/images/carousel/image-3.png",
  "/images/carousel/image-4.png",
  "/images/carousel/image-5.png",
];

// Hero content for each slide
const heroContent = [
  {
    title: "Future-Proof Your Workspace",
    subtitle: "Elevate productivity with Heikos premium displays and solutions.",
    cta: "Shop Now"
  },
  {
    title: "Innovation Meets Design",
    subtitle: "Transform your environment with cutting-edge technology and elegant aesthetics.",
    cta: "Explore Products"
  },
  {
    title: "Professional Excellence",
    subtitle: "Delivering superior quality and performance for modern workplaces.",
    cta: "Learn More"
  },
  {
    title: "Smart Solutions",
    subtitle: "Intelligent displays that adapt to your workflow and enhance collaboration.",
    cta: "Get Started"
  },
  {
    title: "Premium Experience",
    subtitle: "Experience the difference with Heikos advanced display technology.",
    cta: "Contact Us"
  }
];

// HeroCarousel component props (currently none needed)
type HeroCarouselProps = Record<string, never>;

// Enhanced hero section with image carousel, custom red overlay, and professional CTA
export function HeroCarousel({}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    created(s) {
      s.container.addEventListener("mouseover", () => setIsPlaying(false));
      s.container.addEventListener("mouseout", () => setIsPlaying(true));
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Auto-slide functionality
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, instanceRef]);

  const nextSlide = useCallback(() => {
    instanceRef.current?.next();
  }, [instanceRef]);

  const prevSlide = useCallback(() => {
    instanceRef.current?.prev();
  }, [instanceRef]);

  const goToSlide = useCallback((index: number) => {
    instanceRef.current?.moveToIdx(index);
  }, [instanceRef]);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Enhanced Carousel Images with Ken Burns Effect */}
      <div ref={sliderRef} className="keen-slider absolute inset-0 w-full h-full">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide relative flex items-center justify-center overflow-hidden">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover scale-110 transition-transform duration-[3000ms] ease-out hover:scale-100"
              draggable={false}
              priority={idx === 0}
            />
            {/* Custom gradient overlay with #F20C1F theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F20C1F]/90 via-[#F20C1F]/70 to-[#F20C1F]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Hero Content with Enhanced Typography */}
      <div className="relative z-20 max-w-4xl mx-auto text-center text-white px-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl animate-fade-in">
            {heroContent[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-delay">
            {heroContent[currentSlide].subtitle}
          </p>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="animate-fade-in-delay-2">
          <CTAButton className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            {heroContent[currentSlide].cta}
          </CTAButton>
        </div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Play/Pause Button */}
        {/* <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-[#F20C1F]/30 rounded-full animate-bounce" />
    </section>
  );
} 