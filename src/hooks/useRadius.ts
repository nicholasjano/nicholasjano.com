import { useState, useEffect } from 'react';

export const useRadius = (): number => {
  const defaultRadiusDivider = 480
  const getDefaultRadius = (): number => (window.innerWidth < defaultRadiusDivider ? 40 : 36);

  const [radius, setRadius] = useState<number>(() => getDefaultRadius());

  useEffect(() => {
    const handleScrollAndResize = () => {
      const defaultRadius = getDefaultRadius();
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate the scroll percentage relative to 1vh
      const scrollPercent = Math.min(scrollY / viewportHeight, 1);

      // Change radius based on scroll positon
      const newRadius = defaultRadius + scrollPercent * (100 - defaultRadius);
      setRadius(newRadius);
    };

    // Update radius on scroll and resize
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    // Call it once to set the initial radius
    handleScrollAndResize();

    // Cleanup
    return (): void => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  return radius;
};