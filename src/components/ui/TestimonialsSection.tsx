"use client"
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Solutions",
    content: "Heisko displays have revolutionized our meeting rooms. The quality and reliability are unmatched.",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg",
    industry: "Technology",
    companySize: "500+ employees",
    videoTestimonial: true
  },
  // ... (other testimonials truncated for brevity, keep the same structure)
];

const stats = [
  { value: "98%", label: "Customer Satisfaction", icon: "😊" },
  { value: "50K+", label: "Displays Sold", icon: "📺" },
  { value: "24/7", label: "Support Available", icon: "🔧" },
  { value: "5★", label: "Average Rating", icon: "⭐" }
];

export default function TestimonialsSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-white via-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real stories from real users</p>
        </div>
        {/* Featured Testimonial */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-8 h-8 text-red-500/30" />
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic mb-4">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <p className="text-gray-900 font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => router.push('/contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg"
          >
            Join Our Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}