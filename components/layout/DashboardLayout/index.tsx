import React, { FC } from "react";
import useMedia from "../../../hook/useMedia";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import SideBar from "../../container/Dashboard/SideBar";
import NavigationDashboard from "./NavigationDashboard";
import styles from "./styles.module.scss";
const DashboardLayout: FC<ClassNameProps> = (props) => {
  const isMobileScreen = useMedia("(max-width: 1200px)");
  const { className, children, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classList("d-flex justify-between", styles.layout)}
    >
      <SideBar />
      <div className={styles.right}>
        <NavigationDashboard />
        <div className={classList(className)}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
