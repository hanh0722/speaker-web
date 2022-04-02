import React from "react";
import { Grid } from "../../../core";
import Heading from "../Heading";
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
        <Heading
          title="Find the right connected speaker for you"
          subtitle="SIGNATURE SOUND, ALL AROUND"
        />
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
