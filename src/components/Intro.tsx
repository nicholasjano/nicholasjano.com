import { useRef } from "react";
import IntroSymbols from "@components/IntroSymbols";
import { useResizeObserver } from '@utilities/useResizeObserver';

const Intro = () => {
  const sectionRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  const size: number = useResizeObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-surface-primary"
    >
      <IntroSymbols size={size} />

      <div className="z-10 flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-green from-20% via-brand-blue via-50% to-brand-green to-80% text-transparent bg-clip-text bg-400% animate-gradient">
          Nicholas Jano
        </h1>
        <p className="text-base sm:text-xl">Student at Queen's University</p>
        <p className="text-base sm:text-xl">Software Engineer</p>
      </div>
    </section>
  );
};

export default Intro;
