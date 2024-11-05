import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-heading-sm">{t("contact")}</h2>
      <p className="text-body-sm">
        <span className="font-semibold">{t("headquarters")}: </span>
        <span>{t("headquartersDetail")}</span>
      </p>
      <p className="text-body-sm">
        <span className="font-semibold">Hotline: </span>
        <span>0833800110</span>
      </p>
      <p className="text-body-sm">
        <span className="font-semibold">Email: </span>
        <Link href="mailto:hrsachicos@gmail.com">hrsachicos@gmail.com</Link>
      </p>
    </div>
  );
};

export default Contact;
