import React, { FC, createContext, useState } from "react";
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
import { TIME_TRANSITION_MODAL } from "../../../constants/base";
import { isClient } from "../../../utils/server";

export const ModalContext = createContext<{ onHide?: () => void }>({
  onHide: () => {},
});

const Modal: FC<ModalExtendsProps> = (props) => {
  const { show, children, onHide, variant, scrollable, center } = props;

  if (!isClient()) {
    return null;
  }
  return (
    <>
      <ModalContext.Provider
        value={{
          onHide: onHide,
        }}
      >
        {ReactDOM.createPortal(
          <>
            <CSSTransition
              in={show}
              timeout={TIME_TRANSITION_MODAL}
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
                <div
                  className={`d-flex justify-center align-center ${styles.container}`}
                >
                  <div
                    className={classList(
                      styles.main,
                      styles[`modal-${variant}`],
                      scrollable && styles.scroll,
                      center && styles.center
                    )}
                  >
                    {children}
                  </div>
                  <Component className={styles.backdrop} onClick={onHide} />
                </div>
              </>
            </CSSTransition>
          </>,
          document.getElementById("modal")!
        )}
      </ModalContext.Provider>
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
  Footer: ModalFooter,
});
