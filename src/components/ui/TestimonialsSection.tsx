import React from "react";
import { Star, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Solutions",
    content: "Heikos displays have revolutionized our meeting rooms. The quality and reliability are unmatched, and our team productivity has increased by 40%.",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Innovate Labs",
    content: "The wireless casting feature is a game-changer. No more cable clutter, and the setup was incredibly easy. Highly recommend!",
    rating: 5,
    avatar: "/images/avatars/avatar-2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio Pro",
    content: "Perfect color accuracy and sharp resolution. Our design team can now present their work with confidence knowing the displays will show true colors.",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg"
  },
  {
    name: "David Thompson",
    role: "CEO",
    company: "Startup Ventures",
    content: "Investing in Heikos displays was one of the best decisions for our company. The ROI has been incredible, and our clients are always impressed.",
    rating: 5,
    avatar: "/images/avatars/avatar-4.jpg"
  }
];

// Testimonials section with customer reviews
export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-heikos-red">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what professionals around the world are saying about Heikos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-heikos-red/30" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-heikos-red to-heikos-red-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-heikos-red to-heikos-red-light rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-heikos-red mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-heikos-red mb-2">50K+</div>
            <div className="text-gray-600">Displays Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-heikos-red mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-heikos-red mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
} 