import { useCallback } from "react";
import useFetch from "../hook/useFetch";
import { BASE_URL } from "../utils/config";

const PRODUCT_URL = `${BASE_URL}/api/products`;

export const useFetchProductById = () => {
  const {data, error, isLoading, onResetAsync, request} = useFetch();

  const onFetchProduct = useCallback((id: string) => {
    request({
      url: `${PRODUCT_URL}/get/${id}`
    });
  }, [request]);
  
  return {
    isLoading,
    data,
    error,
    onResetAsync,
    onFetchProduct
  }
}