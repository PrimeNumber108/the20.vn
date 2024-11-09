"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "./schema";
import { contactFormAction } from "../../../app/actions/contact";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptcha } from "@/app/actions/verifyCaptcha";
import { errorToast, successToast } from "@/utils/customToast";
import { useToast } from "@/hooks/use-toast";

dayjs.extend(customParseFormat);

const DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  content: "",
};

export function ContactForm() {
  const { toast } = useToast();
  const t = useTranslations(`contact`);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    resolver: zodResolver(contactSchema(t)),
    defaultValues: DEFAULT_VALUES,
  });

  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
    reset,
  } = form;

  const onSubmit = async (values) => {
    try {
      if (!executeRecaptcha) {
        toast(errorToast({ title: "Recaptcha not available" }));
        throw new Error("Recaptcha not available!");
      }

      const gRecaptchaToken = await executeRecaptcha("submit_form");
      const isVerify = verifyCaptcha(gRecaptchaToken);

      if (!isVerify) {
        toast(errorToast({ title: "Failed to verify recaptcha!" }));
        throw new Error("Failed to verify recaptcha!");
      }

      const response = await contactFormAction(values);

      if (response.ok) {
        toast(successToast({ title: "Message sent successfully" }));
        reset();
      } else {
        toast(errorToast({ title: "An error has occurred!" }));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1 space-y-3">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-sm">{t("firstName.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("firstName.placeholder")}
                      className="px-4 bg-transparent text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#2f2f2f]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1 space-y-3">
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-sm">{t("lastName.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("lastName.placeholder")}
                      className="px-4 bg-transparent text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#2f2f2f]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1 space-y-3">
            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-sm">{t("phoneNumber.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("phoneNumber.placeholder")}
                      className="px-4 bg-transparent text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#2f2f2f]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1 space-y-3">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-sm">{t("email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("email.placeholder")}
                      className="px-4 bg-transparent text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#2f2f2f]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-sm">{t("content.label")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("content.placeholder")}
                      className="h-[160px] px-4 bg-transparent text-body-md py-2.5 focus-visible:ring-0 focus-visible:ring-offset-1 border-[#2f2f2f]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <Button type="submit" className="w-full" variant="main" disabled={isSubmitting}>
            <p className="flex items-center justify-center text-heading-md gap-2.5">
              <span className="text-heading-md">{t("send")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.1042 0.782228L0.812769 10.0716C0.333554 10.2805 0.0172092 10.7468 0.000680356 11.2685C-0.0158449 11.7914 0.269802 12.2765 0.733691 12.5161L5.04328 14.7458L17.9092 5.79276C17.9647 5.75499 18.0343 5.75027 18.0933 5.77978C18.1523 5.80929 18.1913 5.86831 18.1937 5.93441L7.41213 16.2294C7.14419 16.4856 6.99193 16.8408 6.99193 17.2115V21.9707C6.98957 22.5786 7.39325 23.1133 7.97871 23.2785C8.56417 23.4438 9.1874 23.1971 9.50374 22.6777L12.1206 18.3953L17.6531 21.2506V21.2518C18.0214 21.443 18.4581 21.4548 18.837 21.2825C19.2147 21.1102 19.4933 20.7738 19.5901 20.3689L23.9622 2.34492C24.0826 1.84446 23.9103 1.32037 23.516 0.988678C23.123 0.658161 22.5763 0.578017 22.1042 0.782228Z"
                  fill="#FBFBFB"
                />
              </svg>
            </p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
