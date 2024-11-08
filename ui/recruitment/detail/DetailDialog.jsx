"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { applySchema } from "./schema";
import { useToast } from "@/hooks/use-toast";
import vi from "@/messages/vi.json";
import { useParams } from "next/navigation";
import { applyFormAction } from "../../../app/actions/apply";
import { errorToast, successToast } from "@/utils/customToast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptcha } from "@/app/actions/verifyCaptcha";

const DEFAULT_VALUES = { fullName: "", phoneNumber: "", email: "", dateOfBirth: "" };

const DetailDialog = () => {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const params = useParams();
  const { id } = params;
  const t = useTranslations(`applyForm`);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [attachment, setAttachment] = useState(null);

  const positionTitle = useMemo(() => {
    try {
      return vi.recruitment.position[id].title;
    } catch (error) {
      console.log("positionTitle ~ error:", error);
      return "";
    }
  }, [id]);

  const form = useForm({
    resolver: zodResolver(applySchema(t)),
    defaultValues: DEFAULT_VALUES,
  });

  const {
    formState: { isSubmitted, isSubmitting },
    control,
    handleSubmit,
    reset,
  } = form;

  const isEmptyFile = useMemo(() => isSubmitted && !attachment, [attachment, isSubmitted]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target.result.split(",")[1];
        setAttachment({
          name: file.name,
          type: file.type,
          content: fileData,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const handleClose = () => {
    if (isSubmitting) return;
    reset(DEFAULT_VALUES, { keepIsSubmitted: false });
    setAttachment(null);
    setOpen(false);
  };

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

      const response = await applyFormAction(values, attachment, positionTitle);

      if (response.ok) {
        setAttachment(null);
        handleClose();
        toast(successToast({ title: "Applied successfully" }));
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   reset(DEFAULT_VALUES, { keepIsSubmitted: false });
  // }, [isSubmitSuccessful, reset]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        } else {
          setOpen(open);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="main">
          <p className="text-heading-sm">{t("apply.now")}</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white text-black p-10 flex flex-col gap-8">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 autofill-light">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span className="text-heading-md">{t("apply.detail")}</span>
                <div className="cursor-pointer" onClick={handleClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                      d="M6.29213 8.34L0.256822 0.5H3.64687L8.01284 6.14571L12.3788 0.5H15.7432L9.70786 8.34L16 16.5H12.61L8.01284 10.5114L3.39005 16.5H0L6.29213 8.34Z"
                      fill="#060606"
                    />
                  </svg>
                </div>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 space-y-3">
                <FormField
                  control={control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-heading-sm">{t("fullName.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("fullName.placeholder")}
                          className="px-4 bg-white text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#e2e2e2]"
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
                          className="px-4 bg-white text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#e2e2e2]"
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
                          className="px-4 bg-white text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#e2e2e2]"
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
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-heading-sm">{t("dateOfBirth.label")}</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder={t("dateOfBirth.placeholder")}
                            className="px-4 bg-white text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#e2e2e2]"
                            {...field}
                          />
                        </FormControl>
                        <div className="absolute -translate-y-1/2 right-4 top-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.0001 5.51724H0.655273V14.3448C0.655273 14.784 0.829617 15.205 1.14024 15.515C1.45031 15.8257 1.87127 16 2.31045 16C4.80424 16 10.8511 16 13.3449 16C13.7841 16 14.2051 15.8257 14.5151 15.515C14.8258 15.205 15.0001 14.784 15.0001 14.3448V5.51724ZM0.655273 4.41379H15.0001V3.31034C15.0001 2.87117 14.8258 2.45021 14.5151 2.14014C14.2051 1.82952 13.7841 1.65517 13.3449 1.65517H12.7932V0.551724C12.7932 0.247172 12.546 0 12.2415 0C11.9369 0 11.6898 0.247172 11.6898 0.551724V1.65517H8.37941V0.551724C8.37941 0.247172 8.13224 0 7.82769 0C7.52314 0 7.27596 0.247172 7.27596 0.551724V1.65517H3.96562V0.551724C3.96562 0.247172 3.71845 0 3.41389 0C3.10934 0 2.86217 0.247172 2.86217 0.551724V1.65517H2.31045C1.87127 1.65517 1.45031 1.82952 1.14024 2.14014C0.829617 2.45021 0.655273 2.87117 0.655273 3.31034V4.41379Z"
                              fill="#060606"
                            />
                          </svg>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 space-y-3">
                <Label htmlFor="upload" className="text-heading-sm">
                  {t("upload.label")}
                </Label>
                <div
                  className="flex items-center justify-between gap-2 px-3 py-2 border rounded-md border-[#e2e2e2] cursor-pointer"
                  onClick={onClickUpload}
                >
                  <Input
                    id="upload"
                    type="file"
                    accept=".pdf, image/*, .doc, .docx"
                    className="hidden"
                    onChange={handleFileChange}
                    ref={inputRef}
                  />
                  <span className="text-body-md text-muted-foreground">{attachment?.name || t("upload.empty")}</span>
                  <Button type="button" variant="main" className="py-1.5 px-2.5 rounded-md">
                    <p className="font-semibold text-body-sm">{t("upload.selectFile")}</p>
                  </Button>
                </div>
                {isEmptyFile && <p className={"text-sm font-medium text-red-500"}>{t("upload.empty")}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full" variant="main" disabled={isSubmitting}>
                <p className="flex items-center justify-center text-heading-md">
                  <span>{t("apply.button")}</span>
                  {isSubmitting && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="block !w-6 !h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  )}
                </p>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
