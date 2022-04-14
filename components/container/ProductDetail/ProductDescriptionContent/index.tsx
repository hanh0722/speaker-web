import React, { FC, useState } from "react";
import { DESCRIPTION, SHIPPING, TAB_DESCRIPTION } from "../../../../constants/type";
import { ProductDetailProps } from "../../../../types/components/ProductDetail";
import { Tabs } from "../../../core";
import Description from "./Description";
import Shipping from "./Shipping";
import styles from "./styles.module.scss";

const ProductDescriptionContent: FC<ProductDetailProps> = (props) => {
  const { data } = props;
  const [key, setKey] = useState<string | number>(TAB_DESCRIPTION[0].key);
  const onSelectKey = (key: string | number) => {
    setKey(key);
  };
  return (
    <>
      <Tabs
        className={styles.tab}
        onSelect={onSelectKey}
        defaultActiveKey={TAB_DESCRIPTION[0].key}
      >
        {TAB_DESCRIPTION.map((item) => {
          return (
            <Tabs.Element eventKey={item.key} key={item.key}>
              {item.value}
            </Tabs.Element>
          );
        })}
      </Tabs>
      <div className={styles['tab-content']}>
        {key === DESCRIPTION && <Description data={data} />}
        {key === SHIPPING && <Shipping/>}
      </div>
    </>
  );
};

export default ProductDescriptionContent;
