import { RefObject, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IntroSymbolsProp = {
  size: number;
};

export type SymbolGenerationProp = {
  radius: number;
};

export type UseAnimatedNumberProps = {
  end: number;
  duration?: number;
  startOnVisible?: boolean;
};

export type UseAnimatedNumberReturn = {
  count: number;
  elementRef: RefObject<HTMLSpanElement>;
};

export type AnimatedNumberProps = {
  number: number;
  duration?: number;
};

export type UseResizeHeightsProp = {
  contentRef: RefObject<HTMLDivElement>;
};

export type UseResizeHeightsReturn = {
  maxHeight: number;
};

export type SymbolInformation = {
  text: string;
  horizontal: string;
  vertical: string;
};

export type StackItemsType = {
  name: string;
  icon: string;
};

export type StackListProps = {
  title: string;
  items: readonly StackItemsType[];
};

export type RoleInfo = {
  image: string;
  role: string;
  company: string;
  period: string;
  highlights: string;
};

export type ProjectInfo = {
  image: string;
  title: string;
  description: string;
  links: {
    github?: string;
    preview?: string;
  };
};

export type IconPaddingProps = {
  iconCount: number;
  fullSize: number;
  minimumPadding?: number;
};

export type IconPaddingReturn = {
  linkRefs: RefObject<HTMLAnchorElement>[];
  paddings: { x: string; y: string }[];
};

export type FooterLeftInfo = {
  title: string;
  icon: IconDefinition;
};

export type FooterRightInfo = {
  link: string;
  aria: string;
  icon: IconDefinition;
};

export type FooterType = {
  name: string;
  internal: FooterLeftInfo[];
  external: FooterRightInfo[];
};

export type handleScrollProps = {
  id: string;
  push?: boolean;
  ref?: RefObject<HTMLElement> | null;
};

export type refType = {
  introRef: RefObject<HTMLElement>;
};

export enum FadeDirection {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export type FadeInOnViewProps = {
  children: ReactNode;
  delay?: number;
  direction?: FadeDirection;
  className?: string;
  rootMargin?: number;
};

export type UseAnimationTriggerProps = {
  elementRef: RefObject<HTMLDivElement>;
  isLoaded: boolean;
  eventName?: string;
};

export type UseResponsiveThresholdProps = {
  default?: number;
  large?: number;
  breakpoint?: number;
};

export type DynamicStatsType = {
  totalCommitsPastMonth: number;
  uniqueRepositoriesPastMonth: number;
  newSolutionCommits: number;
};

export type UseFetchStatsReturn = {
  stats: DynamicStatsType;
  isLoaded: boolean;
};
