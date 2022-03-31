import React from "react";
import { Button, Image } from "../../../core";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Grid } from "../../../core";
import styles from "../Landing/styles.module.scss";
import { IconSpeaker } from "../../../core/Icons";

const IntroLanding = () => {
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  return (
    <Grid
      prefix="xxl"
      className={`${styles.grid} ${styles.landing}`}
      cols={isMobileScreen ? 1 : 2}
    >
      <div className={styles.main}>
        <IconSpeaker
          className={isMobileScreen ? styles.center : ""}
          variant="unset"
        />
        <h3 className="f-48 weight-500 lh-64">
          Welcomes you with a human touch
        </h3>
        <div className={`color-gray lh-32 f-16 ${styles.description}`}>
          Enjoy rich, immersive sound in every room. Each speaker is carefully
          hand tuned by our engineers to give you the best quality listening
          experience in your space. Hear the difference.
        </div>
        <Button
          className={styles.btn}
          variant="outlined"
          prefix="normal"
          color="inherit"
          size="large"
        >
          Shop Now
        </Button>
      </div>
      <div className={styles.image}>
        {isMobileScreen}
        <Image src={"/image/image-2_1550x.webp"} alt="" />
      </div>
    </Grid>
  );
};

export default IntroLanding;
