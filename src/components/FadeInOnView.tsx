import { useEffect, useRef, useState } from "react";
import { FadeDirection } from "@pageTypes/pageTypes";
import type { FadeInOnViewProps } from "@pageTypes/pageTypes";

const FadeInOnView = ({
  children,
  delay = 0,
  className = "",
  direction = FadeDirection.UP,
  rootMargin = 4,
}: FadeInOnViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return (): void => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [delay, rootMargin]);

  const getTransformStyle = () => {
    const distance = 10;
    switch (direction) {
      case FadeDirection.UP:
        return `translateY(${isVisible ? 0 : distance}px)`;
      case FadeDirection.DOWN:
        return `translateY(${isVisible ? 0 : -distance}px)`;
      case FadeDirection.LEFT:
        return `translateX(${isVisible ? 0 : distance}px)`;
      case FadeDirection.RIGHT:
        return `translateX(${isVisible ? 0 : -distance}px)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransformStyle(),
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        perspective: "1000px",
        opacity: isVisible ? 1 : 0,
        transition:
          "transform 350ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 250ms linear",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
