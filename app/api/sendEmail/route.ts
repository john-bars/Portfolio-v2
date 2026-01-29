import EmailTemplate from "@/app/email/ContactFormEmail";

import { NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const senderName = (formData.get("name") as string) || "Anonymous";
    const senderEmail = (formData.get("email") as string) || "";
    const subject = (formData.get("subject") as string) || "";
    const message = (formData.get("message") as string) || "";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["john.barsq@gmail.com"],
      subject: "Portfolio email",
      react: EmailTemplate({
        senderName,
        senderEmail,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Server error:", err);

    return Response.json(
      {
        success: false,
        message: "Something went wrong on the server.",
      },
      { status: 500 },
    );
  }
}
