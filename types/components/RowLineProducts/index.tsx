import { ElementType } from "react";
import { UIProps } from "../../base";
import { ClassNameProps } from "../../string";

export interface RowLineElement {
  icon: ElementType,
  id: number,
  tooltip: string,
  isMobile?: boolean
}
export interface RowLineProductsProps extends ClassNameProps, UIProps {
  activeId?: number,
  onChange: (item: RowLineElement) => void;
}

export interface RowLineState {
  activeId: number
}