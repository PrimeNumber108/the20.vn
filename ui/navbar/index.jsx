"use client";

import React from "react";
import useScrollListener from "@/hooks/useScrollListener";
import clsx from "clsx";
import Navigation from "./Navigation";

const Navbar = () => {
  const scroll = useScrollListener();

  if (!scroll.isUpdated) return;

  return (
    <div
      className={clsx(
        "fixed top-0 z-10 transition-all flex-center h-[75px] w-screen",
        scroll.y > 75 ? "bg-black" : "bg-transparent"
        // (scroll.y < 75 || scroll.y - scroll.lastY <= 0) && "translate-y-0"
      )}
    >
      <Navigation />
    </div>
  );
};

export default Navbar;
