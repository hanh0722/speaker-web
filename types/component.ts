import { ChangeEvent, ElementType, RefObject } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ClassNameProps } from "./string";
import { ButtonProps } from "@mui/material";

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
  onClickIcon?: () => void
}

export interface ImageProps extends ClassNameProps {
  src: string;
  onLoad?: () => {};
  onError?: () => {};
  alt?: string;
  roundedLoading?: boolean;
}

export interface SkeletonLoadingProps extends ClassNameProps {
  variant?: "line" | "image";
  rounded?: boolean;
  tagName?: ElementType;
}

export interface LinkProps extends ClassNameProps, NextLinkProps {
  blank?: boolean;
  onClick?: () => void;
}

export interface IconWrapperProps extends ClassNameProps {
  icon?: ElementType;
  variant?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  onClick?: () => void;
}

export interface HamburgerProps extends ClassNameProps {
  variant?: number;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement> | undefined
}

export interface ModalProps extends ClassNameProps {
  onClick?: () => void;
}

export interface SearchFieldProps extends ClassNameProps {
  onClick?: () => void;
  isOpenSearchField: boolean;
}

export interface CartProps extends ClassNameProps {
}

export interface ScrollViewProps extends ClassNameProps {
  scrollable?: boolean
}

export interface RefElement<T> extends ClassNameProps {
  ref?: RefObject<T>
}

export interface ButtonComponentProps extends ButtonProps {
  prefix?: 'basic' | 'success',
  isLoading?: boolean,
}

export interface BreadCrumbProps extends ClassNameProps {
  title?: string
}
export interface CheckBoxProps extends ClassNameProps {
  isCheck?: boolean,
  onChangeCheck?: (value: boolean) => void;
}