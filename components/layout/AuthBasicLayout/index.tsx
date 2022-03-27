import React, { FC } from "react";
import { classList } from "../../../utils/string";
import { Container, Link } from "../../core";
import { IconCaretLeft } from "../../core/Icons";
import styles from "./styles.module.scss";
import { FormAuthLayoutProps } from "../../../types/layout";
import { LOGIN } from "../../../constants/path";

const AuthBasicLayout: FC<FormAuthLayoutProps> = (props) => {
  const { children, className, title, mainClass } = props;
  return (
    <div className={classList(styles.container, mainClass)}>
      <Link href={`${LOGIN}?welcome=true`}><IconCaretLeft variant="lg" /></Link>
      <Container className={classList(styles.main, className)}>
        <p className={`f-18 lh-32 text-uppercase weight-500 ${styles.title}`}>
          {title}
        </p>
        <div className={styles.content}>{children}</div>
      </Container>
    </div>
  );
};

export default AuthBasicLayout;
