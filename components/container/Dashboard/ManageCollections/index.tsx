import { Alert } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PER_PAGE_DEFAULT } from "../../../../constants/sort";
import { useCollections } from "../../../../service/collections";
import { RootState } from "../../../../store";
import { Collection } from "../../../../types/api/page/collections";
import { LoadingProducts } from "../../../common";
import { Grid, Pagination } from "../../../core";
import CollectionsElement from "./CollectionsElement";
import styles from "./styles.module.scss";

const ManageCollections = () => {
  const isMobileScreen = useSelector<RootState>(state => state.ui.isMobileScreen);
  const { isLoading, data, error, onFetchCollections } =
    useCollections();
  const [total, setTotal] = useState<null | number>(null);
  const { query } = useRouter();
  useEffect(() => {
    onFetchCollections({
      page: +(query["page"] || 1),
      page_size: PER_PAGE_DEFAULT,
    });
  }, [query, onFetchCollections]);
  
  useEffect(() => {
    if (!isLoading && data) {
      setTotal(data?.total_collections);
    }
  }, [isLoading, data]);
  
  return (
    <>
      <Grid className={styles.grid} cols={isMobileScreen ? 3 : 4}>
        {isLoading && <LoadingProducts />}
        {!isLoading &&
          data &&
          data?.data?.map((item: Collection) => {
            return <CollectionsElement collection={item} key={item?._id} />;
          })}
      </Grid>
      {error && !isLoading && <Alert severity="error">{error?.message}</Alert>}
      {total && <Pagination totalItems={total} itemPerPage={PER_PAGE_DEFAULT}/>}
    </>
  );
};

export default ManageCollections;
