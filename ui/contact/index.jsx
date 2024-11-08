import { useTranslations } from "next-intl";
import React from "react";
import { ContactForm } from "./form";
import { Link } from "@/i18n/routing";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div className="mt-[75px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.9767059469542!2d106.70282423432877!3d10.833208542848691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296719155fb7%3A0xb84bb50b14412881!2zMjgxIELDrG5oIEzhu6NpLCBQaMaw4budbmcgMTMsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oIDcxNzcwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1730884875871!5m2!1svi!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-screen max-h-[618px]"
      ></iframe>
      <div className="overflow-hidden flex-center">
        <div className="relative page-layout grid-layout py-[115px]">
          <div className="absolute w-[1718px] h-[1718px] top-full -translate-y-1/2 rounded-full bg-radial-gradient left-full -translate-x-1/2 -z-10"></div>
          <div className="col-span-10 col-start-2 space-y-[64px]">
            <div className="space-y-8">
              <p className="text-heading-md">{t("companyName")}</p>
              <p className="text-display-sm">
                {t.rich("contactUs", {
                  span: (chunks) => <span className="text-tint20">{chunks}</span>,
                })}
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <ContactForm />
              </div>
              <div className="w-[276px] space-y-6">
                <p className="text-heading-md">{t("info.title")}</p>
                <div className="flex items-center gap-1.5">
                  <div className="min-w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
                      <path
                        d="M9.6054 15.9378L12.6712 11.0738C14.0236 8.92875 14.1147 6.31281 12.914 4.075C11.7133 1.83719 9.50422 0.5 7.00169 0.5C4.49916 0.5 2.29005 1.83719 1.08938 4.075C-0.111298 6.30937 -0.0202362 8.92531 1.33221 11.0738L4.3946 15.9344C1.70995 16.4191 0 17.6359 0 19.1038C0.00337268 21.07 2.94435 22.5 7.00169 22.5C11.059 22.5 14 21.07 14 19.1038C14 17.6291 12.2934 16.4156 9.6054 15.9378ZM9.90894 6.97969C9.90894 8.60906 8.60371 9.93594 7.00169 9.93594C5.39966 9.93594 4.09443 8.60906 4.09443 6.97969C4.09443 5.34688 5.39966 4.01656 7.00169 4.01656C8.60371 4.01656 9.90894 5.34344 9.90894 6.97969ZM6.52277 19.31C6.62732 19.4784 6.80607 19.5781 7.00169 19.5781C7.20067 19.5781 7.37943 19.4784 7.48061 19.3134L8.63406 17.4813C11.1164 17.7803 12.3609 18.6809 12.3609 19.1038C12.3609 19.6194 10.5363 20.8294 7.00169 20.8294C3.46712 20.8294 1.6425 19.6194 1.6425 19.1038C1.6425 18.6809 2.88702 17.7838 5.36931 17.4813L6.52277 19.31Z"
                        fill="#0C0CDB"
                      />
                    </svg>
                  </div>
                  <p className="text-body-md">{t("info.address")}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="min-w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path
                        d="M10.3819 11.2395C10.2477 11.3733 10.0663 11.4483 9.87695 11.4483C9.68761 11.4483 9.50621 11.3733 9.37205 11.2395L0.0698609 1.93654C0.0420754 2.05125 0 2.1612 0 2.28505V13.714C0 14.5031 0.639067 15.1426 1.42857 15.1426H18.571C19.3593 15.1426 20 14.5035 20 13.714V2.28505C20 2.08936 19.9595 1.90161 19.8877 1.73291L10.3819 11.2395Z"
                        fill="#0C0CDB"
                      />
                      <path
                        d="M9.87932 9.72441L18.7167 0.886642C18.6663 0.881482 18.6246 0.857666 18.5734 0.857666H1.43094C1.30828 0.857666 1.19635 0.89855 1.08203 0.927129L9.87932 9.72441Z"
                        fill="#0C0CDB"
                      />
                    </svg>
                  </div>
                  <Link href="mailto:analytics@the20.vn" className="text-body-md">
                    analytics@the20.vn
                  </Link>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="min-w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.245957 2.84215C0.730153 0.788502 5.02808 -0.81635 5.65061 1.16564L6.68382 4.28282C6.77811 5.69219 5.3491 6.50933 4.26287 7.45506C5.05446 9.81709 6.13089 11.7972 7.68452 13.7447C9.06933 13.346 10.5307 12.5907 11.6631 13.4354L13.7187 15.9969C15.0446 17.5968 11.3616 20.332 9.37481 19.623C3.62847 17.5723 -1.15348 8.78008 0.245957 2.84215Z"
                        fill="#0C0CDB"
                      />
                    </svg>
                  </div>
                  <p className="text-body-md">0833800110</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
