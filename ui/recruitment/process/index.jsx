"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Process = () => {
  const t = useTranslations("recruitment.process");
  const [step, setStep] = useState(0);

  return (
    <div className="py-[64px] flex-center bg-white text-black rounded-[12px]">
      <div className="page-layout grid-layout">
        <div className="col-span-10 col-start-2 space-y-8">
          <p className="text-center text-display-sm">{t("title")}</p>
          <p className="font-semibold text-center text-body-lg">{t.rich("desc", { br: () => <br /> })}</p>
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <div key={`recruitment-process-${i}`}>
                  <div className="flex items-center gap-2.5">
                    <div
                      className={clsx(
                        "text-heading-md w-[38px] h-[38px] rounded-full flex-center cursor-pointer",
                        step == i ? "bg-main text-white" : "bg-[#eeeeee] text-[#9F9F9F]"
                      )}
                      onClick={() => setStep(i)}
                    >
                      {t(`${i}.index`)}
                    </div>
                    <div className="h-1.5 bg-[#eeeeee] flex-1"></div>
                  </div>
                  <div className={clsx("mt-8", step === i ? "opacity-100" : "opacity-0")}>
                    <div className="text-main">
                      <span className="text-heading-lg">{t(`${i}.index`)}. </span>
                      <span className="font-semibold text-body-lg">{t(`${i}.title`)}</span>
                    </div>
                    <div className="mt-5 text-body-md">{t(`${i}.desc`)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
