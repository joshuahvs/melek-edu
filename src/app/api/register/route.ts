import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Registrations!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.timestamp,
          body.name,
          body.email,
          body.phone,
        ]]
      }
    });

    return NextResponse.json({ status: "success" });

  } catch (error) {
    console.error("Sheets API error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to save data" },
      { status: 500 }
    );
  }
}
