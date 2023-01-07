'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import {Product} from '../types/product'

export type contextType = {
  cart: Product[]
  setCart: Dispatch<SetStateAction<Product[]>>
}

export const StateContext = createContext({} as contextType);

export function StateProvider({ children, products }: {
  children: React.ReactNode
  products: Product[]
}) {
  const [cart, setCart] = useState<Product[]>(products.map(product => ({...product, cartQt: 0}))); 
  return (
    <StateContext.Provider value={{cart, setCart}}>
      {children}
    </StateContext.Provider>
  );
}
