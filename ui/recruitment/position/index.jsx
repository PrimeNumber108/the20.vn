"use client";
import Breadcrumb from "@/components/breadcrumb";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";
import PositionCard from "./PositionCard";

const Position = () => {
  const ref = useRef();
  const t = useTranslations("recruitment.position");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const view = localStorage.getItem("intoView");
      if (view === "recruitment-position") {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        localStorage.removeItem("intoView");
      }
    }
  }, []);

  return (
    <div className="py-[120px] flex-center" ref={ref}>
      <div className="relative page-layout grid-layout">
        <div className="absolute w-[1718px] h-[1718px] -bottom-1/2 rounded-full bg-radial-gradient -right-1/2 -z-10"></div>
        <div className="grid-child-10 space-y-16">
          <Breadcrumb>{t("breadcrumb")}</Breadcrumb>
          <div className="grid grid-cols-2 gap-x-8 gap-y-16">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={`recruitment-position-${i}`} className="col-span-1">
                <PositionCard index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
