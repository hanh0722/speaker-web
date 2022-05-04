import React from "react";
import { ButtonToggle } from "../../../../common";
import { Button, Input } from "../../../../core";
import styles from "./styles.module.scss";

const RightBlog = () => {
  return (
    <>
      <div className={styles.right}>
        <div className="d-flex align-center justify-between">
          <p>Publish</p>
          <ButtonToggle className={styles.normal} initialStatus />
        </div>
        <div
          className={`d-flex align-center justify-between ${styles.comments}`}
        >
          <p>Enable Comments</p>
          <ButtonToggle className={styles.normal} initialStatus />
        </div>
        <Input label="Meta title" />
        <Input label="Meta tags" />
        <Button
          type="submit"
          prefix="normal"
          color="inherit"
          fullWidth
          size="large"
          variant="outlined"
        >
          Post
        </Button>
      </div>
    </>
  );
};

export default RightBlog;
