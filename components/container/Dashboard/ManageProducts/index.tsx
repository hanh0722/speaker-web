import React from "react";
import { DASH_BOARD, DASH_BOARD_PRODUCTS, MANAGE_PRODUCT } from "../../../../constants/path";
import BreadCrumbDirection from "../../../core/BreadCrumbDirection";
import Manage from "./Manage";
import styles from './styles.module.scss';

const ManageProducts = () => {
  return (
    <div className={styles.box}>
      <BreadCrumbDirection className={styles.breadcrumb}>
        <BreadCrumbDirection.Element href={DASH_BOARD}>Dashboard</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={DASH_BOARD_PRODUCTS}>Products</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={MANAGE_PRODUCT} showCaret={false}>Manage Products</BreadCrumbDirection.Element>
      </BreadCrumbDirection>
      <Manage/>
    </div>
  )
}

export default ManageProducts;