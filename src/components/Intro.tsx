import { useRef } from "react";
import IntroSymbols from "@components/IntroSymbols";
import { useResizeObserver } from "@hooks/useResizeObserver";

const Intro = () => {
  const sectionRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  const size: number = useResizeObserver(sectionRef);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden bg-surface-primary"
    >
      <IntroSymbols size={size} />

      <div className="flex flex-col items-center justify-center text-center space-y-2 z-20">
        <h1>Nicholas Jano</h1>
        <p className="text-base xs-wh:text-xl">Student at Queen's University</p>
        <p className="text-base xs-wh:text-xl">Software Engineer</p>
      </div>
    </section>
  );
};

export default Intro;
