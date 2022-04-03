import React from "react";
import Heading from "../Heading";
import styles from "./styles.module.scss";

const StaticLanding = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.content}>
        <Heading
          className={styles.header}
          subtitle="Beautiful Design"
          title="Maximise the sound performance"
        />
        <p className="f-16 lh-24">
          Designed to be positioned up against the wall on a shelf or side
          table.
        </p>
      </div>
    </div>
  );
};

export default StaticLanding;
