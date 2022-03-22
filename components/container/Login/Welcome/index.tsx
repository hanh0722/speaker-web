import React from "react";
import { Image } from "../../../core";
import styles from "./styles.module.scss";

const Welcome = () => {
  return (
    <div className={`d-flex justify-center align-center ${styles.container}`}>
      <div className={styles.background} />
      <div className={styles.form}>
        <Image src="/welcome.svg" alt=""/>
      </div>
    </div>
  );
};

export default Welcome;
