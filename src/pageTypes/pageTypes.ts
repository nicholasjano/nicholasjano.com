import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type NavItemsRightType = readonly [
  string,
  string,
  string,
  string,
  string,
  string
];

export type NavItemsLeftType = readonly [
  IconDefinition,
  IconDefinition,
  IconDefinition
];

export type NavItemsLeftURLType = readonly [string, string, string];
