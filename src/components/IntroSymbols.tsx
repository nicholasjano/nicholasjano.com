import { getRadius } from '@utilities/getRadius';
import { generateSymbols } from "@utilities/generateSymbols";
import type { IntroSymbolsProp } from "@pageTypes/pageTypes";

const IntroSymbols = ({ size }: IntroSymbolsProp) => {
  const radius = getRadius(); 
  const symbols = generateSymbols(radius);

  return (
    <div
      className="absolute z-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
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
