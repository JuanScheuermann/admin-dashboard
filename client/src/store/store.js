import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from ".";

export const store = configureStore({
    reducer: {
        global: globalSlice.reducer
    }
})