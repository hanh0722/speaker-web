import React, { FC } from "react";
import PropTypes from "prop-types";
import { classList } from "../../../../utils/string";
import { ListProductsProps } from "../../../../types/components/Products";
import { ProductPremium } from "../../../common";
import { Grid, Pagination } from "../../../core";
import styles from "./styles.module.scss";
import LoadingProducts from "../../../common/LoadingProducts";
import { PER_PAGE_DEFAULT } from "../../../../constants/sort";

const ListProducts: FC<ListProductsProps> = (props) => {
  const { data, className, totalProducts, isLoading, rows, ...restProps } = props;
  return (
    <div className={styles.container}>
      <Grid className={classList(styles.grid, styles[`grid-${rows}`])} {...restProps} cols={rows || 3}>
        {isLoading && <LoadingProducts/>}
        {!isLoading && data && data?.length > 0 && data?.map((item) => {
          return <ProductPremium isShowDescription={rows === 1} className={styles.product} key={item?._id} items={item} />;
        })}
      </Grid>
      {totalProducts && <Pagination totalItems={totalProducts} itemPerPage={1}/>}
    </div>
  );
};

ListProducts.defaultProps = {
  data: [],
  className: "",
  rows: 3,
  isLoading: false
};

ListProducts.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  rows: PropTypes.number,
  isLoading: PropTypes.bool,
};
export default ListProducts;
