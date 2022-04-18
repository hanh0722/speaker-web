import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { ButtonBase } from "@mui/material";
import { ButtonToggleProps } from "../../../types/components/ButtonToggle";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";

const ButtonToggle: FC<ButtonToggleProps> = (props) => {
  const { onChange, className, initialStatus, children, ...restProps } = props;
  const [isActive, setIsActive] = useState(initialStatus || false);
  const onChangeToggle = () => {
    if (onChange) {
      onChange(!isActive);
    }
    setIsActive(prevState => !prevState);
  }
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <div className={classList(styles.button, isActive && styles.active)}>
        <ButtonBase onClick={onChangeToggle} className={classList(styles.stroke)}>
        </ButtonBase>
      </div>
      {children}
    </div>
  );
};

ButtonToggle.defaultProps = {
  className: "",
  initialStatus: false,
  onChange: (value) => {},
};

ButtonToggle.propTypes = {
  className: PropTypes.string,
  initialStatus: PropTypes.bool,
  onChange: PropTypes.func,
};
export default ButtonToggle;
