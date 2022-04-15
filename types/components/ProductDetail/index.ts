import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface ProductDetailProps extends ClassNameProps {
  data?: BaseProductProps
}
export interface ProductFooterProps extends ClassNameProps {
  productId?: string;
  isCompare?: boolean
}
