import { ElementType } from "react";
import { PAYMENT_METHODS_VALUE } from "../../../constants/steps";
import { IconWrapperProps } from "../../component";
import { SingleAddressProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface PaymentCheckoutProps extends ClassNameProps {
  address?: SingleAddressProps | null;
  isLoadingSubmit?: boolean
}

export interface BoxLayoutProps extends ClassNameProps {
  title?: string
}
export interface BoxOptionsProps extends ClassNameProps {
  title?: string;
  isActive?: boolean
};

export interface SingleMethod {
  title: string;
  description: string;
  icons?: Array<ElementType<IconWrapperProps>>,
  eventKey: PAYMENT_METHODS_VALUE
}
export interface MethodsProps extends ClassNameProps {
  data?: SingleMethod;
  isActive?: boolean
};

export interface GetPaymentFunction<T extends string | number | undefined, U extends void> {
  onGetPayment?: (value: T) => U;
}

export interface LeftPaymentCheckoutProps extends ClassNameProps, GetPaymentFunction<string | number | undefined, void> {
}

export interface BoxMethodsProps extends ClassNameProps, GetPaymentFunction<string | number | undefined, void> {
}