import React, { FC } from "react";
import PropTypes from 'prop-types';
import DeliverOptions from "./DeliverOptions";
import styles from './styles.module.scss';
import BoxMethods from "./BoxMethods";
import { classList } from "../../../../../utils/string";
import { LeftPaymentCheckoutProps } from "../../../../../types/components/PaymentCheckout";
import { isFunction } from "../../../../../types/type";

const LeftPayment: FC<LeftPaymentCheckoutProps> = (props) => {
  const { className, onGetPayment, ...restProps } = props;

  const onGetPaymentHandler = (payment: number | string | undefined) => {
    if (isFunction(onGetPayment)) {
      onGetPayment(payment);
    }
  }
  return (
    <div {...restProps} className={classList(styles.block, className)}>
      <DeliverOptions/>
      <BoxMethods onGetPayment={onGetPaymentHandler}/>
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