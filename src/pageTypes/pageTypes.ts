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
  elementRef: React.RefObject<HTMLSpanElement>;
};

export type AnimatedNumberProps = {
  number: number;
  duration?: number;
};

export type UseResizeHeightsProp = {
  contentRef: React.RefObject<HTMLDivElement>;
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
