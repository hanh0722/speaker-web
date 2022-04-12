import React, { FC } from "react";
import { ButtonBase } from "@mui/material";
import querystring from "query-string";
import { useRouter } from "next/router";
import { PER_PAGE_DEFAULT } from "../../../constants/sort";
import { PaginationProps } from "../../../types/components/Pagination";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { IconCaretLeft, IconCaretRight } from "../Icons";
import usePagination from "../../../hook/usePagination";

const Pagination: FC<PaginationProps> = (props) => {
  const router = useRouter();
  const {
    itemPerPage = PER_PAGE_DEFAULT,
    totalItems,
    className,
    ...restProps
  } = props;
  const {
    getPagination,
    isLastPage,
    onDecrementPage,
    onIncrementPage,
    isFirstPage,
    onSetPage,
    pageCurrent,
  } = usePagination({
    totalItems: totalItems,
    itemPerPage: itemPerPage,
  });
  const onChangeRoute = (value: number) => {
    router.push(`?page=${value}`, undefined, {
      scroll: false,
      shallow: true
    });
    onSetPage(value);
  };
  return (
    <div
      {...restProps}
      className={classList(
        "d-flex justify-center align-center",
        styles.pagination,
        className
      )}
    >
      <ButtonBase onClick={onDecrementPage} className={classList(styles.prev, isFirstPage && styles.disabled)}>
        <IconCaretLeft />
      </ButtonBase>
      {getPagination.map((item) => {
        return (
          <div
            className={classList(styles.element, pageCurrent === item && styles.active)}
            key={item}
            onClick={() => onChangeRoute(item)}
          >
            <ButtonBase>{item}</ButtonBase>
          </div>
        );
      })}
      <ButtonBase onClick={onIncrementPage} className={classList(styles.next, isLastPage && styles.disabled)}>
        <IconCaretRight />
      </ButtonBase>
    </div>
  );
};

export default Pagination;
