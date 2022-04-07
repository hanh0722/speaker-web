import React, { FC, useContext } from "react";
import PropTypes from "prop-types";
import { PieceModalProps } from "../../../../types/component";
import { classList } from "../../../../utils/string";
import styles from "../styles.module.scss";
import { IconClose } from "../../Icons";
import { ModalContext } from "..";

const ModalBody: FC<PieceModalProps> = (props) => {
  const { className, children, style, closeBody } = props;
  const { onHide } = useContext(ModalContext);
  return (
    <div
      style={{ ...style }}
      className={classList(styles.body, className, "body")}
    >
      {closeBody && <IconClose onClick={onHide} className={styles.close} />}
      {children}
    </div>
  );
};

ModalBody.defaultProps = {
  className: "",
  children: null,
  style: {},
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default ModalBody;
