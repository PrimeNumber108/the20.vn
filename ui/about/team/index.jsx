import { useTranslations } from "next-intl";
import React from "react";
import BrandBackground from "./background";
import Breadcrumb from "@/components/breadcrumb";
import TeamBackground from "./background";

const TEAMS = ["team1", "team2", "team3", "team4"];

const Team = () => {
  const t = useTranslations("about.team");
  return (
    <div className="overflow-hidden text-black bg-white flex-center">
      <div className="relative py-12 page-layout flex flex-col gap-[60px]">
        <div className="absolute inset-0">
          <TeamBackground />
        </div>
        <div>
          <Breadcrumb color="#000000">
            <p className="text-heading-md">{t("breadcrumb")}</p>
          </Breadcrumb>
          <div className="w-full h-[1px] bg-black mt-6"></div>
        </div>
        <h2 className="text-display-sm">
          {t.rich("title", {
            span: (chunks) => <span className="block">{chunks[0]}</span>,
          })}
        </h2>
        <div className="grid-layout">
          {TEAMS.map((team) => (
            <div key={`about-${team}`} className="col-span-6 px-6 py-5 border border-[#E8E8E8] rounded-lg">
              <p className="mb-5 text-heading-sm">{t(`${team}.name`)}</p>
              <p className="text-body-md">
                {t.rich(`${team}.desc`, {
                  br: (chunks) => <br />,
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
