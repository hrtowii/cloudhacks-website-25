import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_T55a8zJD_Asv6mWPEkeKov5gSkAfurk5X",
);
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name, email } = req.body;
  if (!name || !email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid input" });
  }
  await resend.contacts.create({
    email: email,
    firstName: name,
    unsubscribed: false,
    audienceId: "72fbfa31-e4b8-4782-9036-79701d8ebfa6",
  });
  return res.status(200).json({ message: "success" });
}
