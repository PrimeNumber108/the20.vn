import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ContactBusiness = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-heading-sm">{t("companyName")}</h2>
      <p className="text-body-sm">
        <span className="font-semibold">{t("businessRegistrationNumber")}: </span>
        <span>0108290839</span>
      </p>
      <p className="text-body-sm">
        <span className="font-semibold">{t("dateOfOperation")}: </span>
        <span>01/06/2018</span>
      </p>
      <div className="flex gap-5">
        <Image src="/images/logo/linkedin.png" alt="logo" width={32} height={32} />
        <Image src="/images/logo/facebook.png" alt="logo" width={32} height={32} />
        <Image src="/images/logo/shopee.png" alt="logo" width={32} height={32} />
        <Image src="/images/logo/lazada.png" alt="logo" width={32} height={32} />
        <Image src="/images/logo/instagram.png" alt="logo" width={32} height={32} />
        <Image src="/images/logo/tiktok.png" alt="logo" width={32} height={32} />
      </div>
    </div>
  );
};

export default ContactBusiness;
