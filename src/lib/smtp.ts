import nodemailer from 'nodemailer'
import { ContactFormData } from './types'

/**
 * SMTP Transporter Configuration
 * Uses Gmail App Password for secure email delivery
 */
const createTransporter = () => {
  // Check if required environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Missing required Gmail environment variables (GMAIL_USER, GMAIL_APP_PASSWORD)')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

/**
 * Send Contact Form Lead Email
 * @param formData - Contact form data from user
 * @returns Promise<boolean> - Success status
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createTransporter()
    
    // Email content configuration
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.LEAD_RECIPIENT_EMAIL || process.env.GMAIL_USER, // Send to specified recipient or fallback to sender
      subject: `New Lead from Heisko Website - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #dc2626; margin-bottom: 20px; text-align: center;">🎯 New Lead from Heisko Website</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #dc2626;">${formData.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #dc2626;">${formData.phone}</a></p>
            </div>
            
            <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <h3 style="color: #374151; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; color: #4b5563;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This lead was submitted from the Heisko website contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('SMTP Error:', error)
    return false
  }
}

/**
 * Validate Contact Form Data
 * @param formData - Contact form data to validate
 * @returns { isValid: boolean, errors: string[] }
 */
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  // Name validation
  if (!formData.name.trim()) {
    errors.push('Name is required')
  } else if (formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.push('Email is required')
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  if (!formData.phone.trim()) {
    errors.push('Phone number is required')
  } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
    errors.push('Please enter a valid phone number')
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.push('Message is required')
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
