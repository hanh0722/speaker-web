import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProductsProps } from "../../../types/components/Products";
import ListProducts from "./ListProducts";
import styles from "./styles.module.scss";
import usePrevious from "../../../hook/usePrevious";
import { useFetchProducts } from "../../../service/products";
import { RowLineProducts } from "../../common";
import { RowLineElement } from "../../../types/components/RowLineProducts";
import { RootState } from "../../../store";
import { PER_PAGE_DEFAULT } from "../../../constants/sort";
import { Button, Select } from "../../core";
import { IconFilter } from "../../core/Icons";
import { parsedParamsSort } from "../../../utils/params";

const Products: FC<ProductsProps> = (props) => {
  const {
    isLoading,
    data: dataFetchingProducts,
    onFetchProductsByParams,
    onResetAsync,
  } = useFetchProducts();
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const [rows, setRows] = useState(5);
  const { query, push, pathname } = useRouter();
  const { data, totalProducts } = props;
  const previousQuery = usePrevious(query);
  useEffect(() => {
    if (!previousQuery || previousQuery === query) {
      return;
    }
    onFetchProductsByParams({
      ...query,
      page_size: PER_PAGE_DEFAULT,
    });
    return () => {
      onResetAsync();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onChangeRow = (item: RowLineElement) => {
    setRows(item.id);
  };

  const onChangeQuery = (value: string | undefined) => {
    const getQuerySort = parsedParamsSort(value);
    push(
      {
        pathname: pathname,
        query: {
          ...query,
          ...(getQuerySort || {}),
          page: 1,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <>
      <div className={`d-flex justify-end align-center ${styles.line}`}>
        <div className={`d-inline-flex align-center flex-end ${styles.filter}`}>
          {/* <Button prefix="normal" color="inherit" variant="outlined">
            Filter
            <IconFilter />
          </Button> */}
          <Select onChangeValue={onChangeQuery} className={styles.select}>
            <Select.Option value="creation_time-desc">Newest</Select.Option>
            <Select.Option value="price-desc">Price: High - Low</Select.Option>
            <Select.Option value="price-asc">Price: Low - High</Select.Option>
          </Select>
          {!isMobileScreen && (
            <RowLineProducts className={styles.row} activeId={5} onChange={onChangeRow} />
          )}
        </div>
      </div>
      <div className={styles.container}>
        <ListProducts
          rows={rows}
          isLoading={isLoading}
          data={dataFetchingProducts?.data || data}
          totalProducts={totalProducts}
        />
      </div>
    </>
  );
};

export default Products;
