import { useTranslations } from "next-intl";
import React from "react";
import BrandBackground from "./background";
import Breadcrumb from "@/components/breadcrumb";

const Brand = () => {
  const t = useTranslations("home.brand");
  return (
    <div className="overflow-hidden text-black bg-white rounded-xl flex-center">
      <div className="flex flex-col lg:flex-row page-layout gap-[34px] py-12 items-center relative">
        <div className="absolute inset-0 -z-1">
          <BrandBackground />
        </div>
        <div className="w-full flex flex-col justify-start gap-5 md:gap-10 min-w-[412px] lg:border-r border-black px-2.5">
          <Breadcrumb color="#000000">
            <p className="text-heading-md">{t("title")}</p>
          </Breadcrumb>
          <div>
            <p className="text-display-sm">
              {t.rich("desc", {
                span: (chunks) => (
                  <>
                    <span className="w-full italic lg:block text-main">{chunks[0]}</span>
                    <span className="w-full italic lg:block text-main">{chunks[1]}</span>
                  </>
                ),
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col gap-5">
            <p className="text-heading-lg text-main">{t("mission.title")}</p>
            <p className="text-body-md">{t("mission.desc")}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-heading-lg text-main">{t("vision.title")}</p>
            <p className="text-body-md">{t("vision.desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
