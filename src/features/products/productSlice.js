import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initProductState = {
  allProducts: [],
  isLoading: false,
  status: "idle",
  error: null,
  product: null,
  isProductLoading: false,
  popularProducts: [],
  newProducts: [],
  discountProducts: [],
  favoriteProducts: [],
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetch(
      `https://apiforteplodom.onrender.com/products/${id}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetch(
      "https://apiforteplodom.onrender.com/products"
    );
    const data = await response.json();
    return data;
  }
);

export const toggleProductLike = createAsyncThunk(
  "product/toggleLike",
  async ({ productId, isLiked }) => {
    try {
      const patchResponse = await fetch(
        `https://apiforteplodom.onrender.com/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isLiked: !isLiked }),
        }
      );

      return await patchResponse.json();
    } catch (error) {
      throw error.message;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initProductState,
  reducers: {
    toggleProductLikeForState: (state, action) => {
      state.allProducts = state.allProducts.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, isLiked: action.payload.isLiked };
        } else {
          return p;
        }
      });

      state.popularProducts = state.popularProducts.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, isLiked: action.payload.isLiked };
        } else {
          return p;
        }
      });

      state.newProducts = state.newProducts.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, isLiked: action.payload.isLiked };
        } else {
          return p;
        }
      });

      state.discountProducts = state.discountProducts.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, isLiked: action.payload.isLiked };
        } else {
          return p;
        }
      });

      state.favoriteProducts = state.favoriteProducts.map((p) => {
        if (p.id === action.payload.productId) {
          return { ...p, isLiked: action.payload.isLiked };
        } else {
          return p;
        }
      });
    },
  },
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
        state.discountProducts = action.payload.filter((p) => p.isDiscount);
        state.favoriteProducts = state.allProducts.filter((p) => p.isLiked);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(toggleProductLike.fulfilled, (state, action) => {
        state.allProducts = state.allProducts.map((p) => {
          if (p.id === action.payload.id) {
            return action.payload;
          } else {
            return p;
          }
        });

        state.discountProducts = state.allProducts.filter((p) => p.isDiscount);
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isProductLoading = false;
      });
  },
});

export const { toggleProductLikeForState } = productSlice.actions;
export default productSlice.reducer;
