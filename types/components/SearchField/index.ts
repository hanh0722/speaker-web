import { ProductBaseProps } from "../../base";
import { BaseResponse } from "../../request";
import { ClassNameProps } from "../../string";

export interface SearchResultProps extends ClassNameProps, ProductBaseProps {
  isTyping: boolean;
  isLoading: boolean;
  value: string | null
}