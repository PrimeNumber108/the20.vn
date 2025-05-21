import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { to, subject, body, attachment } = await req.json();
    const { NEXT_PUBLIC_SMTP_PASSWORD, NEXT_PUBLIC_SMTP_EMAIL } = process.env;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: NEXT_PUBLIC_SMTP_EMAIL,
        pass: NEXT_PUBLIC_SMTP_PASSWORD,
      },
    });

    try {
      const verify = await transport.verify();
      console.log("sendMail verify:", verify);
    } catch (error) {
      console.log("sendMail verify error:", error);
    }

    const mailOptions = {
      from: NEXT_PUBLIC_SMTP_EMAIL,
      to,
      subject,
      html: body,
    };

    if (attachment) {
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: attachment.content,
          contentType: attachment.type,
          encoding: "base64",
        },
      ];
    }

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.log("POST sendMail ~ err:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
