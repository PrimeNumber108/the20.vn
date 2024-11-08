import { z } from "zod";

export const contactSchema = (t) => {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: t("firstName.error.required") }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: t("lastName.error.required") }),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: t("phoneNumber.error.required") })
      .min(6, { message: t("phoneNumber.error.invalid") }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("email.error.required") })
      .email(t("email.error.invalid")),
    content: z
      .string()
      .trim()
      .min(1, { message: t("content.error.required") })
      .min(10, { message: t("content.error.min") }),
  });
};
