import IntroSymbols from "@components/IntroSymbols";
import { useResizeObserver } from "@hooks/useResizeObserver";
import { useHideOnScroll } from "@hooks/useHideOnScroll";
import type { refType } from "@pageTypes/pageTypes";

const Intro = ({ introRef }: refType) => {
  const size = useResizeObserver(introRef);
  const hideContents = useHideOnScroll(introRef);

  return (
    <header
      id="home"
      ref={introRef}
      className="fixed inset-0 w-screen h-screen-lvh flex flex-col justify-start overflow-hidden bg-surface-primary"
    >
      <div
        className={`h-screen-dvh w-full flex flex-col items-center justify-center transition-[height] duration-200 ease-in ${
          hideContents ? "opacity-0" : "opacity-100"
        }`}
      >
        <IntroSymbols size={size} />
        <div className="flex flex-col items-center justify-center text-center space-y-2 z-20">
          <h1>Nicholas Jano</h1>
          <p className="text-base xs-wh:text-xl">
            <span className="sm:hidden">SWE</span>
            <span className="hidden sm:inline">Software Engineer</span>
            <span> I at Marmon Rail</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Intro;
