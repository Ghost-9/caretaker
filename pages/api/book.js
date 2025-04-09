
// pages/api/book.js
import { google } from 'googleapis';
import Twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, patient, plan } = req.body;

  // Google Sheets Auth
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const sheetId = process.env.GOOGLE_SHEET_ID;

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Bookings!A:D',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, phone, patient, plan]],
    },
  });

  // WhatsApp via Twilio
  const client = Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
  await client.messages.create({
    body: `New AttendAssist booking:\nName: ${name}\nPhone: ${phone}\nPlan: ${plan}`,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+91XXXXXXXXXX',
  });

  res.status(200).json({ message: 'Success' });
}
