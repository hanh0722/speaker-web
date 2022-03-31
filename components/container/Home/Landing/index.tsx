import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Button, Grid, Image } from "../../../core";
import styles from "./styles.module.scss";

const Landing = () => {
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  return (
    <Grid prefix="xxl" className={`${styles.grid}`} cols={isMobileScreen ? 1 : 2}>
      <div className={styles.image}>
        {isMobileScreen}
        <Image src={"/image/image-1_1610x.webp"} alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles["main-image"]}>
          <Image src="/image/Group1.svg" alt="" />
        </div>
        <h3 className="f-48 weight-500 lh-64">
          Find the right connected speaker for you
        </h3>
        <div className={`color-gray lh-32 f-16 ${styles.description}`}>
          Enjoy rich, immersive sound in every room. Each speaker is carefully
          hand tuned by our engineers to give you the best quality listening
          experience in your space. Hear the difference.
        </div>
        <Button className={styles.btn} variant="outlined" prefix="normal" color="inherit" size="large">Read More</Button>
      </div>
    </Grid>
  );
};

export default Landing;
