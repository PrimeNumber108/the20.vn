import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

const ProcessValue = ({ index, step }) => {
  const t = useTranslations("recruitment.process");

  return (
    <div
      className={clsx("mt-8 min-h-[140px]", step === index ? "block md:opacity-100" : "hidden md:block md:opacity-0")}
    >
      <div className="text-main">
        <span className="text-heading-lg">{t(`${index}.index`)}. </span>
        <span className="font-semibold text-body-lg">{t(`${index}.title`)}</span>
      </div>
      <div className="mt-5 text-body-md">{t(`${index}.desc`)}</div>
    </div>
  );
};

export default ProcessValue;
