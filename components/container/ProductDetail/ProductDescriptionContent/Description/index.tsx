import React, { FC } from "react";
import { ProductDetailProps } from "../../../../../types/components/ProductDetail";
import { ParserElement } from "../../../../core";
import styles from "./styles.module.scss";

const Description: FC<ProductDetailProps> = (props) => {
  const { data } = props;
  return (
    <ParserElement
      className={styles.description}
      content={data?.description || ""}
    />
  );
};

export default Description;
