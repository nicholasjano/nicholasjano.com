import { useMemo } from 'react';
import { baseSymbols } from '@data/pageData';

export const generateSymbols = (radius: number) => {
  const symbols = useMemo(() => {
    const numSymbols = baseSymbols.length;
    const generatedSymbols = [];

    for (let i = 0; i < numSymbols; i++) {
      const angle = Math.PI / 2 - i * ((2 * Math.PI) / numSymbols);
      let x = Math.cos(angle) * radius + 50;
      let y = -Math.sin(angle) * radius + 50;

      x = Math.round(x * 1000) / 1000;
      y = Math.round(y * 1000) / 1000;

      generatedSymbols.push({
        text: baseSymbols[i],
        horizontal: `${x}%`,
        vertical: `${y}%`,
      });
    }

    return generatedSymbols;
  }, [radius]); // Recalculate only when the radius changes

  return symbols;
};