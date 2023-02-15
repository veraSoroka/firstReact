import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Cart/Reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});