import {
  ParamsPaymentOrderRequest,
  PaymentCheckoutRequest,
  PaymentCheckoutResponse,
  PaymentInfoResponse,
  PaymentOrderResponse,
} from "../types/request";
import { isFunction } from '../types/type';
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { request } from "./class/auth";

const PAYMENT_URI = `${BASE_URL}/api/checkout`;

const PAYMENT_URL = `${BASE_URL}/api/payment`;

export const createTransactionPayment = (props: PaymentCheckoutRequest) => {
  return request.post<PaymentCheckoutResponse>(
    `${PAYMENT_URI}/create`,
    {
      ...props,
    },
    {
      headers: {
        authorization: "Bearer " + getCookie("token"),
      },
    }
  );
};

export const getTransactionResultPayment = ({ id, typePayment, callback }: ParamsPaymentOrderRequest) => {
  return request.get<PaymentOrderResponse>(`${PAYMENT_URL}/validate/${id}`, {
    headers: {
      authorization: "Bearer " + getCookie("token"),
    },
    params: {
      type: typePayment,
    },
    onDownloadProgress: (event: any) => {
      if (isFunction(callback)) {
        callback(event);
      }
    }
  });
};
