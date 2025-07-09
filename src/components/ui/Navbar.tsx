import React from "react";
import { Button } from "@/components/ui/button";
import "../../app/globals.css";
import Image from "next/image";
// Navbar component props (currently none needed)
type NavbarProps = Record<string, never>;

// Responsive navigation bar with logo, links, and CTA
export function Navbar({}: NavbarProps) {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo with image */}
        <a href="/" className="flex items-center  flex-shrink-0">
          <Image
            src="/Logo.jpg"
            alt="Heisko logo"
            width={120}
            height={120}
            className=" object-contain rounded"
            priority
          />
          {/* <span className="text-3xl font-bold text-red-600 tracking-tight">Heisko</span> */}
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Features</a>
          {/* Products Dropdown */}
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-red-600 font-medium transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
            >
              Products
            </button>
            <div
              className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50"
              role="menu"
              tabIndex={-1}
            >
              <a href="#mac-monitors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Mac Monitors</a>
              <a href="#designed-for-surface" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Designed For Surface</a>
              <a href="#windows-hello" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Windows Hello</a>
              <a href="#usb-c" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">USB-C</a>
              <a href="#touch" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Touch</a>
              <a href="#portable" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Portable</a>
              <a href="#ergonomic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Ergonomic</a>
              <a href="#webcam" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Webcam</a>
              <a href="#ultrawide" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Ultrawide</a>
            </div>
          </div>
          <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
          <a href="#solutions" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Solutions</a>
          <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Testimonials</a>
          <a href="#blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Blog</a>
          <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
          <a href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
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