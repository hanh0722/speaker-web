import { ButtonBase } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import React, { FC, useContext } from "react";
import { ElementRadioProps } from "../../../types/components/Radio";
import { classList } from "../../../utils/string";
import { RadioContext } from "./RadioContext";
import styles from "./styles.module.scss";

const Element: FC<ElementRadioProps> = (props) => {
  const { className, as: Component = 'div', eventKey } = props;
  const { key, onChangeKey } = useContext(RadioContext);
  const onChangeKeyHandler = () => {
    onChangeKey(eventKey);
  };
  return (
    <Component
      onClick={onChangeKeyHandler}
      className={classList(styles.element, className)}
    >
      <CSSTransition
        in={key === eventKey}
        timeout={300}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: styles.enter,
          enterActive: styles["enter-active"],
          exit: styles.exit,
          exitActive: styles["exit-active"],
        }}
      >
        <span className={styles.check}></span>
      </CSSTransition>
      <ButtonBase />
    </Component>
  );
};

Element.defaultProps = {
  className: "",
  as: "div",
  eventKey: undefined,
};

Element.propTypes = {
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.any]),
  eventKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Element;
