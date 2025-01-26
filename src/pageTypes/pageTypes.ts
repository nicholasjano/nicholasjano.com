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

export type UseAnimatedNumberReturn = {
  count: number;
  elementRef: React.RefObject<HTMLSpanElement>;
};

export interface AnimatedNumberProps {
  number: number;
  duration?: number;
}

export interface SymbolInformation {
  text: string;
  horizontal: string;
  vertical: string;
}

export type StackItemsType = {
  name: string;
  icon: string;
};

export type StackListProps = {
  title: string;
  items: readonly StackItemsType[];
};
