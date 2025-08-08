"use client"

import React, { useState } from "react"
import { Toast } from "../../components/ui/Toast"
import { ContactFormData } from "../../lib/types"

export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // UI state management
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [toast, setToast] = useState<{
    isVisible: boolean
    type: 'success' | 'error' | 'warning'
    message: string
  }>({
    isVisible: false,
    type: 'success',
    message: ''
  })

  /**
   * Handle input field changes
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  /**
   * Validate individual field
   */
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address'
        break
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) return 'Please enter a valid phone number'
        break
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        break
    }
    return ''
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactFormData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      showToast('error', 'Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        showToast('success', result.message)
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        showToast('error', result.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      showToast('error', 'Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * Show toast notification
   */
  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    setToast({ isVisible: true, type, message })
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }))
    }, 5000)
  }

  /**
   * Close toast notification
   */
  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Contact Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">Contact Us</h1>
          <div className="text-lg text-gray-700 space-y-2">
            <div>
              <span className="font-semibold">Company:</span> <br />
              Australian Integrated Technology Solutions
            </div>
            <div>
              <span className="font-semibold">Address:</span> <br />
              Unit 52, 32-34 Mons Rd., Westmead
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Closed on weekends and public holidays</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-gray-50 rounded-xl p-6 flex flex-col justify-center shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition-colors ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-red-400'
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition-colors ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-red-400'
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition-colors ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-red-400'
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition-colors min-h-[100px] resize-vertical ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-red-400'
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-2 rounded-lg shadow transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transform hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </main>
  )
} 