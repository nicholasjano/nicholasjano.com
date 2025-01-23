import { useState, useEffect } from "react";

export const useScreenSize = (minWidth = 768, minHeight = 480) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsLargeScreen(
        window.innerWidth >= minWidth && window.innerHeight >= minHeight
      );
    };

    // Initial check
    checkSize();

    // Add event listener
    window.addEventListener("resize", checkSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkSize);
  }, [minWidth, minHeight]);

  return isLargeScreen;
};
