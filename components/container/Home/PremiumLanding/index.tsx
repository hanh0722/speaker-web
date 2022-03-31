import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import useImage from "../../../../hook/useImage";
import { PremiumLandingState } from "../../../../types/components/PremiumLanding";
import { Container } from "../../../core";
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
        <div className={`text-center ${styles.header}`}>
          <h6 className="f-18 weight-500 text-uppercase">a premium sound.</h6>
          <p className="f-40 lh-56 weight-500">A wireless speaker with a dynamic acoustic performance</p>
        </div>
      </Container>
    </div>
  );
};

export default PremiumLanding;
