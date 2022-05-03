import React, { FC, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import useDropdown from "../../../hook/useDropdown";
import { DropdownProps } from "../../../types/components/Dropdown";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';
import { isFunction } from "../../../types/type";

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    className,
    onCallbackDropdown,
    trigger,
    as: Component = "span",
    ...restProps
  } = props;
  const elementRef = useRef<HTMLSpanElement>(null);
  const { isToggle, onChangeToggle } = useDropdown(elementRef, false);

  const onClick = () => {
    onChangeToggle();
    if (isFunction(onCallbackDropdown)) {
      onCallbackDropdown(!isToggle);
    }
  };
  return (
    <>
      <Component
        {...restProps}
        onClick={onClick}
        ref={elementRef}
        className={styles.container}
      >
        {trigger}
        {children && (
        <CSSTransition
          in={isToggle}
          unmountOnExit
          mountOnEnter
          timeout={230}
          classNames="fade-up"
        >
          <div className={classList(styles.element, className)}>
            {children}
          </div>
        </CSSTransition>
      )}
      </Component>
    </>
  );
};

Dropdown.defaultProps = {
  className: "",
  onCallbackDropdown: (value) => {},
  as: "span",
};

Dropdown.propTypes = {
  className: PropTypes.string,
  onCallbackDropdown: PropTypes.func,
  as: PropTypes.any,
  trigger: PropTypes.element.isRequired
};

export default Dropdown;
