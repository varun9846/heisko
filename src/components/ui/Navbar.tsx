import React from "react";
import { Button } from "@/components/ui/button";
import "../../app/globals.css";
// Navbar component props (currently none needed)
type NavbarProps = Record<string, never>;

// Responsive navigation bar with logo, links, and CTA
export function Navbar({}: NavbarProps) {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo Placeholder */}
        <div className="flex-shrink-0 text-3xl font-bold text-red-600 tracking-tight">
          Heikos
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Features</a>
          <a href="#products" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Products</a>
          <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
          <a href="#solutions" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Solutions</a>
          <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Testimonials</a>
          <a href="#blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Blog</a>
          <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
        </div>
        {/* CTA Button */}
        <div className="flex items-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
} 