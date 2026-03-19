'use client';
import { createContext, useContext } from 'react';
import type { IconDefaults } from '@/types/icon-defaults';

const IconContext = createContext<IconDefaults>({});

export const IconProvider = ({ children, value }: { children: React.ReactNode; value?: IconDefaults }) => {
  return <IconContext.Provider value={value ?? {}}>{children}</IconContext.Provider>;
};

export function useIconContext(): IconDefaults {
  return useContext(IconContext);
}

export default IconContext;
