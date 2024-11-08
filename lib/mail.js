import nodemailer from "nodemailer";

export async function sendMail({ to, name, subject, body }) {
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
    console.log("sendMail ~ verify:", verify);
  } catch (error) {
    console.log("sendMail ~ error:", error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log("sendMail ~ error:", error);
  }
}
