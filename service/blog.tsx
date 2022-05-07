import { BaseResponse, BaseSortRequest, BlogResponse, CreateBlogRequest, GetSuggestCreateResponse } from "../types/request";
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { authorizationRequest } from "../utils/token";
import { request } from "./class/auth";

const BLOG_API = `${BASE_URL}/api/blog`;

export const getSuggestTagBlog = (query: string) => {
  return request.get<GetSuggestCreateResponse>(`${BLOG_API}/suggest/tags`, {
    params: {
      q: query
    }
  })
};

export const createBlog = (data: CreateBlogRequest) => {
  return request.post<BaseResponse>(`${BLOG_API}/create`, data, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  });
};

export const getBlogByParams = (params?: BaseSortRequest) => {
  return request.get<BlogResponse>(`${BLOG_API}/get`, {
    headers: authorizationRequest(),
    params: {
      ...(params || {})
    }
  })
}