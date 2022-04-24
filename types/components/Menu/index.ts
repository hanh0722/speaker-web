import { ElementType, ReactElement } from "react";
import { ClassNameProps } from "../../string";

export interface MenuProps extends ClassNameProps {
  as?: ElementType;
  trigger: ReactElement
}

export interface MenuItemProps extends ClassNameProps {
  as?: ElementType,
  onClick?: () => void
}