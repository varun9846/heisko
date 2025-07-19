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
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo with image */}
        <a href="/" className="flex items-center flex-shrink-0 ml-4">
          <Image
            src="/Logo.jpg"
            alt="Heisko logo"
            width={120}
            height={120}
            className=" object-contain rounded mr-8"
            priority
          />
          {/* <span className="text-3xl font-bold text-red-600 tracking-tight">Heisko</span> */}
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* Interactive Displays Dropdown */}
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-red-600 font-medium transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
            >
              Interactive Displays
            </button>
            <div
              className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50"
              role="menu"
              tabIndex={-1}
            >
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Interactive Displays</h3>
              </div>
              <a href="/interactive-displays/ifp50-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">IFP50 Series</a>
              <a href="/interactive-displays/ifp51-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">IFP51 Series</a>
              <a href="/interactive-displays/ifp52-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">IFP52-2ED Series</a>
              <a href="/interactive-displays/ifp62-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">IFP62 Series</a>
              <a href="/interactive-displays/ifpg1-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">IFPG1 Series</a>
              <a href="/interactive-displays/ifp110" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 relative" role="menuitem">
                IFP110
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
              </a>
              <a href="/interactive-displays/ultrawide-series" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Ultrawide Series</a>
              <a href="/interactive-displays/higher-education-podium" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Higher Education Podium</a>
              <a href="/interactive-displays/slot-in-pcs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Slot-in PCs</a>
            </div>
          </div>
          {/* Direct View LED Dropdown */}
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-red-600 font-medium transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
            >
              Direct View LED
            </button>
            <div
              className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50"
              role="menu"
              tabIndex={-1}
            >
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Digital Displays</h3>
              </div>
              <div className="py-2">
                <div className="px-4 py-1 text-sm font-medium text-gray-900">Commercial Displays and Signage</div>
                <a href="/direct-view-led/cde30-series" className="block px-8 py-2 text-gray-700 hover:bg-gray-100 text-sm" role="menuitem">CDE30 Series</a>
                <a href="/direct-view-led/cde12-series" className="block px-8 py-2 text-gray-700 hover:bg-gray-100 text-sm" role="menuitem">CDE12 Series</a>
                <a href="/direct-view-led/cdeuw-series" className="block px-8 py-2 text-gray-700 hover:bg-gray-100 text-sm" role="menuitem">CDEUW Series</a>
              </div>
              <div className="py-2">
                <div className="px-4 py-1 text-sm font-medium text-gray-900">Direct View LED</div>
              </div>
              <div className="py-2">
                <div className="px-4 py-1 text-sm font-medium text-gray-900">Interactive Kiosk</div>
              </div>
            </div>
          </div>
          <a href="/surface-displays" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Surface Displays</a>
          <a href="/commercial-displays" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Commercial Displays</a>
          <a href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
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