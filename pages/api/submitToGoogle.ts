import { SPIRITUAL_GIFTS_QUESTIONS, SpiritualGifts } from "@/lib/data";
import { formSchema } from "@/lib/schema";
import { scoreGifts } from "@/lib/scoreGifts";
import { google } from "googleapis";
import moment from "moment-timezone";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = formSchema.parse(req.body);

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheet = google.sheets({
      auth,
      version: "v4",
    });

    const range = "Sheet1";

    const existingData = await sheet.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });

    if (existingData.data.values?.[0]?.[0] == null) {
      await sheet.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              "Date",
              "First Name",
              "Last Name",
              "Email",
              "Language",
              ...Object.values(SpiritualGifts).map(
                (_gift, index) => `Gift ${index + 1}`
              ),
              ...SPIRITUAL_GIFTS_QUESTIONS.map(
                (question) => question.question["english"]
              ),
            ],
          ],
        },
      });
    }

    const scoredGifts = scoreGifts(body.questions, body.language);

    const response = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            moment().tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss"),
            body.firstName,
            body.lastName,
            body.email,
            body.language,
            ...scoredGifts.map((gift) => `${gift.gift}: ${gift.score}`),
            ...body.questions,
          ],
        ],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (e: unknown) {
    return res.status(500).json({ message: "An error occured" });
  }
}
