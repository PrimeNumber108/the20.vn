"use client";

import React from "react";
import useScrollListener from "@/hooks/useScrollListener";
import clsx from "clsx";
import Navigation from "./Navigation";
import NavigationDrawer from "./NavigationDrawer";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  const scroll = useScrollListener();

  if (!scroll.isUpdated) return;

  return (
    <div
      className={clsx(
        "fixed top-0 z-[9999] transition-all flex-center h-[75px] w-screen",
        pathname === "/contact" || scroll.y > 75 ? "bg-black" : "bg-transparent"
        // (scroll.y < 75 || scroll.y - scroll.lastY <= 0) && "translate-y-0"
      )}
    >
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
          <div className="hidden lg:block">
            <Navigation />
          </div>
          <LanguageSwitcher />
          <div className="block lg:hidden h-fit">
            <NavigationDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
