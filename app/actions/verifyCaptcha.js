import axios from "axios";

export const verifyCaptcha = async (gRecaptchaToken) => {
  try {
    const response = await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_BASE_URL + "/api/captcha",
      data: { gRecaptchaToken },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    return response?.data?.success === true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
