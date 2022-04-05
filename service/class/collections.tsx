import { CorePaginationParams } from "../../types/api/core";
import { BASE_URL } from "../../utils/config";
import { request } from "./auth";

const CORE_API = `${BASE_URL}/api/collections`;

export const getCollections = (params?: CorePaginationParams) => {
  return request.get(`${CORE_API}/get`, {
    params: {
      ...(params || {})
    }
  })
};
