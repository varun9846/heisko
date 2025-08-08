"use client"

import React, { useState } from 'react'
import { Toast } from '../../components/ui/Toast'

export default function TestSMTPPage() {
  const [isTesting, setIsTesting] = useState(false)
  const [configStatus, setConfigStatus] = useState<any>(null)
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
   * Check SMTP configuration status
   */
  const checkConfig = async () => {
    try {
      const response = await fetch('/api/test-smtp')
      const result = await response.json()
      setConfigStatus(result)
    } catch (error) {
      console.error('Config check error:', error)
      setConfigStatus({
        success: false,
        message: 'Failed to check configuration'
      })
    }
  }

  /**
   * Test SMTP functionality
   */
  const testSMTP = async () => {
    setIsTesting(true)
    try {
      const response = await fetch('/api/test-smtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const result = await response.json()
      
      if (result.success) {
        showToast('success', result.message)
      } else {
        showToast('error', result.message)
      }
    } catch (error) {
      console.error('SMTP test error:', error)
      showToast('error', 'Failed to test SMTP configuration')
    } finally {
      setIsTesting(false)
    }
  }

  /**
   * Show toast notification
   */
  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    setToast({ isVisible: true, type, message })
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
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          SMTP Configuration Test
        </h1>
        
        <div className="space-y-6">
          {/* Configuration Check */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Configuration Status
            </h2>
            <button
              onClick={checkConfig}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check Configuration
            </button>
            
            {configStatus && (
              <div className="mt-4 p-4 rounded-lg border">
                <div className={`font-semibold ${configStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                  {configStatus.success ? '✅' : '❌'} {configStatus.message}
                </div>
                {configStatus.configured && (
                  <div className="mt-2 text-sm text-gray-600">
                    <strong>Configured:</strong> {configStatus.configured.join(', ')}
                  </div>
                )}
                {configStatus.missing && (
                  <div className="mt-2 text-sm text-red-600">
                    <strong>Missing:</strong> {configStatus.missing.join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SMTP Test */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              SMTP Test
            </h2>
            <p className="text-gray-600 mb-4">
              This will send a test email to verify your SMTP configuration is working correctly.
            </p>
            <button
              onClick={testSMTP}
              disabled={isTesting}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                isTesting
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg'
              }`}
            >
              {isTesting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Testing...
                </span>
              ) : (
                'Send Test Email'
              )}
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Setup Instructions
            </h2>
            <div className="text-blue-700 space-y-2 text-sm">
              <p>1. Follow the <strong>SMTP_SETUP.md</strong> guide to configure Gmail OAuth2</p>
              <p>2. Create a <strong>.env.local</strong> file with your credentials</p>
              <p>3. Restart your development server</p>
              <p>4. Check configuration status above</p>
              <p>5. Send a test email to verify everything works</p>
            </div>
          </div>
        </div>
      </div>

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
