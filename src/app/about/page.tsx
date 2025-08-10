import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Globe, 
  Users, 
  Zap, 
  Shield, 
  Target, 
  Heart, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Tv, 
  PenTool,
  Lightbulb,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  Building2,
  Rocket,
  Eye,
  Crown,
  Layers,
  Infinity
} from "lucide-react";
import Link from "next/link";

// SEO metadata for the About Us page
export const metadata: Metadata = {
  title: "About Heisko - Global Leader in Visual Display Technologies",
  description: "Learn about Heisko Corporation, an Australian integrated technology solutions company. Discover our mission, vision, history, and comprehensive product ecosystem including interactive displays, IFPD series, smart solutions, and more.",
  keywords: "Heisko, visual display technologies, interactive displays, IFPD, smart solutions, Australian technology, display solutions, collaboration tools",
  openGraph: {
    title: "About Heisko - Global Leader in Visual Display Technologies",
    description: "Empowering education, businesses, and individuals with innovative visual display technologies that transform how we see and interact with the world.",
    type: "website",
  },
};

// About Us page component
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-red-50">
      
      {/* Enhanced Hero Section with Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-red-50 to-red-100 overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-30 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-100/40 to-orange-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-red-300/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-red-500/10 backdrop-blur-md border border-red-200 rounded-full mb-8 animate-fade-in">
              <Crown className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-gray-800 font-semibold">Global Technology Leader</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-red-600 to-red-500 mb-8 animate-fade-in leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Heisko</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed animate-fade-in-delay mb-12">
              Transforming the future of visual experiences through 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 font-bold"> revolutionary technology</span>
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Discover Our Story
                </span>
              </button>
              
              <button className="group flex items-center px-8 py-4 bg-white/80 backdrop-blur-md border border-red-200 text-gray-800 font-bold rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Journey
              </button>
            </div>
          </div>
          
          {/* Floating Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-20 animate-fade-in-delay-3">
            {[
              { number: "40+", label: "Years Innovation", icon: Rocket },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "1M+", label: "Happy Customers", icon: Users },
              { number: "99%", label: "Satisfaction Rate", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-black text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision with 3D Cards */}
      <section className="py-32 px-6 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(239,68,68,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-200 rounded-full mb-8">
              <Eye className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-gray-800 font-semibold">Our Purpose & Vision</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Innovation</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission & Vision Cards */}
            <div className="space-y-8">
              {/* Mission Card */}
              <div className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800">Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To empower education, businesses, and individuals with innovative hardware, software, 
                    and services for exceptional visual experiences that transform how we work, learn, and collaborate.
                  </p>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800">Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To help users "see the difference" by distinguishing ordinary from extraordinary through 
                    visually powerful and seamless experiences that inspire creativity and productivity.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 3D Floating Values */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Heart, text: "Customer Focus", color: "from-red-500 to-red-600" },
                  { icon: TrendingUp, text: "Growth Mindset", color: "from-red-500 to-red-600" },
                  { icon: Users, text: "Teamwork", color: "from-red-500 to-red-600" },
                  { icon: Zap, text: "Agility", color: "from-red-500 to-red-600" },
                  { icon: Shield, text: "Integrity", color: "from-red-500 to-red-600" },
                  { icon: Globe, text: "Social Impact", color: "from-red-500 to-red-600" }
                ].map((value, index) => (
                  <div key={index} className="group relative transform hover:scale-110 transition-all duration-300" style={{
                    animationDelay: `${index * 0.1}s`
                  }}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                    <div className="relative bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 shadow-lg">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-800 font-bold">{value.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Timeline */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-200 rounded-full mb-8">
              <Infinity className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-gray-800 font-semibold">Evolution Timeline</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Revolutionary</span> Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pioneers to global leaders - discover how we've shaped the future of visual technology
            </p>
          </div>
          
          <div className="relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-lg"></div>
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-300/50 animate-pulse"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              {[
                {
                  year: "1980s",
                  title: "The Genesis",
                  description: "Revolutionary CRT and LCD monitor manufacturing that set new industry standards for visual clarity and reliability.",
                  icon: Monitor,
                  gradient: "from-red-500 to-red-600"
                },
                {
                  year: "1990s-2000s",
                  title: "Market Domination",
                  description: "Explosive growth into education and enterprise markets, establishing Heisko as the go-to brand for premium visual solutions.",
                  icon: TrendingUp,
                  gradient: "from-red-500 to-red-600"
                },
                {
                  year: "2010s",
                  title: "Interactive Revolution",
                  description: "Pioneered touchscreen technology and interactive displays that transformed classrooms and boardrooms worldwide.",
                  icon: PenTool,
                  gradient: "from-red-500 to-red-600"
                },
                {
                  year: "2020s",
                  title: "AI-Powered Future",
                  description: "Launched groundbreaking AI platforms that redefined collaboration, making technology truly intelligent and intuitive.",
                  icon: Zap,
                  gradient: "from-red-500 to-red-600"
                },
                {
                  year: "Today",
                  title: "Global Excellence",
                  description: "Leading the world in comprehensive visual display ecosystems, setting tomorrow's standards today.",
                  icon: Crown,
                  gradient: "from-red-500 to-red-600"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-2xl border-4 border-red-200 group-hover:scale-125 transition-all duration-500`}>
                      <div className="absolute inset-0 rounded-full animate-ping bg-red-300/30"></div>
                      <item.icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                  </div>
                  
                  {/* Enhanced Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="group-hover:scale-105 transition-all duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                      <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white font-black text-2xl rounded-2xl mb-4 shadow-lg`}>
                          {item.year}
                        </div>
                        <h3 className="text-3xl font-black text-gray-800 mb-4">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="py-32 px-6 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-200 rounded-full mb-8">
              <Layers className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-gray-800 font-semibold">Product Excellence</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future with our comprehensive suite of cutting-edge visual technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Interactive Displays",
                description: "Next-gen IFP50-62 series with 4K resolution, multi-touch, and AI-powered collaboration",
                color: "from-blue-500 to-blue-600",
                highlight: "4K Ultra HD"
              },
              {
                icon: Tv,
                title: "IFPD Professional Series",
                description: "Enterprise-grade RK3588, ADV311D2, T982 series for mission-critical environments",
                color: "from-green-500 to-green-600",
                highlight: "Enterprise Ready"
              },
              {
                icon: PenTool,
                title: "Smart Solutions",
                description: "Revolutionary Smart Blackboards and Touch Tables that redefine interactive experiences",
                color: "from-purple-500 to-purple-600",
                highlight: "AI Powered"
              },
              {
                icon: Smartphone,
                title: "Premium Accessories",
                description: "Complete ecosystem including kiosks, meeting pods, OPS, and professional stands",
                color: "from-orange-500 to-orange-600",
                highlight: "Complete Suite"
              },
              {
                icon: Tablet,
                title: "Software Platforms",
                description: "myheiskoBoard and ClassSwift with revolutionary AI-powered collaboration tools",
                color: "from-red-500 to-red-600",
                highlight: "AI Enhanced"
              },
              {
                icon: Globe,
                title: "Global Excellence",
                description: "24/7 worldwide support network with local expertise and premium service guarantee",
                color: "from-indigo-500 to-indigo-600",
                highlight: "24/7 Support"
              }
            ].map((product, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                
                <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 h-full shadow-lg">
                  {/* Highlight Badge */}
                  <div className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r ${product.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {product.highlight}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{product.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{product.description}</p>
                  
                  {/* <div className="flex items-center text-red-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${product.color}`}>
                      Explore Technology
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Global Presence */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-200 rounded-full mb-8">
                <Building2 className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-gray-800 font-semibold">Global Excellence</span>
              </div>
              
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Worldwide</span> Leadership
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Delivering premium visual experiences across the globe with unmatched service excellence 
                and innovative solutions that set industry standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Global Markets", value: "50+", icon: Globe, color: "from-red-500 to-red-600" },
                  { label: "Premium Support", value: "24/7", icon: Shield, color: "from-red-500 to-red-600" },
                  { label: "Service Centers", value: "100+", icon: MapPin, color: "from-red-500 to-red-600" },
                  { label: "Excellence Rate", value: "99%", icon: Star, color: "from-red-500 to-red-600" }
                ].map((stat, index) => (
                  <div key={index} className="group relative transform hover:scale-105 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                    <div className="relative bg-white/80 backdrop-blur-lg border border-red-200 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg mr-3`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-3xl font-black text-gray-800">{stat.value}</span>
                      </div>
                      <p className="text-gray-600 font-bold">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Headquarters Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-800">Global Headquarters</h3>
                </div>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h4 className="font-black text-2xl text-gray-800 mb-2">Heisko Corporation</h4>
                    <p className="text-lg">Australian Integrated Technology Solutions</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p>Unit 52, 32-34 Mons Rd.</p>
                    <p>Westmead NSW, Australia</p>
                  </div>
                  
                  <div className="pt-6 border-t border-red-200 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800">Premium Support Line</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800">info@heisko.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Excellence */}
      <section className="py-32 px-6 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-200 rounded-full mb-8">
            <Shield className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-gray-800 font-semibold">Environmental Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Sustainable</span> Future
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            Committed to environmental sustainability and social responsibility, with ambitious goals 
            to achieve net-zero emissions by 2050 while maintaining our high standards of quality and innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Sustainable Practices",
                description: "Implementing eco-friendly manufacturing processes and reducing our carbon footprint",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Target,
                title: "Net-Zero Goal",
                description: "Committed to achieving net-zero emissions by 2050 through innovative solutions",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Heart,
                title: "Social Responsibility",
                description: "Supporting communities and promoting responsible business practices worldwide",
                color: "from-red-500 to-red-600"
              }
            ].map((commitment, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${commitment.color} opacity-20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                <div className="relative bg-white/90 backdrop-blur-lg border border-red-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-r ${commitment.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <commitment.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{commitment.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="py-32 px-6 bg-gradient-to-br from-red-500 via-red-600 to-red-700 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-400/30 to-red-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-semibold">Ready to Transform?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-300 mb-6">
            See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">Difference</span>
          </h2>
          
          <p className="text-2xl text-red-100 mb-12 leading-relaxed">
            Experience the power of Heisko's innovative visual display technologies 
            and discover how we can transform your workspace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-white text-red-600 font-black text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Contact Us Today
              </span>
            </Link>
            
            <Link 
              href="/" 
              className="group flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white font-black text-lg rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
