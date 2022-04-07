import React, { FC } from "react";
import { PER_PAGE_COLLECTIONS } from "../../../../constants/sort";
import { ListCollection } from "../../../../types/api/page/collections";
import { generateArray } from "../../../../utils/array";
import Collection from "../../../common/Collection";
import { Grid, SkeletonLoading } from "../../../core";
import styles from "./styles.module.scss";

const ListCollections: FC<ListCollection> = (props) => {
  const { data, isLoading } = props;
  return (
    <Grid className={styles.grid} cols={4}>
      {isLoading &&
        generateArray(PER_PAGE_COLLECTIONS).map((item) => {
          return (
            <div key={item} className={styles.loading}>
              <SkeletonLoading
                variant="image"
                className={styles["loading-image"]}
              />
              <SkeletonLoading variant="line" className={styles.text} />
            </div>
          );
        })}
      {!isLoading && data?.map((item) => {
        return <Collection key={item?._id} collection={item} />;
      })}
    </Grid>
  );
};

export default ListCollections;
