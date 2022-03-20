import { Button as ButtonComponent } from "@mui/material";
import PropTypes from "prop-types";
import { FC } from "react";
import styles from "./styles.module.scss";
import { ButtonComponentProps } from "../../../types/component";
import { classList } from "../../../utils/string";

const Button: FC<ButtonComponentProps> = (props) => {
  const { children, variant, onClick, className, prefix } = props;
  return (
    <ButtonComponent
      {...props}
      className={classList(styles.btn, styles[`btn-${prefix}`], className)}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  variant: "contained",
  onClick: () => {},
  className: "",
  prefix: "basic",
};

Button.propTypes = {
  variant: PropTypes.oneOf<"contained" | "outlined" | "text">([
    "contained",
    "outlined",
    "text",
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  prefix: PropTypes.oneOf(["basic", "success"]),
};

export default Button;
