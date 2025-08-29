"use client"
import React, { useState, useEffect, useRef } from "react";
import { Monitor, Zap, Shield, Users, Smartphone, Globe, ArrowRight, CheckCircle, Star, Play, TrendingUp, Award, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

// Enhanced feature data with red/white theme
const features = [
  {
    id: 1,
    icon: Monitor,
    title: "Ultra 4K Display",
    shortDesc: "Crystal-clear 4K resolution",
    description: "Experience unparalleled visual clarity with our premium 4K displays featuring HDR technology, 99.9% color accuracy, and anti-glare coating for professional excellence.",
    benefits: ["True 4K Resolution", "HDR10+ Support", "Anti-Glare Coating", "Wide Color Gamut"],
    stats: { value: "4K", unit: "UHD", metric: "Resolution" },
    color: "from-red-500 to-red-600",
    bgGlow: "shadow-red-500/20",
    category: "Display",
    popularity: 95,
    isNew: false,
    isPremium: true
  },
  {
    id: 2,
    icon: Zap,
    title: "Lightning Performance",
    shortDesc: "1ms ultra-fast response",
    description: "Revolutionary performance with 1ms response time, 120Hz refresh rate, and zero-latency technology for seamless professional workflows and gaming.",
    benefits: ["1ms Response Time", "120Hz Refresh", "Zero Latency", "GPU Acceleration"],
    stats: { value: "1", unit: "ms", metric: "Response Time" },
    color: "from-red-400 to-red-500",
    bgGlow: "shadow-red-500/20",
    category: "Performance",
    popularity: 92,
    isNew: true,
    isPremium: true
  },
  {
    id: 3,
    icon: Shield,
    title: "Military-Grade Build",
    shortDesc: "Built to last forever",
    description: "Uncompromising durability with military-grade construction, 5-year warranty, and rigorous testing for long-lasting professional reliability.",
    benefits: ["5-Year Warranty", "Military Standard", "Dust Resistant", "Drop Protection"],
    stats: { value: "5", unit: "yrs", metric: "Warranty" },
    color: "from-red-600 to-red-700",
    bgGlow: "shadow-red-600/20",
    category: "Durability",
    popularity: 89,
    isNew: false,
    isPremium: true
  },
  {
    id: 4,
    icon: Users,
    title: "Team Collaboration",
    shortDesc: "Multi-user interaction",
    description: "Advanced collaboration features with 10-point multi-touch, wireless casting, and real-time screen sharing for seamless teamwork.",
    benefits: ["10-Point Touch", "Wireless Casting", "Screen Sharing", "Multi-User Mode"],
    stats: { value: "10", unit: "pts", metric: "Touch Points" },
    color: "from-red-500 to-red-600",
    bgGlow: "shadow-red-500/20",
    category: "Collaboration",
    popularity: 88,
    isNew: true,
    isPremium: false
  },
  {
    id: 5,
    icon: Smartphone,
    title: "Universal Connect",
    shortDesc: "All devices, one display",
    description: "Seamless integration with all devices through universal compatibility, wireless charging dock, and Bluetooth 5.0 connectivity.",
    benefits: ["Universal Compatible", "Wireless Charging", "Bluetooth 5.0", "Quick Connect"],
    stats: { value: "100", unit: "%", metric: "Compatible" },
    color: "from-red-400 to-red-600",
    bgGlow: "shadow-red-500/20",
    category: "Connectivity",
    popularity: 91,
    isNew: false,
    isPremium: false
  },
  {
    id: 6,
    icon: Globe,
    title: "Global Support",
    shortDesc: "24/7 worldwide assistance",
    description: "Comprehensive global support network with 24/7 assistance, local service centers, and multilingual customer care worldwide.",
    benefits: ["24/7 Support", "Global Network", "Local Service", "Multi-Language"],
    stats: { value: "24", unit: "/7", metric: "Support" },
    color: "from-red-600 to-red-700",
    bgGlow: "shadow-red-600/20",
    category: "Support",
    popularity: 94,
    isNew: false,
    isPremium: true
  }
];

// Performance metrics with red theme
const performanceMetrics = [
  { label: "Color Accuracy", value: 99.9, unit: "%", icon: "🎯" },
  { label: "Response Time", value: 1, unit: "ms", icon: "⚡" },
  { label: "Customer Rating", value: 4.9, unit: "/5", icon: "⭐" },
  { label: "Uptime", value: 99.9, unit: "%", icon: "🔄" }
];

// Floating particle component
const FloatingParticle = ({ delay, duration = 4 }: { delay: number, duration?: number }) => {
  return (
    <div 
      className="absolute w-1 h-1 bg-red-400/60 rounded-full animate-ping"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
};

// Interactive feature card component
const FeatureCard = ({ feature, index, isHovered, onHover, onLeave }: {
  feature: typeof features[0],
  index: number,
  isHovered: boolean,
  onHover: () => void,
  onLeave: () => void
}) => {
  const router = useRouter();

  return (
    <div 
      className={`group relative transform transition-all duration-700 cursor-pointer ${
        isHovered ? 'scale-105 -translate-y-8 z-20' : 'hover:scale-102 hover:-translate-y-2'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-lg opacity-0 ${isHovered ? 'opacity-60' : 'group-hover:opacity-30'} transition-all duration-500`} />
      
      {/* Main card */}
      <div className="relative bg-white shadow-xl border border-gray-200 hover:border-red-300 rounded-3xl p-8 transition-all duration-500">
        
        {/* Card header */}
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg ${isHovered ? 'animate-pulse' : ''}`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            {feature.isNew && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-red-400 text-red-400" />
              ))}
            </div>
            <div className="text-xs text-gray-600">{feature.category}</div>
          </div>
        </div>

        {/* Premium badge */}
        {feature.isPremium && (
          <div className="inline-flex items-center px-3 py-1 bg-red-50 border border-red-200 rounded-full mb-4">
            <Award className="w-3 h-3 text-red-500 mr-1" />
            <span className="text-red-500 text-xs font-medium">Premium</span>
          </div>
        )}

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {feature.shortDesc}
        </p>

        {/* Stats display */}
        <div className="bg-red-50 rounded-xl p-4 mb-6 border border-red-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {feature.stats.value}<span className="text-red-500">{feature.stats.unit}</span>
            </div>
            <div className="text-xs text-gray-600">{feature.stats.metric}</div>
          </div>
        </div>

        {/* Popularity bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-600">Popularity</span>
            <span className="text-xs text-gray-700">{feature.popularity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-1000`}
              style={{ width: isHovered ? `${feature.popularity}%` : '0%' }}
            />
          </div>
        </div>

        {/* Benefits list - shown on hover */}
        <div className={`space-y-2 mb-6 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'} overflow-hidden`}>
          {feature.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
              <span className="text-xs text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => router.push('/about')}
          className={`w-full flex items-center justify-between px-4 py-3 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 rounded-xl transition-all duration-300 group/btn ${isHovered ? 'bg-red-100 border-red-300' : ''}`}
        >
          <span className="text-sm font-medium text-gray-700 group-hover/btn:text-red-700">Explore</span>
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover/btn:text-red-500 group-hover/btn:translate-x-1 transition-all duration-300" />
        </button>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-500 pointer-events-none`} />
      </div>
    </div>
  );
};

// Performance metric component
const MetricCard = ({ metric, index }: { metric: typeof performanceMetrics[0], index: number }) => {
  const [count, setCount] = useState(0);
  const targetValue = metric.value;

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetValue / 60;
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev >= targetValue) {
            clearInterval(counter);
            return targetValue;
          }
          return Math.min(prev + increment, targetValue);
        });
      }, 20);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [targetValue, index]);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white shadow-lg border border-red-100 rounded-2xl p-6 hover:border-red-300 hover:shadow-xl transition-all duration-500">
        <div className="text-center">
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {metric.icon}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {count.toFixed(metric.unit === "/5" ? 1 : metric.unit === "%" ? 1 : 0)}
            <span className="text-red-500 text-lg ml-1">{metric.unit}</span>
          </div>
          <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
        </div>
      </div>
    </div>
  );
};

// Main component
export function FeaturesSection() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const featuredFeature = features[featuredIndex];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-white" />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-100 to-red-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-200 to-red-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-50 to-red-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-200 rounded-full mb-8">
            <TrendingUp className="w-5 h-5 text-red-600 mr-3" />
            <span className="text-red-600 font-semibold">PREMIUM FEATURES</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Heisko?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the perfect fusion of cutting-edge technology, premium quality, and unmatched performance 
            that transforms how professionals work and collaborate.
          </p>
        </div>

        {/* Featured showcase */}
        <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative bg-white shadow-2xl border border-red-100 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${featuredFeature.color} flex items-center justify-center shadow-lg`}>
                    <featuredFeature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-red-600 text-sm font-medium">FEATURED</span>
                      {featuredFeature.isNew && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">NEW</span>
                      )}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {featuredFeature.title}
                </h3>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {featuredFeature.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredFeature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-gray-900">
                      {featuredFeature.stats.value}
                      <span className="text-red-500">{featuredFeature.stats.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{featuredFeature.stats.metric}</div>
                  </div>
                  
                  <button 
                    onClick={() => router.push('/about')}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    <span>Interactive Demo</span>
                  </button>
                </div>
              </div>

              {/* Visual showcase */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-2xl overflow-hidden border border-red-200">
                  <img
                    src="https://rlljkvmptzljhonllyie.supabase.co/storage/v1/object/public/interactivedisplay-ifp52/ifp52/IND52-4.jpg"
                    alt={featuredFeature.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ zIndex: 1 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${featuredFeature.color} opacity-20`} style={{ zIndex: 2 }} />
                  
                  {/* Floating stats */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-10">
                    <div className="text-gray-900 font-bold">{featuredFeature.stats.value}{featuredFeature.stats.unit}</div>
                    <div className="text-gray-600 text-xs">{featuredFeature.stats.metric}</div>
                  </div>
                  
                  {/* <div className="absolute bottom-4 right-4 bg-red-500/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-10">
                    <div className="text-white text-sm font-medium">Live Preview</div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Feature selector */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === featuredIndex 
                        ? "bg-red-500 w-8" 
                        : "bg-gray-300 hover:bg-red-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Performance metrics */}
        <div className={`mb-24 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Industry-Leading Performance
              </h3>
              <p className="text-red-100 text-lg">Numbers that define excellence in display technology</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative bg-white shadow-2xl border border-red-100 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent rounded-3xl" />
            
            <div className="relative">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Workspace?
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have revolutionized their workflow with Heisko displays. 
                Experience the difference that premium technology makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => router.push('/contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl shadow-red-500/25 transform hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button 
                  onClick={() => router.push('/contact')}
                  className="px-8 py-4 border-2 border-red-500 text-red-600 font-bold rounded-xl hover:bg-red-50 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}