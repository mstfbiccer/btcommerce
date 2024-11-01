import { configureStore } from "@reduxjs/toolkit";
import basketOperations from "./reducers/basketOperations";
import productOperations from "./reducers/productOperations";

const store = configureStore({
  reducer: {
    basketOperations,
    productOperations
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
