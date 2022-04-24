import { ElementType } from "react";
import { ClassNameProps } from "../../string";

export interface DefaultTableProps {
  align?: 'start' | 'end' | 'center' | 'justify'
}
export interface TableCellProps extends ClassNameProps, DefaultTableProps {
  component?: ElementType
}

export interface TableProps extends ClassNameProps {
  
}

export interface TableRowsProps extends ClassNameProps {
  component?: ElementType
};

export interface TableBodyProps extends ClassNameProps {};

export interface TableHeadingProps extends ClassNameProps, DefaultTableProps {}
