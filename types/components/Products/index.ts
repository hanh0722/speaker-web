import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface ListProductsProps extends ClassNameProps {
  data?: Array<BaseProductProps>;
  totalProducts?: number;
  isLoading?: boolean;
  rows?: number
}
export interface ProductsProps extends ClassNameProps, ListProductsProps {
  totalProducts?: number
}

export interface LoadingProductsProps extends ClassNameProps {
  quantity?: number
}