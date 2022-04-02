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