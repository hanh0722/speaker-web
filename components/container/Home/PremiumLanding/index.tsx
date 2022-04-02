import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import { STATICS_LANDING } from "../../../../constants/static";
import useImage from "../../../../hook/useImage";
import { PremiumLandingState } from "../../../../types/components/PremiumLanding";
import { Container, Grid } from "../../../core";
import Heading from "../Heading";
import Introduction from "./Introduction";
import styles from "./styles.module.scss";

const PremiumLanding = () => {
  const [image, setImage] = useState<PremiumLandingState | null>(null);
  const { onCalculateImage } = useImage("/image/bg-1.webp");

  useEffect(() => {
    const { width, height } = onCalculateImage();
    setImage({
      height: height,
      width: width,
    });
  }, [onCalculateImage]);
  const getStyleBackground = useMemo((): CSSProperties => {
    if (!image) {
      return {
        paddingTop: "50%",
      };
    }
    const { width, height } = image;
    return {
      paddingTop: `${
        (width > height ? height / width : width / height) * 100
      }%`,
      height: 0,
    };
  }, [image]);
  return (
    <div style={{ ...getStyleBackground }} className={styles.background}>
      <Container className={styles.container}>
        <Heading className={styles.header} title="A wireless speaker with a dynamic acoustic performance" subtitle="a premium sound."/>
        <Grid cols={1} className={styles.grid}>
          {STATICS_LANDING.map((item, index) => {
            return <Introduction key={index} title={item.title} description={item.content} iconName={item.icon}/>
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PremiumLanding;
