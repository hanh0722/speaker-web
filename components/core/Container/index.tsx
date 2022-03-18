import React, { FC } from "react";
import { Container as ContainerComponent } from "@mui/material";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const Container: FC<ClassNameProps> = (props) => {
  const { children, className, style } = props;
  return (
    <ContainerComponent
      className={classList(styles.container, className)}
      style={{ ...style }}
    >
      {children}
    </ContainerComponent>
  );
};

export default Container;
