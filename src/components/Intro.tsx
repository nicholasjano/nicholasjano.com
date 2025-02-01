import { useRef } from "react";
import IntroSymbols from "@components/IntroSymbols";
import { useResizeObserver } from "@hooks/useResizeObserver";

const Intro = () => {
  const headerRef: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);
  const size: number = useResizeObserver(headerRef);

  return (
    <header
      id="home"
      ref={headerRef}
      className="fixed inset-0 w-screen h-screen-dvh flex items-center justify-center overflow-hidden bg-surface-primary"
    >
      <IntroSymbols size={size} />

      <div className="flex flex-col items-center justify-center text-center space-y-2 z-20">
        <h1>Nicholas Jano</h1>
        <p className="text-base xs-wh:text-xl">Student at Queen's University</p>
        <p className="text-base xs-wh:text-xl">Software Engineer</p>
      </div>
    </header>
  );
};

export default Intro;
