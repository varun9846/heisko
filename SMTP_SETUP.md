# SMTP Setup Guide for Contact Form

## 📧 Gmail App Password Configuration

This guide will help you set up Gmail SMTP for the contact form email functionality using App Passwords.

### 1. Enable 2-Factor Authentication

1. **Go to your Google Account settings**: https://myaccount.google.com/
2. **Navigate to Security**
3. **Enable 2-Step Verification** if not already enabled
   - This is required to generate App Passwords

### 2. Generate App Password

1. **Go to Google Account Security**: https://myaccount.google.com/security
2. **Find "App passwords"** (under 2-Step Verification)
3. **Click "App passwords"**
4. **Select "Mail"** as the app
5. **Select "Other (Custom name)"** as device
6. **Enter "Heisko Contact Form"** as the name
7. **Click "Generate"**
8. **Copy the 16-character password** (without spaces)

### 3. Environment Variables

Create a `.env.local` file in your project root with:

```env
# Gmail App Password Configuration
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password

# Optional: Different recipient for leads
LEAD_RECIPIENT_EMAIL=leads@yourcompany.com
```

### 4. Security Notes

- **Never commit `.env.local` to version control**
- **Use different credentials for development and production**
- **Regularly rotate your app passwords**
- **Keep your app password secure and don't share it**

### 5. Testing

1. **Start your development server**: `npm run dev`
2. **Go to the contact page**: `http://localhost:3000/contact`
3. **Fill out the form and submit**
4. **Check your email for the lead notification**

### 6. Production Deployment

For production, set the environment variables in your hosting platform:

- **Vercel**: Add in Project Settings > Environment Variables
- **Netlify**: Add in Site Settings > Environment Variables
- **Railway**: Add in Project Variables
- **Heroku**: Use `heroku config:set` command

### 7. Troubleshooting

**Common Issues:**

1. **"Missing required Gmail environment variables"**
   - Check that all environment variables are set correctly
   - Restart your development server after adding variables

2. **"Invalid credentials"**
   - Verify your Gmail address and app password
   - Ensure 2FA is enabled on your Gmail account
   - Check that your app password is correct

3. **"Access denied"**
   - Make sure your Gmail account has 2FA enabled
   - Regenerate your app password
   - Check that you're using the app password, not your regular password

4. **Emails not sending**
   - Check your spam folder
   - Verify the recipient email address
   - Check server logs for SMTP errors

## 🎯 Success Indicators

- ✅ Contact form submits successfully
- ✅ Toast notification shows "Message sent successfully"
- ✅ Email received with lead information
- ✅ Form resets after successful submission
- ✅ Proper error handling for invalid inputs

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test with a simple email first
4. Check Gmail's "Sent" folder for delivery status
