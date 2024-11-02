import { configureStore } from "@reduxjs/toolkit";
import basketOperations from "./reducers/basketOperations";
import productOperations from "./reducers/productOperations";
import loginOperations from "./reducers/loginOperations";

const store = configureStore({
  reducer: {
    basketOperations,
    productOperations,
    loginOperations,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
