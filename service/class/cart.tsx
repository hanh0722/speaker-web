import { CartItemResponse, CartResponse } from "../../types/api/page/cart";
import { BaseResponse } from "../../types/request";
import { BASE_URL } from "../../utils/config";
import { getCookie } from "../../utils/cookies";
import { request } from "./auth";

const CART_API = `${BASE_URL}/api/cart`;
export const onFetchCartUser = (token: string) => {
  return request.get<CartResponse>(`${CART_API}/get`, {
    headers: {
      authorization: 'Bearer ' + token
    }
  });
};

export const onAddCartUser = (productId: string, quantity?: number) => {
  return request.post<CartItemResponse>(`${CART_API}/add`, {
    id: productId,
    quantity: quantity
  }, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  });
}