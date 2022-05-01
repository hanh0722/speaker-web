import { ElementType } from "react";
import { PAYMENT_METHODS_VALUE } from "../../../constants/steps";
import { IconWrapperProps } from "../../component";
import { SingleAddressProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface PaymentCheckoutProps extends ClassNameProps {
  address?: SingleAddressProps | null;
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