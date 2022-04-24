import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { MenuProps } from "../../../types/components/Menu";
import { classList } from "../../../utils/string";
import useMenu from "./useMenu";
import styles from "./styles.module.scss";
import { MenuContextProvider } from "./MenuContext";
import MenuItem from "./MenuItem";
import { isClient } from "../../../utils/server";

const Menu: FC<MenuProps> = (props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const {
    className,
    as: Component = "span",
    trigger,
    children,
    ...restProps
  } = props;
  const ref = useRef<HTMLElement>(null);
  const { isToggle, onTriggerDropdown, getDropdownPosition } = useMenu({
    ref: ref,
    viewContainerRef: componentRef
  });

  if (!isClient()) {
    return null;
  }
  return (
    <>
      <MenuContextProvider onHide={onTriggerDropdown}>
        <Component
          {...restProps}
          ref={ref}
          onClick={onTriggerDropdown}
          className={classList(className)}
        >
          {trigger}
          {children &&
          <div ref={componentRef}>
            {ReactDOM.createPortal(
              <CSSTransition
                in={isToggle}
                unmountOnExit
                mountOnEnter
                timeout={230}
                classNames={{
                  enter: styles.enter,
                  enterActive: styles.active,
                  exit: styles.exit,
                  exitActive: styles.remove,
                }}
              >
                <div
                  className={styles.container}
                  style={
                    getDropdownPosition
                      ? {
                          top: getDropdownPosition?.top,
                          left: getDropdownPosition?.left,
                        }
                      : undefined
                  }
                >
                  {children}
                </div>
              </CSSTransition>,
              document.getElementById("tooltip")!
            )}
            </div>}
        </Component>
      </MenuContextProvider>
    </>
  );
};

Menu.defaultProps = {
  as: "span",
  className: "",
  trigger: undefined,
  children: undefined,
};

Menu.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  trigger: PropTypes.any,
};

export default Object.assign(Menu, {
  Item: MenuItem,
});
