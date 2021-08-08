import { createSlice } from "@reduxjs/toolkit";



export const hiddenSlice = createSlice({
    name: "isHidden",
    initialState: {
        value: false,
    },
    reducers: {
        hide: (state) => {
            state.value = true;
        },
        show: (state) => {
            state.value = false;
        },
    },
})

export const { hide, show } = hiddenSlice.actions

export default hiddenSlice.reducer