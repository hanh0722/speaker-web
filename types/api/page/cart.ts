import { BaseProductProps, BaseResponse } from "../../request";

export interface CartItemResponse extends BaseResponse {
  data: BaseProductProps
}
export interface CartItemProps {
  productId: BaseProductProps,
  quantity: number;

}
export interface CartResponse extends BaseResponse {
  data: Array<CartItemProps>,
  total_products: number
}

export interface CartItem {
  id: string;
  quantity: number;
}
