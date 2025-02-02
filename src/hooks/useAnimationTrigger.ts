import { useEffect, useState } from "react";
import type { UseAnimationTriggerProps } from "@pageTypes/pageTypes";

export const useAnimationTrigger = ({
  elementRef,
  eventName = "startNumberAnimation",
}: UseAnimationTriggerProps): { hasStartedAnimation: boolean } => {
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedAnimation) {
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
  }, [elementRef, hasStartedAnimation, eventName]);

  return { hasStartedAnimation };
};
