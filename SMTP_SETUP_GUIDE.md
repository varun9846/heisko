# 🔧 SMTP Setup Guide - Fix Your Contact Form

## 🚨 **Current Issue**
Your contact form is not working because the SMTP configuration is missing. Here's how to fix it:

## 📋 **Step-by-Step Setup**

### **1. Create Environment Variables File**

Create a `.env.local` file in your project root with:

```env
# Gmail App Password Configuration
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password

# Optional: Different recipient for leads
LEAD_RECIPIENT_EMAIL=leads@yourcompany.com
```

### **2. Set Up Gmail App Password**

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Navigate to Security**
3. **Enable 2-Step Verification** (if not already enabled)
4. **Go to App passwords**: https://myaccount.google.com/apppasswords
5. **Select "Mail"** as the app
6. **Select "Other (Custom name)"** as device
7. **Enter "Heisko Contact Form"** as the name
8. **Click "Generate"**
9. **Copy the 16-character password** (without spaces)

### **3. Update Your .env.local File**

Replace the placeholder values with your actual credentials:

```env
GMAIL_USER=your.actual.email@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
LEAD_RECIPIENT_EMAIL=leads@yourcompany.com
```

### **4. Restart Development Server**

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

### **5. Test Your Configuration**

1. **Visit the test page**: http://localhost:3000/test-smtp
2. **Click "Check Configuration"** to verify your environment variables
3. **Click "Send Test Email"** to test the SMTP functionality

### **6. Test Your Contact Form**

1. **Visit your contact page**: http://localhost:3000/contact
2. **Fill out the form** with test data
3. **Submit the form** and check for success/error messages
4. **Check your email** for the lead notification

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"Missing required Gmail environment variables"**
   - Check that `.env.local` file exists in project root
   - Verify all variables are set correctly
   - Restart your development server

2. **"Invalid credentials"**
   - Ensure 2FA is enabled on your Gmail account
   - Verify you're using the app password, not your regular password
   - Check that the app password is correct

3. **"Access denied"**
   - Make sure your Gmail account has 2FA enabled
   - Regenerate your app password
   - Check that you're using the app password format

4. **Form not submitting**
   - Check browser console for errors
   - Verify the API route is working at `/api/contact`
   - Test SMTP configuration at `/test-smtp`

## ✅ **Success Indicators**

- ✅ Configuration check shows "SMTP configuration appears to be complete"
- ✅ Test email sends successfully
- ✅ Contact form submits without errors
- ✅ Toast notification shows "Message sent successfully"
- ✅ Email received with lead information
- ✅ Form resets after successful submission

## 🎯 **What's Been Fixed**

1. **Contact Form Integration**: Updated to call the actual API endpoint
2. **SMTP Service**: Properly configured with Gmail App Password
3. **Error Handling**: Comprehensive error messages and validation
4. **Toast Notifications**: Proper success/error feedback
5. **Type Safety**: All TypeScript errors resolved

## 🚀 **Next Steps**

1. Follow the setup guide above
2. Test your configuration
3. Test your contact form
4. Deploy to production with proper environment variables

Your contact form is now ready to capture leads and send professional email notifications! 🎉
