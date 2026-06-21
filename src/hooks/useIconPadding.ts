import { useRef, useState, useEffect, useMemo } from "react";
import type { IconPaddingReturn, IconPaddingProps } from "@pageTypes/pageTypes";

// Generates values to create square paddings around icons.
export const useIconPadding = ({
  iconCount,
  fullSize,
  minimumPadding = 0,
}: IconPaddingProps): IconPaddingReturn => {
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [paddings, setPaddings] = useState(
    Array.from({ length: iconCount }, () => ({
      x: `${minimumPadding}`,
      y: `${minimumPadding}`,
    }))
  );

  // Stable callback refs (one per icon) that populates the refs array
  const linkRefs = useMemo(
    () =>
      Array.from(
        { length: iconCount },
        (_, index) =>
          (element: HTMLAnchorElement | null): void => {
            refs.current[index] = element;
          }
      ),
    [iconCount]
  );

  useEffect(() => {
    const observers: ResizeObserver[] = [];

    refs.current.forEach((element, index) => {
      if (element) {
        const svg = element.querySelector("svg");

        if (svg) {
          const updatePadding = () => {
            const { width: iconWidth, height: iconHeight } =
              svg.getBoundingClientRect();
            const requiredPaddingX = Math.max(
              (fullSize - iconWidth) / 2,
              minimumPadding
            );
            const requiredPaddingY = Math.max(
              (fullSize - iconHeight) / 2,
              minimumPadding
            );

            setPaddings((prev) => {
              const newPaddings = [...prev];
              newPaddings[index] = {
                x: `${requiredPaddingX}`,
                y: `${requiredPaddingY}`,
              };
              return newPaddings;
            });
          };

          // Initial padding calculation
          updatePadding();

          // Create a ResizeObserver to watch the <svg>
          const observer = new ResizeObserver(updatePadding);
          observer.observe(svg);
          observers.push(observer);
        }
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [iconCount, fullSize, minimumPadding]);

  return { linkRefs, paddings };
};
