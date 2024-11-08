import dayjs from "dayjs";
import { z } from "zod";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const applySchema = (t) =>
  z.object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: t("fullName.error.required") })
      .min(4, { message: t("fullName.error.min") }),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: t("phoneNumber.error.required") })
      .min(6, { message: t("phoneNumber.error.min") }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("email.error.required") })
      .email(t("email.error.invalid")),
    dateOfBirth: z
      .string()
      .trim()
      .min(1, { message: t("dateOfBirth.error.required") })
      .refine(
        (val) => {
          const parsedDate = dayjs(val, "DD/MM/YYYY", true);
          const isValidDate = parsedDate.isValid() && parsedDate.format("DD/MM/YYYY") === val;
          return isValidDate;
        },
        { message: t("dateOfBirth.error.invalid") }
      ),
  });
