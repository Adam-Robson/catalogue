import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

export type IconProps<T extends ElementType = 'span'> = {
  as?: T;
  name?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;
