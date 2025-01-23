import { useState, useEffect, useRef } from "react";
import type { UseAnimatedNumberProps } from "@pageTypes/pageTypes";

export const useAnimatedNumber = ({
  end,
  duration = 2000,
  startOnVisible = true,
}: UseAnimatedNumberProps) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(!startOnVisible);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnVisible) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [end, duration, isVisible]);

  return { count, elementRef };
};
