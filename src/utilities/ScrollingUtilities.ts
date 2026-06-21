import type { handleScrollProps } from "@pageTypes/pageTypes";

const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

// Absolute document top from layout boxes, ignores CSS transforms
const getDocumentTop = (element: HTMLElement): number => {
  let top = 0;
  let current: HTMLElement | null = element;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
};

export const handleScroll = ({
  id,
  push = false,
  ref = null,
}: handleScrollProps): void => {
  if (id === "home") {
    // If home, go to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (id === "stats" && ref?.current) {
    // If stats, go 100lvh
    const position = ref.current.offsetHeight;
    window.scrollTo({ top: position, behavior: "smooth" });
  } else {
    // Otherwise, get from id
    const section = document.getElementById(id);
    if (section) {
      if (push) {
        // Calculate 3rem offset for navbar when going to a specific project
        const offset = 3 * rootFontSize;
        const position = getDocumentTop(section) - offset;

        window.scrollTo({ top: position, behavior: "smooth" });
      } else {
        // Scroll normally to the section
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
};
