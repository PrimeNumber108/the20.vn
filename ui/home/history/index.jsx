import Breadcrumb from "@/components/breadcrumb";
import { useTranslations } from "next-intl";
import React from "react";

const History = () => {
  const tCommon = useTranslations("general.common");
  const t = useTranslations("home.history");
  return (
    <div className="page-layout flex-center mt-[78px] mb-[115px] !px-0">
      <div className="max-w-[860px] bg-black py-12 px-[35px] flex flex-col gap-12 rounded-[12px]">
        <Breadcrumb classNames={{ square: "bg-tint20" }}>
          <p>
            <span>{tCommon("introduction")}</span>
            <span className="text-body-lg"> / {t("breadcrumb")}</span>
          </p>
        </Breadcrumb>
        <div className="w-full h-[1px] bg-[#4f4f4f]"></div>
        <div className="flex gap-x-[70px]">
          <div className="w-[412px]">
            <p className="text-display-md">
              {t.rich("customerFocus", { span: (chunks) => <span className="italic text-tint20">{chunks}</span> })}
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-[30px]">
            <p className="text-body-lg"> {t("establishment")}</p>
            <p className="text-body-lg">{t("milestones")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
