export const generateSymbols = (radius: number) => {
  const baseSymbols = [
    "{}",
    "++",
    "</>",
    "!==",
    "//",
    "[]",
    "==",
    ":=",
    "**",
    "||",
    ">>",
    "->",
  ];
  const numSymbols = baseSymbols.length;
  const symbols = [];

  for (let i = 0; i < numSymbols; i++) {
    const angle = Math.PI / 2 - i * ((2 * Math.PI) / numSymbols);
    let x = Math.cos(angle) * radius + 50;
    let y = -Math.sin(angle) * radius + 50;

    x = Math.round(x * 1000) / 1000;
    y = Math.round(y * 1000) / 1000;

    symbols.push({
      text: baseSymbols[i],
      horizontal: `${x}%`,
      vertical: `${y}%`,
    });
  }

  return symbols;
};

const radius: number = 35; // 50% on both sizes means 100% total
export const symbols = generateSymbols(radius);
