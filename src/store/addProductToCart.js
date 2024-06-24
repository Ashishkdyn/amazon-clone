import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    actualData: [],
    cartProducts: [],
    removeFromCart: [],
    buyProduct: [],
    qtyCount: 1,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    buyProduct: (state, action) => {
      const productSet = new Set(state.buyProduct.map((product) => product.id));
      if (productSet.has(action.payload.id)) {
        alert("You have already bought this product");
      } else {
        state.buyProduct = [...state.buyProduct, action.payload];
      }
    },
    removerFromCartState: (state, action) => {
      state.removeFromCart = [...state.removeFromCart, action.payload];
    },
    addToCartState: (state, action) => {
      state.removeFromCart = state.removeFromCart.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    placeOrderState: (state, action) => {
      state.cartProducts = [];
      state.removeFromCart = [];
    },
    removeFromCartState2ndVersion: (state) => {
      state.removeFromCart = [];
    },
    placeOrderToReturnsAndorders: (state, action) => {
      state.buyProduct = [...state.buyProduct, ...action.payload];
    },
    actualDataFunction: (state, action) => {
      state.actualData = action.payload;
    },
    returnItem: (state, action) => {
      state.buyProduct = state.buyProduct.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const addProductActions = addProductSlice.actions;
export default addProductSlice;
