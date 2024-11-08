import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { NAVIGATION_MENUS } from "@/constants/navigation";
import clsx from "clsx";

const Navigation = () => {
  const pathname = usePathname();
  const t = useTranslations("general.common");

  return (
    <div className="flex items-center justify-between w-full py-5 page-layout">
      <Link href="/">
        <Image
          src="/images/logo/logo-with-text.png"
          alt="logo"
          width={116}
          height={29}
          className="w-[116px] h-[29px]"
          priority
        />
      </Link>
      <div className="flex items-center gap-8">
        {NAVIGATION_MENUS.map(({ name, href }) => (
          <Link
            key={`nav-${name}`}
            href={href}
            className={clsx(
              "font-semibold text-body-sm",
              pathname === href || (href !== "/" && pathname.includes(href)) ? "text-white" : "text-slate-gray"
            )}
          >
            {t(name)}
          </Link>
        ))}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navigation;
