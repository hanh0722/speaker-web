import { BaseProductProps } from "./request";

export interface ObjectProps {
  [props: string | number]: any;
}
export interface ErrorProps extends Error {
  code?: number;
  message: string
}

export interface UIProps {
  isMobileScreen?: boolean
}

export interface ProductBaseProps {
  data?: Array<BaseProductProps>;
  total_products?: number
}