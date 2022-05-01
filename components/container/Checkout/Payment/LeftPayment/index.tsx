import React, { FC } from "react";
import PropTypes from 'prop-types';
import DeliverOptions from "./DeliverOptions";
import styles from './styles.module.scss';
import BoxMethods from "./BoxMethods";
import { ClassNameProps } from "../../../../../types/string";
import { classList } from "../../../../../utils/string";

const LeftPayment: FC<ClassNameProps> = (props) => {
  const { className } = props;
  return (
    <div className={classList(styles.block, className)}>
      <DeliverOptions/>
      <BoxMethods/>
    </div>
  )
};

LeftPayment.defaultProps = {
  className: ''
};

LeftPayment.propTypes = {
  className: PropTypes.string
}

export default LeftPayment;