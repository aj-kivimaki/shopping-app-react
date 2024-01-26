import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: () => {},
});

// for reducers, not extraReducers
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
