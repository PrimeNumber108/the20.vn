import useHover from "@/hooks/useHover";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import ProcessIndex from "./ProcessIndex";
import ProcessValue from "./ProcessValue";

const ProcessGrid = () => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2.5">
        {Array.from({ length: 4 }, (_, index) => (
          <ProcessIndex key={`process-index-${index}`} index={index} step={step} setStep={setStep} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2.5">
        {Array.from({ length: 4 }, (_, index) => (
          <ProcessValue key={`process-value-${index}`} index={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default ProcessGrid;
