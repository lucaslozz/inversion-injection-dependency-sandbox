import {createSlice} from '@reduxjs/toolkit';

type CartState = {
  cart: number;
};

const initialState: CartState = {
  cart: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.cart = state.cart + 1;
    },
    decrement: state => {
      state.cart = state.cart - 1;
    },
    clean: state => {
      state.cart = 0;
    },
  },
});

export default cartSlice.reducer;

export const {increment, decrement, clean} = cartSlice.actions;
