import React from "react";
import { Monitor, Zap, Shield, Users, Smartphone, Globe } from "lucide-react";

// Feature data with icons and descriptions
const features = [
  {
    icon: Monitor,
    title: "Premium Displays",
    description: "High-resolution displays with cutting-edge technology for optimal viewing experience.",
    color: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-fast response times and seamless performance for professional workflows.",
    color: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Durable construction with extended warranties for peace of mind.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Collaboration Ready",
    description: "Multi-user support and interactive features for team productivity.",
    color: "text-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Seamless connectivity with mobile devices and wireless casting.",
    color: "text-pink-600"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Worldwide customer support and service network for your needs.",
    color: "text-indigo-600"
  }
];

// Features section showcasing Heisko products and services
export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-Heisko-red">Heisko</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of innovation, quality, and performance with our premium display solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-Heisko-red/20"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-Heisko-red transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-Heisko-red to-Heisko-red-light rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-Heisko-red to-Heisko-red-light text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="font-semibold text-lg">Ready to Transform Your Workspace?</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
} 