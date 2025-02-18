import { useState, useEffect } from "react";
import type { useNavVisibilityProps } from "@pageTypes/pageTypes";

export const useNavVisibility = ({
  isOpen,
  instantClose,
  duration = 300,
}: useNavVisibilityProps) => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // When opening, show the nav immediately
      setNavVisible(true);
    } else {
      // When closing, keep it visible during the transform animation,
      // then hide it instantly once the animation is done.
      const timeout = setTimeout(
        () => {
          setNavVisible(false);
        },
        instantClose ? 0 : duration
      );
      return () => clearTimeout(timeout);
    }
  }, [isOpen, instantClose, duration]);

  return navVisible;
};
