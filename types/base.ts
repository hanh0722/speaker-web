import { BaseProductProps } from "./request";
import { ClassNameProps } from "./string";

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

export interface ModalCoreProps extends ClassNameProps {
  onHide?: () => void;
  show?: boolean
}