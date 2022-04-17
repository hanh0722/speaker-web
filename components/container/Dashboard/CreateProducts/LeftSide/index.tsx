import React from "react";
import { Editor } from "../../../../common";
import { Input } from "../../../../core";
import styles from "./styles.module.scss";

const LeftSide = () => {
  return (
    <div className={`shadow-xs ${styles.container}`}>
      <Input type="text" label="Product Name" />
      <div className={styles.editor}>
        <p className={`lh-24 f-16 ${styles.title}`}>Description</p>
        <Editor/>
      </div>
    </div>
  );
};

export default LeftSide;
