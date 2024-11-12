import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Intro = () => {
  const t = useTranslations("recruitment.intro");

  return (
    <div className="pb-[100px] pt-[120px] md:pb-[120px] flex-center relative">
      <Image src="/images/recruitment/recruitment-1.png" alt="hero" fill className="-z-10" priority={true} />
      <div className="page-layout grid-layout">
        <div className="grid-child-10 py-[60px] px-[50px] md:px-[100px] rounded-[20px] drop-shadow flex flex-col gap-10 bg-black">
          <h1 className="space-y-10 text-display-sm">
            <p>{t("title")}</p>
            <p className="italic text-tint20">{t("highlight")}</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
