import { useEffect, useState } from "react";

export const useResizeObserver = (
  ref: React.RefObject<HTMLElement>
): number => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setSize(Math.min(width, height)); // Calculate minimum dimension
      }
    });

    observer.observe(ref.current);

    return (): void => observer.disconnect();
  }, [ref]);

  return size;
};
