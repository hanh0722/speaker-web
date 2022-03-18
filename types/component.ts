import { ElementType } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ClassNameProps } from "./string";

export interface InputProps extends ClassNameProps {
  type?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  minLength?: string;
  maxLength?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  label?: string;
  id?: string;
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  hiddenLabel?: boolean;
  onBlur?: () => void;
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
