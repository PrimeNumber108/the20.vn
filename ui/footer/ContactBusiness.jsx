import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ContactBusiness = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-heading-sm">{t("companyName")}</h2>
      <p className="text-body-sm">
        <span className="font-semibold">{t("businessInfo.registrationNumber")}: </span>
        <span>0108290839</span>
      </p>
      <p className="text-body-sm">
        <span className="font-semibold">{t("businessInfo.operationDate")}: </span>
        <span>01/06/2018</span>
      </p>
      <div className="flex gap-5">
        <Link target="_blank" href="https://www.linkedin.com/company/the20hobart/posts/?feedView=all">
          <Image src="/images/logo/linkedin.png" alt="logo" width={32} height={32} />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/the20tuyendung">
          <Image src="/images/logo/facebook.png" alt="logo" width={32} height={32} />
        </Link>
        <Link target="_blank" href="https://shope.ee/9en6M17lsb">
          <Image src="/images/logo/shopee.png" alt="logo" width={32} height={32} />
        </Link>
        <Link target="_blank" href="https://s.lazada.vn/l.gmZT">
          <Image src="/images/logo/lazada.png" alt="logo" width={32} height={32} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/duongmifegmyphamchinhhang">
          <Image src="/images/logo/instagram.png" alt="logo" width={32} height={32} />
        </Link>
        <Link target="_blank" href="https://www.tiktok.com/@fegeyelashvietnam">
          <Image src="/images/logo/tiktok.png" alt="logo" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
};

export default ContactBusiness;
