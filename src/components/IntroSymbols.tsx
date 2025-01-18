import { useRadius } from "@hooks/useRadius";
import { useSymbolGeneration } from "@hooks/useSymbolGeneration";
import type { IntroSymbolsProp } from "@pageTypes/pageTypes";

const IntroSymbols = ({ size }: IntroSymbolsProp) => {
  const radius = useRadius();
  const symbols = useSymbolGeneration({ radius });

  return (
    <div
      className="absolute z-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="symbol -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-symbols-gradient"
        style={{
          width: `calc(${radius * 2}% + 1em)`,
          height: `calc(${radius * 2}% + 1em)`,
        }}
      />
      {symbols.map((symbol, index) => (
        <span
          key={index}
          className={`symbol fade-scale ${
            index % 2 === 0 ? "text-brand-green" : "text-brand-blue"
          }`}
          style={{
            left: symbol.horizontal,
            top: symbol.vertical,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {symbol.text}
        </span>
      ))}
    </div>
  );
};

export default IntroSymbols;
