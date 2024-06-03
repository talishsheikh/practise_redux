import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/index";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
