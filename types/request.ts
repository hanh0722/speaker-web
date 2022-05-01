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
  _id: string;
  is_compared?: boolean
}

export interface BasePaginationResponse {
  total_products: number;
}

export interface PaginationResponse {
  total_collections: number;
  total_page: number;
}
export interface BaseResponse {
  code: number;
  message: string;
}

export interface UserResponse extends BaseResponse {
  token: string;
  user: User;
  exp_time: number;
}

export interface ProductResponse extends BaseResponse, BasePaginationResponse {
  data: BaseProductProps;
}

export interface BaseQueryRequest {
  value?: string;
  query?: string
}

export interface BaseSortRequest extends BaseQueryRequest {
  page_size?: number;
  page?: number;
  key?: any;
  sort?: "asc" | "desc" | 1 | -1;
}

export interface CollectionResponse extends BaseResponse, PaginationResponse {
  data: Array<Collection>;
}

export type FileReponseBasic = Array<string>
export interface FileResponse extends BaseResponse {
  urls: Array<string>
}

export interface ProductCreationResponse extends BaseResponse {
  data: BaseProductProps
}

export interface DeleteProductsResponse extends BaseResponse {
  items: Array<string> | string;
}

export interface CountryState {
  name: string;
  state_code: string;
}

export interface SingleCountryProps {
  name: string;
  iso3: string;
  iso2: string;
  states: Array<CountryState>
}
export interface CountryResponse extends BaseResponse {
  data: Array<SingleCountryProps>
}

export interface InfoAddressProps {
  place: string;
  full_name: string;
  phone_number: string;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  is_default: boolean
}

export interface SingleAddressProps {
  object_id: string;
  info: InfoAddressProps;
  _id: string;
}

export interface AddressResponse extends BaseResponse {
  total_documents: number,
  data: Array<SingleAddressProps>
}

export interface AddressCreateResponse extends BaseResponse {
  data: SingleAddressProps
}

export class SingleAddress implements SingleAddressProps {
  info: InfoAddressProps;
  object_id: string;
  _id: string;
  constructor(request: SingleAddressProps) {
    this.info = request.info;
    this.object_id = request.object_id;
    this._id = request._id;
  }
}