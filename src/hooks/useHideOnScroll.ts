import { useState, useEffect, RefObject } from "react";

export const useHideOnScroll = (
  ref: RefObject<HTMLElement>
): boolean => {
  const [hideContents, setHideContents] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      // Get exact component height
      const componentHeight = ref.current.offsetHeight;
      setHideContents(window.scrollY >= componentHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return hideContents;
};
