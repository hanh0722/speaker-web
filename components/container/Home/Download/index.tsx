import React from "react";
import { Button, Container } from "../../../core";
import Heading from "../Heading";
import styles from "./styles.module.scss";

const Download = () => {
  return (
    <div className={`${styles.download}`}>
      <Container className={`d-flex justify-end align-center ${styles.container}`}>
        <div className={`shadow-sm text-center ${styles.box}`}>
          <Heading
            title="Sound and style for every home"
            subtitle="Product Sheet"
          />
          <p className={`f-14 lh-24 ${styles.intro}`}>
            Each speaker is carefully hand tuned by our engineers to give you
            the best quality listening experience in your space. Hear the
            difference.
          </p>
          <Button variant="outlined" size="large" prefix="normal" color="inherit" className={styles.btn}>Download Product Sheet</Button>
        </div>
      </Container>
    </div>
  );
};

export default Download;
