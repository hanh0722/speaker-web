import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  username: string | null,
  validate_info: string | null,
  type: 'Email' | 'Mobile Phone'
}
const initialState: AuthState = {
  username: null,
  validate_info: null,
  type: 'Email'
};

const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    onSetAuth(state, action: {payload: AuthState}) {
      const {username, validate_info, type} = action.payload;
      state.username = username;
      state.validate_info = validate_info;
      state.type = type
    },
    onSetUsername(state, action) {
      state.username = action.payload;
    }
  }
})

export const authActions = authSlice.actions;

export default authSlice
