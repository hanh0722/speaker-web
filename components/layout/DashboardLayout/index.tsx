import React, { FC, useState } from "react";
import useDropdown from "../../../hook/useDropdown";
import useMedia from "../../../hook/useMedia";
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import SideBar from "../../container/Dashboard/SideBar";
import NavigationDashboard from "./NavigationDashboard";
import styles from "./styles.module.scss";
const DashboardLayout: FC<ClassNameProps> = (props) => {
  const isMobileScreen = useMedia("(max-width: 1200px)");
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const { className, children, ...restProps } = props;

  const onToggleSideBar = () => {
    setIsOpenSideBar(prevState => !prevState);
  }
  return (
    <div
      {...restProps}
      className={classList("d-flex justify-between", styles.layout)}
    >
      <SideBar onHide={onToggleSideBar} in={isOpenSideBar} isMobileScreen={isMobileScreen}/>
      <div className={styles.right}>
        <NavigationDashboard onClick={onToggleSideBar} isMobileScreen={isMobileScreen}/>
        <div className={classList(className)}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
