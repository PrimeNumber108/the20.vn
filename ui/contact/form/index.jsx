"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "./schema";
import ReCAPTCHA from "react-google-recaptcha";
import { contactFormAction } from "../../../actions/contact";

dayjs.extend(customParseFormat);

const DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  content: "",
};

export function ContactForm() {
  const t = useTranslations(`contact`);
  const recaptchaRef = useRef(null);
  console.log("ContactForm ~ recaptchaRef:", recaptchaRef);
  const [isVerified, setIsVerified] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema(t)),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      content: "",
    },
  });

  const {
    formState: { isSubmitting, isSubmitSuccessful },
    control,
    handleSubmit,
    reset,
  } = form;

  const onSubmit = async (values) => {
    try {
      // const { firstName, lastName, phoneNumber, email, content } = values;
      // const body = {
      //   to: "thang111220@gmail.com",
      //   subject: `The20 - Liên hệ  - ${firstName} ${lastName}`,
      //   body: `
      //     <html>
      //       <body>
      //         <p>Họ và tên: ${firstName} ${lastName}</p>
      //         <p>Số điện thoại: ${phoneNumber}</p>
      //         <p>Email: ${email}</p>
      //         <p>Nội dung: ${content}</p>
      //       </body>
      //     </html>
      //   `,
      // };

      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });

      const response = await contactFormAction(values);

      if (response.ok) {
        toast({
          className: "bg-white text-black data-[state=open]:sm:slide-in-from-top-full top-0 sm:top-0 border-0",
          title: (
            <div className="flex items-center justify-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#52C41A" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-normal text-body-lg">Sent message successfully</span>
            </div>
          ),
        });
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    reset(DEFAULT_VALUES);
  }, [isSubmitSuccessful, reset]);

  async function handleCaptchaSubmission(token) {
    const success = await verifyCaptcha(token);
    if (success) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    // try {
    //   if (token) {
    //     await fetch("/api/captcha", {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ token }),
    //     });
    //     setIsVerified(true);
    //   }
    // } catch (e) {
    //   console.log("handleCaptchaSubmission ~ e:", e);
    //   setIsVerified(false);
    // }
  }

  const handleChange = (token) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

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
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            ref={(r) => console.log(r?.props)}
            onChange={handleChange}
            onExpired={handleExpired}
            onErrored={() => console.log(true)}
          />
          <Button type="submit" className="w-full" variant="main" disabled={!isVerified || isSubmitting}>
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
