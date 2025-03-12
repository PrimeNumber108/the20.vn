import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import LineDown from "./components/LineDown";
import ArrowDown from "./components/ArrowDown";
import TimelineItem from "./components/TimelineItem";

const Timeline = () => {
  const tCommon = useTranslations("general.common");
  const t = useTranslations("home.timeline");

  const timelines = useMemo(() => {
    return [
      {
        time: "2018-2019",
        title: t("0.title"),
        description1: t("0.desc.0"),
        description2: t("0.desc.1"),
        icon: <Icon1 />,
        line: <LineDown />,
      },
      {
        time: "2019-2020",
        title: t("1.title"),
        description1: t("1.desc.0"),
        // description2: t("1.desc.1"),
        icon: <Icon2 />,
        line: <LineDown />,
      },
      {
        time: `2020-${tCommon("present")}`,
        title: t("2.title"),
        description1: t("2.desc.0"),
        // description2: t("2.desc.1"),
        icon: <Icon3 />,
        line: <ArrowDown />,
      },
    ];
  }, [t, tCommon]);

  return (
    <div className="relative px-6 flex-center xxl:p-0">
      <div className="absolute top-0 -translate-y-1/2 flex-center">
        <div className="w-[2095px] h-[267px] rounded-[2095px] bg-radial-gradient"></div>
      </div>
      <div className="max-w-[1135px] py-[80px] md:py-[120px]">
        <div className="flex flex-col">
          {timelines.map((timeline) => (
            <TimelineItem key={`timeline-${timeline.time}`} {...timeline} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
