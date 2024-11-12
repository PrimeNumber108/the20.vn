"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAVIGATION_MENUS } from "@/constants/navigation";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("general.common");
  const router = useRouter();

  const onRedirect = (link) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="cursor-pointer size-8"
        onClick={() => setOpen(true)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <DrawerContent className="h-screen text-black bg-white rounded-none w-[360px] p-5 m-0 top-0">
        <DrawerHeader className="flex items-center justify-between p-0">
          <DrawerTitle>
            <p className="text-heading-xl">THE 20</p>
          </DrawerTitle>
          <DrawerDescription />
          <Button variant="destructive" size="sm" className="w-8 h-8" onClick={() => setOpen(false)}>
            X
          </Button>
        </DrawerHeader>
        <div className="flex flex-col gap-8 mt-8">
          {NAVIGATION_MENUS.map(({ name, href }) => (
            <div
              key={`nav-${name}`}
              href={href}
              className={clsx(
                "font-semibold text-body-md w-fit",
                pathname === href || (href !== "/" && pathname.includes(href)) ? "text-main" : "text-slate-gray"
              )}
              onClick={() => onRedirect(href)}
            >
              {t(name)}
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
