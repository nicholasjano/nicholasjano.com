import { useState, useEffect } from "react";
import type { UseResponsiveThresholdProps } from "@pageTypes/pageTypes";

export const useResponsiveThreshold = ({
  default: defaultThreshold = 0.025,
  large: largeThreshold = 0.05,
  breakpoint = 1024,
}: UseResponsiveThresholdProps = {}): number => {
  const [threshold, setThreshold] = useState(largeThreshold);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const updateThreshold = (e: MediaQueryListEvent | MediaQueryList) => {
      setThreshold(e.matches ? largeThreshold : defaultThreshold);
    };

    updateThreshold(mediaQuery);
    mediaQuery.addEventListener("change", updateThreshold);

    return (): void => {
      mediaQuery.removeEventListener("change", updateThreshold);
    };
  }, [defaultThreshold, largeThreshold, breakpoint]);

  return threshold;
};
