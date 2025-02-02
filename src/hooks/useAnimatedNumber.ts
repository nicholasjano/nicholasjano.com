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
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleAnimationStart = () => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;

        const easeOutQuad = (x: number): number => 1 - Math.pow(1 - x, 2);
        const percentage = easeOutQuad(Math.min(progress / duration, 1));

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
