import {configureStore} from '@reduxjs/toolkit';

import cart, {clean, decrement, increment} from './slices';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Cart} from '../../Cart';

export const store = configureStore({
  reducer: {cart},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export function useCartRedux(): Cart {
  const cartRedux = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  function addToCart() {
    dispatch(increment());
  }

  function removeFromCart() {
    if (cartRedux !== 0) {
      dispatch(decrement());
    }
  }

  function cleanCart() {
    dispatch(clean());
  }

  return {cart: cartRedux, addToCart, removeFromCart, cleanCart};
}
