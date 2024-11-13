import React from "react";

const TimelineItem = ({ time, title, description1, description2, icon, line }) => {
  return (
    <div className="relative flex items-start gap-6 pb-8 md:gap-8">
      {line}
      <div className="flex items-center gap-7">
        <div className="w-3 h-3 rounded-full bg-[#FBFBFB] hidden md:block"></div>
        <div className="md:w-[173px] xs:w-[100px] w-[80px] aspect-square">{icon}</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-heading-sm text-tint20">{time}</div>
        <div className="font-semibold text-heading-md">{title}</div>
        <div className="text-body-lg">{description1}</div>
        <div className="text-body-lg">{description2}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
