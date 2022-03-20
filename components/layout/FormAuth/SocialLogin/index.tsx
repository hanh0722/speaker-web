import React from "react";
import { IconFacebook, IconGoogle } from "../../../core/Icons";
import styles from "./styles.module.scss";

const SocialLogin = () => {
  return (
    <div
      className={`d-flex flex-column align-center justify-center ${styles.container}`}
    >
      <div className={styles.title}>
        <span></span>
        <span className="f-16 text-capitalize">Or sign in with</span>
        <span></span>
      </div>
      <div className="d-flex justify-center align-center gap-16">
        <div className={styles.icon}>
          <IconFacebook variant="xl" />
        </div>
        <div className={styles.icon}>
          <IconGoogle variant="xl" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
