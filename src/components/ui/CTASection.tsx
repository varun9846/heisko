"use client"
import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, Mail, MapPin, Zap, Users, Award, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { useRouter } from "next/navigation";

// Particle component for animated background
const Particle = ({ delay }: { delay: number }) => {
  return (
    <div 
      className="absolute w-1 h-1 bg-red-300 rounded-full opacity-40 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  );
};

// Animated stats component
const StatCard = ({ icon: Icon, value, label, delay }: { 
  icon: any, 
  value: string, 
  label: string, 
  delay: number 
}) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetValue / 50;
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev >= targetValue) {
            clearInterval(counter);
            return targetValue;
          }
          return Math.min(prev + increment, targetValue);
        });
      }, 30);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative bg-white border-2 border-red-100 rounded-2xl p-6 hover:border-red-300 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {Math.floor(count)}{value.includes('+') ? '+' : ''}
        </div>
        <div className="text-gray-600 text-sm font-medium">{label}</div>
      </div>
    </div>
  );
};

// Enhanced contact card component
const ContactCard = ({ icon: Icon, title, primary, secondary, delay }: {
  icon: any,
  title: string,
  primary: string,
  secondary: string,
  delay: number
}) => {
  return (
    <div 
      className="group relative transform transition-all duration-700 hover:-translate-y-4"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative bg-white border-2 border-red-100 rounded-3xl p-8 hover:border-red-300 transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Floating icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-shadow duration-500">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full opacity-60 animate-ping" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-800 font-medium mb-1">{primary}</p>
        <p className="text-gray-500 text-sm">{secondary}</p>
        
        {/* Hover effect line */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

// Main CTASection component
export function CTASection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => router.push('/contact');
  const handleRequestDemo = () => router.push('/contact');

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-red-50 to-white overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-white" />
        
        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-200 to-red-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-300 to-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-100 to-red-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Particle system */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }, (_, i) => (
            <Particle key={i} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-200 rounded-full text-red-600 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Gen Display Technology
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-900">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Workspace
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Experience revolutionary intelligent displays that redefine collaboration, 
              boost productivity, and create unforgettable presentations that captivate your audience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton 
                onClick={handleGetStarted}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CTAButton>
              
              <button 
                onClick={handleRequestDemo}
                className="group px-8 py-4 border-2 border-red-500 text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative">
            {/* Main display mockup */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-red-100">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://via.placeholder.com/800x450.png?text=Heisko+Display+Demo')] bg-cover bg-center opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                
                {/* Floating UI elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-800 text-xs font-medium">Live Demo</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-red-500/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <span className="text-white text-sm font-medium">4K Ultra HD</span>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -left-8 grid grid-cols-2 gap-4">
              <StatCard icon={Users} value="10000+" label="Active Users" delay={0.5} />
              <StatCard icon={Award} value="99%" label="Satisfaction" delay={0.7} />
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <ContactCard 
            icon={Phone}
            title="Call Us"
            primary="+1 (555) 123-4567"
            secondary="Mon-Fri 9AM-6PM EST"
            delay={0.2}
          />
          <ContactCard 
            icon={Mail}
            title="Email Us"
            primary="info@heisko.com"
            secondary="24/7 Support"
            delay={0.4}
          />
          <ContactCard 
            icon={MapPin}
            title="Visit Us"
            primary="Booth #1734, ISTE 2025"
            secondary="July 16-18, 2025"
            delay={0.6}
          />
        </div>

        {/* Enhanced Trust Indicators */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center mb-8 px-6 py-3 bg-white border border-red-200 rounded-full shadow-md">
            <Zap className="w-5 h-5 text-red-500 mr-3" />
            <span className="text-gray-700 font-medium">Trusted by Industry Leaders Worldwide</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['TechCorp', 'InnovateLabs', 'DesignPro', 'StartupVentures'].map((company, index) => (
              <div 
                key={company}
                className="group relative bg-white border border-red-100 rounded-2xl p-6 hover:border-red-300 transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="relative text-gray-800 font-bold text-lg group-hover:text-red-600 transition-colors duration-300">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}