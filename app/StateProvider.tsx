'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

type contextType = {
  cart: EmptyObjectWithOptionalArgs
  setCart: Dispatch<SetStateAction<EmptyObjectWithOptionalArgs>>
}

type EmptyObjectWithOptionalArgs = {
  [key: string]: number;
};

export const StateContext = createContext({} as contextType);

export function StateProvider({ children }: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<EmptyObjectWithOptionalArgs>({}); 
  return (
    <StateContext.Provider value={{cart, setCart}}>
      {children}
    </StateContext.Provider>
  );
}
