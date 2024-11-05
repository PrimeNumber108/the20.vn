import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Intro = () => {
  const t = useTranslations("about.intro");

  return (
    <div className="py-[128px] flex-center relative">
      <Image src="/images/about/about-1.png" alt="hero" fill className="-z-10" priority={true} />
      <div className="page-layout grid-layout">
        <div className="col-span-10 col-start-2 p-[100px] rounded-[20px] drop-shadow flex flex-col gap-10 bg-black">
          <h1 className="text-display-md">
            <span>{t("title")}</span>
            <br />
            <span className="uppercase text-tint20">The20.</span>
          </h1>
          <p className="text-heading-md">{t("desc")}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
