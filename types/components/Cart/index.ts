import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface CartItemGeneral {
  productId: string;
  quantity: string;
}
export interface CartItem extends ClassNameProps {
  data: BaseProductProps;
  quantity: number
}

export interface CartRowStatisticProps extends ClassNameProps {
  data: BaseProductProps;
  quantity: number
}

export interface CartPageProps extends ClassNameProps {
  onClick?: () => void;
}

export interface BoxTotalCartProps extends ClassNameProps {
  onClick?: () => void;
}