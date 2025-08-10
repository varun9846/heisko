"use client"
import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useRouter } from "next/navigation";

// Enhanced testimonial data with more details
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Solutions",
    content: "Heisko displays have revolutionized our meeting rooms. The quality and reliability are unmatched, and our team productivity has increased by 40%. The seamless integration with our existing systems was flawless.",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg",
    industry: "Technology",
    companySize: "500+ employees",
    videoTestimonial: true
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Innovate Labs",
    content: "The wireless casting feature is a game-changer. No more cable clutter, and the setup was incredibly easy. Our clients are always impressed with the professional presentation quality.",
    rating: 5,
    avatar: "/images/avatars/avatar-2.jpg",
    industry: "Research & Development",
    companySize: "200+ employees",
    videoTestimonial: false
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio Pro",
    content: "Perfect color accuracy and sharp resolution. Our design team can now present their work with confidence knowing the displays will show true colors. The 4K clarity is outstanding.",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg",
    industry: "Creative Services",
    companySize: "50+ employees",
    videoTestimonial: true
  },
  {
    name: "David Thompson",
    role: "CEO",
    company: "Startup Ventures",
    content: "Investing in Heisko displays was one of the best decisions for our company. The ROI has been incredible, and our clients are always impressed. Support team is exceptional.",
    rating: 5,
    avatar: "/images/avatars/avatar-4.jpg",
    industry: "Finance",
    companySize: "100+ employees",
    videoTestimonial: false
  },
  {
    name: "Lisa Wang",
    role: "VP of Sales",
    company: "Global Solutions Inc",
    content: "The interactive features have transformed our sales presentations. We've seen a 60% increase in client engagement since implementing Heisko displays in our showrooms.",
    rating: 5,
    avatar: "/images/avatars/avatar-5.jpg",
    industry: "Sales & Marketing",
    companySize: "1000+ employees",
    videoTestimonial: true
  }
];

// Enhanced stats with animations
const stats = [
  { value: "98%", label: "Customer Satisfaction", icon: "😊" },
  { value: "50K+", label: "Displays Sold", icon: "📺" },
  { value: "24/7", label: "Support Available", icon: "🔧" },
  { value: "5★", label: "Average Rating", icon: "⭐" }
];

export default function TestimonialsSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
            <span className="text-red-600 font-semibold text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Our{" "}
            <span className="relative">
              <span className="text-red-600">Customers</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-100 -skew-x-12 opacity-60"></div>
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what professionals around the world are saying about Heisko's revolutionary display technology.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <Quote className="w-12 h-12 text-red-500/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonials[currentIndex].videoTestimonial && (
                    <div className="ml-auto">
                      <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors">
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">Watch Video</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-red-600 font-semibold">{testimonials[currentIndex].company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].industry}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].companySize}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-red-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={toggleAutoPlay}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ml-4"
            >
              {isAutoPlaying ? (
                <Pause className="w-6 h-6 text-gray-600" />
              ) : (
                <Play className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                hoveredCard === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.content.substring(0, 120)}..."
              </blockquote>

              {/* Company Info */}
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-semibold text-sm">{testimonial.company}</span>
                {testimonial.videoTestimonial && (
                  <button className="text-red-500 hover:text-red-600 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Decorative Element */}
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-red-100">Numbers that speak for themselves</p>
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
                <div className="text-red-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that Heisko displays can make for your business. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Free Demo
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}