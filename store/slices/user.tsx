import { createSlice, Dispatch } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: null,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        onChangeFetchingUser(state) {
            state.isLoading = true;
        },
        onSetUser(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        }
    }
})

const userActions = userSlice.actions;

export const getUserFromServer = () => {
    return (dispatch: Dispatch) => {
        
    }
}
export default userSlice