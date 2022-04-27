import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface EditProductProps extends ClassNameProps {
  product: BaseProductProps
};