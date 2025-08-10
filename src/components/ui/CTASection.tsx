"use client"
import React from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { useRouter } from "next/navigation";

// Enhanced call-to-action section with animations and modern design
export function CTASection() {
  const router = useRouter();
  
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements with Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Elevate Your Workspace with <span className="block">Heisko Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
          Discover cutting-edge intelligent displays that redefine collaboration and boost productivity. Join thousands of satisfied professionals worldwide.
        </p>

        {/* Hero Image Overlay */}
        <div className="relative mb-16">
          <div className="w-full h-64 md:h-96 bg-gray-800/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1200x600.png?text=Heisko+Display+Demo')] bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* CTA Buttons with Hover Effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <CTAButton 
            onClick={() => router.push('/contact')}
            className="text-lg px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-6 h-6 ml-2 inline-block" />
          </CTAButton>
          <button 
            onClick={() => router.push('/contact')}
            className="px-12 py-5 border-2 border-red-500/50 text-white font-semibold rounded-xl hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105"
          >
            <span>Request a Demo</span>
          </button>
        </div>

        {/* Contact Information with Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center group hover:bg-gray-800/50 p-6 rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
              <Phone className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
          </div>

          <div className="text-center group hover:bg-gray-800/50 p-6 rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
              <Mail className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400">info@heisko.com</p>
            <p className="text-gray-400 text-sm">24/7 Support</p>
          </div>

          <div className="text-center group hover:bg-gray-800/50 p-6 rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
              <MapPin className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400">Booth #1734, ISTE 2025</p>
            <p className="text-gray-400 text-sm">July 16-18, 2025</p>
          </div>
        </div>

        {/* Trust Indicators with Animation */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="w-28 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white font-semibold">TechCorp</span>
            </div>
            <div className="w-28 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white font-semibold">InnovateLabs</span>
            </div>
            <div className="w-28 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white font-semibold">DesignPro</span>
            </div>
            <div className="w-28 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white font-semibold">StartupVentures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}