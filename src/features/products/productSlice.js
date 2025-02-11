import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initProductState = {
  allProducts: [],
  isLoading: false,
  status: "idle",
  error: null,
  popularProducts: [],
  newProducts: [],
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.allProducts = action.payload;
        action.payload.sort((a, b) => b.liked - a.liked);
        state.popularProducts = action.payload;
        state.newProducts = action.payload.filter((p) => p.isNew);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;    