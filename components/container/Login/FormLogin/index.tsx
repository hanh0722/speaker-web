import {
  ChangeEvent,
  Component,
  createRef,
  FormEvent,
  ReactNode,
  RefObject,
} from "react";
import { FORGET_PASSWORD } from "../../../../constants/path";
import { ClassNameProps } from "../../../../types/string";
import { CheckBox } from "../../../common";
import { Button, Input, Link } from "../../../core";
import { IconEye } from "../../../core/Icons";
import { FormAuth } from "../../../layout";
import { onLogin } from "../../../../service/class/auth";
import styles from "./styles.module.scss";

interface FormLoginState {
  isLoading: boolean;
  isActivePassword: boolean;
  username: string;
  password: string;
}

class FormLogin extends Component<ClassNameProps, FormLoginState> {
  usernameRef: RefObject<HTMLInputElement>;
  constructor(props: ClassNameProps) {
    super(props);
    this.state = {
      isLoading: false,
      isActivePassword: false,
      username: "",
      password: "",
    };
    this.usernameRef = createRef<HTMLInputElement>();
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
    const { value } = event.target as HTMLInputElement;
    this.setState({ username: value });
  };
  _onChangePassword = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    this.setState({ password: value });
  };

  _onSubmit = (event: FormEvent) => {
    const { username, password } = this.state;
    event.preventDefault();
    if (!username || !password) {
      return;
    }
    this._onLoginUser();
  };

  _onLoginUser = async () => {
    const { username, password } = this.state;
    try {
        const response = await onLogin(username, password);
        console.log(response);
    } catch (err: any) {
        console.log(err.response);
    }
  };

  render(): ReactNode {
    const { isActivePassword, username, password } = this.state;
    return (
      <FormAuth>
        <form onSubmit={this._onSubmit}>
          <div className={`text-center ${styles.title}`}>
            <p className="f-20 weight-500">Login to Regler</p>
            <p>Enter your details below</p>
          </div>
          <Input placeholder="Username..." onChange={this._onChangeUsername} />
          <Input
            type={isActivePassword ? "text" : "password"}
            placeholder="Password..."
            iconName={IconEye}
            onClickIcon={this._onChangeType}
            onChange={this._onChangePassword}
          />
          <div
            className={`d-flex align-center justify-between ${styles.remember}`}
          >
            <div className={`d-flex align-center ${styles["check-box"]}`}>
              <CheckBox />
              <span>Remember me</span>
            </div>
            <Link href={FORGET_PASSWORD}>Forgot password?</Link>
          </div>
          <Button
            disabled={!username || !password}
            type="submit"
            fullWidth
            size="large"
          >
            Log in
          </Button>
        </form>
      </FormAuth>
    );
  }
}

export default FormLogin;
