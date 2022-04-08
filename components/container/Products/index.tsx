import React, { FC, useState } from "react";
import { ProductsProps } from "../../../types/components/Products";
import ListProducts from "./ListProducts";
import SideBar from "./SideBar";
import styles from './styles.module.scss';

const Products: FC<ProductsProps> = (props) => {
  const { data: dataProducts, totalProducts } = props;
  const [data, setData] = useState(dataProducts);
  return (
    <div className={`d-flex justify-between ${styles.container}`}>
      <SideBar/>
      <ListProducts data={data} totalProducts={totalProducts}/>
    </div>
  )
}

export default Products;