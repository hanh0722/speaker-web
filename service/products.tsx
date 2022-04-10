import { useCallback } from "react";
import useFetch from "../hook/useFetch";
import { BaseSortRequest } from "../types/request";
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
};

export const useFetchProducts = () => {
  const { data, error, isLoading, onResetAsync, request } = useFetch();

  const onFetchProductsByParams = useCallback((params?: BaseSortRequest) => {
    request({
      url: `${PRODUCT_URL}/get`,
      params: params
    })
  }, [request]);

  return {
    data,
    isLoading,
    error,
    onResetAsync,
    onFetchProductsByParams
  }
}