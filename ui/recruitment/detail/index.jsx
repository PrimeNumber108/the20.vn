"use client";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useMemo } from "react";
import DetailDialog from "./DetailDialog";
import { useParams } from "next/navigation";

const Detail = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const tPosition = useTranslations(`recruitment.position`);
  const t = useTranslations(`recruitment.position.${id}`);

  const times = useMemo(() => {
    const chunksArray = [];
    t.rich("times", { li: (chunks) => chunks[0] && chunksArray.push(chunks[0]) });
    return chunksArray;
  }, [t]);

  const handleBack = () => {
    localStorage.setItem("intoView", "recruitment-position");
    router.push("/recruitment");
  };

  return (
    <div className="pt-28 pb-14 md:pt-[192px] md:pb-[123px] flex-center relative">
      <Image src="/images/recruitment/recruitment-2.png" alt="hero" fill className="-z-10" priority={true} />
      <div className="page-layout grid-layout">
        <div className="grid-child-10 p-[30px] md:px-[100px] md:py-[60px] space-y-8 md:space-y-12 bg-black rounded-[20px] drop-shadow">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
            <ArrowLeft color="#3333FE" strokeWidth={2} />
            <p className="font-semibold text-tint20 text-body-md">{tPosition("positionDetail")}</p>
          </div>
          <h2 className="text-display-sm">{t("title")}</h2>
          <div className="space-y-5">
            <p className="text-heading-sm">{tPosition("awesomeJobOpportunity")}:</p>
            <ul className="px-6 list-disc text-body-lg">
              {t.rich("details", { li: (chunks) => <li>{chunks[0]}</li> })}
            </ul>
          </div>
          {times.length > 0 && (
            <div className="space-y-5">
              <p className="text-heading-sm">
                {tPosition("workingHours")}: <span className="!text-body-lg font-normal">{t("timeNote")}</span>
              </p>
              <ul className="px-6 list-disc text-body-lg">
                {times.map((time, index) => (
                  <li key={`recruitment-position-time-${index}`}>{time}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="space-y-5">
            <p className="text-heading-sm">{tPosition("simpleRequirements")}:</p>
            <ul className="px-6 list-disc text-body-lg">
              {t.rich("requirements", { li: (chunks) => <li>{chunks[0]}</li> })}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="text-heading-sm">{tPosition("amazingBenefits")}:</p>
            <ul className="px-6 list-disc text-body-lg">
              {t.rich("benefits", { li: (chunks) => <li>{chunks[0]}</li> })}
            </ul>
          </div>
          <div className="space-y-5">
            <DetailDialog id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
