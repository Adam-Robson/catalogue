import type { ElementType, ReactNode } from 'react';

export interface NavlinkProps {
  href: string;
  className?: string;
  /* pass component */
  icon?: ElementType;
  value?: string;
  children?: ReactNode;
};
