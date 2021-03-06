import { LinkProps } from "next/link";
import { ClassNameProps } from "../../string";

export interface BreadCrumbProps extends ClassNameProps {
  title?: string;
  description?: string
}

export interface BreadCrumbElementProps extends ClassNameProps, LinkProps {
  href: string;
  showCaret?: boolean
};

export interface BreadCrumbDirection extends ClassNameProps {
  title?: string;
  left?: boolean
}

export interface BreadCrumbStepsProps extends ClassNameProps {
  step?: any;
}

export interface BreadCrumbStepsElementProps extends ClassNameProps {
  step?: any
}