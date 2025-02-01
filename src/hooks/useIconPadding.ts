import { useRef, useState, useEffect } from "react";
import type { IconPaddingReturn, IconPaddingProps } from "@pageTypes/pageTypes";

export const useIconPadding = ({
  items,
  fullSize,
  minimumPadding,
}: IconPaddingProps): IconPaddingReturn => {
  const refs = items.map(() => useRef<HTMLAnchorElement>(null));
  const [paddings, setPaddings] = useState(
    items.map(() => `${minimumPadding}`)
  );

  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        // Get the SVG element (FontAwesoneIcon)
        const svg = ref.current.querySelector("svg");
        if (svg) {
          const iconWidth = svg.getBoundingClientRect().width;
          const requiredPadding = Math.max(
            (fullSize - iconWidth) / 2,
            minimumPadding
          );
          setPaddings((prev) => {
            const newPaddings = [...prev];
            newPaddings[index] = `${requiredPadding}`;
            return newPaddings;
          });
        }
      }
    });
  }, [items]);

  return { linkRefs: refs, paddings };
};
