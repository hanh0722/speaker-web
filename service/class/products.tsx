import { CorePaginationParams } from "../../types/api/core";
import { ProductResponse } from "../../types/request";
import { BASE_URL } from "../../utils/config";
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