import {PropsWithChildren, createContext, useContext, useState} from 'react';
import {Cart} from '../../Cart';
import React from 'react';

export const CartContext = createContext<Cart>({
  cart: 0,
  addToCart: () => {},
  cleanCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({children}: PropsWithChildren<{}>) {
  const [cart, setCart] = useState<number>(0);

  function addToCart() {
    setCart(cart + 1);
  }

  function removeFromCart() {
    if (cart !== 0) {
      setCart(cart - 1);
    }
  }

  function cleanCart() {
    setCart(0);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, cleanCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): Cart {
  return useContext(CartContext);
}
