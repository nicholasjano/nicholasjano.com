export interface IntroSymbolsProp {
  size: number;
}

export interface SymbolInformation {
  text: string;
  horizontal: string;
  vertical: string;
}

export type BaseSymbolsType = readonly [
  "{}",
  "++",
  "</>",
  "!=",
  "//",
  "[]",
  "==",
  ":=",
  "**",
  "||",
  ">>",
  "->"
];
