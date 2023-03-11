import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import addNewTaskSlice from "./addNewTaskSlice"; 

const store = configureStore({
    reducer: {
        addNewTask: cartSlice.reducer,
    },
})

export default store