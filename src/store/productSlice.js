import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: () => {},
});

export default productSlice.reducer;
