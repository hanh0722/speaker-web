import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface ProductPremiumProps extends ClassNameProps {
  items: BaseProductProps;
}