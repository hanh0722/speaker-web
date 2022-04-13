import React, { useContext } from "react";
import { TabContext } from "../TabContext";
import styles from "./styles.module.scss";

const TabTransition = () => {
  const { positionTab } = useContext(TabContext);
  if (!positionTab) {
    return null;
  }
  console.log(positionTab)
  return <div style={{
    left: positionTab?.left,
    width: positionTab?.width
  }} className={styles.tab} />;
};

export default TabTransition;
