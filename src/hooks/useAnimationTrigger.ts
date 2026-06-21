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
    const element = elementRef.current;

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

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
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
