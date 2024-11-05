import React from "react";
import Square from "./Square";
import { cn } from "@/lib/utils";

const Breadcrumb = ({ children, color = "#ffffff", classNames: { wrapper = "", square = "", body = "" } = {} }) => (
  <div className={cn("flex gap-2.5 items-end", wrapper)}>
    <Square className={cn("mb-1.5", square)} />
    <div className={cn("text-heading-md", body)} style={{ color }}>
      {children}
    </div>
  </div>
);

export default Breadcrumb;
