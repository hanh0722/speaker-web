import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { FormAuthLayoutProps } from "../../../types/layout";
import { classList } from "../../../utils/string";
import { Container, Image } from "../../core";
import SocialLogin from "./SocialLogin";
import styles from "./styles.module.scss";

const FormAuth: FC<FormAuthLayoutProps> = (props) => {
  const isMobileScreen = useSelector<RootState>(state => state.ui.isMobileScreen);
  const { children, className, title } = props;
  return (
    <div className={styles.form}>
      <Container {...props} className={classList(styles.container, className)}>
        {<div className={`shadow-xs text-center d-flex flex-column align-between justify-between ${styles.sidebar}`}>
          <Image className={styles.logo} src="/logo.webp" alt="" />
          {!isMobileScreen && <Image src="/illustration_register.png" alt="" />}
        </div>}
        <div className={`shadow-xs ${styles.children}`}>
        {title && <p className={`f-20 weight-500 text-center text-uppercase ${styles.title}`}>{title}</p>}
          {children}
          <SocialLogin />
        </div>
      </Container>
    </div>
  );
};

export default FormAuth;
