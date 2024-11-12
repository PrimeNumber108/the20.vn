import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import { useTranslations } from "next-intl";
import LogoLayout from "./LogoLayout";

const Partner = () => {
  const t = useTranslations("about.partner");

  return (
    <div className="pt-10 pb-16 overflow-hidden flex-center lg:pb-36 lg:pt-32">
      <div className="page-layout grid-layout">
        <div className="col-span-12 lg:col-span-5 lg:col-start-2 space-y-10 lg:space-y-[167px]">
          <Breadcrumb>
            <p>{t("breadcrumb")}</p>
          </Breadcrumb>
          <p className="text-heading-xl">{t("title")}</p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-8 flex-center">
          <LogoLayout />
        </div>
      </div>
    </div>
  );
};

export default Partner;
