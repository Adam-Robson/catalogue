import { useIconContext } from '@/contexts/icon-provider';
import type { RestProps } from '@/types/rest-props';

import type { IconProps } from '@/types/icon-props';
import type { ElementType } from 'react'; 

export default function PhIcon<T extends ElementType = 'span'>({
  as,
  name,
  children,
  className,
  ...rest
}: IconProps<T>) {
  const ctx = useIconContext();

  const restProps = rest as RestProps<T>;

  // allow props to override context defaults
  const size = restProps.size ?? ctx.size;
  const weight = restProps.weight ?? ctx.weight;
  const ctxClass = ctx.className;

  const Tag = (as || 'span') as ElementType;
  const classes = [name ? `${name} ${name}-icon` : null, ctxClass, className].filter(Boolean);
  const classString = classes.join(' ');

  return (
    <Tag 
      {...(restProps as unknown as Record<string, unknown>)} 
      size={size} 
      weight={weight} 
      className={classString}
    >
      {children}
    </Tag>
  );
}

