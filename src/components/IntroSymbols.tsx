import { symbols } from "@data/pageData";
import { motion } from "framer-motion";
import type { MousePosition } from "@pageTypes/pageTypes";
import { calculateOffset } from "@utilities/mousePos";

const IntroSymbols = ({ x, y }: MousePosition) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {symbols.map((symbol, index) => (
        <motion.span
          key={index}
          className={`symbol ${
            index % 2 === 0 ? "text-brand-green" : "text-brand-blue"
          }`}
          style={{
            left: symbol.horizontal,
            top: symbol.vertical,
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: calculateOffset(x, symbol.x),
            y: calculateOffset(y, symbol.y),
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.01,
            opacity: { duration: 0.5, delay: index * 0.1 },
          }}
        >
          {symbol.text}
        </motion.span>
      ))}
    </div>
  );
};

export default IntroSymbols;
