import React, { FC } from "react";
import { ScrollViewProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const ScrollView: FC<ScrollViewProps> = (props) => {
  const { className, children, scrollable } = props;
  return (
    <>
      <div
        className={classList("d-flex flex-column", scrollable && styles.scroll, styles.parent, className)}
      >
        {children}
      </div>
    </>
  );
};

export default Object.assign(ScrollView, {
  Header: Header,
  Body: Body,
  Footer: Footer,
});
