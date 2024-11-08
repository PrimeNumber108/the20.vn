import Breadcrumb from "@/components/breadcrumb";
import { useTranslations } from "next-intl";
import React from "react";

const AboutSection = () => {
  const t = useTranslations("about.about");

  return (
    <div className="flex-center py-[120px]">
      <div className="page-layout">
        <div className="grid-layout">
          <div className="col-span-10 col-start-2">
            <Breadcrumb classNames={{ square: "bg-tint20" }}>
              <p className="">{t("trans")}</p>
            </Breadcrumb>
            <div className="w-full h-[1px] bg-[#4f4f4f] mt-12 mb-[64px]"></div>
          </div>
        </div>
        <div className="grid-layout">
          <div className="col-span-10 col-start-2">
            <h2 className="text-display-sm">
              {t.rich("title", {
                span: (chunks) => (
                  <span className="italic text-tint20">
                    <br />
                    {chunks}
                  </span>
                ),
              })}
            </h2>
          </div>
        </div>
        <div className="grid-layout mt-[50px]">
          <div className="col-span-4 col-start-8">
            <p className="text-body-lg">{t("desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
