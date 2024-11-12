import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";
import Contact from "./Contact";
import ContactBusiness from "./ContactBusiness";
import Navigation from "./Navigation";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="pt-12 pb-5 flex-center bg-[#1A1A1A]">
      <div className="page-layout grid-layout">
        <div className="flex items-center justify-center col-span-12 md:items-start md:justify-start xs:col-span-6 md:col-span-2">
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="logo" width={80} height={80} />
          </Link>
        </div>
        <div className="col-span-12 xs:col-span-6 md:col-span-4">
          <Contact />
        </div>
        <div className="col-span-12 xs:col-span-6 md:col-span-4">
          <ContactBusiness />
        </div>
        <div className="col-span-12 xs:col-span-6 md:col-span-2">
          <Navigation />
        </div>
        <div className="col-span-12">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
