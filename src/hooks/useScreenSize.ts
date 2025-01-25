import { useState, useEffect } from "react";

export const useScreenSize = (minWidth = 768, minHeight = 480) => {
  const getIsLargeScreen = () =>
    window.innerWidth >= minWidth && window.innerHeight >= minHeight;

  // Initialize with the current screen size
  const [isLargeScreen, setIsLargeScreen] = useState(getIsLargeScreen);

  useEffect(() => {
    const checkSize = () => {
      setIsLargeScreen(getIsLargeScreen());
    };

    // Add event listener
    window.addEventListener("resize", checkSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkSize);
  }, [minWidth, minHeight]);

  return isLargeScreen;
};
