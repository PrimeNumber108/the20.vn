"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import ProcessCard from "./ProcessValue";
import ProcessGrid from "./ProcessGrid";

const Process = () => {
  const t = useTranslations("recruitment.process");
  const [step, setStep] = useState(0);

  return (
    <div className="py-[64px] flex-center bg-white text-black rounded-[12px]">
      <div className="page-layout grid-layout">
        <div className="space-y-8 grid-child-10">
          <p className="text-center text-display-sm">{t("title")}</p>
          <p className="font-semibold text-center text-body-lg">{t.rich("desc", { br: () => <br /> })}</p>
          <div>
            {/* {Array.from({ length: 4 }, (_, i) => (
              <ProcessCard key={`recruitment-process-${i}`} index={i} step={step} setStep={setStep} />
            ))} */}
            <ProcessGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
