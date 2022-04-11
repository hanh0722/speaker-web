import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { onLogin } from "../../service/class/auth";
import { User, UserPayload, UserState } from "../../types/redux";
import { deleteCookie, getCookie } from "../../utils/cookies";

const initialState: UserState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
  token: null,
  error: null,
  timeout: null,
  expiration: false
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    onChangeFetchingUser(state) {
      state.isLoading = true;
    },
    onSetUser(state, action: UserPayload) {
      const { token, user } = action.payload as { token: string; user: User };
      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = token;
      state.expiration = false;
    },
    onFinishedUser(state) {
      state.isLoading = false;
    },
    onErrorUser(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    onResetUser(state) {
      state.user = null;
      state.timeout = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.expiration = false;
      state.isLoading = false;
    },
    onExpiration(state, action) {
      state.expiration = action.payload;
      state.user = null;
      state.timeout = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    onSetTimeoutUser(state, action) {
      state.timeout = action.payload
    }
  },
});

export const userActions = userSlice.actions;

export const onLoginUser = (username?: string, password?: string) => {
  return async (dispatch: Dispatch) => {
    const token = getCookie("token");
    const timeExpiration = localStorage.getItem("expirationTime");
    if ((!token || !timeExpiration) || Date.now() > +timeExpiration) {
      localStorage.removeItem("expirationTime");
      if (token) {
        deleteCookie("token");
      }
      dispatch(userActions.onExpiration(true));
      return;
    }
    try {
      dispatch(userActions.onChangeFetchingUser());
      const response = await onLogin(username, password, token);
      if (response?.data?.user && response?.data?.token) {
        const { user, token, exp_time } = response.data;
        dispatch(
          userActions.onSetUser({
            user: user,
            token: token,
          })
        );
        const timeout = setTimeout(() => {
          dispatch(userActions.onExpiration(true));
        }, (exp_time - Date.now()));
        dispatch(userActions.onSetTimeoutUser(timeout));
      }
      dispatch(userActions.onFinishedUser());
    } catch (err: any) {
      dispatch(userActions.onErrorUser(err.response));
    }
  };
};

export const onLogoutUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(userActions.onResetUser());
    deleteCookie('token');
  }
}
export default userSlice;
