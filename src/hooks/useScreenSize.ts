import { useState, useEffect } from "react";

export const useScreenSize = (
  minWidth: number = 768,
  minHeight: number = 480
): boolean => {
  const getIsLargeScreen = (): boolean =>
    window.innerWidth >= minWidth && window.innerHeight >= minHeight;

  // Initialize with the current screen size
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(getIsLargeScreen);

  useEffect(() => {
    const checkSize = (): void => {
      setIsLargeScreen(getIsLargeScreen());
    };

    window.addEventListener("resize", checkSize);

    // Cleanup
    return (): void => window.removeEventListener("resize", checkSize);
  }, [minWidth, minHeight]);

  return isLargeScreen;
};
