import { HeroCarousel } from "../components/ui/HeroCarousel";
import { FeaturesSection } from "../components/ui/FeaturesSection";
import TestimonialsSection from "../components/ui/TestimonialsSection";
import { CTASection } from "../components/ui/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Final CTA Section */}
      <CTASection />
    </main>
  );
}
