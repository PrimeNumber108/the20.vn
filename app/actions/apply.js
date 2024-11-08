export const applyFormAction = async (values, attachment, positionTitle) => {
  try {
    const { fullName, phoneNumber, email, dateOfBirth } = values;
    const body = {
      to: "hrsachicos@gmail.com",
      subject: `${positionTitle} - ${fullName}`,
      attachment,
      body: `
          <html>
            <body>
              <p>Họ và tên: ${fullName}</p>
              <p>Số điện thoại: ${phoneNumber}</p>
              <p>Email: ${email}</p>
              <p>Ngày sinh: ${dateOfBirth}</p>
              <p>Vị trí: ${positionTitle}</p>
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
    console.error("Error:", error);
  }
};
