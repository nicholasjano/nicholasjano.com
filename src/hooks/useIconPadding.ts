import { useRef, useState, useEffect } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconPaddingReturn } from "@pageTypes/pageTypes";

export const useIconPadding = (
  items: readonly IconDefinition[]
): IconPaddingReturn => {
  const refs = items.map(() => useRef<HTMLAnchorElement>(null));
  const [paddings, setPaddings] = useState(items.map(() => "10px"));

  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        // Get the SVG element (FontAwesoneIcon)
        const svg = ref.current.querySelector("svg");
        if (svg) {
          const iconWidth = svg.getBoundingClientRect().width;
          const requiredPadding = Math.max((40 - iconWidth) / 2, 10);
          setPaddings((prev) => {
            const newPaddings = [...prev];
            newPaddings[index] = `${requiredPadding}px`;
            return newPaddings;
          });
        }
      }
    });
  }, [items]);

  return { linkRefs: refs, paddings };
};
