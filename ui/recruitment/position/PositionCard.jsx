import ArrowRight from "@/components/icons/ArrowRight";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";

const PositionCard = ({ index = 0 }) => {
  const t = useTranslations(`recruitment.position`);

  const details = useMemo(() => {
    const chunksArray = [];
    t.rich(`${index}.details`, { li: (chunks) => chunks[0] && chunksArray.push(chunks[0]) });
    return chunksArray;
  }, [t]);

  const visibleDetails = useMemo(() => details.slice(0, 3), [details]);

  return (
    <div className="px-8 space-y-6">
      <p className="text-heading-md">{t(`${index}.title`)}</p>
      <p className="font-semibold text-body-lg">{t("awesomeJobOpportunity")}</p>
      <ul className="pl-4 list-disc text-body-md">
        {visibleDetails.map((detail, i) => (
          <li key={i}>
            {detail}
            {i === visibleDetails.length - 1 && details.length > 3 && "..."}
          </li>
        ))}
      </ul>
      <Link href={`/recruitment/${index}`} className="flex items-center justify-end gap-1">
        <span className="underline text-heading-sm text-tint20">{t("viewMore")}</span>
        <ArrowRight color="#3333FE" strokeWidth={2} className="mt-0.5" />
      </Link>
    </div>
  );
};

export default PositionCard;
