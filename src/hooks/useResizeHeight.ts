import { useEffect, useState } from "react";
import type {
  UseResizeHeightsProp,
  UseResizeHeightsReturn,
} from "@pageTypes/pageTypes";

export const useResizeHeight = ({
  contentRef,
}: UseResizeHeightsProp): UseResizeHeightsReturn => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  useEffect(() => {
    const updateHeight = (): void => {
      if (contentRef.current) {
        setIsResizing(true);
        const height = contentRef.current.scrollHeight + 2;
        setMaxHeight(height);
        setTimeout(() => setIsResizing(false), 50);
      }
    };

    // Initial measurement
    updateHeight();
    // Secondary measurement to catch any late layout changes
    const initialTimeout = setTimeout(updateHeight, 50);

    // Update on window resize
    window.addEventListener("resize", updateHeight);

    return (): void => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(initialTimeout);
    };
  }, [contentRef]);

  return { maxHeight, isResizing };
};
