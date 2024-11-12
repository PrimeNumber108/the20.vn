import { useTranslations } from "next-intl";
import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import TeamBackground from "./background";

const Team = () => {
  const t = useTranslations("about.team");
  return (
    <div className="overflow-hidden text-black bg-white rounded-[12px] flex-center">
      <div className="relative flex flex-col gap-10 py-12 md:gap-14 page-layout">
        <div className="absolute inset-0">
          <TeamBackground />
        </div>
        <div>
          <Breadcrumb color="#000000">
            <p className="text-heading-md">{t("breadcrumb")}</p>
          </Breadcrumb>
          <div className="w-full h-[1px] bg-black mt-6"></div>
        </div>
        <h2 className="text-display-sm">
          {t.rich("title", { span: (chunks) => <span className="md:block"> {chunks[0]}</span> })}
        </h2>
        <div className="grid-layout">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={`about--about-${i}`}
              className="col-span-12 md:col-span-6 px-6 py-5 border border-[#E8E8E8] rounded-lg"
            >
              <p className="mb-5 text-heading-sm">{t(`${i}.name`)}</p>
              <p className="text-body-md">{t.rich(`${i}.desc`, { br: () => <br /> })}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
