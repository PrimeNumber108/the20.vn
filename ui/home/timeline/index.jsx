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
        title: t("period1.title"),
        description1: t("period1.description1"),
        description2: t("period1.description2"),
        icon: <Icon1 />,
        line: <LineDown />,
      },
      {
        time: "2019-2020",
        title: t("period2.title"),
        description1: t("period2.description1"),
        description2: t("period2.description2"),
        icon: <Icon2 />,
        line: <LineDown />,
      },
      {
        time: `2020-${tCommon("now")}`,
        title: t("period3.title"),
        description1: t("period3.description1"),
        description2: t("period3.description2"),
        icon: <Icon3 />,
        line: <ArrowDown />,
      },
    ];
  }, [t, tCommon]);

  return (
    <div className="relative flex-center">
      <div className="absolute top-0 -translate-y-1/2 flex-center">
        <div className="w-[2095px] h-[267px] rounded-[2095px] bg-radial-gradient"></div>
      </div>
      <div className="max-w-[1135px] my-[120px]">
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
