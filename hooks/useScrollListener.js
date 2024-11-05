import { createContext, useState, useEffect } from "react";

export default function useScrollListener() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isUpdated: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => ({
        x: window.scrollX,
        y: window.scrollY,
        lastX: last.x,
        lastY: last.y,
        isUpdated: true,
      }));
    };

    if (typeof window === "undefined") return;

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}

export const ScrollContext = createContext(null);
