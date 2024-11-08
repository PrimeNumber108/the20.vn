// "use server";

export const contactFormAction = async (values) => {
  // try {
  //   const { firstName, lastName, phoneNumber, email, content } = values;
  //   const body = {
  //     to: "thang111220@gmail.com",
  //     subject: `The20 - Liên hệ  - ${firstName} ${lastName}`,
  //     body: `
  //     <html>
  //       <body>
  //         <p>Họ và tên: ${firstName} ${lastName}</p>
  //         <p>Số điện thoại: ${phoneNumber}</p>
  //         <p>Email: ${email}</p>
  //         <p>Nội dung: ${content}</p>
  //       </body>
  //     </html>
  //   `,
  //   };

  //   const response = await fetch("/api/sendEmail", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   });

  //   return response;
  // } catch (error) {
  //   console.log("first ~ error:", error);
  // }

  return;
};

export const verifyCaptcha = async () => {
  // try {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/verify-recaptcha`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ token }),
  //   });
  //   const data = await response.json();
  //   return data.success;
  // } catch (e) {
  //   console.error("Captcha verification failed:", e);
  //   return false;
  // }
  return;
};
