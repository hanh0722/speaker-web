import React from "react";
import { Accordion } from "../../../core";
import Heading from "../Heading";
import styles from "./styles.module.scss";

const Question = () => {
  return (
    <div className={`d-flex justify-between ${styles.container}`}>
      <Heading
        className={`text-start ${styles.heading}`}
        title="Frequently asked questions"
        subtitle="A PREMIUM SOUND."
      />
      <div className={styles.accordion}>
        <Accordion />
      </div>
    </div>
  );
};

export default Question;
