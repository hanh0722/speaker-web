import { ClassNameProps } from "../../string";

export interface LeftSideCreateProductsProps extends ClassNameProps {
  onChangeEditor?: (value: string) => void;
  onGetImages?: (images: Array<string>) => void;
  onChangeTitle?: (value: string) => void;
}

export interface RightSideCreateProductsProps extends ClassNameProps {
  onChangeQuantity?: (value: number) => void;
  onChangePrice?: (value: number) => void;
  onChangeSalePrice?: (value: number) => void;
  isValid?: boolean;
  isLoadingUpload?: boolean
}

export interface CreateProductState {
  title: string | undefined,
  description: string | undefined,
  images: Array<string>,
  price: number | undefined,
  stock_quantity?: number | undefined,
  discount_price?: number | undefined
}