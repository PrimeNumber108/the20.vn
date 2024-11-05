import { usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { useLocale } from "next-intl";
import React from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const isEn = locale === "en";

  const toggleLanguage = () => {
    router.replace(pathname, { locale: isEn ? "vi" : "en" });
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        name="language-switcher"
        id="language-switcher"
        checked={isEn}
        onChange={toggleLanguage}
        className="hidden"
      />
      <label
        htmlFor="language-switcher"
        className="relative w-[48px] h-5 bg-[#2F2F2F] rounded-full p-1 cursor-pointer overflow-hidden"
      >
        <p
          className={clsx(
            "absolute text-xs font-semibold text-white transition-all duration-1000 top-1/2 -translate-y-1/2",
            isEn ? "left-5" : "left-full"
          )}
        >
          Eng
        </p>
        <div
          className={clsx(
            "absolute w-3 h-3 bg-cover transition-all duration-1000 top-1/2 -translate-y-1/2",
            isEn ? "bg-[url(/images/flag/en.png)] left-1" : "bg-[url(/images/flag/vi.png)] left-[calc(100%-16px)]"
          )}
        />
        <p
          className={clsx(
            "absolute text-xs font-semibold text-white transition-all duration-1000 top-1/2 -translate-y-1/2",
            isEn ? "-left-full" : "left-1"
          )}
        >
          Vie
        </p>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
