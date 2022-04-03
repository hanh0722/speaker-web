import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { IconTooltipGroupProps } from "../../../../types/component";
import { classList } from "../../../../utils/string";
import styles from "./styles.module.scss";

const IconTooltip: FC<IconTooltipGroupProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const {
    className,
    children,
    variant,
    tooltip,
    onClick,
    iconName: IconComponent,
    ...restProps
  } = props;
  const onEnter = () => {
    setIsActive(true);
  };
  const onLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...restProps}
      className={classList(
        "d-flex justify-center align-center",
        styles.icon,
        styles[`icon-${variant}`],
        className
      )}
    >
      <CSSTransition
        timeout={450}
        unmountOnExit
        mountOnEnter
        in={isActive}
        classNames={{
          enter: styles.enter,
          enterActive: styles["enter-active"],
          exit: styles.exit,
          exitActive: styles["exit-active"],
        }}
      >
        <>{tooltip && <span>{tooltip}</span>}</>
      </CSSTransition>
      <IconComponent />
      {children}
    </div>
  );
};

IconTooltip.defaultProps = {
  className: "",
  children: null,
  variant: "md",
  tooltip: undefined,
  onClick: () => {}
};

IconTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tooltip: PropTypes.string,
  variant: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  onClick: PropTypes.func
};

export default IconTooltip;
