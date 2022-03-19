import { ElementType, RefObject } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ClassNameProps } from "./string";

export interface InputProps extends ClassNameProps {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  label?: string;
  id?: string;
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  onBlur?: () => void;
  iconName?: ElementType;
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
  variant?: 'sm' | 'md' | 'lg'
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
  onHandleCart?: () => void;
  isActiveCart: boolean;
}