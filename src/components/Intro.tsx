import { useEffect, useRef, useState } from "react";
import IntroSymbols from "@components/IntroSymbols";

const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState(0); // For min(width, height)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setSize(Math.min(width, height)); // Ensure a square for the circle calculations
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
