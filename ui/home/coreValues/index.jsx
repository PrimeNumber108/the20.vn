import Square from "@/components/Square";
import { useTranslations } from "next-intl";
import React from "react";

const VALUES = ["value1", "value2", "value3", "value4"];

const CoreValues = () => {
  const t = useTranslations("home.coreValues");
  return (
    <div className="relative flex-center">
      <div className="page-layout grid-layout py-[120px] items-end relative">
        <div className="absolute w-[1193px] h-[1193px] rounded-full bg-radial-gradient -left-1/2 -bottom-1/2 -z-10"></div>
        <div className="col-span-3 col-start-2">
          <div className="flex flex-col gap-[60px]">
            <Square width={45} />
            <p className="text-display-lg !text-[90px]">{t("trans")}</p>
          </div>
        </div>
        <div className="col-span-6 col-start-6 border-y border-y-[#5E5E5E]">
          <div className="flex flex-col divide-y divide-[#5E5E5E]">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={`core-value-${i}`} className="py-8">
                <p className="flex gap-5 mb-5 text-heading-xl">
                  <span>{t(`${i}.index`)}</span>
                  <span>{t(`${i}.title`)}</span>
                </p>
                <p className="text-body-lg">{t(`${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
