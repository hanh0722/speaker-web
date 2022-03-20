import React, { FC } from "react";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const Footer: FC<ClassNameProps> = (props) => {
  const { children, className } = props;
  return <div {...props} className={classList(styles.footer, className)}>{children}</div>;
};

Footer.displayName = 'Footer';
export default Footer;
