import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import { useTranslations } from "next-intl";
import LogoLayout from "./LogoLayout";

const Partner = () => {
  const t = useTranslations("about.partner");

  return (
    <div className="pt-[120px] flex-center pb-[152px]">
      <div className="page-layout grid-layout">
        <div className="col-span-5 col-start-2 space-y-[167px]">
          <Breadcrumb>
            <p>{t("breadcrumb")}</p>
          </Breadcrumb>
          <p className="text-heading-xl">{t("title")}</p>
        </div>
        <div className="col-span-4 col-start-8">
          <LogoLayout />
        </div>
      </div>
    </div>
  );
};

export default Partner;
