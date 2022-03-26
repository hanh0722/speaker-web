import React, { FC } from "react";
import PropTypes from 'prop-types';
import { PieceModalProps } from "../../../../types/component";
import { classList } from "../../../../utils/string";
import styles from '../styles.module.scss';

const ModalBody: FC<PieceModalProps> = (props) => {
  const {className, children, style} = props;
  return (
    <div style={{...style}} className={classList(styles.body, className)}>
      {children}
    </div>
  )
}

ModalBody.defaultProps = {
  className: '',
  children: null,
  style: {}
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object
}

export default ModalBody;