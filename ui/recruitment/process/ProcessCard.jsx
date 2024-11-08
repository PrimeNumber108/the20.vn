import useHover from "@/hooks/useHover";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

const ProcessCard = ({ index, step, setStep }) => {
  const t = useTranslations("recruitment.process");
  const [ref, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) {
      setStep(index);
    }
  }, [isHovered]);

  return (
    <div>
      <div className="flex items-center gap-2.5">
        <div
          ref={ref}
          className={clsx(
            "text-heading-md w-[38px] h-[38px] rounded-full flex-center cursor-pointer",
            step == index ? "bg-main text-white" : "bg-[#eeeeee] text-[#9F9F9F]"
          )}
          onClick={() => setStep(i)}
        >
          {t(`${index}.index`)}
        </div>
        <div className="h-1.5 bg-[#eeeeee] flex-1"></div>
      </div>
      <div className={clsx("mt-8", step === index ? "opacity-100" : "opacity-0")}>
        <div className="text-main">
          <span className="text-heading-lg">{t(`${index}.index`)}. </span>
          <span className="font-semibold text-body-lg">{t(`${index}.title`)}</span>
        </div>
        <div className="mt-5 text-body-md">{t(`${index}.desc`)}</div>
      </div>
    </div>
  );
};

export default ProcessCard;
