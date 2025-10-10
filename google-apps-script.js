/*
 * Google Apps Script for MelekAI Webinar Registration Form
 * 
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Sheet for storing the form data
 * 5. Update the SHEET_URL variable below with your Google Sheet URL
 * 6. Deploy this script as a web app with "Anyone" access
 * 7. Copy the web app URL and update NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local
 */

// Replace this with your Google Sheet URL
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const sheet = SpreadsheetApp.openByUrl(SHEET_URL).getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email', 
        'Phone',
        'Source',
        'Status'
      ]);
    }
    
    // Append the new registration
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('id-ID', {timeZone: 'Asia/Jakarta'}),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.source || 'Unknown',
      'Registered'
    ]);
    
    // Send email notification (optional)
    sendNotificationEmail(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  try {
    // Configure your notification email here
    const notificationEmail = 'admin@melekai.com'; // Replace with your admin email
    
    const subject = `New Webinar Registration - ${data.name}`;
    const body = `
New webinar registration received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Registration Time: ${data.timestamp}
Source: ${data.source}

Please follow up with the participant.

---
MelekAI Webinar System
    `;
    
    // Send email notification
    GmailApp.sendEmail(notificationEmail, subject, body);
    
  } catch (error) {
    console.error('Failed to send notification email:', error);
    // Don't throw error here as we don't want to fail the entire registration
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com', 
    phone: '08123456789',
    timestamp: new Date().toLocaleString('id-ID', {timeZone: 'Asia/Jakarta'}),
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}