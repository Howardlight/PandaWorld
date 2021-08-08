import { configureStore } from "@reduxjs/toolkit";
import hiddenReducer from "../slices/hiddenSlice";
import textureReducer from "../slices/textureSlice";

export default configureStore({
    reducer: {
        // Place your reducers here

        // handles Hidden State
        hidden: hiddenReducer,

        // handles which texture to
        // display
        texture: textureReducer,


    },
})