import { Collection } from "./api/page/collections";
import { User } from "./redux";

export interface BaseProductProps {
  title: string;
  description: string;
  images: Array<string>;
  price: number;
  stock_quantity: number;
  creation_time: number;
  discount_price?: number;
  _id: string
}

interface DataProductProps {
}

export interface PaginationResponse {
  total_collections: number;
  total_page: number
}
export interface BaseResponse {
    code: number;
    message: string
}

export interface UserResponse extends BaseResponse {
  token: string;
  user: User;
  exp_time: number
}

export interface ProductResponse extends BaseResponse {
  data: BaseProductProps
}

export interface BaseSortRequest {
  page_size?: number,
  page?: number,
  key?: any,
  sort?: 'asc' | 'desc' | 1 | -1
};

export interface CollectionResponse extends BaseResponse, PaginationResponse {
  data: Array<Collection>
}