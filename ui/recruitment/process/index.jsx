"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import ProcessCard from "./ProcessCard";

const Process = () => {
  const t = useTranslations("recruitment.process");
  const [step, setStep] = useState(0);

  return (
    <div className="py-[64px] flex-center bg-white text-black rounded-[12px]">
      <div className="page-layout grid-layout">
        <div className="grid-child-10 space-y-8">
          <p className="text-center text-display-sm">{t("title")}</p>
          <p className="font-semibold text-center text-body-lg">{t.rich("desc", { br: () => <br /> })}</p>
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 4 }, (_, i) => (
              <ProcessCard key={`recruitment-process-${i}`} index={i} step={step} setStep={setStep} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
