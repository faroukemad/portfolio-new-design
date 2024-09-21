import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        isDisabled: false,
    },
    reducers: {
        setIsDisabled: (state, action) => {
            state.isDisabled = action.payload;
        },
    },
});

export const { setIsDisabled } = formSlice.actions;
export default formSlice.reducer;