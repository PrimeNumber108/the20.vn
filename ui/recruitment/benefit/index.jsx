import React from "react";
import BenefitCard from "./BenefitCard";
import { useTranslations } from "next-intl";

const Benefit = () => {
  const t = useTranslations("recruitment.benefit");

  return (
    <div className="py-[120px] flex-center">
      <div className="relative page-layout grid-layout">
        <div className="absolute w-[1481px] h-[1481px] top-[309px] rounded-full bg-radial-gradient -left-1/2 -z-10"></div>
        <div className="col-span-10 col-start-2 space-y-[105px]">
          <p className="font-semibold text-center text-body-lg">{t("title")}</p>
          <div className="flex flex-wrap justify-center gap-[32px]">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={`recruitment-benefit-${i}`} className="w-[calc(100%/3-32px*2/3)]">
                <BenefitCard
                  image={`/images/recruitment/benefit-${i + 1}.png`}
                  title={t(`${i}.title`)}
                  desc={t(`${i}.desc`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;