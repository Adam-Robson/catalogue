import { ComponentPropsWithoutRef } from 'react';
  
export type RestProps<
  T extends React.ElementType
> = Omit< 
  ComponentPropsWithoutRef<T>, 'as' | 'children'
> & {
    size?: number;
    weight?: string;
  };
