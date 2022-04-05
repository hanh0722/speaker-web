import React, { FC } from "react";
import { ListCollection } from "../../../../types/api/page/collections";
import Collection from "../../../common/Collection";
import { Grid } from "../../../core";
import styles from './styles.module.scss';

const ListCollections: FC<ListCollection> = (props) => {
  const {data} = props;
  return <Grid className={styles.grid} cols={4}>
    {data?.map(item => {
      return <Collection key={item?._id} collection={item}/>
    })}
  </Grid>;
};

export default ListCollections;
