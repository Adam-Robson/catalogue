export type IconDefaults = {
  size?: number;
  weight?: string;
  className?: string;
  /** Optional map of icon name -> React component */
  icons?: Record<string, React.ElementType>;
};
