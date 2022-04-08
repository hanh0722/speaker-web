import { ElementType } from "react";
import { ClassNameProps } from "../../string";

export interface TypographyProps extends ClassNameProps {
  variant?: ElementType;
  weight?: 400 | 500 | 600 | 700 | 'bold';
  size?: 'sm' | 'md' | 'lg'
}