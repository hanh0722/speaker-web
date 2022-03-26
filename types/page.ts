import { WithRouterProps } from "./router";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../store";
import { userActions } from "../store/slices/user";
import { ObjectProps } from "./base";
import { User } from "./redux";
import { ClassNameProps } from "./string";

export const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onSetUser: (user: User, token: string) => dispatch(userActions.onSetUser({
      user,
      token
    }))
  }
}

export const connector = connect(null, mapDispatchToProps);
type PropsUserRedux = ConnectedProps<typeof connector>

export interface LoginFormProps extends ClassNameProps, PropsUserRedux, WithRouterProps {
}
export interface FormLoginState {
  isLoading: boolean;
  isActivePassword: boolean;
  username: string;
  password: string;
  error: null | string;
  isChecked: boolean;
  data: null | ObjectProps;
}
