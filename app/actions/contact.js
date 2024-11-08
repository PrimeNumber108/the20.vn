export const contactFormAction = async (values) => {
  try {
    const { firstName, lastName, phoneNumber, email, content } = values;
    const body = {
      to: "hrsachicos@gmail.com",
      subject: `The20 - Liên hệ  - ${firstName} ${lastName}`,
      body: `
      <html>
        <body>
          <p>Họ và tên: ${firstName} ${lastName}</p>
          <p>Số điện thoại: ${phoneNumber}</p>
          <p>Email: ${email}</p>
          <p>Nội dung: ${content}</p>
        </body>
      </html>
    `,
    };
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response;
  } catch (error) {
    console.log("first ~ error:", error);
  }
};
