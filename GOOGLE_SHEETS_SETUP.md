# Google Sheets Integration Setup Guide

## Overview

This guide will help you set up automatic form submission to Google Sheets for the MelekAI webinar registration form.

## Step-by-Step Setup

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "MelekAI Webinar Registrations" or similar
4. Copy the sheet URL for later use

### 2. Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script.js` in this project
5. Update the `SHEET_URL` variable with your Google Sheet URL from step 1
6. Save the project with a name like "MelekAI Form Handler"

### 3. Deploy the Script

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web app URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

### 4. Update Environment Variables

1. Open `.env.local` in your project
2. Replace `YOUR_SCRIPT_ID` in the `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` with your actual script URL from step 3

### 5. Test the Integration

1. Run your Next.js development server: `npm run dev`
2. Go to your website and submit the webinar registration form
3. Check your Google Sheet - you should see the form data appear automatically

### 6. Optional: Set up Email Notifications

1. In the Google Apps Script, update the `notificationEmail` variable in the `sendNotificationEmail` function
2. This will send you an email notification every time someone registers

## Troubleshooting

### Common Issues:

1. **"Access denied" error**: Make sure the script is deployed with "Anyone" access
2. **"Sheet not found" error**: Double-check the SHEET_URL in your script
3. **CORS issues**: Google Apps Script handles CORS automatically for web apps
4. **Form not submitting**: Check the browser console for error messages

### Testing the Script:

1. In Google Apps Script, you can run the `testScript()` function to verify everything works
2. Check the execution log for any errors

## Data Structure

The form will create the following columns in your Google Sheet:

- **Timestamp**: When the registration was submitted
- **Name**: Participant's full name
- **Email**: Participant's email address
- **Phone**: Participant's phone number (WhatsApp)
- **Source**: Where the registration came from (Landing Page)
- **Status**: Registration status (automatically set to "Registered")

## Security Notes

- The Google Apps Script URL is public but can only accept POST requests with the expected data structure
- No sensitive data should be stored in the frontend environment variables
- Consider adding additional validation in the Google Apps Script if needed

## Support

If you encounter issues:

1. Check the Google Apps Script execution logs
2. Verify all URLs and permissions are correct
3. Test with a simple form submission first
