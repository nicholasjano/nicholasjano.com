import { RefObject } from "react";
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
  isResizing: boolean;
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

export type FooterIconsInfo = {
  link: string;
  aria: string;
  icon: IconDefinition;
};

export type FooterType = {
  name: string;
  role: string;
  school: string;
  location: string;
  email: string;
  phone: string;
  external: FooterIconsInfo[];
};
