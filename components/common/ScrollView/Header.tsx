import React, { FC } from "react";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const Header: FC<ClassNameProps> = (props) => {
  const { children, className } = props;
  return (
    <div {...props} className={classList(styles.header, classList(className))}>
      {children}
    </div>
  );
};

Header.displayName = "Header";
export default Header;
