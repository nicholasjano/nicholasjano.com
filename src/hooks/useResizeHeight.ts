import { useLayoutEffect, useState } from "react";
import type {
  UseResizeHeightsProp,
  UseResizeHeightsReturn,
} from "@pageTypes/pageTypes";

export const useResizeHeight = ({
  contentRef,
}: UseResizeHeightsProp): UseResizeHeightsReturn => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      setMaxHeight(contentRef.current!.scrollHeight);
    });

    observer.observe(contentRef.current);

    setMaxHeight(contentRef.current.scrollHeight);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleWindowResize = () => {
      setIsResizing(true);
      if (contentRef.current) {
        setMaxHeight(contentRef.current.scrollHeight);
      }
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsResizing(false);
      }, 50);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(resizeTimeout);
    };
  }, [contentRef]);

  return { maxHeight, isResizing };
};
