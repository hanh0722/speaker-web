import { Button as ButtonComponent } from "@mui/material";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { FC, MouseEvent } from "react";
import styles from "./styles.module.scss";
import { ButtonComponentProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import { LoadingSpinner } from "../../common";
import { RootState } from "../../../store";
import { UserState } from "../../../types/redux";
import { LOGIN } from "../../../constants/path";

const Button: FC<ButtonComponentProps> = (props) => {
  const router = useRouter();
  const { isLoggedIn, user } = useSelector<RootState>(state => state.user) as UserState;
  const { children, variant, onClick, requiredAuth, className, prefix, isLoading, disabled, ...Props } = props;

  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (requiredAuth && (!isLoggedIn || !user)) {
      router.push(LOGIN);
      return;
    }
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <ButtonComponent
      {...Props}
      className={classList(styles.btn, styles[`btn-${prefix}`], className)}
      onClick={onHandleClick}
      variant={variant}
      disabled={disabled || isLoading}
    >
      {isLoading && <LoadingSpinner className={styles.spinner} />}
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  variant: "contained",
  onClick: () => {},
  className: "",
  prefix: "basic",
  disabled: false,
  requiredAuth: false
};

Button.propTypes = {
  variant: PropTypes.oneOf<"contained" | "outlined" | "text">([
    "contained",
    "outlined",
    "text",
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  prefix: PropTypes.oneOf(["basic", "normal"]),
  disabled: PropTypes.bool,
  requiredAuth: PropTypes.bool
};

export default Button;
