import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
