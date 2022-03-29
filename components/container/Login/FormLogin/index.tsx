import { ChangeEvent, Component, FormEvent, ReactNode } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { FORGET_PASSWORD, REGISTER } from "../../../../constants/path";
import { CheckBox } from "../../../common";
import { Button, Input, Link } from "../../../core";
import { IconEye } from "../../../core/Icons";
import { FormAuth } from "../../../layout";
import styles from "./styles.module.scss";
import { isValidPassword } from "../../../../utils/string";
import {
  FormLoginState,
  LoginFormProps,
  mapDispatchToProps,
} from "../../../../types/page";
import { UserResponse } from "../../../../types/request";
import { RootState } from "../../../../store";
import { onLoginUser } from "../../../../utils/login";
import ModalValidate from "../ModalValidate";

class FormLogin extends Component<LoginFormProps, FormLoginState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      data: null,
      isActivePassword: false,
      username: "",
      password: "",
      isChecked: false,
    };
  }
  componentWillUnmount() {
    this._onResetState();
  }
  _onChangeType = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isActivePassword: !prevState.isActivePassword,
      };
    });
  };
  _onChangeUsername = (event: ChangeEvent) => {
    this._onResetState();
    const { value } = event.target as HTMLInputElement;
    this.setState({ username: value });
  };
  _onChangePassword = (event: ChangeEvent) => {
    this._onResetState();
    const { value } = event.target as HTMLInputElement;
    this.setState({ password: value });
  };
  _onSubmit = (event: FormEvent) => {
    this._onResetState();
    const { username, password } = this.state;
    event.preventDefault();
    if (!username || !password) {
      return;
    }
    this._onLoginUser();
  };
  _onResetState = () => {
    this.setState({
      isLoading: false,
      data: null,
      error: null,
    });
  };
  _onLoginUser = async () => {
    const { onSetUser, router } = this.props;
    const { username, password } = this.state;
    if (!isValidPassword(password) || !username) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      const response = await onLoginUser(username, password);
      this.setState({
        isLoading: false,
      });
      const { token, user } = response as UserResponse;
      onSetUser(user, token);
      router.push("/");
    } catch (err: any) {
      this.setState({
        isLoading: false,
        error: err || err?.message || "Server Internal Error",
      });
    }
  };
  _onChangeCheck = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isChecked: !prevState.isChecked,
      };
    });
  };
  render(): ReactNode {
    const {
      isActivePassword,
      username,
      password,
      isChecked,
      isLoading,
      error,
    } = this.state;

    return (
      <>
      <ModalValidate username={username} show={!!error && error?.code === 403} onHide={this._onResetState}/>
        <FormAuth>
          <form onSubmit={this._onSubmit}>
            <div className={`text-center ${styles.title}`}>
              <p className="f-20 weight-500">Login to Regler</p>
              <p>Enter your details below</p>
            </div>
            <Input
              label="Username..."
              onChange={this._onChangeUsername}
              value={username}
            />
            <Input
              type={isActivePassword ? "text" : "password"}
              label="Password..."
              iconName={IconEye}
              onClickIcon={this._onChangeType}
              onChange={this._onChangePassword}
              value={password}
            />
            <div
              className={`d-flex align-center justify-between ${styles.remember}`}
            >
              <div className={`d-flex align-center ${styles["check-box"]}`}>
                <CheckBox
                  isCheck={isChecked}
                  onChangeCheck={this._onChangeCheck}
                />
                <span>Remember me</span>
              </div>
              <Link href={FORGET_PASSWORD}>
                <p>Forgot password?</p>
              </Link>
            </div>
            {error && (
              <p className={`text-center ${styles.error}`}>{error?.message}</p>
            )}
            <Button
              isLoading={isLoading}
              disabled={!username || !isValidPassword(password)}
              type="submit"
              fullWidth
              size="large"
            >
              Log in
            </Button>
            <Link href={REGISTER}>
              <p className={`text-end f-14 ${styles.register}`}>
                {"Doesn't have an account?"} Register now
              </p>
            </Link>
          </form>
        </FormAuth>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormLogin));
