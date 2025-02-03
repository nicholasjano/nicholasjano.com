import { useEffect, useState } from "react";
import type { UseAnimationTriggerProps } from "@pageTypes/pageTypes";

export const useAnimationTrigger = ({
  elementRef,
  isLoaded,
  eventName = "startNumberAnimation",
}: UseAnimationTriggerProps): { hasStartedAnimation: boolean } => {
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasStartedAnimation && isLoaded) {
          setHasStartedAnimation(true);
          window.dispatchEvent(new Event(eventName));
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
  }, [elementRef, hasStartedAnimation, isLoaded, eventName]);

  useEffect(() => {
    if (isLoaded && inView && !hasStartedAnimation) {
      setHasStartedAnimation(true);
      window.dispatchEvent(new Event(eventName));
    }
  }, [isLoaded, inView, hasStartedAnimation, eventName]);

  return { hasStartedAnimation };
};
