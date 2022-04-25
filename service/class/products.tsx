import { CorePaginationParams } from "../../types/api/core";
import { CreateProductState } from "../../types/components/CreateProduct";
import { BaseResponse, ProductCreationResponse, ProductResponse } from "../../types/request";
import { isArray } from "../../utils/array";
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

export const createProduct = (data: CreateProductState) => {
  return request.post<ProductCreationResponse>(`${PRODUCT_URL}/create`, data, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  });
};

export const deleteProducts = (id: Array<string> | string) => {
  return request.post<BaseResponse>(`${PRODUCT_URL}/delete`, {
    id: isArray(id) ? id : [id]
  }, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  })
}