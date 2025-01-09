import { useRef } from "react";
import { useMousePosition } from "@utilities/mousePos";
import IntroSymbols from "@components/IntroSymbols"

const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen flex items-center justify-center bg-gradient-radial from-surface-secondary from-[0.01%] to-surface-primary to-[100%]"
    >
      <IntroSymbols x={x} y={y} />

      <div className="z-10 flex flex-col items-center justify-center space-y-2">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-brand-green from-20% via-brand-blue via-50% to-brand-green to-80% text-transparent bg-clip-text bg-400% animate-gradient">
          Nicholas Jano
        </h1>
        <p className="text-2xl">Student at Queen's University</p>
        <p className="text-2xl">Software Engineer</p>
      </div>
    </section>
  );
};

export default Intro;
