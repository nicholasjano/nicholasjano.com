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
        setMaxHeight(contentRef.current.scrollHeight);
        setTimeout(() => setIsResizing(false), 50);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return (): void => window.removeEventListener("resize", updateHeight);
  }, [contentRef]);

  return { maxHeight, isResizing };
};
