import { ButtonBase } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { InputSelectElementProps } from "../../../../types/components/InputSelect";
import { classList } from "../../../../utils/string";
import { InputSelectContext } from "../InputSelectContext";
import styles from "./styles.module.scss";

const Element: FC<InputSelectElementProps> = (props) => {
  const { className, text } = props;
  const { onPushValue, tag } = useContext(InputSelectContext);

  const isExisted = useMemo(() => {
    if (tag?.some(data => data.value === text)) {
      return true;
    };
    return false;
  }, [tag, text]);
  const pushValueHandler = () => {
    if (isExisted) {
      return;
    }
    onPushValue(text);
  };
  return (
    <ButtonBase
      disabled={isExisted}
      onClick={pushValueHandler}
      className={classList(styles.element, isExisted && styles.existed, "f-14", className)}
    >
      {text}
    </ButtonBase>
  );
};

export default Element;
