import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface CartItem extends ClassNameProps {
  data: BaseProductProps;
  quantity: number
}