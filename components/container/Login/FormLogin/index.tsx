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
import { isValidPassword } from "../../../../utils/string";
import { ObjectProps } from "../../../../types/base";

interface FormLoginState {
  isLoading: boolean;
  isActivePassword: boolean;
  username: string;
  password: string;
  error: null | string;
  isChecked: boolean;
  data: null | ObjectProps
}

class FormLogin extends Component<ClassNameProps, FormLoginState> {
  usernameRef: RefObject<HTMLInputElement>;
  constructor(props: ClassNameProps) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      data: null,
      isActivePassword: false,
      username: "",
      password: "",
      isChecked: false
    };
    this.usernameRef = createRef<HTMLInputElement>();
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
      error: null
    })
  }

  _onLoginUser = async () => {
    const { username, password } = this.state;
    if (!isValidPassword(password) || !username) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      const response = await onLogin(username, password);
      this.setState({
        isLoading: false
      })
    } catch (err: any) {
      this.setState({
        isLoading: false,
        error: err.response?.data?.message
      })
    }
  };
  _onChangeCheck = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isChecked: !prevState.isChecked
      }
    })
  }

  render(): ReactNode {
    console.log(this.state.error);
    const { isActivePassword, username, password, isChecked, isLoading, error } = this.state;
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
              <CheckBox isCheck={isChecked} onChangeCheck={this._onChangeCheck}/>
              <span>Remember me</span>
            </div>
            <Link href={FORGET_PASSWORD}>Forgot password?</Link>
          </div>
          {error && <p className={`text-center ${styles.error}`}>{error}</p>}
          <Button
            isLoading={isLoading}
            disabled={!username || !isValidPassword(password)}
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
