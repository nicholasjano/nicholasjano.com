import { useEffect, useRef, useState } from "react";
import { FadeDirection } from "@pageTypes/pageTypes";
import type { FadeInOnViewProps } from "@pageTypes/pageTypes";

const FadeInOnView = ({
  children,
  delay = 0,
  className = "",
  direction = FadeDirection.UP,
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
        threshold: 0.05,
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
  }, [delay]);

  const getTransformStyle = () => {
    const distance = 20;
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
        transition: "transform 700ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 500ms linear"
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;