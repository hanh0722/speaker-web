import React, { FC } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { ModalExtendsProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import { Modal as Component } from "../../common";
import styles from "./styles.module.scss";
import ModalHeader from "./Header";
import ModalBody from "./Body";
import ModalFooter from "./Footer";

const Modal: FC<ModalExtendsProps> = (props) => {
  const { show, children, onHide, variant, scrollable } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <CSSTransition
            in={show}
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
            <>
              <Component
                className={`d-flex justify-center align-center`}
                onClick={onHide}
              />
              <div
                className={classList(styles.main, styles[`modal-${variant}`])}
              >
                {children}
              </div>
            </>
          </CSSTransition>
        </>,
        document.getElementById("modal")!
      )}
    </>
  );
};

Modal.defaultProps = {
  className: "",
  children: null,
  onHide: () => null,
  show: false,
  variant: "md",
  style: {},
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onHide: PropTypes.func,
  show: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  style: PropTypes.object,
};
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});
