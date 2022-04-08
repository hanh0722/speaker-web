import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface ListProductsProps extends ClassNameProps {
  data?: Array<BaseProductProps>;
  totalProducts?: number
}
export interface ProductsProps extends ClassNameProps, ListProductsProps {
  totalProducts?: number
}