import { useState, useEffect, RefObject } from "react";
import type { MousePosition } from "@pageTypes/pageTypes";

export const useMousePosition = (containerRef: RefObject<HTMLElement>): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({
        x: Math.max(0, Math.min(100, xPercent)),
        y: Math.max(0, Math.min(100, yPercent)),
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    return () => element.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return mousePosition;
};

export const calculateOffset = (mouseAxis: number, direction: number) => {
  return `${(mouseAxis / 100) * 5 * direction}rem`; // 5 Rem max.
};