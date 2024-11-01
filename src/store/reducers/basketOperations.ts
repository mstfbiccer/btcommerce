import {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface initialState {
  products: Array<Products>
}
interface Products {
  id: number,
  quantity: number
}
const initialState: initialState = {
  products: [],
}
export const basketOperations = createSlice({
  name: 'basketOperations',
  initialState,
  reducers: {
    add:(state, action: PayloadAction<Products>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<Products>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index].quantity -= action.payload.quantity;
      }
    },
    clear: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        delete state.products[index];
      }
    },
    clearAll : (state) => {
      state.products = [];
    }
  }
})

export const {add, remove, clear, clearAll} = basketOperations.actions;

export default basketOperations.reducer;