"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { NAVIGATION_MENUS } from "@/constants/navigation";
import clsx from "clsx";

const Navigation = () => {
  const pathname = usePathname();
  const t = useTranslations("general.common");

  return (
    <div className="flex flex-col gap-5">
      {NAVIGATION_MENUS.map(({ name, href }) => (
        <Link
          key={`nav-footer-${name}`}
          href={href}
          className={clsx(
            "font-semibold text-body-lg",
            pathname === href || (href !== "/" && pathname.includes(href)) ? "text-white" : "text-slate-gray"
          )}
        >
          {t(name)}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
