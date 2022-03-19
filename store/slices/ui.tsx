import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobileScreen: false
};

const uiSlice = createSlice({
    name: 'ui-slice',
    initialState,
    reducers: {
        onChangeScreen(state, action) {
            state.isMobileScreen = action.payload;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;