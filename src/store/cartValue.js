import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cartVal: 0 },
  reducers: {
    incrementCartVal: (state, action) => {
      state.cartVal += 1;
    },
    decrementCartVal: (state, action) => {
      state.cartVal -= 1;
    },
    zeroCartVal: (state, action) => {
      state.cartVal = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
