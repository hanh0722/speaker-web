import { ProductResponse } from "../../request";
import { ClassNameProps } from "../../string";

export interface QuickViewProductProps extends ClassNameProps {
  show: boolean;
  onHide: () => void;
  isLoading?: boolean;
  data?: ProductResponse
}