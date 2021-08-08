import { createSlice } from "@reduxjs/toolkit";

export const textureSlice = createSlice({
    name: "texture",
    initialState: {
        value: 0,
    },
    reducers: {

        // Sets the state to the value of the payload
        // ex: Apandah texture is 0,
        // so you useSetToAmount(0)
        setToAmount: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { setToAmount } = textureSlice.actions

export default textureSlice.reducer