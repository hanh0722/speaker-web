import { User } from "./redux";

export interface BaseResponse {
    code: number;
    message: string
}

export interface UserResponse extends BaseResponse {
  token: string;
  user: User;
  exp_time: number
}