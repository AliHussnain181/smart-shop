import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import adminReducer from "./adminSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
     reducer: {
          user: userReducer,
          product: productReducer,
          admin: adminReducer,
          cart : cartReducer
     }
})