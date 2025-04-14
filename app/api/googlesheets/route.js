import { google } from 'googleapis';

export async function GET() {
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
      range: 'Bookings!A1:J',
    });

    const rows = result.data.values || [];

    const bookings = rows.map((row) => ({
      id: row[0] || '',
      name: row[1] || '',
      phone: row[2] || '',
      patient: row[3] || '',
      plan: row[4] || '',
      status: row[5] || '',
      attendant: row[6] || '',
      datestamp: row[7] || '',
      conditiontype: row[8] || '',
      totalcharge: row[9] || '',

      
    }));

    return Response.json(bookings, { status: 200 });

  } catch (err) {
    console.error("Google Sheets API error:", err);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
