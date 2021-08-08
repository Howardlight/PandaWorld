import { configureStore } from "@reduxjs/toolkit";
import hiddenReducer from "../slices/hiddenSlice";

export default configureStore({
    reducer: {
        // Place your reducers here

        // handles Hidden State
        hidden: hiddenReducer,
        
    },
})