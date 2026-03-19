
import Link from 'next/link';
import PhIcon from '@/components/phicon';
import type { NavlinkProps } from '@/types/navlink-props';


export default function Navlink({ 
  href, 
  className, 
  icon, 
  value,
  children
}: NavlinkProps
) {
  return (
    <Link href={href} className={className}>
      {value}
      {children}
      {icon && <PhIcon as={icon} size={24} weight="regular" />}
    </Link>
  );
}
