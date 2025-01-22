export interface IntroSymbolsProp {
  size: number;
}

export interface SymbolGenerationProp {
  radius: number;
}

export interface UseAnimatedNumberProps {
  end: number;
  duration?: number;
  startOnVisible?: boolean;
}

export interface AnimatedNumberProps {
  number: number;
  duration?: number;
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

export type NavItemsType = readonly [
  "Home",
  "Stats",
  "About",
  "Experience",
  "Contact"
];
