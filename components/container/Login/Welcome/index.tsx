import React from "react";
import ReactDOM from "react-dom";
import { REGISTER } from "../../../../constants/path";
import { Image, Link } from "../../../core";
import SocialLogin from "../../../layout/FormAuth/SocialLogin";
import LoginAccount from "../LoginAccount";
import styles from "./styles.module.scss";

const Welcome = () => {
  return (
    <>
    {ReactDOM.createPortal(<div className={styles.background}/>, document.getElementById('destination')!)}
      <div className={`d-flex justify-center align-center ${styles.container}`}>
        <div className={styles.form}>
          <div className={`d-flex justify-center align-center ${styles.image}`}>
            <Image src="/welcome.svg" alt="" />
          </div>
          <div className={`shadow-sm ${styles['main-form']}`}>
              <SocialLogin titleFacebook="Login with Facebook" titleGoogle="Login with Google" className={styles.social} isHiddenTitle/>
              <LoginAccount/>
              <p className={`${styles.title} text-center`}>You {"don't"} have an account? <Link href={REGISTER}>Register</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
