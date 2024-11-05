import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const HomeIntroduction = () => {
  const t = useTranslations("home.introduction");
  const tCommon = useTranslations("general.common");
  return (
    <div className="mt-[160px] text-center flex-center flex-col space-y-10">
      <div className="grid-layout">
        <div className="col-span-10 col-start-2">
          <h1 className="uppercase text-display-lg">The 20</h1>
          <h2 className="text-display-lg">{t("companyName")}</h2>
        </div>
      </div>
      <div className="grid-layout">
        <div className="col-span-8 col-start-3">
          <p className="text-body-lg">{t("companyDesc")}</p>
        </div>
      </div>
      <div className="flex-center">
        <Link href='/about'>
          <Button variant="outline" size="lg">
            <span>{tCommon("about")}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeIntroduction;
