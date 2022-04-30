import React from "react";
import { Grid } from "../../../core";
import AddressItem from "./AddressItem";
import styles from './styles.module.scss';
const Address = () => {
  return (
    <Grid cols={1} prefix="lg" className={styles.address}>
      <AddressItem/>
      <AddressItem/>
      <AddressItem/>
      <AddressItem/>
      <AddressItem/>
    </Grid>
  )
};

export default Address;