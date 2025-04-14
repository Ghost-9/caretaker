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

    const attendantsSheet = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Attendants!A1:J',
    });

    const attendantsRows = attendantsSheet.data.values || [];

    const rows = result.data.values || [];

    const bookings = rows.map((row) => ({
      id: row[0] || '',
      name: row[1] || '',
      phone: row[2] || '',
      currentcare: row[3] || '',
      plan: row[4] || '',
      status: row[5] || '',
      attendant: row[6] || '',
      datestamp: row[7] || '',
      conditiontype: row[8] || '',
      totalcharge: row[9] || '',
    }));

    const attendants = attendantsRows.map((row) => ({
      id: row[0] || '',
      name: row[1] || '',
      phone: row[2] || '',
      assignedto: row[3] || '',
      status: row[4] || '',
      datestamp: row[5] || '',
      totalcharge: row[6] || '',
      specialisein: row[7] || '',
      hospital: row[8] || '',
      supervisor: row[9] || '',
    }));

    return Response.json( {bookings, attendants}, { status: 200 });

  } catch (err) {
    console.error("Google Sheets API error:", err);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

// Utility to authorize Sheets API with write access
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return { sheets, sheetId: process.env.GOOGLE_SHEET_ID };
}

// Edit a single booking record
export async function editBooking(id, updatedFields) {
  const { sheets, sheetId } = await getSheetsClient();
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Bookings!A2:J',
  });

  const rows = result.data.values || [];
  const rowIndex = rows.findIndex(row => row[0] === id);
  if (rowIndex === -1) throw new Error("Booking not found");

  const targetRow = rows[rowIndex];
  const updatedRow = targetRow.map((val, index) =>
    updatedFields.hasOwnProperty(index) ? updatedFields[index] : val
  );

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `Bookings!A${rowIndex + 2}:J${rowIndex + 2}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [updatedRow],
    },
  });
}

// Edit multiple bookings
export async function editMultipleBookings(updates) {
  for (const update of updates) {
    await editBooking(update.id, update.fields);
  }
}

// Delete a booking
export async function deleteBooking(id) {
  const { sheets, sheetId } = await getSheetsClient();
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Bookings!A2:J',
  });

  const rows = result.data.values || [];
  const rowIndex = rows.findIndex(row => row[0] === id);
  if (rowIndex === -1) throw new Error("Booking not found");

  rows.splice(rowIndex, 1);

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: 'Bookings!A2:J',
    valueInputOption: 'RAW',
    requestBody: {
      values: rows,
    },
  });
}

// Delete multiple bookings
export async function deleteMultipleBookings(ids) {
  for (const id of ids) {
    await deleteBooking(id);
  }
}

// Assign free attendant to a patient
export async function assignAttendantToBooking(bookingId) {
  const { sheets, sheetId } = await getSheetsClient();

  const attendantsRes = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Attendants!A2:J',
  });

  const attendants = attendantsRes.data.values || [];
  const freeAttendant = attendants.find(row => row[4] === 'Free');

  if (!freeAttendant) throw new Error('No free attendant available');

  const attendantName = freeAttendant[1];
  const attendantId = freeAttendant[0];

  await editBooking(bookingId, { 5: 'Assigned', 6: attendantName });
  const attendantIndex = attendants.findIndex(row => row[0] === attendantId);
  freeAttendant[3] = bookingId;
  freeAttendant[4] = 'Assigned';

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `Attendants!A${attendantIndex + 2}:J${attendantIndex + 2}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [freeAttendant],
    },
  });
}
