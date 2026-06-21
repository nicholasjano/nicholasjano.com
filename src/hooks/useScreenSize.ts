import { useState, useEffect, useCallback } from "react";

export const useScreenSize = (
  minWidth: number = 768,
  minHeight: number = 480
): boolean => {
  const getIsLargeScreen = useCallback(
    (): boolean =>
      window.innerWidth >= minWidth && window.innerHeight >= minHeight,
    [minWidth, minHeight]
  );

  // Initialize with the current screen size
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(getIsLargeScreen);

  useEffect(() => {
    const checkSize = (): void => {
      setIsLargeScreen(getIsLargeScreen());
    };

    window.addEventListener("resize", checkSize);

    // Cleanup
    return (): void => window.removeEventListener("resize", checkSize);
  }, [getIsLargeScreen]);

  return isLargeScreen;
};
