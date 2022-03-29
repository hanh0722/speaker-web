import {
  ChangeEvent,
  ElementType,
  KeyboardEventHandler,
  ReactNode,
  RefObject,
  SyntheticEvent,
} from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ClassNameProps } from "./string";
import { ButtonProps, InputBaseProps } from "@mui/material";
import { ObjectProps } from "./base";
import { SwiperProps, SwiperSlideProps } from "swiper/react";

export interface InputProps extends ClassNameProps {
  type?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  label?: string;
  id?: string;
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  onBlur?: () => void;
  iconName?: ElementType;
  errorMessage?: string;
  onClickIcon?: () => void;
  ref?: RefObject<HTMLInputElement>;
  value?: string;
  inputProps?: ObjectProps;
  onKeyDown?: (event: any) => void;
}

export interface ImageProps extends ClassNameProps {
  src: string;
  onLoad?: (event?: SyntheticEvent<HTMLImageElement>) => {};
  onError?: () => {};
  alt?: string;
}

export interface SkeletonLoadingProps extends ClassNameProps {
  variant?: "line" | "image";
  rounded?: boolean;
  tagName?: ElementType;
}

export interface LinkProps extends ClassNameProps, NextLinkProps {
  blank?: boolean;
  onClick?: () => void;
  activeClassname?: string
}

export interface IconWrapperProps extends ClassNameProps {
  icon?: ElementType;
  variant?: "sm" | "md" | "lg" | "xl" | "xxl" | "unset";
  onClick?: () => void;
}

export interface HamburgerProps extends ClassNameProps {
  variant?: number;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement> | undefined;
}

export interface ModalProps extends ClassNameProps {
  onClick?: () => void;
}

export interface SearchFieldProps extends ClassNameProps {
  onClick?: () => void;
  isOpenSearchField: boolean;
}

export interface CartProps extends ClassNameProps {}

export interface ScrollViewProps extends ClassNameProps {
  scrollable?: boolean;
}

export interface RefElement<T> extends ClassNameProps {
  ref?: RefObject<T>;
}

export interface ButtonComponentProps extends ButtonProps {
  prefix?: "basic" | "normal";
  isLoading?: boolean;
}

export interface BreadCrumbProps extends ClassNameProps {
  title?: string;
}
export interface CheckBoxProps extends ClassNameProps {
  isCheck?: boolean;
  onChangeCheck?: (value: boolean) => void;
}

export interface SocialLoginProps extends ClassNameProps {
  isHiddenTitle?: boolean;
  titleGoogle?: string;
  titleFacebook?: string;
}
export interface ModalExtendsProps extends ModalProps {
  show: boolean;
  onHide?: () => void;
  variant?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  scrollable?: boolean;
  center?: boolean
}

export interface PieceModalProps extends ClassNameProps {
  onHide?: () => void;
  closeBody?: boolean
}

export interface InputOTPProps extends ClassNameProps {
  inputs: number;
  onGet?: (value: Array<number | null>) => void;
}

export interface GridProps extends ClassNameProps {
  cols?: number
}

export interface SwiperCoreProps extends ClassNameProps, SwiperProps {

}

export interface SwiperSlideCoreProps extends SwiperSlideProps, ClassNameProps {
  children: ReactNode
};