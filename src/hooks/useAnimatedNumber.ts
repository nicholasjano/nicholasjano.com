import { useState, useEffect, useRef } from "react";
import type {
  UseAnimatedNumberProps,
  UseAnimatedNumberReturn,
} from "@pageTypes/pageTypes";

// Custom event for synchronization
const ANIMATION_START_EVENT = "startNumberAnimation";

export const useAnimatedNumber = ({
  end,
  duration = 2000,
}: UseAnimatedNumberProps): UseAnimatedNumberReturn => {
  const [count, setCount] = useState<number>(end <= 1 ? end : 0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // If end is 0 or 1, don't set up the animation
    if (end <= 1) {
      setCount(end);
      return;
    }

    const handleAnimationStart = () => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;

        // Very aggressive easing that slows down dramatically at the end for large numbers
        const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        const percentage = easeOutExpo(Math.min(progress / duration, 1));

        setCount(Math.floor(percentage * end));

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    // Listen for the custom event
    window.addEventListener(ANIMATION_START_EVENT, handleAnimationStart);

    return (): void => {
      window.removeEventListener(ANIMATION_START_EVENT, handleAnimationStart);
    };
  }, [end, duration]);

  return { count, elementRef };
};
