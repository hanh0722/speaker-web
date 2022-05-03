import React, { FC, FormEvent, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { PaymentCheckoutProps } from "../../../../types/components/PaymentCheckout";
import LeftPayment from "./LeftPayment";
import RightPayment from "./RightPayment";
import { classList } from "../../../../utils/string";
import styles from "./styles.module.scss";
import { DELIVERY_OPTIONS } from "../../../../constants/type";
import { PAYMENT_METHODS_VALUE } from "../../../../constants/steps";
import useCallApi from "../../../../hook/useCallApi";
import { createTransactionPayment } from "../../../../service/payment";
import { redirectErrorURLTransaction, redirectSuccessURLTransaction, urlRedirectSuccess } from "../../../../utils/url";
import { PaymentCheckoutResponse } from "../../../../types/request";

const Payment: FC<PaymentCheckoutProps> = (props) => {
  const router = useRouter();
  const [deliveryType, setDeliveryType] = useState<DELIVERY_OPTIONS>(
    DELIVERY_OPTIONS.STANDARD
  );
  const [paymentType, setPaymentType] = useState<string | number | undefined>(
    PAYMENT_METHODS_VALUE.CASH
  );
  const { address, className, ...restProps } = props;

  const onHandleSuccess = (data: PaymentCheckoutResponse) => {
    const redirectURL = data?.data?.redirect_url;
    const orderId = data?.order_id;
    if (redirectURL) {
      return window.location.href = redirectURL;
    }
    if (orderId) {
      return router.push(urlRedirectSuccess(orderId));
    }
  };

  const onHandleRequest = () => {
    if (!paymentType) {
      return;
    }
    return createTransactionPayment({
      cancel_url: redirectErrorURLTransaction(),
      success_url: redirectSuccessURLTransaction(),
      delivery_methods: deliveryType.toString(),
      object_info_id: address!._id,
      payment_methods: paymentType.toString()
    })
  }
  const { isLoading, onSendRequest } = useCallApi<PaymentCheckoutResponse>({
    request: onHandleRequest,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });
  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const infoAddress = address?.info;
    if (!infoAddress) {
      return;
    };
    onSendRequest();
  };
  const onChangePayment = (payment: string | number | undefined) => {
    setPaymentType(payment);
  };

  return (
    <form
      onSubmit={submitFormHandler}
      {...restProps}
      className={classList("d-flex", styles.payment, className)}
    >
      <LeftPayment onGetPayment={onChangePayment} />
      <RightPayment isLoadingSubmit={isLoading} address={address} />
    </form>
  );
};

Payment.defaultProps = {
  className: "",
  address: undefined,
};

Payment.propTypes = {
  className: PropTypes.string,
  address: PropTypes.any,
};

export default Payment;
