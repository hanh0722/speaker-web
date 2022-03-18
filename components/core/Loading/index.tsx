import React, { FC } from "react";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { ClassNameProps } from "../../../types/string";

const Loading: FC<ClassNameProps> = (props) => {
  const { className } = props;
  return (
    <div className={styles.wrapper}>
      <div
        className={classList(
          styles["loader-balls"],
          className
        )}
      >
        <div className={`${styles['loader-balls-wrapper']} d-flex justify-center align-center`}>
          <span className={styles["loader-balls-item"]} />
          <span className={styles["loader-balls-item"]} />
          <span className={styles["loader-balls-item"]} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
