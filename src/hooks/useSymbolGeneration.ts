import { useMemo } from 'react';
import { baseSymbols } from '@data/pageData';
import type { SymbolInformation, SymbolGenerationProp } from "@pageTypes/pageTypes";

export const useSymbolGeneration = ({ radius }: SymbolGenerationProp): SymbolInformation[] => {
  const symbols = useMemo<SymbolInformation[]>(() => {
    const numSymbols = baseSymbols.length;
    const generatedSymbols: SymbolInformation[] = [];

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
  }, [radius]);

  return symbols;
};