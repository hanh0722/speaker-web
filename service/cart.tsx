import { useCallback } from "react";
import useFetch from "../hook/useFetch";
import { BASE_URL } from "../utils/config";

const CART_URL = `${BASE_URL}/api/cart`;

export const useAddCart = () => {
  const { isLoading, data, onResetAsync, request, error } = useFetch();
  const onAddCart = useCallback((productId: string, quantity?: number) => {
    request({
      url: `${CART_URL}/add`,
      method: 'POST',
      data: {
        id: productId,
        quantity: quantity
      }
    })
  }, [request]);
  return {
    onAddCart,
    isLoading,
    data,
    onResetAsync,
    error
  }
}