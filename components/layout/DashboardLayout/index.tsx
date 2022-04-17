import React, { FC } from "react";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import SideBar from "../../container/Dashboard/SideBar";
import styles from "./styles.module.scss";
const DashboardLayout: FC<ClassNameProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div {...restProps} className={classList('d-flex justify-between', styles.layout, className)}>
      <SideBar />
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
