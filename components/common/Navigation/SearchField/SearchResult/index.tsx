import React, { FC } from "react";
import PropTypes from "prop-types";
import { SearchResultProps } from "../../../../../types/components/SearchField";
import { Grid } from "../../../../core";
import ProductPremium from "../../../ProductPremium";
import { LoadingProducts } from "../../../../common";
import styles from "./styles.module.scss";
import { Alert } from "@mui/material";

const SearchResult: FC<SearchResultProps> = (props) => {
  const { isTyping, data, value, total_products, isLoading } = props;
  
  if (!isTyping && !isLoading && data?.length === 0) {
    return (
      <div className={`d-flex justify-center align-center ${styles.error}`}>
        <Alert variant="outlined" severity="error" className="text-center">
          No product match with keyword <span className="weight-600">{`"${value}"`}</span>
        </Alert>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Grid className={styles.grid} cols={5}>
        {(isLoading || isTyping) && <LoadingProducts quantity={5} />}
        {!isTyping &&
          !isLoading &&
          data &&
          data?.map((item) => {
            return <ProductPremium isHiddenOptions items={item} key={item._id} />;
          })}
      </Grid>
    </div>
  );
};

SearchResult.defaultProps = {
  data: undefined,
  total_products: 0,
};

SearchResult.propTypes = {
  isTyping: PropTypes.bool.isRequired,
  data: PropTypes.any,
  total_products: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchResult;
