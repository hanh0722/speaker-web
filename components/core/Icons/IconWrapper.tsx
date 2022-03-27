import React, { FC } from "react";
import PropTypes from "prop-types";
import { IconWrapperProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const IconWrapper: FC<IconWrapperProps> = (props) => {
  const { icon: IconName, className, variant = "md", onClick } = props;
  if (IconName) {
    return (
      <IconName
        onClick={onClick}
        className={classList(styles.icon, styles[variant], className)}
      />
    );
  }
  return null;
};

IconWrapper.defaultProps = {
  onClick: () => {},
  icon: "svg",
  className: "",
  variant: "md",
};

IconWrapper.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.any,
  variant: PropTypes.any,
};

export default IconWrapper;
