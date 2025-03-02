import { createSlice } from "@reduxjs/toolkit";
import { a } from "framer-motion/client";
import notify from "../../helper/notify";

const initBasketState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initBasketState,
  reducers: {
    addToBasket(state, action) {
      if (
        state.basket.findIndex((item) => item.id === action.payload.id) !== -1
      ) {
        notify("Товар уже в корзине");
        return;
      }

      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
      notify("Товар успешно добавлен в корзину");
    },
    removeFromBasket(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
