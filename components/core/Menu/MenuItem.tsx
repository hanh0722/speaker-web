import React, { FC, useContext } from "react";
import PropTypes from "prop-types";
import { MenuItemProps } from "../../../types/components/Menu";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import { MenuContext } from "./MenuContext";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { onHide } = useContext(MenuContext);
  const { className, children, onClick, as: Component = "div", ...restProps } = props;
  const onHandleClick = () => {
    onHide();
    if (onClick) {
      onClick();
    }
  };
  return (
    <Component
      onClick={onHandleClick}
      {...restProps}
      className={classList(styles.element, className)}
    >
      {children}
    </Component>
  );
};

MenuItem.defaultProps = {
  onClick: () => null,
  as: "div",
  className: "",
};

MenuItem.propTypes = {
  onClick: PropTypes.func,
  as: PropTypes.any,
  className: PropTypes.string,
};

export default MenuItem;
