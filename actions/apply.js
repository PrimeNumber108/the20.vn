// "use server";

export const applyFormAction = async (values, positionTitle) => {
  try {
    // const { fullName, phoneNumber, email, dateOfBirth } = values;
    // const body = {
    //   to: "thang111220@gmail.com",
    //   subject: `${positionTitle} - ${fullName}`,
    //   attachment,
    //   body: `
    //       <html>
    //         <body>
    //           <p>Họ và tên: ${fullName}</p>
    //           <p>Số điện thoại: ${phoneNumber}</p>
    //           <p>Email: ${email}</p>
    //           <p>Ngày sinh: ${dateOfBirth}</p>
    //           <p>Vị trí: ${positionTitle}</p>
    //         </body>
    //       </html>
    //     `,
    // };

    // const response = await fetch("/api/sendEmail", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });

    return true;
  } catch (error) {
    console.error("Error:", error);
  }
};
