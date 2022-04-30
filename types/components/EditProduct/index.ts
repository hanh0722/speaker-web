import { BaseProductProps } from "../../request";
import { ClassNameProps } from "../../string";

interface ProductProps {
  product: BaseProductProps
}

export interface EditProductProps extends ClassNameProps, ProductProps {
};

export interface LeftEditProductProps extends ClassNameProps, ProductProps {
  onChangeTitle?: (value: string) => void;
  onChangeDescription?: (value: string) => void;
  onChangeImages?: (value: Array<string>) => void;
};

export interface RightEditProductProps extends ClassNameProps, ProductProps {
  onChangeQuantity?: (value: number) => void;
  onChangeRegularPrice?: (value: number) => void;
  onChangeSalePrice?: (value: number) => void;
  isValid?: boolean;
  isLoading?: boolean
}