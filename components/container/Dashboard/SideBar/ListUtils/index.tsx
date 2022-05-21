import React from "react";
import { APPLICATION } from "../../../../../constants/path";
import { Button, Grid, Link } from "../../../../core";
import styles from "./styles.module.scss";

const ListUtils = () => {
  return (
    <div className={styles.list}>
      <p className="weight-500">App</p>
      <Grid className={styles.grid} cols={1}>
        {APPLICATION.map((item) => {
          const { href, icon: IconComponent, title } = item;
          return (
            <Link activeClassname={styles.active} href={href} key={href}>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="text"
                prefix="normal"
              >
                <span>
                  <IconComponent />
                </span>
                {title}
              </Button>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListUtils;
