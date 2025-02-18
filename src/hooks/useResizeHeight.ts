import { useLayoutEffect, useState } from "react";
import type {
  UseResizeHeightsProp,
  UseResizeHeightsReturn,
} from "@pageTypes/pageTypes";

export const useResizeHeight = ({
  contentRef,
}: UseResizeHeightsProp): UseResizeHeightsReturn => {
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      setMaxHeight(contentRef.current!.scrollHeight);
    });

    observer.observe(contentRef.current);

    // Initial measurement
    setMaxHeight(contentRef.current.scrollHeight);

    return () => {
      observer.disconnect();
    };
  }, [contentRef]);

  return { maxHeight };
};
