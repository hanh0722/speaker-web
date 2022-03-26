import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../../utils/string";
import { PieceModalProps } from "../../../../types/component";
import { IconClose } from "../../Icons";
import styles from '../styles.module.scss';

const ModalHeader: FC<PieceModalProps> = (props) => {
  const {children, className, onHide, ...Props} = props;
  return (
    <div {...Props} className={classList(styles.header, className)}>
      <IconClose onClick={onHide}/>
    </div>
  )
}

ModalHeader.defaultProps = {
  children: null,
  className: '',
  onHide: () => null,
  style: {}
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  style: PropTypes.object
}
export default ModalHeader;