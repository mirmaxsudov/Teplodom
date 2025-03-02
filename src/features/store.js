import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./products/productSlice";
import basketSlice from "./basket/basketSlice";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    basket: basketSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
