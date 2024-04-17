import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./FavSlice";

const store = configureStore({
    reducer: {
        favourites: itemReducer,
    },
});

export default store;