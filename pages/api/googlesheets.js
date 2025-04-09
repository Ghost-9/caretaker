// pages/api/googlesheets.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Bookings!A2:F',
    });

    const rows = result.data.values || [];

    const bookings = rows.map((row) => ({
      name: row[0] || '',
      phone: row[1] || '',
      patient: row[2] || '',
      plan: row[3] || '',
      status: row[4] || '',
      attendant: row[5] || '',
    }));

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Google Sheets API error:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}