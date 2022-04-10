import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProductsProps } from "../../../types/components/Products";
import ListProducts from "./ListProducts";
import SideBar from "./SideBar";
import styles from "./styles.module.scss";
import usePrevious from "../../../hook/usePrevious";
import { useFetchProducts } from "../../../service/products";
import { RowLineProducts } from "../../common";
import { RowLineElement } from "../../../types/components/RowLineProducts";
import { RootState } from "../../../store";

const Products: FC<ProductsProps> = (props) => {
  const {
    isLoading,
    data: dataFetchingProducts,
    error,
    onFetchProductsByParams,
    onResetAsync,
  } = useFetchProducts();
  const isMobileScreen = useSelector<RootState>(state => state.ui.isMobileScreen);
  const [rows, setRows] = useState(3);
  const { query } = useRouter();
  const { data, totalProducts } = props;
  const previousQuery = usePrevious(query);
  useEffect(() => {
    if (!previousQuery || previousQuery === query) {
      return;
    }
    onFetchProductsByParams({
      ...query,
      page_size: 1,
    });
    return () => {
      onResetAsync();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onChangeRow = (item: RowLineElement) => {
    setRows(item.id);
  }
  return (
    <>
      {!isMobileScreen && <RowLineProducts onChange={onChangeRow}/>}
      <div className={`d-flex justify-between ${styles.container}`}>
        <SideBar />
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
