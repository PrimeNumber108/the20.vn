import { cn } from "@/lib/utils";
import React from "react";

const Square = ({ width = 10, className }) => {
  return <div className={cn("bg-main", className)} style={{ width, height: width }} />;
};

export default Square;
