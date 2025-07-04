import React from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { CTAButton } from "./CTAButton";

// Final call-to-action section
export function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-heikos-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-heikos-red/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-heikos-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-heikos-red">Transform</span> Your Workspace?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have already upgraded their displays with Heikos. 
            Experience the difference today.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <CTAButton className="text-lg px-10 py-4 bg-heikos-red hover:bg-heikos-red-dark transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </CTAButton>
          
          <button className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <span>Schedule Demo</span>
          </button>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-heikos-red/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heikos-red/30 transition-colors">
              <Phone className="w-8 h-8 text-heikos-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-heikos-red/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heikos-red/30 transition-colors">
              <Mail className="w-8 h-8 text-heikos-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400">info@heikos.com</p>
            <p className="text-gray-400 text-sm">24/7 Support</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-heikos-red/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heikos-red/30 transition-colors">
              <MapPin className="w-8 h-8 text-heikos-red" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400">Booth #1734</p>
            <p className="text-gray-400 text-sm">ISTE 2025 Conference</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">TechCorp</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">InnovateLabs</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">DesignPro</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">StartupVentures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 