import { useAnimatedNumber } from "@hooks/useAnimatedNumber";
import type { AnimatedNumberProps } from "@pageTypes/pageTypes";

const AnimatedNumber = ({ number, duration }: AnimatedNumberProps) => {
  const { count, elementRef } = useAnimatedNumber({ end: number, duration });

  return (
    <span className="relative inline-block font-bold text-brand-green">
      <span className="invisible">{number}</span>
      <span ref={elementRef} className="absolute inset-0 text-center">
        {count}
      </span>
    </span>
  );
};

export default AnimatedNumber;
