import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const layer = "border rounded-[12px] border-shade20 absolute";

const logos = [
  {
    image: "/images/about/partner-1.png",
    width: 101,
    position: "left-[72px] top-[77px]",
  },
  {
    image: "/images/about/partner-2.png",
    width: 136,
    position: "left-[208px] top-0",
  },
  {
    image: "/images/about/partner-3.png",
    width: 160,
    height: 159,
    position: "left-0 top-[210px]",
  },
  {
    image: "/images/about/partner-4.png",
    width: 188,
    height: 166,
    position: "left-[188px] top-[166px]",
  },
  {
    image: "/images/about/partner-5.png",
    width: 114,
    height: 115,
    position: "left-[93px] top-[391px]",
  },
  {
    image: "/images/about/partner-6.png",
    width: 93,
    position: "left-[244px] top-[373px]",
  },
];

const LogoLayout = () => {
  return (
    <div className="w-[378px] h-[506px] relative">
      <div className="-z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1193px] h-[1193px] bg-radial-gradient"></div>
      {logos.map(({ image, width, height, position }, index) => (
        <Image
          key={`about-partner-${index}`}
          src={image}
          width={width}
          height={height || width}
          alt="partner"
          className={cn(layer, position)}
        />
      ))}
    </div>
  );
};

export default LogoLayout;
