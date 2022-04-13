import React from "react";
import { TAB_DESCRIPTION } from "../../../../constants/type";
import { Tabs } from "../../../core";
import styles from "./styles.module.scss";

const ProductDescriptionContent = () => {
  return (
    <Tabs className={styles.tab} defaultActiveKey={TAB_DESCRIPTION[0].key}>
      {TAB_DESCRIPTION.map((item) => {
        return (
          <Tabs.Element eventKey={item.key} key={item.key}>
            {item.value}
          </Tabs.Element>
        );
      })}
    </Tabs>
  );
};

export default ProductDescriptionContent;
