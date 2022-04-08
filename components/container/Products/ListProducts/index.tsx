import React, { FC } from "react";
import PropTypes from "prop-types";
import { ListProductsProps } from "../../../../types/components/Products";
import { ProductPremium } from "../../../common";
import { Grid, Pagination } from "../../../core";
import styles from "./styles.module.scss";

const ListProducts: FC<ListProductsProps> = (props) => {
  const { data, className, totalProducts, ...restProps } = props;
  return (
    <div className={styles.container}>
      <Grid className={styles.grid} {...restProps} cols={4}>
        {data?.map((item) => {
          return <ProductPremium key={item?._id} items={item} />;
        })}
      </Grid>
      {totalProducts && <Pagination totalItems={totalProducts} itemPerPage={1}/>}
    </div>
  );
};

ListProducts.defaultProps = {
  data: [],
  className: "",
};

ListProducts.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};
export default ListProducts;
