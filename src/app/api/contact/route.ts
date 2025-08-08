import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, validateContactForm } from '@/lib/smtp'
import { ContactFormData, ContactResponse, ContactError } from '@/lib/types'

/**
 * POST /api/contact
 * Handles contact form submissions and sends lead emails
 */
export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse | ContactError>> {
  try {
    // Parse request body
    const body = await request.json()
    const formData: ContactFormData = {
      name: body.name?.trim() || '',
      email: body.email?.trim() || '',
      phone: body.phone?.trim() || '',
      message: body.message?.trim() || ''
    }

    // Validate form data
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        error: 'VALIDATION_ERROR',
        message: validation.errors.join(', ')
      }, { status: 400 })
    }

    // Send email using SMTP service
    const emailSent = await sendContactEmail(formData)
    
    if (!emailSent) {
      return NextResponse.json({
        success: false,
        error: 'EMAIL_SEND_FAILED',
        message: 'Failed to send email. Please try again later.'
      }, { status: 500 })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Our team will contact you shortly.',
      data: {
        id: `lead_${Date.now()}`,
        timestamp: new Date().toISOString()
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Contact API Error:', error)
    
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message.includes('Missing required Gmail environment variables')) {
        return NextResponse.json({
          success: false,
          error: 'CONFIGURATION_ERROR',
          message: 'Email service is not properly configured. Please contact support.'
        }, { status: 500 })
      }
    }

    return NextResponse.json({
      success: false,
      error: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred. Please try again later.'
    }, { status: 500 })
  }
}

/**
 * GET /api/contact
 * Health check endpoint for the contact API
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    success: true,
    message: 'Contact API is running',
    timestamp: new Date().toISOString()
  })
}
