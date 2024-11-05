import React from "react";
import HomeIntroduction from "./introduction";
import History from "./history";
import Image from "next/image";
import Timeline from "./timeline";
import Brand from "./brand";
import Slide from "./slide";
import CoreValues from "./coreValues";

const Homepage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="relative w-screen z-1">
        <div className="absolute inset-0 -z-20 bg-dark" />
        <Image src="/images/home/hero-section.gif" alt="hero" fill className="-z-10" priority={true} />
        <div className="w-full flex-center">
          <div className="page-layout">
            <HomeIntroduction />
            <History />
          </div>
        </div>
      </div>
      <Timeline />
      <Brand />
      <Slide />
      <CoreValues />
    </div>
  );
};

export default Homepage;
