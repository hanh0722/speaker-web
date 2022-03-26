import React, { FC } from "react";
import PropsType from 'prop-types';
import styles from "../styles.module.scss";
import { classList } from "../../../../utils/string";
import { PieceModalProps } from "../../../../types/component";

const ModalFooter: FC<PieceModalProps> = (props) => {
  const { children, className, style } = props;
  return (
    <div style={{ ...style }} className={classList(styles.footer, className)}>
      {children}
    </div>
  );
};

ModalFooter.defaultProps = {
  children: null,
  className: '',
  style: {}
};

ModalFooter.propTypes = {
  children: PropsType.node,
  className: PropsType.string,
  style: PropsType.object
}

export default ModalFooter;
