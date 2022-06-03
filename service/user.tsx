import { BaseSortRequest, SearchUserResponse } from "../types/request";
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { request } from "./class/auth";

const USER_API = `${BASE_URL}/api/user`;

export const searchUserByQuery = (query: string, options?: BaseSortRequest) => {
  return request.get<SearchUserResponse>(`${USER_API}/search`, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    },
    params: {
      s: query,
      ...(options || {})
    }
  })
};