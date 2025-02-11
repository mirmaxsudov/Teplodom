import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./products/productSlice";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
