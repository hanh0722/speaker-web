import { CorePaginationParams } from "../../types/api/core";
import { BaseResponse, ProductResponse } from "../../types/request";
import { BASE_URL } from "../../utils/config";
import { getCookie } from "../../utils/cookies";
import { request } from "./auth";

const PRODUCT_URL = `${BASE_URL}/api/products`
export const onFetchProducts = (params?: CorePaginationParams, token?: string) => {
  return request.get<ProductResponse>(`${PRODUCT_URL}/get`, {
    headers: token ? {
      authorization: `Bearer ${token}`
    } : {},
    params: {
      ...(params || {})
    }
  });
};

export const getProductById = (id: string, token?: string) => {
  return request.get<ProductResponse>(`${PRODUCT_URL}/get/${id}`, {
    headers: token ? {
      authorization: 'Bearer ' + token
    } : {}
  });
};

export const onCompareProduct = (id: string) => {
  return request.post<BaseResponse>(`${PRODUCT_URL}/compare`, {
    product_id: id
  }, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  })
};

export const deleteCompareProduct = (id: string) => {
  return request.delete<BaseResponse>(`${PRODUCT_URL}/compare/${id}`, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  })
}