"use client"
import React, { useState, useEffect } from "react";
import { Monitor, Zap, Shield, Users, Smartphone, Globe, ArrowRight, CheckCircle, Star, Quote } from "lucide-react";

// Enhanced feature data with more details
const features = [
  {
    icon: Monitor,
    title: "Premium 4K Displays",
    description: "Crystal-clear 4K resolution with HDR technology for stunning visual clarity and color accuracy that brings your content to life.",
    benefits: ["True-to-life colors", "HDR support", "Anti-glare coating"],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    stats: "99.9% Color Accuracy",
    rating: 5,
    highlight: "Industry Leading"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Ultra-fast response times and seamless connectivity with zero lag for professional workflows and gaming excellence.",
    benefits: ["1ms response time", "120Hz refresh rate", "Zero latency"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    stats: "1ms Response Time",
    rating: 5,
    highlight: "Ultra Fast"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Military-grade durability with extended warranties and robust construction designed for years of reliable performance.",
    benefits: ["5-year warranty", "Military-grade", "Dust resistant"],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    stats: "5-Year Warranty",
    rating: 5,
    highlight: "Military Grade"
  },
  {
    icon: Users,
    title: "Collaboration Ready",
    description: "Multi-user support with interactive features and wireless casting for seamless team collaboration and presentations.",
    benefits: ["Multi-touch support", "Wireless casting", "Screen sharing"],
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    stats: "10-Point Touch",
    rating: 5,
    highlight: "Team Focused"
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Seamless connectivity with all your devices through advanced wireless technology and universal compatibility.",
    benefits: ["Universal compatibility", "Wireless charging", "Bluetooth 5.0"],
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    stats: "Universal Compatible",
    rating: 5,
    highlight: "Universal"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Worldwide customer support network with 24/7 assistance and local service centers for peace of mind.",
    benefits: ["24/7 support", "Global coverage", "Local service"],
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
    stats: "24/7 Support",
    rating: 5,
    highlight: "Worldwide"
  }
];

// Enhanced stats with animations
const stats = [
  { value: "4K", label: "Resolution", icon: "🎯", description: "Ultra HD clarity" },
  { value: "1ms", label: "Response Time", icon: "⚡", description: "Lightning fast" },
  { value: "5yr", label: "Warranty", icon: "🛡️", description: "Peace of mind" },
  { value: "99%", label: "Satisfaction", icon: "😊", description: "Customer love" }
];

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate featured feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/3 to-blue-600/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
            <span className="text-red-600 font-semibold text-sm">FEATURES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose{" "}
            <span className="relative">
              <span className="text-red-600">Heisko</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-100 -skew-x-12 opacity-60"></div>
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of innovation, quality, and performance with our premium display solutions designed for modern professionals.
          </p>
        </div>

        {/* Featured Feature Carousel */}
        <div className="relative mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Featured Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <Quote className="w-12 h-12 text-red-500/30" />
                  <div className="flex space-x-1">
                    {[...Array(features[activeFeature].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-sm font-semibold">
                      {features[activeFeature].highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {features[activeFeature].title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {features[activeFeature].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                                     <div className="flex items-center gap-4">
                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].bgColor} flex items-center justify-center shadow-lg`}>
                       {React.createElement(features[activeFeature].icon, {
                         className: `w-8 h-8 bg-gradient-to-br ${features[activeFeature].color} bg-clip-text text-transparent`
                       })}
                     </div>
                    <div>
                      <div className="text-sm text-gray-500">Key Specification</div>
                      <div className="text-lg font-bold text-gray-900">{features[activeFeature].stats}</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature ? "bg-red-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 cursor-pointer ${
                hoveredFeature === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`w-10 h-10 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                </div>
                <div className="flex space-x-1">
                  {[...Array(feature.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Stats Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full mb-4">
                <span className="text-xs font-semibold text-gray-700">{feature.stats}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors group-hover:gap-3 duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Decorative Element */}
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Industry-Leading Specifications
            </h3>
            <p className="text-red-100">Numbers that define excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-red-100 font-medium mb-1">{stat.label}</div>
                <div className="text-red-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Workspace?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference that Heisko displays can make for your business. 
              Get started with a free consultation and demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Schedule Free Demo
              </button>
              <button className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300">
                View Specifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 