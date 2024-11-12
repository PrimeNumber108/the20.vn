import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Intro = () => {
  const t = useTranslations("about.intro");

  return (
    <div className="pb-[100px] pt-[120px] md:pb-[120px] flex-center relative">
      <Image src="/images/about/about-1.png" alt="hero" fill className="-z-10" priority={true} />
      <div className="page-layout grid-layout">
        <div className="grid-child-10 p-[50px] md:p-[100px] rounded-[20px] drop-shadow flex flex-col gap-10 bg-black">
          <h1 className="text-display-md">
            <span>{t("title")}</span>
            <span className="uppercase md:block text-tint20"> The20.</span>
          </h1>
          <p className="text-heading-md">{t("desc")}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
