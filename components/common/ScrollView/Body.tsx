import React, { FC } from "react";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const Body: FC<ClassNameProps> = (props) => {
  const { className, children } = props;
  return (
    <div {...props} className={classList(styles.body, className)}>
      {children}
    </div>
  );
};

Body.displayName = "Body";

export default Body;
