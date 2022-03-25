import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { onLogin } from "../../service/class/auth";
import { UserPayload, UserState } from "../../types/redux";
import { deleteCookie, getCookie } from "../../utils/cookies";

const initialState: UserState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
  token: null,
  error: null
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    onChangeFetchingUser(state) {
      state.isLoading = true;
    },
    onSetUser(state, action) {
      const { token, user } = action.payload as {token: string, user: UserPayload};
      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = token
    },
    onFinishedUser(state) {
      state.isLoading = false;
    },
    onErrorUser(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    }
  },
});

const userActions = userSlice.actions;

export const onLoginUser = (username?: string, password?: string) => {
  return (async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const timeExpiration = localStorage.getItem('expirationTime');
    if (!token || !timeExpiration) {
      return;
    }
    if (Date.now() > +timeExpiration) {
      localStorage.removeItem('expirationTime');
      if (token) {
        deleteCookie('token');
      }
      return;
    }
    try {
      dispatch(userActions.onChangeFetchingUser())
      const response = await onLogin(username, password, token);
      dispatch(userActions.onFinishedUser());
    } catch (err: any) {
      dispatch(userActions.onErrorUser(err.response));
      console.log(err);
    }
  });
};
export default userSlice;
