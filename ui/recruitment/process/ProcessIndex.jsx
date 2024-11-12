import useHover from "@/hooks/useHover";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

const ProcessIndex = ({ index, step, setStep }) => {
  const t = useTranslations("recruitment.process");
  const [ref, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) {
      setStep(index);
    }
  }, [isHovered]);

  return (
    <div className="flex items-center gap-2.5">
      <div
        ref={ref}
        className={clsx(
          "text-heading-md w-[38px] h-[38px] rounded-full flex-center cursor-pointer",
          step == index ? "bg-main text-white" : "bg-[#eeeeee] text-[#9F9F9F]"
        )}
        onClick={() => setStep(index)}
      >
        {t(`${index}.index`)}
      </div>
      <div className="h-1.5 bg-[#eeeeee] flex-1"></div>
    </div>
  );
};

export default ProcessIndex;
