import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./reducers/drawerSlice";
import productSlice from "./reducers/productSlice";
import detailSlice from "./reducers/detailSlice";
import cardSlice from "./reducers/CardSlice";



export const store = configureStore({
    reducer: {
        drawers: drawerSlice,
        products: productSlice,
        details: detailSlice,
        cards: cardSlice,

    },
})
