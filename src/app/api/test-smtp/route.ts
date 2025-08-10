import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/smtp'

/**
 * POST /api/test-smtp
 * Test endpoint to verify SMTP configuration
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Check if environment variables are set
    const requiredVars = [
      'GMAIL_USER',
      'GMAIL_APP_PASSWORD'
    ]

    const missingVars = requiredVars.filter(varName => !process.env[varName])
    
    if (missingVars.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'MISSING_ENV_VARS',
        message: `Missing environment variables: ${missingVars.join(', ')}`,
        details: 'Please check your .env.local file and SMTP_SETUP.md'
      }, { status: 500 })
    }

    // Test email data
    const testData = {
      name: 'SMTP Test User',
      email: 'test@example.com',
      phone: '+61412345678',
      message: 'This is a test email to verify SMTP configuration is working correctly.'
    }

    // Attempt to send test email
    const emailSent = await sendContactEmail(testData)

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'SMTP test successful! Check your email for the test message.',
        timestamp: new Date().toISOString()
      }, { status: 200 })
    } else {
      return NextResponse.json({
        success: false,
        error: 'EMAIL_SEND_FAILED',
        message: 'Failed to send test email. Check your SMTP configuration.',
        timestamp: new Date().toISOString()
      }, { status: 500 })
    }

  } catch (error) {
    console.error('SMTP Test Error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'TEST_FAILED',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

/**
 * GET /api/test-smtp
 * Health check for SMTP configuration
 */
export async function GET(): Promise<NextResponse> {
  const requiredVars = [
    'GMAIL_USER',
    'GMAIL_APP_PASSWORD'
  ]

  const missingVars = requiredVars.filter(varName => !process.env[varName])
  const configuredVars = requiredVars.filter(varName => process.env[varName])

  return NextResponse.json({
    success: missingVars.length === 0,
    message: missingVars.length === 0 
      ? 'SMTP configuration appears to be complete' 
      : 'SMTP configuration is incomplete',
    configured: configuredVars,
    missing: missingVars,
    timestamp: new Date().toISOString()
  })
}
