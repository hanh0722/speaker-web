import React from "react";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={`text-center ${styles.header}`}>
        <p className={`text-uppercase lh-32 f-20 weight-500`}>
          SIGNATURE SOUND, ALL AROUND
        </p>
        <h3 className="f-36 lh-48 weight-500">Find the right connected <br/>speaker for you</h3>
      </div>
    </div>
  );
};

export default Introduction;
