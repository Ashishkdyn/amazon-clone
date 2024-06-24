import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartValue";
import addProductSlice from "./addProductToCart";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    addProductToCart: addProductSlice.reducer,
  },
});

export default store;
