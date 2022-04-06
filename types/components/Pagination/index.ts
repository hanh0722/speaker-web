import { ClassNameProps } from "../../string";

export interface PaginationBase {
  itemPerPage?: number;
  totalItems: number;
}

export interface PaginationHook extends PaginationBase {
  numberPagination?: number;
}

export interface PaginationProps extends ClassNameProps, PaginationBase {

}