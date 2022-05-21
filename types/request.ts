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
  is_compared?: boolean;
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
  query?: string;
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

export type FileReponseBasic = Array<string>;
export interface FileResponse extends BaseResponse {
  urls: Array<string>;
}

export interface ProductCreationResponse extends BaseResponse {
  data: BaseProductProps;
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
  states: Array<CountryState>;
}
export interface CountryResponse extends BaseResponse {
  data: Array<SingleCountryProps>;
}

export interface InfoAddressProps {
  place: string;
  full_name: string;
  phone_number: string;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  is_default: boolean;
}

export interface SingleAddressProps {
  object_id: string;
  info: InfoAddressProps;
  _id: string;
}

export interface AddressResponse extends BaseResponse {
  total_documents: number;
  data: Array<SingleAddressProps>;
}

export interface AddressCreateResponse extends BaseResponse {
  data: SingleAddressProps;
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

export interface PaymentInfoResponse extends BaseResponse {
  client_secret: string;
}

export interface PaymentCheckoutRequest {
  payment_methods: string;
  delivery_methods: string;
  object_info_id: string;
  success_url: string;
  cancel_url: string;
}

export interface PaymentCheckoutResponse extends BaseResponse {
  data?: {
    redirect_url: string;
  };
  order_id?: string;
}

export interface ParamsPaymentOrderRequest {
  id: string;
  typePayment: string;
  callback?: (event: ProgressEvent) => void;
}
export interface PaymentOrderResponse extends BaseResponse {
  data: {
    _id: string;
  };
}

export interface GetSuggestCreateResponse extends BaseResponse {
  data: Array<string>;
}
export class CreateBlogRequest {
  constructor(
    public title: string,
    public short_description: string,
    public description: string,
    public cover_url: string,
    public is_comments = true,
    public is_publish: boolean = true,
    public meta_title: string | undefined = undefined,
    public tags: Array<string> | undefined = undefined
  ) {}
}

export interface BlogDetailResponse extends CreateBlogRequest {
  creation_time: number;
  createdAt: string;
  updatedAt: string;
  _id: string;
};

export interface BlogDetailDataProps extends BaseResponse {
  data: BlogDetailResponse,
}
export interface BlogResponse extends BaseResponse {
  data: Array<BlogDetailResponse>;
  total: number
}