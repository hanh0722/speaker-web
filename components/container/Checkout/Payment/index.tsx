import React, { FC } from "react";
import PropTypes from 'prop-types';
import { PaymentCheckoutProps } from "../../../../types/components/PaymentCheckout";
import LeftPayment from "./LeftPayment";
import RightPayment from "./RightPayment";
import { classList } from "../../../../utils/string";

const Payment: FC<PaymentCheckoutProps> = (props) => {
  const { address, className, ...restProps } = props;
  return (
    <div {...restProps} className={classList("d-flex", className)}>
      <LeftPayment/>
      <RightPayment address={address}/>
    </div>
  )
};

Payment.defaultProps = {
  className: '',
  address: undefined
};

Payment.propTypes = {
  className: PropTypes.string,
  address: PropTypes.any
};

export default Payment;