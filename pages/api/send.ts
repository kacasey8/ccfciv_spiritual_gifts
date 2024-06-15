import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../emails/EmailTemplate";
import { formSchema } from "@/lib/schema";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = formSchema.parse(req.body);
    const html = render(EmailTemplate(body));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: "CCFCIV <noreply@ccfciv.org>",
      to: body.email,
      subject: "CCFCIV Spiritual Gifts Results",
      html,
    };

    const data = await transporter.sendMail(mailOptions);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
