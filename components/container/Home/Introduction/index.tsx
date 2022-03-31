import React from "react";
import { Grid } from "../../../core";
import BoxIntroduction from "./BoxIntroduction";
import styles from "./styles.module.scss";

const DEMO_CONTENT = [
  {
    path: "/image/icon-1_180x.webp",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolr sint occaecat cupidatat non proid",
    title: "Track focus",
  },
  {
    path: "/image/icon-2_180x.webp",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolr sint occaecat cupidatat non proid",
    title: "Hear more",
  },
  {
    path: "/image/icon-3_180x.webp",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolr sint occaecat cupidatat non proid",
    title: "Listion longer",
  },
  {
    path: "/image/icon-4_180x.webp",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolr sint occaecat cupidatat non proid",
    title: "Roam free",
  },
  {
    path: "/image/icon-5_180x.webp",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolr sint occaecat cupidatat non proiden",
    title: "Filter more",
  },
];

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={`text-center ${styles.header}`}>
        <p className={`text-uppercase lh-32 f-20 weight-500`}>
          SIGNATURE SOUND, ALL AROUND
        </p>
        <h3 className="f-36 lh-48 weight-500">
          Find the right connected <br />
          speaker for you
        </h3>
        <Grid cols={5} className={styles.grid}>
          {DEMO_CONTENT.map((item, index) => {
            return (
              <BoxIntroduction
                key={index}
                description={item.content}
                title={item.title}
                path={item.path}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Introduction;
