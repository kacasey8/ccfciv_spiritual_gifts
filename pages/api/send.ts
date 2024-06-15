import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../../emails/EmailTemplate";
import { formSchema } from "@/lib/schema";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
      from: "CCFCIV <noreply@resend.dev>",
      to: [body.email],
      subject: "Spiritual Gifts Results",
      html,
    });

    if (error) {
      console.log(error);
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
