import React, { FC, useContext } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../../utils/string";
import { PieceModalProps } from "../../../../types/component";
import { IconClose } from "../../Icons";
import styles from '../styles.module.scss';
import { ModalContext } from "..";

const ModalHeader: FC<PieceModalProps> = (props) => {
  const context = useContext(ModalContext);
  const {children, className, ...Props} = props;
  return (
    <div {...Props} className={classList(styles.header, className)}>
      <IconClose variant="lg" className={styles.close} onClick={context.onHide}/>
      {children}
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