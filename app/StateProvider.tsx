'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

type contextType = {
  cart: number
  setCart: Dispatch<SetStateAction<number>>
}

export const StateContext = createContext({} as contextType);

export function StateProvider({ children }: {
  children: React.ReactNode
}) {

  const [cart, setCart] = useState(0);

  return (
    <StateContext.Provider value={{cart, setCart}}>
      {children}
    </StateContext.Provider>
  );
}
